import { createRouter, createWebHistory } from 'vue-router';
import UserList from '../components/List/UserList.vue';
import CreateUser from '../components/Form/CreateUsers.vue';
import EditUser from  '../components/Edit/EditUser.vue';

const routes = [
  { path: '/', redirect: '/users' }, // redirect root to user list
  { path: '/users', component: UserList },
  { 
    path: '/create/:id?', // optional id for edit
    name: 'CreateUser',
    component: CreateUser,
    props: true 
  },
  { 
    path: '/edit/:id',
    name: 'EditUser',
    component: EditUser,
    props: true
  }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
