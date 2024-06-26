<template>
<MainMenu></MainMenu>
<div class="login-container">
  <div class="login-box">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import { useRouter } from "vue-router";
import { UserHandler } from "../handler/UserHandler";
import MainMenu from "../components/MainMenu.vue";

const username : Ref<string> = ref("");
const password : Ref<string> = ref("");
const router = useRouter();

function handleLogin() : void {
  UserHandler.setCurrentUser({firstname : "Hanna", lastname : "Schmidt", picture : "dummy"});
  router.push({path : "/main"});
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #f0f0f0;
}

.login-box {
  background: #fff;
  padding: 2em;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}

h2 {
  text-align: center;
  margin-bottom: 1em;
}

.form-group {
  margin-bottom: 1em;
}

.form-group label {
  display: block;
  margin-bottom: 0.5em;
}

.form-group input {
  width: 100%;
  padding: 0.5em;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 0.5em;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>