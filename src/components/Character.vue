<template>

  <b-col cols="6" md="3">
    
    <b-card>
      <b-card-img img-alt="Image" img-top v-bind:src="character.image" v-bind:alt="character.name"> </b-card-img>
      <b-card-title>
        <h2>{{ character.name }}</h2>
        <h2>{{ character.status }}</h2>
      </b-card-title>
      <b-button variant="info" @click="showMore(character.id)" v-b-modal.modal-sm>Ver mas</b-button>
    </b-card>
  </b-col>

</template>

<script>

export default {
  props: ["character"],
  methods: {
    showMore(id) {
      this.$emit("showModal", id);
    },
  },
};
</script>

<style>
body {
  padding: 1em;
}
.card {
  margin: 0.5em;
}
</style>
