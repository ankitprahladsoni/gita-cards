import { useEffect, useRef, useState } from "react";
import { createContext, useContext } from "react";

const ChapterContext = createContext({} as any);

export const useChapterContext = () => useContext(ChapterContext);
function useLocalStorageState(
  key: string,
  defaultValue: any,
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) {
  const [state, setState] = useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      try {
        return deserialize(valueInLocalStorage);
      } catch (error) {
        window.localStorage.removeItem(key);
      }
    }
    return defaultValue;
  });

  const prevKeyRef = useRef(key);

  // Check the example at src/examples/local-state-key-change.js to visualize a key change
  useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
}
export const ChapterProvider = ({ children }: any) => {
  const [chapter, setChapter] = useLocalStorageState("chapter", "chapter_1");
  const [verse, setVerse] = useLocalStorageState("verse", 0);

  const value = { chapter, setChapter, verse, setVerse };

  return (
    <ChapterContext.Provider value={value}>{children}</ChapterContext.Provider>
  );
};
