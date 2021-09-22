<template>
  <div>
    <h1>SignUP</h1>
    <v-text-field label="아이디" v-model="email"></v-text-field>
    <v-text-field
      label="비밀번호"
      v-model="password"
      type="password"
    ></v-text-field>
    <v-text-field label="이름" v-model="name"></v-text-field>
    <v-btn @click="signUp()" router :to="{ name: 'login' }" exact
      >회원가입</v-btn
    >
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: null,
      password: null,
      name: null
    };
  },
  methods: {
    signUp() {
      let userObj = {
        email: this.email,
        password: this.password,
        name: this.name,
      };
      axios
        .post("http://3.34.123.12/signup", userObj)
        .then((res) => {
          console.log(res);
          this.clearForm();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    clearForm() {
      (this.email = null), (this.password = null), (this.name = null);
    },
  },
};
</script>

<style></style>
