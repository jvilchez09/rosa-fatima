<template>
  <v-container class="px-16">
    <v-card class="py-10">
      <v-row class="text-center">
        <v-col cols="12" class="col-md-2 offset-md-4">
          <v-img
            :src="require(`@/assets/images/${$parent.$store.state.banner}`)"
            class="my-3"
            contain
            height="200"
          />
        </v-col>

        <v-col cols="12" md="4" class="my-8">
          <h1 class="font-trajan font-title">
            La Rosita <br />de

            <span class="font-BirthstoneBounce font-title-bigger">Fatima </span>
          </h1>
        </v-col>

        <v-col class="mb-5" cols="12">
          <v-row justify="center">
            <v-btn
              color="primary"
              elevation="1"
              outlined
              tile
              @click="getTitle()"
              >Nuevo Título</v-btn
            >
          </v-row>
        </v-col>
      </v-row>
    </v-card>

    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-img height="200px" :src="require(`@/assets/videos/${image}`)">
        </v-img>
        <v-card-subtitle class="pt-6 pb-0">Hoy presentamos</v-card-subtitle>
        <v-card-title class="mt-0 pt-0">
          {{ title }}
        </v-card-title>

        <v-divider color="red"></v-divider>
        <v-card-text>
          <v-col class="my-5" cols="12">
            <v-row class="font-ephesis  font-title-smaller">
              {{ review }}
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
          <v-btn color="primary" tile outlined @click="getTitle()">
            <strong> Otro</strong>
          </v-btn>
          <v-btn color="secondary" tile text @click="dialog = false">
            Cerrar
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
    titles: [
      "Secretos escandalosos",
      "El riesgo de vivir",
      "Pecados piadosos",
      "Bendiciones ocultas",
      "¿Dar o recibir?",
      "Un día a la vez",
    ],
    subject: [
      "Una estilista endeudada",
      "Una estudiante irresponsable",
      "Un ladrón de buén corazón",
      "Una influencer inocente ",
      "Un vendedor manipulador",
      "Un payaso sin dinero ",
      "Una abuela alcahueta",
      "Un policía corrupto",
      "Una periodista sin escrúpulos",
    ],
    context: [
      "descubre que tiene un hermano gemelo",
      "hereda un terreno en el interior",
      "se enamora de la hija de su jefe",
      "se obsesiona con un app de citas a ciegas",
      "se intoxica con una comida vencida",
      "organiza un robo de banco",
      "ocasiona un incendio",
      "sufre un secuestro extraterrestre",
      "se gana la lotería",
      "tiene una visión apocalíptica",
    ],
    resolution: [
      "y decide convertirse en monje.",
      "y encuentra el verdadero significado de la felicidad.",
      "y dona todas sus ganancias a los más necesitados.",
      "y  renuncia al catolicismo.",
      "después de estrellarse con una paloma blanca.",
      "durante un concierto de cantos gregorianos.",
      "después de pincharse con las espinas de una rosa blanca.",
    ],
    resolution__darker: [
      "antes de vender su alma al diablo.",
      "y decide secuestrar al Papa.",
      "y decide hacerse un exorcismo.",
    ],
    title: "",
    review: "",
    dialog: false,
    image: "rose.gif",
  }),
  computed: {
    theme() {
      console.log(this.$vuetify.theme.dark);
    },
  },
  methods: {
    getRandomBoolean() {
      return Math.random() >= 0.5;
    },
    getTitle() {
      let resolution;
      this.image = "rose.gif";
      if (this.$vuetify.theme.dark && this.getRandomBoolean()) {
        const randomBoolean = () => Math.random() >= 0.5;
        resolution = this.resolution__darker[
          this.getPosition(this.resolution__darker)
        ];
        this.image = "purple-rose.jpg";
      } else {
        resolution = this.resolution[this.getPosition(this.resolution)];
      }

      this.dialog = true;
      this.title = this.titles[this.getPosition(this.titles)];
      this.review =
        this.subject[this.getPosition(this.subject)] +
        " " +
        this.context[this.getPosition(this.context)] +
        " " +
        resolution;
    },
    getPosition(array) {
      return Math.floor(Math.random() * array.length);
    },
  },
};
</script>
