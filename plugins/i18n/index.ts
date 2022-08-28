import { createI18n } from "vue-i18n";
import vi from "@/locales/vi.json";
import jp from "@/locales/jp.json";

const locales = ["vi", "jp"];

const getLangBrowser = () => {
  let locale = "";
  if (process.client) {
    locale = window.localStorage.getItem("locale");
    if (locale) return locale;
    let browserLanguage = navigator.language;
    if (browserLanguage.includes("-")) {
      browserLanguage = browserLanguage.slice(0, browserLanguage.indexOf("-"));
    }
    if (locales.includes(browserLanguage)) {
      return browserLanguage;
    } else {
      return "vi";
    }
  } else {
    return "vi";
  }
};

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: getLangBrowser(),
    messages: {
      vi,
      jp,
    },
  });

  vueApp.use(i18n);
});
