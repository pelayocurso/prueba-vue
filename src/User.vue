<template>
  <li>
    <button @click="clicked" v-text="name" :class="{ 'selected': selected }"></button>
  </li>
</template>

<script>
  export default {
    name: 'user',
    props: ['name'],

    data() {
      return { selected: false };
    },

    methods: {
      clicked() {
        this.selected = !this.selected;
        this.$emit('clicked');
      }
    },
  };
</script>

<style>
</style>
<!-- Vue.component('user', {
    props: ['name'],

    template: `
      <li>
        <button @click="clicked" :value="name" :class="{ 'selected': selected }"></button>
      </li>
    `,

    data() {
      return { selected: false };
    },

    methods: {
      clicked() {
        this.selected = !this.selected;
        this.$emit('clicked');
      }
    },
}); -->
