<template>
<div id="app" class="container">
  <div id="master">
    <h1>{{ msg }}</h1>
    <ul class="list-group-item">
      <user v-for="user in users" :user="user" :class="{ 'selected': is_selected(user) }" @show="showUser(user)" @modify="modifyUser(user)" @remove="removeUser(user)"></user>
    </ul>
    <button @click="showForm(false)">Create</button>
  </div>
  <user-view></user-view>

  <user-form></user-form>
</div>
</template>

<script>
import User from './User.vue';
import UserForm from './UserForm.vue';
import UserView from './UserView.vue';

export default {
  name: 'app',
  components: {
    User,
    UserForm,
    UserView
  },

  data() {
    return {
      msg: 'Prueba',
      users: [],
      selected: null,
    }
  },

  /* LIFE CYCLE */
  created() {
    this.users = [{
      id: 0,
      name: 'paco',
      lastName: 'gracia'
    }, {
      id: 1,
      name: 'pac',
      lastName: 'gracia'
    }, {
      id: 2,
      name: 'pco',
      lastName: 'gracia'
    }];
  },

  // METHODS
  methods: {
    /* AJAX REQUESTS */
    createData(user) {
      this.users.push(user);
    },

    updateData(user) {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id == user.id) {
          this.users[i] = user;
        }
      }
    },

    deleteData() {
      if (this.selected) {
        let index = this.users.indexOf(this.selected);
        this.users.splice(selected, 1);
      } else {
        alert('No se selecciono nada');
      }
    },

    /* HANDLE EVENTS */
    showUser(user) {
      this.selected = user;
      this.showUser();
    },

    modifyUser(user) {
      this.selected = user;
      this.showForm(true);
    },

    removeUser(user) {
      this.selected = user;
      this.cleanComponents();
      this.deleteData();
    },

    /* COMPONENTS COMUNICATION */
    showForm(update) {
      this.cleanComponents();
      if (update) {
        Vue.$emit('pass_user', this.selected);
      } else {
        this.selected = null;
        Vue.$emit('pass_user', null);
      }
    },

    showUser() {
      this.cleanComponents();
      Vue.$emit('show_user', this.selected);
    },

    cleanComponents() {
      Vue.$emit('clean');
    },

    /* STYLE MANAGING */
    is_selected(user) {
      return (this.selected !== null && user.id == this.selected.id);
    }
  },
};
</script>

<style>
</style>
