import { createRouter, createWebHistory } from "vue-router";
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import HomeView from "../views/HomeView.vue";
import Champion from "../views/ChampionsView.vue";
import SpecificChampion from "../views/SpecificChampionsView.vue"
import LoginView from "../views/LoginView.vue"
import Register from "../components/Register.vue"
import Summoner from '../views/SummonersView.vue'
import Dashboard from "../views/DashboardView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta:{
        requiresAuth: false ,
      }          
    },

    {
      path: "/champions",
      name: "champions",
      component: Champion,
      meta:{
        requiresAuth: false,
      }  
    },

    {
      path: "/champion/:id",
      name: "SpecificChampion",
      component: SpecificChampion,
      meta:{
        requiresAuth: false,
      }
    },

    {
      path:"/login",
      name: "login",
      component: LoginView,
      meta:{
        requiresAuth: false,
      }
    },

    {
      path:"/register",
      name: "register",
      component: Register,
      meta:{
        requiresAuth: false,
      }
    }, 

    {
      path: "/summoners",
      name: "summoners",
      component: Summoner,
      meta:{
        requiresAuth: true,
      }
    },

    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      meta:{
        requiresAuth: true 
      }

    },
  ],
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user)
      },

      reject
    )
  })
}

router.beforeEach(async(to, from, next) => {
  if(to.matched.some((record)=> record.meta.requiresAuth)){
    if(await getCurrentUser()) {
      next();
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
export default router;
