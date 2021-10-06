<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <v-row class="d-inline-flex justify-end px-6 pt-4">
      <v-switch
        v-model="$vuetify.theme.dark"
        inset
        persistent-hint
        @click="updateBanner()"
      ></v-switch>
    </v-row>

    <v-main>
      <router-view />
    </v-main>
    <v-card class="mt-5 pa-3 d-flex justify-center">
      <v-card-title class="text-center pb-0" align-self="center">
        <small>
          © 2021 - Por:
          <a target="_blank" href="https://jotajota.io">José V.</a> /
          <a target="_blank" href="https://twitter.com/JoseA05"
            >José B.</a
          ></small
        >
      </v-card-title>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    image: "./assets/images/dark-sky.jpg",
  }),
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
  methods: {
    updateBanner() {
      this.$parent.$store.state.banner = this.$vuetify.theme.dark
        ? "rose-dark.jpg"
        : "rose.jpg";
    },
  },
};
</script>
