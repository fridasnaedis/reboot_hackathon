import { SET_LANGUAGE, SET_TRANSLATIONS } from "../actions/localization";
import languages from "../localization/languages";
import translations from "../localization/translations";

const initialState = {
  languages,
  currentLanguage: languages.is.code,
  translations: translations[languages.is.code],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        currentLanguage: action.language,
        translations: translations[action.language],
      };

    case SET_TRANSLATIONS:
      return {
        ...state,
        translations: action.translations,
      };

    default:
      return state;
  }
};
