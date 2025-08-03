import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Nosotros from "../views/Nosotros.vue";
import Contactos from "../views/Contactos.vue";
import Servicios from "../views/Servicios.vue";

// Definición de rutas
const routes = [
  { path: "/", component: Home },
  { path: "/nosotros", component: Nosotros },
  { path: "/servicios", component: Servicios },
  { path: "/contacto", component: Contactos },
];

// Crear el router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Exportamos el router para usarlo en la app
export default router;
