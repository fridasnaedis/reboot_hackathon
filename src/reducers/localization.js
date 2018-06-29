import { SET_LANGUAGE, SET_TRANSLATIONS } from "../actions/localization";
import languages from "../localization/languages";
import translations from "../localization/translations";
import flags from "../localization/flags";

const initialState = {
  languages,
  currentLanguage: languages.ICELANDIC,
  translations: translations[languages.ICELANDIC],
  flag: flags[languages.ICELANDIC],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        currentLanguage: action.language,
        translations: translations[action.language],
        flag: flags[action.language],
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
