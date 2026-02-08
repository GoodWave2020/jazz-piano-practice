import DefaultTheme from "vitepress/theme";
import AbcNotation from "./components/AbcNotation.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("AbcNotation", AbcNotation);
  },
};
