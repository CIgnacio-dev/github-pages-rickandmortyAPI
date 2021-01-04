<template>
  <div id="inicio">
    <b-container fluid="md">
      <h1>RickAndMorty</h1>

      <div>
        <b-input-group
          v-for="size in ['sm']"
          :key="size"
          :size="size"
          class="mb-3"
        >
          <b-form-input
            placeholder="Ingresa el nombre de un personaje"
            v-model="search"
            class="md"
            type="text"
            v-on:keyup.enter="searchData"
          ></b-form-input>
          <b-input-group-append>
            <b-button
              size="sm"
              text="Button"
              variant="warning"
              v-on:click="searchData"
              >Buscar</b-button
            >
          </b-input-group-append>
        </b-input-group>
      </div>
    </b-container>
    <b-container fluid="lg">
      <b-row>
        
        <Character
          @showModal="showModal"
          v-for="character of characters"
          v-bind:key="character.id"
          v-bind:character="character"
        />
      </b-row>

      <nav>
        <b-button variant="success" v-on:click="ChangePage(page - 1)"
          >Anterior</b-button
        >
        {{ page }}
        <b-button variant="success" v-on:click="ChangePage(page + 1)"
          >Siguiente</b-button
        >
      </nav>
    </b-container>

    <b-modal
      id="modal-sm"
      title="Rick And Morty"
      size="sm"
      ref="my-modal"
      hide-footer
    >
      <h2>{{ currentCharacter.name }}</h2>
      <p class="my-4">
        Genero: <strong>{{ currentCharacter.gender }}</strong>
      </p>
      <p class="my-4">
        Estado: <strong>{{ currentCharacter.status }}</strong>
      </p>
      <p class="my-4">
        Especie: <strong>{{ currentCharacter.species }}</strong>
      </p>

      <b-button class="mt-3" variant="outline-danger" block @click="hideModal"
        >Cerrar</b-button
      >
      <b-button class="mt-3" variant="outline-success" block @click="hideModal"
        >Agregar a Favoritos</b-button
      >
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import Character from "@/components/Character.vue";


export default {
  name: "inicio",
  components: { Character },
  
  data: function () {
    return {
      characters: [],
      page: 1,
      pages: 1,
      search: "",
      modal: false,
      currentCharacter: {},
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    fetch() {
      const params = {
        page: this.page,
        name: this.search,
      };

      let result = axios
        .get("https://rickandmortyapi.com/api/character/", { params })
        .then((res) => {
          this.characters = res.data.results;
          console.log(res.data.info);
          this.pages = res.data.info.pages;
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    ChangePage(page) {
      this.page = page <= 0 || page > this.pages ? this.page : page;
      this.fetch();
    },
    searchData() {
      this.page = 1;
      this.fetch();
      this.search = "";
    },
    showModal(id) {
      this.fetchOne(id);
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    async fetchOne(id) {
      let result = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}/`
      );
      this.currentCharacter = result.data;
      this.modal = true;
    },
  },
};
</script>

<style scoped>
#inicio {
  background-image: url("https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2015/07/114211-primer-juego-instagram-esta-basado-rick-morty.png?itok=VdcPENao");
  background-size: contain;
  background-repeat: repeat-y;
}

h1,
h2 {
  color: rgb(114, 209, 90);
}
h1 {
  text-align: left;
}
</style>
