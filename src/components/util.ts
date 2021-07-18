type Verse = {
  text: string;
  translation: string;
  commentary: string;
};

export const getVerses = (chapter: string): Promise<Verse[]> => {
  return import(`../data/chapters/${chapter}.json`).then(
    (module) => module.default
  );
};
