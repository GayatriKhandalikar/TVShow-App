import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue"
import ShowDetails from "../components/ShowDetails.vue"
import Search from "../components/Search.vue"

import PageNotFound from "../components/PageNotFound.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
  path: '/showdetails/:id',
    name: 'ShowDetails',
    component: ShowDetails
},
{
  path: '/search',
  name: 'Search',
  props: true,
  reuse: true,
  component: Search,

},
{
  path:'*',
  name: 'PageNotFound',
  component: PageNotFound
},

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
