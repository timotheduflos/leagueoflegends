import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Champion from "../views/ChampionsView.vue";
import SpecificChampion from "../views/SpecificChampionsView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/champions",
      name: "champions",
      component: Champion,
    },

    {
      path: "/champion/:id",
      name: "SpecificChampion",
      component: SpecificChampion,
    },
  ],
});

export default router;
