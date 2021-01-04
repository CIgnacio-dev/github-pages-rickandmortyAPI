<template>
  <div class="register">
    <h1 class="title">Registro de Usuario</h1>
    <router-link to="/">Home  </router-link>
     <router-link to="/login">Login  </router-link>
    <form action='../../routes/api/users' method="post" class="form">
      <label class="form-label" for="#email">Email:</label>
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
   
      
      <input class="form-submit" type="submit" value="signup">
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
       email: "",
      password: "",
      
     
    };
  },
  methods: {
    ...mapActions(["register"]),
    register() {
      let user = {
        email: this.email,
        password: this.password,
 
        
      };
      
      
    }
  }
};
</script>

<style  scoped>
h1{
    color: aquamarine;
}
.register {
  padding: 2rem;
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
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
  
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
 
}
.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
 
}
.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}
</style>
