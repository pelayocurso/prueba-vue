<template>
  <div>
    <div class="group-form">
      <label>Name: </label>
      <input type="text" v-model="user.name" id="name"/>
    </div>

    <div class="group-form">
      <label>Last Name: </label>
      <input type="text" v-model="user.lastName" id="last-name"/>
    </div>

    <template v-if="update">
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
    props: ['user'],

    data() {
      return { user: {name: '', lastName: ''} };
    },

    created() {
      let _this = this;
      Vue.$on('pass_user', (user) => {
        if(user) {
          _this.user = user;
        }
      });
    },
  }
</script>

<style>
</style>
<!-- Vue.component('user-form', {
  props: ['user'],

  template: `
    <div>
      <div class="group-form">
        <label>Name: </label>
        <input type="text" v-model="user.name" id="name"/>
      </div>

      <div class="group-form">
        <label>Last Name: </label>
        <input type="text" v-model="user.lastName" id="last-name"/>
      </div>

      <template v-if="update">
        <button>Actualizar</button>
      </template>
      <template v-else>
        <button>Crear</button>
      </template>
    </div>
  `,

  data() {
    return { user: {name: '', lastName: ''} };
  },

  created() {
    let _this = this;
    Handler.$on('pass_user', (user) => {
      if(user) {
        _this.user = user;
      }
    });
  },

  methods: {

  },
}); -->
