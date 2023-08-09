import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { env } from "~/env.mjs";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      HOME_SCALING:
        "A scaling factor of 3 should be sufficient for most use cases.",
      BUTTON_TRANSFORM: "Transform",
      BUTTON_CLEAR: "Clear",
      LABEL_SCALING_FACTOR: "Scaling factor",
      LABEL_NAVBAR_DOCS: "Docs",
      LABEL_DROP_FILE: "Drop your PDF here",
      LABEL_DRAGNDROP:
        "Drag 'n' drop some files here, or click to select files.",
    },
  },
  de: {
    translation: {
      HOME_SCALING:
        "Ein Skalierungsfaktor von 3 sollte für die meisten Anwendungsfälle ausreichen.",
      BUTTON_TRANSFORM: "Umwandeln",
      BUTTON_CLEAR: "Löschen",
      LABEL_SCALING_FACTOR: "Skalierungsfaktor",
      LABEL_NAVBAR_DOCS: "Dokumentation",
      LABEL_DROP_FILE: "PDF hier ablegen",
      LABEL_DRAGNDROP:
        "Ziehen Sie Dateien hierher oder klicken Sie zum Auswählen.",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: env.NEXT_PUBLIC_LANGUAGE, // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
