<template>
  <div id="user-view" v-if="user">
    <p>ID: <span v-model="user.id"></span> </p>
    <p>Name: <span v-model="user.name"></span></p>
    <p>Last Name: <span v-model="user.lastName"></span> </p>
  </div>
</template>

<script>
  export default {
    name: 'user-view',
    data() {
      return { user: null };
    },

    created() {
      let _this = this;
      Vue.$on('show_user', (user) => {
        _this.user = user;
      });

      Vue.$on('clean', () => {
        _this.user = null;
      })
    }
  }
</script>

<style>
</style>
