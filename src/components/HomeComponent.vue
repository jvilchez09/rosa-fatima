<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          src="
            https://cdn.pixabay.com/photo/2014/05/06/21/25/rose-339236_960_720.jpg
          "
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="font-trajan font-title">
          La Rosa <br />de

          <span class="font-BirthstoneBounce font-title-bigger">Fatima </span>
        </h1>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-row justify="center">
          <v-btn elevation="1" outlined tile @click="getTitle()"
            >Nuevo Título</v-btn
          >
        </v-row>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-img height="200px" src="../assets/videos/rose.gif"> </v-img>
        <v-card-title>
          Hoy presentamos
        </v-card-title>

        <v-divider color="red"></v-divider>
        <v-card-text>
          <v-col class="my-5" cols="12">
            <v-row class="font-BirthstoneBounce font-title-smaller">
              {{ title }}
            </v-row>
          </v-col>
        </v-card-text>
        <!-- <v-card-text>
          <v-btn color="primary" dark @click="dialog3 = !dialog3">
            Open Dialog 3
          </v-btn>
          <v-select
            :items="select"
            label="A Select List"
            item-value="text"
          ></v-select>
        </v-card-text> -->
        <v-card-actions>
          <v-btn color="red accent-2" @click="getTitle()">
            <strong> Otro</strong>
          </v-btn>
          <v-btn color="secondary" text @click="dialog = false">
            Cerarr
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    titles: ["Título 1", "Título 2", "Título 3", "Título 4"],
    context: ["Contexto 1", "Contexto 2", "Contexto 3", "Contexto 4"],
    resolution: [
      "Resolución 1",
      "Resolución 2",
      "Resolución 3",
      "Resolución 4",
    ],
    title: "",
    dialog: false,
  }),
  methods: {
    getTitle() {
      this.dialog = true;
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
