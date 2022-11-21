<template>
  <!-- <div class="container">
    <div class="card"> -->
  <div class="card_thumb">
    <img :src="poster_path" class="card__image" alt="" />
    <figcaption class="card__caption">
      <h2 class="card__title">
        {{ movie.title }}
      </h2>
      <p class="card__snippet">
        {{ movie.overview }}
      </p>
      <a href="" class="card__button">Read more</a>
    </figcaption>
    <!-- <img :src="poster_path" class="card-img-top" alt="" /> -->
    <!-- <div class="card-body"> -->
    <!-- <h5 class="card-title">{{ movie.title }}</h5> -->
    <!-- </div> -->
    <MovieDetail :movie="movie" />
  </div>
  <!-- </div>
  </div> -->
</template>

<script>
import MovieDetail from "@/components/MovieDetail.vue";

export default {
  name: "MovieCardView",
  components: {
    MovieDetail,
  },

  data() {
    return {
      youTubeURL: null,
      movie_d: null,
    };
  },
  props: {
    movie: Object,
  },
  computed: {
    poster_path() {
      const baseURL = "https://image.tmdb.org/t/p/w500";
      return baseURL + this.movie.poster_path;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/moviecard.scss";
</style>