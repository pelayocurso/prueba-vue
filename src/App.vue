<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <ul>
      <user v-for="user in users" :name="user.name" @clicked="selectUser(user)"></user>
    </ul>
    <button @click="showForm(false)">Create</button>
    <button @click="deleteData()">Delete</button>
  </div>
</template>

<script>
import User from './User.vue';
import UserForm from './UserForm.vue';

export default {
  name: 'app',
  components: { UserForm, User },

  data () {
    return {
      msg: 'Prueba',
      selected: null,
      users: [],
    }
  },

  created() {
    this.users = [{id: 0, name: 'paco', lastName: 'gracia'}, {id: 1, name: 'pac', lastName: 'gracia'}, {id: 2, name: 'pco', lastName: 'gracia'}];
  },

  // CRUD AJAX

  createData(user) {
    this.users.push(user);
  },

  updateData(user) {
    for(let i = 0; i < this.users.length; i++) {
      if(this.users[i].id == user.id) {
        this.users[i] = user;
      }
    }
  },

  deleteData() {
    if(this.selected) {
      let index = this.users.indexOf(this.selected);
      users.splice(selected, 1);
    } else {
      alert('No se selecciono nada');
    }
  },

  // HANDLE EVENTS
  selectUser(user) {
    this.selected = user;
  },

  showForm(update) {
    if(update) {
      Vue.$emit('pass_user', this.selected);
    } else {
      Vue.$emit('pass_user', null);
    }
  }
};

</script>

<style>
  .selected: {
    background-color: blue;
  }
</style>
