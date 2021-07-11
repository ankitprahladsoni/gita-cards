// import authors from "../data/authors.json";
// import chapters from "../data/chapters.json";
import commentary from "../data/commentary.json";
// import languages from "../data/languages.json";
import translation from "../data/translation.json";
import verses from "../data/verse.json";

type Verse = {
  text: string;
  translation: string;
  commentary: string;
};

type CM = {
  authorName: string;
  author_id: number;
  description: string;
  id: number;
  lang: string;
  language_id: number;
  verseNumber: number;
  verse_id: number;
};
export const getVerses = (): Verse[] => {
  return verses.map((v) => {
    return {
      text: v.text,
      translation:
        translation
          .filter((t) => t.verse_id === v.id)
          .find((t) => t.authorName === "Swami Ramsukhdas")?.description || "",
      commentary:
        (commentary as CM[])
          .filter((c) => c.verse_id === v.id)
          .find((c) => c.authorName === "Swami Ramsukhdas")?.description || "",
    };
  });
};
