<template>
  <section class="services-section text-white py-5">
    <div class="container">
      <h2 class="fw-bold text-center mb-5">Nuestros Servicios</h2>

      <div class="row g-4">
        <div
          v-for="(servicio, index) in servicios"
          :key="index"
          class="col-md-4"
        >
          <div
            class="card h-100 bg-dark bg-opacity-75 border-0 rounded-4 shadow-lg p-4 d-flex flex-column justify-content-between"
          >
            <div class="text-center">
              <div class="mb-3 fs-1 text-danger">
                <i :class="servicio.icono"></i>
              </div>
              <h5 class="fw-semibold">{{ servicio.titulo }}</h5>
              <p class="text-white-50">{{ servicio.descripcion }}</p>
            </div>

            <!-- Botón Ver más -->
            <div class="text-center mt-3">
              <button
                class="btn btn-outline-light btn-sm rounded-pill px-3"
                @click="abrirModal(servicio)"
              >
                Ver más
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="mostrarModal"
      class="modal-overlay d-flex align-items-center justify-content-center"
    >
      <div
        class="modal-content-custom bg-dark text-white rounded-4 p-4 position-relative shadow-lg"
      >
        <button
          class="btn-close btn-close-white position-absolute top-0 end-0 m-3"
          @click="cerrarModal"
        ></button>

        <!-- Encabezado con ícono y título -->
        <div class="text-center mb-4">
          <i :class="selectedServicio.icono" class="fs-1 text-danger"></i>
          <h3 class="fw-bold mt-3">{{ selectedServicio.titulo }}</h3>
          <p class="text-white-50 fs-6">
            {{ selectedServicio.descripcion }}
          </p>
        </div>

        <!-- Detalles con encabezado -->
        <div class="mb-3">
          <h5 class="fw-semibold mb-3">¿Qué incluye este servicio?</h5>
          <ul class="text-start ps-3">
            <li
              v-for="(detalle, i) in selectedServicio.detalles"
              :key="i"
              class="mb-2"
            >
              <i class="bi bi-check-circle-fill text-success me-2"></i
              >{{ detalle }}
            </li>
          </ul>
        </div>

        <!-- Herramientas usadas -->
        <div class="mb-4">
          <h6 class="fw-semibold mb-2">
            Tecnologías y herramientas que usamos:
          </h6>
          <div>
            <span
              v-for="(tool, i) in selectedServicio.herramientas"
              :key="i"
              class="badge bg-secondary me-2 mb-2 px-3 py-2 rounded-pill"
            >
              {{ tool }}
            </span>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center">
          <button
            class="btn btn-danger px-4 py-2 fw-semibold"
            @click="irAContacto"
          >
            {{ selectedServicio.cta }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const irAContacto = () => {
  cerrarModal();
  router.push("/contacto");
};

const servicios = ref([
  {
    titulo: "Diseño Web",
    descripcion:
      "Creamos sitios web modernos, funcionales y adaptados a tus necesidades.",
    icono: "bi bi-window",
    detalles: [
      "Diseño responsivo para móviles y escritorio",
      "Carga rápida y optimización SEO básica",
      "Integración con redes sociales y formularios",
    ],
    herramientas: ["HTML5", "CSS3", "Vue.js", "Bootstrap"],
    cta: "Contáctanos para recibir una cotización gratuita",
  },
  {
    titulo: "Asesoría Digital",
    descripcion:
      "Te orientamos en tu transformación digital, herramientas y estrategias.",
    icono: "bi bi-lightbulb-fill",
    detalles: [
      "Evaluación de tu presencia digital actual",
      "Recomendación de herramientas (CRM, automatización, etc.)",
      "Guía paso a paso para implementar soluciones digitales",
    ],
    herramientas: ["Notion", "Trello", "Zapier", "Google Workspace"],
    cta: "Agenda una reunión gratuita con nosotros",
  },
  {
    titulo: "Marketing Digital",
    descripcion:
      "Potencia tu presencia online con campañas, redes sociales y SEO.",
    icono: "bi bi-megaphone-fill",
    detalles: [
      "Campañas publicitarias en Meta Ads y Google Ads",
      "Gestión de contenido para redes sociales",
      "Optimización SEO técnico y de contenido",
    ],
    herramientas: ["Meta Ads", "Canva", "Google Analytics", "SEMrush"],
    cta: "Solicita una auditoría gratuita de tu marca",
  },
]);

const mostrarModal = ref(false);
const selectedServicio = ref({});

const abrirModal = (servicio) => {
  selectedServicio.value = servicio;
  mostrarModal.value = true;
};

const cerrarModal = () => {
  mostrarModal.value = false;
};
</script>

<style scoped>
.services-section {
  background-color: #4e2727;
  min-height: 75vh;
}

.card:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}

.card h5 {
  color: #ffffff;
}

.card p {
  font-size: 0.95rem;
}

.badge {
  font-size: 0.85rem;
  background: linear-gradient(45deg, #6c757d, #343a40);
  border: none;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1050;
  backdrop-filter: blur(3px);
}

.modal-content-custom {
  max-width: 500px;
  width: 90%;
}

.modal-content-custom ul {
  list-style: none;
  padding-left: 0;
}
</style>
