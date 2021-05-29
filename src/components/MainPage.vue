<template>
  <div class="header">
    <div class="header-bkg">
      <div class="text-header">
        <img class="ico-header" src="../assets/images/icon-header.svg" alt="" />
        <p>
          Seja bem vindo ao Doe-ducação! Clique em conhecer para entender melhor
          o nosso projeto.
        </p>
        <button id="knowmore-button">Conhecer</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  position: relative;
}

.header .header-bkg {
  background: url(../assets/images/header-bkg.png) no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 95vh;
  width: 100%;
}

.header .text-header {
  position: absolute;
  width: 700px;
  top: 35%;
  left: 10%;
  z-index: 5;
}

.header .text-header p {
  color: white;
  font-size: 40px;
  margin-top: 30px;
  line-height: 60px;
}

.header .text-header button {
  color: #ff8b74;
  background: transparent;
  outline: none;
  border: 2px solid #ff8b74;
  padding: 15px 30px;
  margin-top: 30px;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}

.header .text-header button:hover {
  border-color: none;
  color: white;
  background: #ff8b74;
  border-radius: 14px;
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.accordion-items li {
  padding: 10px;
  max-width: 1024px;
  width: 100%;
}

.v-expansion-panel-header {
  background: #ff8b74 !important;
  color: white;
  font-size: 1.5rem !important;
}
</style>