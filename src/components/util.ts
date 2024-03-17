export type Verse = {
  text: string;
  translation: string;
  commentary: string;
};

export const getVerses = (chapter: string): Promise<Verse[]> => {
  return import(`../data/chapters/${chapter}.ts`).then(
    (module) => module.default,
  );
};

// other fonts   "editor.fontFamily": "'Cascadia Code','Noto Sans Devanagari'",
