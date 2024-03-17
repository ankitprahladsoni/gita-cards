import React, { useReducer, useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import Swiper from "swiper";

type State = {
  chapter?: string;
  verse?: number;
  verseCount?: number;
  // This is needed for autonavigation when verse/chapter is selected via dropdown
  swiper?: Swiper;
};

type Action = State & {
  type: "changeChapter" | "loadChapter" | "changeVerse" | "setSwiper";
};

type ContextType = State & {
  dispatch: React.Dispatch<Action>;
  setSwiper: React.Dispatch<React.SetStateAction<Swiper | undefined>>;
};

export const ChapterContext = createContext<ContextType>({} as ContextType);

export const ChapterProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(
    chapterReducer,
    {
      chapter: "chapter_1",
      verse: 0,
    },
    (initial) => {
      const chapterData = window.localStorage.getItem("chapter");
      return chapterData ? JSON.parse(chapterData) : initial;
    },
  );

  const [swiper, setSwiper] = useState<Swiper | undefined>();

  useEffect(() => {
    window.localStorage.setItem("chapter", JSON.stringify(state));
  }, [state]);

  const value = {
    chapter: state.chapter,
    verseCount: state.verseCount,
    verse: state.verse,
    swiper,
    setSwiper,
    dispatch,
  };

  return (
    <ChapterContext.Provider value={value}>{children}</ChapterContext.Provider>
  );
};

function chapterReducer(state: State, action: Action) {
  switch (action.type) {
    case "changeChapter":
      return {
        ...state,
        chapter: action.chapter,
        verse: 0,
      };
    case "loadChapter":
      return { ...state, verseCount: action.verseCount };
    case "changeVerse":
      return { ...state, verse: action.verse };
    case "setSwiper":
      return { ...state, swiper: action.swiper };
    default:
      return state;
  }
}
