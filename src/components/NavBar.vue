<template>
  <div
    :class="{
      'back-white': !$vuetify.theme.dark,
      'back-black': $vuetify.theme.dark,
    }"
    class="header"
  >
    <nav id="nav">
      <router-link to="/">
        <img class="logo-image" src="../assets/images/logo-2.png" alt="" />
      </router-link>
      <ul>
        <li>
          <v-btn href="https://doeducacao.fun/" target="_blank" text
            ><p
              :class="{
                'color-black': !$vuetify.theme.dark,
                'color-white': $vuetify.theme.dark,
              }"
            >
              Blog
            </p></v-btn
          >
        </li>
        <li>
          <router-link class="link" to="/locations">
            <v-btn text
              ><p
                :class="{
                  'color-black': !$vuetify.theme.dark,
                  'color-white': $vuetify.theme.dark,
                }"
              >
                Locais
              </p>
            </v-btn>
          </router-link>
        </li>
        <li>
          <v-btn text
            ><p
              :class="{
                'color-black': !$vuetify.theme.dark,
                'color-white': $vuetify.theme.dark,
              }"
            >
              Contato
            </p></v-btn
          >
        </li>
        <li>
          <router-link class="link" to="/admin">
            <v-btn text
              ><p
                :class="{
                  'color-black': !$vuetify.theme.dark,
                  'color-white': $vuetify.theme.dark,
                }"
              >
                Login
              </p>
            </v-btn>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      drawer: false,
      group: null,
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },

  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style>
.back-white {
  background: white;
}

.back-black {
  background: black;
}

.color-white {
  color: white !important;
}

.color-black {
  color: black !important;
}

.flex-nav-menu {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.list-nav {
  min-height: 300px;
  margin-top: 200px;
}
</style>