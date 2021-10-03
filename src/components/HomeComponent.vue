<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.jpg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="font-trajan font-title">
          La Rosa <br />de

          <span class="font-edwardian font-title-bigger">Fatima </span>
        </h1>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-row justify="center">
          <v-btn elevation="1" outlined tile @click="getTitle()"
            >Nuevo Título</v-btn
          >
        </v-row>
      </v-col>
      <v-col class="mb-5" cols="12">
        <v-row justify="center">
          {{ title }}
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    titles: ["titulo 1", "titulo 2", "titulo 3", "titulo 4"],
    context: ["context 1", "context 2", "context 3", "context 4"],
    resolution: [
      "resolution 1",
      "resolution 2",
      "resolution 3",
      "resolution 4",
    ],
    title: "",
  }),
  methods: {
    getTitle() {
      this.title =
        this.titles[this.getPosition(this.titles)] +
        " " +
        this.context[this.getPosition(this.context)] +
        " " +
        this.resolution[this.getPosition(this.resolution)];
    },
    getPosition(array) {
      return Math.floor(Math.random() * array.length);
    },
  },
};
</script>
