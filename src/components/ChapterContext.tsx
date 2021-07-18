import { useState } from "react";
import { createContext, useContext } from "react";

const ChapterContext = createContext([] as any);

export const useChapterContext = () => useContext(ChapterContext);

export const ChapterProvider = ({ children }: any) => {
  const [chapter, setChapter] = useState("chapter_1");

  return (
    <ChapterContext.Provider value={[chapter, setChapter]}>
      {children}
    </ChapterContext.Provider>
  );
};
