import i18n from "i18next"
import {initReactI18next} from "react-i18next"
import transArabic from "./arabic/ar.json"
import transEnglish from "./english/en.json"

const resources = {
    en : {
        translation : transEnglish
    },
    ar : {
        translation : transArabic
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng : "en",
        fallbackLng : "en",
        interpolation : {
            escapeValue : false
        }
    });

export default i18n