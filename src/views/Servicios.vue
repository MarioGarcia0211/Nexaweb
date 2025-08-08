<template>
  <section class="services-section text-white py-5">
    <div class="container">
      <h2 class="fw-bold text-center mb-5 display-5">Nuestros Servicios</h2>

      <div class="row g-4">
        <div
          v-for="(servicio, index) in servicios"
          :key="index"
          class="col-md-4"
        >
          <div
            class="card h-100 border-0 rounded-4 shadow-lg overflow-hidden service-card"
          >
            <!-- Imagen -->
            <div class="card-image-wrapper">
              <img
                :src="servicio.imagen"
                :alt="servicio.titulo"
                class="card-image"
                loading="lazy"
              />
              <div class="image-overlay"></div>
            </div>

            <!-- Contenido -->
            <div
              class="p-4 text-center d-flex flex-column justify-content-between flex-grow-1"
            >
              <div>
                <h5 class="fw-semibold text-uppercase">
                  {{ servicio.titulo }}
                </h5>
                <p class="text-white-50">{{ servicio.descripcion }}</p>
              </div>

              <!-- Botón -->
              <div class="mt-3">
                <button
                  class="btn btn-outline-light btn-ver-mas"
                  @click="abrirModal(servicio)"
                >
                  Ver más
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="mostrarModal" class="modal-overlay fade-in">
      <div class="modal-content-custom slide-up">
        <button
          class="btn-close btn-close-white position-absolute top-0 end-0 m-3"
          @click="cerrarModal"
        ></button>

        <!-- Encabezado -->
        <div class="text-center mb-4 border-bottom pb-3">
          <i :class="selectedServicio.icono" class="fs-1 text-danger mb-3"></i>
          <h3 class="fw-bold">{{ selectedServicio.titulo }}</h3>
          <p class="text-white-50">{{ selectedServicio.descripcion }}</p>
        </div>

        <!-- Detalles -->
        <div class="mb-4">
          <h5 class="fw-semibold mb-3">¿Qué incluye este servicio?</h5>
          <ul class="list-unstyled">
            <li
              v-for="(detalle, i) in selectedServicio.detalles"
              :key="i"
              class="mb-2 d-flex align-items-start"
            >
              <i class="bi bi-check-circle-fill text-success me-2"></i>
              <span>{{ detalle }}</span>
            </li>
          </ul>
        </div>

        <!-- Herramientas -->
        <div class="mb-4">
          <h6 class="fw-semibold mb-2">Tecnologías y herramientas:</h6>
          <div>
            <span
              v-for="(tool, i) in selectedServicio.herramientas"
              :key="i"
              class="badge bg-gradient me-2 mb-2 px-3 py-2 rounded-pill"
            >
              {{ tool }}
            </span>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center d-flex flex-wrap gap-2 justify-content-center">
          <button
            class="btn btn-danger px-4 py-2 fw-semibold"
            @click="irAContacto"
          >
            {{ selectedServicio.cta }}
          </button>
          <button
            class="btn btn-outline-light px-4 py-2 fw-semibold"
            @click="mostrarGaleria(selectedServicio)"
          >
            Ver diseños
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import imgWeb from "../assets/images/diseno-web.jpg";
import imgAsesoria from "../assets/images/asesoria.webp";
import imgMarketing from "../assets/images/marketing-digital.jpg";

const router = useRouter();

const irAContacto = () => {
  cerrarModal();
  router.push("/contacto");
};

const mostrarGaleria = (servicio) => {
  cerrarModal();
  router.push(`/galeria/${servicio.categoria}`);
};

const servicios = ref([
  {
    titulo: "Diseño Web",
    categoria: "web",
    descripcion:
      "Creamos sitios web modernos, funcionales y adaptados a tus necesidades.",
    imagen: imgWeb,
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
    categoria: "asesoria",
    descripcion:
      "Te orientamos en tu transformación digital, herramientas y estrategias.",
    imagen: imgAsesoria,
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
    categoria: "marketing",
    descripcion:
      "Potencia tu presencia online con campañas, redes sociales y SEO.",
    imagen: imgMarketing,
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
  min-height: 82vh;
}

.service-card {
  background: rgba(240, 74, 92, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.35);
}

.card-image-wrapper {
  height: 250px;
  overflow: hidden;
  position: relative;
}

.card h5 {
  color: #ffffff;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.service-card:hover .card-image {
  transform: scale(1.08);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.7)
  );
}

/* Botón "Ver más" */
.btn-ver-mas {
  border: 2px solid #dc3545;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  transition: all 0.3s ease;
}
.btn-ver-mas:hover {
  background-color: #dc3545;
  color: white;
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
}
.modal-content-custom {
  background: #1e1e1e;
  color: white;
  max-width: 550px;
  width: 90%;
  padding: 2rem;
  border-radius: 20px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}
.bg-gradient {
  background: linear-gradient(45deg, #ff4d6d, #dc3545);
}

/* Animaciones */
.fade-in {
  animation: fadeIn 0.3s ease-in-out;
}
.slide-up {
  animation: slideUp 0.3s ease-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
