<template>
  <div id="app">
    <nav>
      <a href="#">Home</a>
      <a href="#">Movies</a>
      <a href="#">Recommend</a>
    </nav>
    <footer>(주) 송은희 건설</footer>
    <router-view />
  </div>
</template>

<script>
</script>


<style lang="scss">
@import "@/assets/scss/navbar.scss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.background {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background-image: url("./assets/배경6.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: brightness(1.1);
}

footer {
  width: 100%;
  position: fixed;
  bottom: 2%;
  text-align: center;
  color: white;
  z-index: 1;
}
</style>
