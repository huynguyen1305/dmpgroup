import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import * as english from "./langs/en.json";
import * as vietnamese from "./langs/vi.json";

const resources = {
  en: {
    translation: english,
  },
  vi: {
    translation: vietnamese,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "vi", //default language
});

export default i18next;
