import { useReducer } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";

const ChapterContext = createContext({} as any);

export const useChapterContext = () => useContext(ChapterContext);

export const ChapterProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(
    chapterReducer,
    {
      chapter: "chapter_1",
      verse: 0,
    },

    (initial) =>
      JSON.parse(window.localStorage.getItem("chapter") as any) || initial
  );

  useEffect(() => {
    window.localStorage.setItem("chapter", JSON.stringify(state));
  }, [state]);

  const value = {
    chapter: state.chapter,
    verseCount: state.verseCount,
    verse: state.verse,
    dispatch,
  };

  return (
    <ChapterContext.Provider value={value}>{children}</ChapterContext.Provider>
  );
};

function chapterReducer(state: any, action: any) {
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

    default:
      break;
  }
}
