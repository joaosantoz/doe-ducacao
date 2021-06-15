<template>
  <div class="bundle">
    <div class="bundle-title">
      <typical
        :steps="['Doe', 500, 'Doe-ducação', 500]"
        :wrapper="'h2'"
      ></typical>

      <typical
        class="typicalWrapper"
        :steps="[
          'Facilitando',
          1000,
          'Facilitando o acesso',
          500,
          'Facilitando o acesso ao ensino! 👩‍🎓',
          1000,
        ]"
        :loop="Infinity"
        :wrapper="'h3'"
      ></typical>
    </div>

    <div class="card-bundle-div">
      <v-card
        color="black"
        class="mx-auto card theme--light"
        transition="fade-transition"
        max-width="344"
        min-width="344"
        min-height="550"
        max-height="550"
        v-for="item in items.response"
        :key="item.id"
        v-bind:title="item.title"
        v-bind:subtitle="item.subtitle"
        v-bind:text="item.text"
        v-bind:id="item._id"
      >
        <div class="img-parent">
          <v-parallax
            class="card-img"
            v-bind:image="item.image"
            :src="'http://localhost:3003' + '/' + item.image"
            height="400"
          ></v-parallax>
        </div>

        <v-card-title> {{ item.title }} </v-card-title>

        <v-card-subtitle class="card-subtitle">
          {{ item.subtitle }}
        </v-card-subtitle>

        <v-card-actions>
          <v-app id="inspire" class="theme--light">
            <v-row justify="space-around">
              <v-col cols="auto">
                <v-dialog transition="dialog-bottom-transition" max-width="600">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="deep-orange lighten-2 white--text"
                      v-bind="attrs"
                      v-on="on"
                    >
                      Saiba Mais
                    </v-btn>
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-toolbar
                        color="deep-orange lighten-2"
                        class="text-h6"
                        dark
                        >Saiba Mais</v-toolbar
                      >
                      <v-card-text>
                        <div class="text-p black--text pa-12">
                          {{ item.text }}
                        </div>
                      </v-card-text>
                      <v-card-actions class="justify-end">
                        <v-btn text @click="dialog.value = false">Fechar</v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </v-col>
            </v-row>
          </v-app>

          <v-spacer></v-spacer>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>
              {{ item.text }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
  </div>
</template>

<script>
import typical from "vue-typical";
import axios from "axios";
export default {
  name: "Locations",
  components: { typical },
  data() {
    return {
      items: null,
      isActive: false,
    };
  },
  mounted() {
    axios.get("http://localhost:3003/api/cards").then((res) => {
      this.items = res.data;
      console.log(this.items);
    });
  },
};
</script>

<style>
.card-bundle-div {
  padding: 0 40px 100px 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  /* max-width: 1280px;
    width: 100%;
    margin: 100px auto 0 auto; */
}

.bundle {
  background: url(../assets/images/backgroundteste.png) no-repeat;
  background-size: contain;
  background-color: #121212;
  background-attachment: fixed;
  /* background: linear-gradient(white, rgb(33, 21, 59) 40%) */
}

.bundle-title {
  text-align: center;
  padding: 250px 0 150px 0;
  color: white;
  font-size: 1.6em;
}

.v-application--wrap {
  min-height: 1vh !important;
}

/* .card:hover{
    transform: scale(1.05);
    cursor: pointer;
    transition: 0.2s ease-in;
} */
.card {
  cursor: pointer;
}

.card {
  margin-top: 50px;
}

.card button {
  padding: 15px 0 8px 10px;
  background: transparent;
}

.img-parent {
  height: 400px;
  display: block;
  overflow: hidden;
}

.card .card-img {
  height: 400px !important;
  object-fit: cover;
}

.card-subtitle {
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 50px;
}

.card .card-img:hover {
  transform: scale(1.1);
  transition: 0.3s ease-in;
}

.loader-skeleton {
  width: 340px;
  height: 500px;
}
</style>
