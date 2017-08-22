<template>
  <div id="user-form" v-if="user">
    <div class="group-form">
      <label>Name: </label>
      <input type="text" v-model="user.name" id="name"/>
    </div>

    <div class="group-form">
      <label>Last Name: </label>
      <input type="text" v-model="user.lastName" id="last-name"/>
    </div>

    <template v-if="user.id">
      <button>Actualizar</button>
    </template>
    <template v-else>
      <button>Crear</button>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'user-form',

    data() {
      return { user: null };
    },

    created() {
      let _this = this;

      Vue.$on('pass_user', (user) => {
        if(user) {
          _this.user = user;
        } else {
          _this.user = {name: '', lastName: ''};
        }
      });

      Vue.$on('clean', () => {
        _this.user = null;
      });
    },

    methods: {
      updateUser() {
        this.$emit('update_user', user);
      },

      createUser() {
        this.$emit('create_user', user);
      }
    }
  }
</script>

<style>
</style>
