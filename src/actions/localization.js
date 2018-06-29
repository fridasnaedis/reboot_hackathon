export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_TRANSLATIONS = "SET_TRANSLATIONS";

export const setLanguage = language => {
  return { type: SET_LANGUAGE, language };
};

export const setTranslations = language => {
  return { type: SET_TRANSLATIONS, language };
};
