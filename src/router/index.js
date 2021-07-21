import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue"
import ShowDetails from "../components/ShowDetails.vue"
import Search from "../components/Search.vue"
import About from "../views/About.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   component: Dashboard,
  // },
  {
  path: '/showdetails/:id',
    name: 'ShowDetails',
    component: ShowDetails
},
{
  path: '/search/:inputText',
  name: 'Search',
  component: Search

},

{
  path: '/about',
  name: 'About',
  component: About

}


  // {
  //   path: "/about",
  //   name: "About",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
