<template>
  <div>
    <!-- <nav>
        <router-link :to="{name: 'recommend', params: {id: getId}}">뒤로 가기</router-link>
      </nav> -->
    <h1>비밀번호 입력해주세요</h1>
    <form action="#" @submit.prevent="confirm">
      <input type="password" v-model="password" />
      <input type="submit" value="제출하기" />
    </form>
  </div>
</template>

<script>
export default {
  name: "PasswordView",
  data() {
    return {
      password: null,
    };
  },
  computed: {
    getId() {
      return this.$route.params.id;
    },
  },
  methods: {
    confirm() {
      const id = this.$route.params.id;
      if (this.password === this.$store.state.residents[Number(id)].password) {
        this.$router.push({ name: "add" });
      } else {
        alert("비밀번호가 틀렸습니다.");
      }
    },
  },
};
</script>

<style>
</style>