<template>
  <div class="login">
    
    <h1 class="title">Login in the page</h1>
    
    <router-link to="/">Home  </router-link>
    <form  @submit.prevent="loginUser" class="form"  >
      <label class="form-label" for="email">Email:</label>
      <input
        v-model="email"
        class="form-input"
        type="email"
        id="email"
        required
        placeholder="Email"
      >
      <label class="form-label" for="#password">Password:</label>
      <input
        v-model="password"
        class="form-input"
        type="password"
        id="password"
        placeholder="Password"
      >
      <p v-if="error" class="error">Has introducido mal el email o la contraseña.</p>
      <input class="form-submit" type="submit" value="login" >
    </form>
    <p class="msg">¿No tienes cuenta?
      <router-link to="/register">Regístrate</router-link>
    </p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
   data() {
    return {
    email: "",
    password: "",
    error: false
    };
  },
  methods: {
    ...mapActions(["login"]),
    loginUser() {
      let user = {
        email: this.email,
        password: this.password
      };
      this.login(user)
        .then(res => {
          
            this.$router.push("/");
          
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.login {
        background-image: url("https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2015/07/114211-primer-juego-instagram-esta-basado-rick-morty.png?itok=VdcPENao");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
  padding: 2rem;
}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(68, 108, 139, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);

}
</style>