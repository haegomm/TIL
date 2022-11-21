<template>
  <div class="addbox">
    <!-- <nav>
      <router-link :to="{name: 'recommend', params: {id: getId}}">뒤로 가기</router-link>
    </nav> -->
    <h1 class="title">Add Recommend Movie</h1>
    <MovieForm />
  </div>
</template>

<script>
import MovieForm from "@/components/MovieForm";

export default {
  name: "AddMovieView",
  data() {
    return {
      id: null,
    };
  },
  components: {
    MovieForm,
  },

  computed: {
    getId() {
      return this.$route.params.id;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Gaegu:wght@300&display=swap");

.title {
  font-family: "Gaegu", cursive;
}

.addbox {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>