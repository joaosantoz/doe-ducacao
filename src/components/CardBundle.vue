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
          'Facilitando o acesso!',
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
          class="mx-auto card"
          transition="fade-transition"
          max-width="344"
          v-for="item in items.data"
          :key="item.id"
          v-bind:title="item.title"
          v-bind:subtitle="item.subtitle"
          v-bind:text="item.text"
        >
          <div class="img-parent">
            <v-parallax
              class="card-img"
              v-bind:image="item.image"
              :src="item.image"
              height="330"
            ></v-parallax>
          </div>

          <v-card-title> {{ item.title }} </v-card-title>

          <v-card-subtitle class="card-subtitle">
            {{ item.subtitle }}
          </v-card-subtitle>

          <v-card-actions>
            <v-app id="inspire">
              <v-row justify="space-around">
                <v-col cols="auto">
                  <v-dialog
                    transition="dialog-bottom-transition"
                    max-width="600"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="deep-orange lighten-2 white--text"
                        v-bind="attrs"
                        v-on="on"
                      >
                        Contato
                      </v-btn>
                    </template>
                    <template v-slot:default="dialog">
                      <v-card>
                        <v-toolbar
                          color="deep-orange lighten-2"
                          class="text-h6"
                          dark
                          >Contato</v-toolbar
                        >
                        <v-card-text>
                          <div class="text-p black--text pa-12">
                            {{ item.text }}
                          </div>
                        </v-card-text>
                        <v-card-actions class="justify-end">
                          <v-btn text @click="dialog.value = false"
                            >Fechar</v-btn
                          >
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
  name: "CardBundle",
  components: { typical },
  data() {
    return {
      items: null,
      isActive: false,
    };
  },
  mounted() {
    axios
      .get("http://localhost:8080/cards")
      .then((response) => (this.items = response))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
.card-bundle-div {
  padding: 0 40px 100px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  /* max-width: 1280px;
    width: 100%;
    margin: 100px auto 0 auto; */
}

.bundle {
  background: url(../assets/images/backgroundteste.png) no-repeat;
  background-size: contain;
  background-color: #222222;
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
  margin: 15px 0 8px 10px;
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
