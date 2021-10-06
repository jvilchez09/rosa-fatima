import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.pink,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
        background: colors.indigo.lighten5, // Not automatically applied
      },
      dark: {
        primary: colors.blue.lighten3,
        secondary: colors.blueGrey.lighten5,
        background: colors.blueGrey.darken4, // If not using lighten/darken, use base to return hex
      },
    },
  },
});
