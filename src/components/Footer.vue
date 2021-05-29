<template>
<v-app>
  <v-footer
    class="footer-div"
    padless
    dark
  >


  
    <v-card
      class="flex"
      flat
      tile
    >

      <v-card-title class="deep-orange lighten-2">
        <strong class="subheading">Doe-ducação</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style>
</style>