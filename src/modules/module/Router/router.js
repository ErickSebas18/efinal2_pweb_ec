import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/token",
    component: () => import("@/modules/module/pages/Token"),
  },
  {
    path: "/guardar",
    component: () => import("@/modules/module/pages/Estudiante"),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;

