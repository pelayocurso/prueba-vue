<template>
  <li>
    <p v-text="user.name" @click="show"></p>
    <button @click="modify">Modificar</button>
    <button @click="remove">Eliminar</button>
  </li>
</template>

<script>
  export default {
    name: 'user',
    props: ['user'],

    methods: {
      show() {
        this.$emit('show');
      },

      modify() {
        this.$emit('modify');
      },

      remove() {
        this.$emit('remove');
      },
    },
  };
</script>

<style>
  .selected {
    background: blue;
  }
</style>
