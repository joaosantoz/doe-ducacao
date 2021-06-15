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
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-fab-transition>
            <v-btn v-bind="attrs" v-on="on" fixed bottom right fab>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-fab-transition>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Cadastro de Entidade</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="newTitle"
                    label="Título*"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="newSubTitle"
                    label="Subtítulo*"
                    required
                  ></v-text-field>
                </v-col>

                <v-file-input
                  label="Enviar Imagem*"
                  filled
                  prepend-icon="mdi-camera"
                  v-model="newImage"
                  type="file"
                ></v-file-input>

                <v-container fluid>
                  <v-textarea
                    v-model="newDescription"
                    label="Descrição*"
                    required
                  ></v-textarea>
                </v-container>
              </v-row>
            </v-container>
            <small>*campos obrigatórios</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="dialog = false">
              Cancelar
            </v-btn>
            <v-btn color="green darken-1" text v-on:click="addNewCard">
              Salvar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-card
        class="mx-auto card"
        transition="fade-transition"
        max-width="344"
        min-width="344"
        min-height="575"
        max-height="575"
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
          <v-app id="inspire">
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
                    <v-btn
                      v-on:click="excludeCard(item._id)"
                      class="delete-button"
                      fab
                      dark
                      small
                      color="pink"
                    >
                      <v-icon dark> mdi-cancel </v-icon>
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
  name: "Admin",
  components: { typical },
  data() {
    return {
      items: null,
      isActive: false,
      dialog: false,
      hidden: false,
      newTitle: null,
      newSubTitle: null,
      newImage: null,
      newDescription: null,
    };
  },
  methods: {
    excludeCard(cardId) {
      console.log(cardId);
      this.$swal
        .fire({
          title: "Tem certeza?",
          text: "Essa ação é irreversível!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sim, deletar card!",
          cancelButtonText: "Cancelar",
        })
        .then((result) => {
          if (result.isConfirmed) {
            axios
              .delete(`http://localhost:3003/api/cards/store`, {
                data: {
                  cardId: cardId,
                },
              })
              .then(() => {
                document.getElementById(cardId).style.display = "none";
              });
          }
        });
    },
    addNewCard() {
      console.log(
        this.newTitle,
        this.newSubTitle,
        this.newImage,
        this.newDescription
      );

      let data = new FormData();
      data.append("title", this.newTitle);
      data.append("subtitle", this.newSubTitle);
      data.append("text", this.newDescription);
      data.append("image", this.newImage);

      axios({
        headers: { "Content-Type": "multipart/form-data" },
        method: "post",
        url: "http://localhost:3003/api/cards/store",
        data: data,
      }).then(
        this.$swal.fire("Sucesso!", "Card cadastrado com sucesso!", "success")
      );

      document.querySelector(".swal2-confirm").addEventListener("click", () => {
        window.location.reload();
      });

      axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

      this.dialog = false;
    },
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
}

.bundle {
  background: url(../assets/images/backgroundteste.png) no-repeat;
  background-size: contain;
  background-color: #222222;
  background-attachment: fixed;
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
  transform: scale(1.1);
  transition: all 0.2s;
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
  transform: scale(1);
  transition: 0.2s ease-in;
}

.loader-skeleton {
  width: 340px;
  height: 500px;
}

.delete-button {
  position: absolute;
  right: -190px;
  bottom: -2px;
}
</style>
