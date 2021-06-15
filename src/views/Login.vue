<template>
  <div id="login">
    <v-container class="container-login">
      <v-layout row class="text-xs-center box-login">
        <v-flex xs4 class="grey lighten-4">
          <v-container
            style="position: relative; top: 13%"
            class="text-xs-center"
          >
            <v-card class="card-login">
              <v-card-title primary-title>
                <h4>Login</h4>
              </v-card-title>
              <v-form>
                <v-text-field
                  v-model="user"
                  name="Username"
                  label="Usuario"
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  name="Password"
                  label="Senha"
                  type="password"
                ></v-text-field>
                <v-card-actions>
                  <v-btn v-on:click="sendLoginRequest()" primary large block
                    >Login</v-btn
                  >
                </v-card-actions>
              </v-form>
            </v-card>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      user: null,
      password: null,
      authResponse: 0,
      responseObj: {},
    };
  },
  methods: {
    async sendLoginRequest() {
      const response = await Axios.post(
        "http://localhost:3003/api/users/login",
        {
          login: this.user,
          password: this.password,
        }
      );

      let data = response.data;

      if (data.status === 200) {
        this.$swal.fire("Sucesso!", data.message, "success");
        this.$router.push("/admin/locations");
      } else {
        this.$swal.fire("Erro!", data.message, "error");
      }

      // Axios.get("http://localhost:3003/api/users").then((res) => {
      //   this.responseObj = res.data.response;
      //   const { user, password } = this;
      //   this.responseObj.forEach((element) => {
      //     if (user == element.login && password == element.password) {
      //       this.$swal.fire(
      //         "Sucesso!",
      //         "Login efetuado com sucesso!",
      //         "success"
      //       );
      //       this.$router.push("/admin/locations");
      //       console.log("Autenticado");
      //     } else {
      //       this.$swal.fire("Erro!", "Usuário não encontrado.", "error");
      //     }
      //   });
      // });
    },
  },
};
</script>

<style>
.box-login {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-login {
  padding: 20px 50px 20px 50px;
}

#login {
  background: url(../assets/images/background-02.jpg) no-repeat;
  background-size: cover;
  height: 95vh;
  padding-top: 250px;
}
</style>