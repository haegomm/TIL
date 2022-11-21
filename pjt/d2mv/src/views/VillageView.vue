<template>
  <div class="background">
    <button @click="getSnow">❄️</button>
    <div class="snowflakes" aria-hidden="true" v-if="snowing">
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
    </div>
    <div class="container">
      <img id="b1" class="shadow-pop-tr" src="../assets/5.png" alt="" />
      <img id="b2" class="shadow-pop-tr" src="../assets/7.png" alt="" />
      <img id="b3" class="shadow-pop-tr" src="../assets/8.png" alt="" />
      <img id="b4" class="shadow-pop-tr" src="../assets/9.png" alt="" />
      <img id="b5" class="shadow-pop-tr" src="../assets/10.png" alt="" />
      <img id="b6" class="shadow-pop-tr" src="../assets/11.png" alt="" />
      <img id="b7" class="shadow-pop-tr" src="../assets/12-1.png" alt="" />
      <img id="b8" class="shadow-pop-tr" src="../assets/13-1.png" alt="" />
      <img id="b9" class="shadow-pop-tr" src="../assets/14.png" alt="" />
      <img id="b10" class="shadow-pop-tr" src="../assets/15.png" alt="" />
      <!-- <img id="t1" class="shadow-pop-tr" src="../assets/20.png" alt="" /> -->
    </div>
    <!-- <carousel :per-page='1'>
      <slide>
        <img src="../assets/city.png" usemap="#image-map" class="mapper" >
        <map name="image-map" id="image-map">
          <area target="_parent" alt="이가은" title="이가은" href="http://localhost:8080/recommend/0" coords="407,560,327,318" shape="rect" >
          <area target="_top" alt="송대현" title="송대현" href="http://localhost:8080/recommend/1" coords="752,562,644,311" shape="rect" >
        </map> 

      </slide>
      <slide>

      </slide>
    </carousel> -->
  </div>
</template>


<script>
export default {
  name: "VillageView",
  components: {},
  data() {
    return {
      snowing: false,
    };

    // < src="https://kit.fontawesome.com/150aa59347.js" crossorigin="anonymous">
  },
  methods: {
    getOwner(event) {
      const id = event.target.id;
      for (const person of this.$store.state.residents) {
        if (person.id === id) {
          this.$router.push({ name: "recommend", params: { id: id } });
        }
      }
    },

    getSnow() {
      this.snowing = !this.snowing;
    },
  },
};
</script>



<style scoped>
@import "@/assets/scss/snowflakes.scss";

* {
  margin: 0;
  padding: 0;
}

button {
  position: absolute;
  border: 0;
  outline: 0;
  left: 2%;
  color: aliceblue;
  background-color: transparent;
  font-size: 50px;
}

.background {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background-image: url("../assets/배경6.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: brightness(1.1);
}

.container {
  position: relative;
  top: 41vh;
  width: 100%;
  height: 45vh;
  margin: 0;
  padding: 0;
  max-width: 100%;
}

img {
  display: inline-block;
  position: absolute;
  filter: brightness(1.1);
}

#b1 {
  bottom: 14.1%;
  left: 0;
}

#b2 {
  bottom: 14.1%;
  left: 8.4%;
}

#b3 {
  bottom: 14.1%;
  left: 17.75%;
}

#b4 {
  bottom: 14.1%;
  left: 23.1%;
}

#b5 {
  bottom: 14.1%;
  left: 31.5%;
}

#b6 {
  bottom: 14.1%;
  left: 36.7%;
}

#b7 {
  bottom: 14.1%;
  left: 44.5%;
}

#b8 {
  bottom: 14.1%;
  left: 49.4%;
}

#b9 {
  bottom: 14.1vh;
  left: 58.4%;
}

#b10 {
  bottom: 0vh;
  left: 68%;
}

img:hover {
  opacity: 1;
}
</style>