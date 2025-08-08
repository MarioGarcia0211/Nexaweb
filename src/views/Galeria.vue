<template>
  <section class="galeria-section text-white py-5">
    <div class="container">
      <h2 class="fw-bold text-center mb-5 display-5">
        Galería de {{ categoriaTitulo }}
      </h2>

      <div class="row g-4">
        <div
          v-for="(item, index) in galeriaFiltrada"
          :key="index"
          class="col-md-4"
        >
          <div
            class="card h-100 border-0 rounded-4 shadow-lg overflow-hidden card-hover"
          >
            <!-- Imagen -->
            <div class="card-image-wrapper">
              <img
                :src="item.img"
                :alt="item.titulo"
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
                <h5 class="fw-semibold text-uppercase">{{ item.titulo }}</h5>
                <p class="text-white-50">{{ item.descripcion }}</p>
              </div>

              <!-- Boton -->
              <div v-if="categoria === 'web'" class="text-center mt-4">
                <a
                  :href="item.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-outline-light btn-ingresar"
                >
                  Ingresar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Botón Volver -->
      <div class="text-center mt-5">
        <button
          class="btn btn-danger px-4 py-2 rounded-pill shadow-lg"
          @click="volver"
        >
          Volver a Servicios
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import imgPlantsGift from "../assets/images/plantsgift.jpg";
import imgNatpacking from "../assets/images/natpacking.jpg";
import imgAldiana from "../assets/images/aldiana.jpg";
import imgOptometria from "../assets/images/optometria.jpg";
import imgDotaciones from "../assets/images/dotaciones.jpg";
import imgKbn from "../assets/images/kbn.jpg";
import fabAds from "../assets/images/facebookads.jpg";
import googleAds from "../assets/images/googleads.jpg";
import igAds from "../assets/images/igads.jpg";

const route = useRoute();
const categoria = route.params.categoria;

const diseños = [
  // ---- Diseños Web ----
  {
    categoria: "web",
    titulo: "Plants Gift Colombia",
    descripcion: "Diseño responsive con HTML, CSS y JS.",
    img: imgPlantsGift,
    link: "https://plant-gift-colombia-showcase-32.lovable.app/",
  },
  {
    categoria: "web",
    titulo: "Natpacking",
    descripcion:
      "Alternativas sostenibles a las bolsas plásticas con almidón de yuca.",
    img: imgNatpacking,
    link: "https://natpacking-eco-brief.lovable.app/",
  },
  {
    categoria: "web",
    titulo: "Arroz Aldiana",
    descripcion:
      "Experiencias culinarias con arroz de alta calidad y catering.",
    img: imgAldiana,
    link: "https://aldiana-onepage-avanzar-info.lovable.app/",
  },
  {
    categoria: "web",
    titulo: "Optometría especializada",
    descripcion: "Página para captar clientes.",
    img: imgOptometria,
    link: "https://mirada-clara-pagina.lovable.app/",
  },
  {
    categoria: "web",
    titulo: "Dotaciones Médicas",
    descripcion: "Muestra de trabajos creativos.",
    img: imgDotaciones,
    link: "https://salud-info-page-maker.lovable.app/",
  },
  {
    categoria: "web",
    titulo: "KBN SOCIAL MEDIA",
    descripcion:
      "Empresa de medios de comunicación digital, infoproductora de contenidos en redes sociales",
    img: imgKbn,
    link: "https://kbn-social-page-builder.lovable.app/",
  },

  // ---- Marketing ----
  {
    categoria: "marketing",
    titulo: "Campaña Facebook Ads",
    descripcion: "Publicidad para redes sociales.",
    img: fabAds,
  },
  {
    categoria: "marketing",
    titulo: "Instagram Stories",
    descripcion: "Creativos optimizados para Instagram.",
    img: igAds,
  },
  {
    categoria: "marketing",
    titulo: "Anuncio Google Ads",
    descripcion: "Publicidad para buscadores.",
    img: googleAds,
  },
];

const galeriaFiltrada = computed(() =>
  diseños.filter((item) => item.categoria === categoria)
);

const categoriaTitulo = computed(
  () => categoria.charAt(0).toUpperCase() + categoria.slice(1)
);

const volver = () => {
  window.history.back();
};
</script>

<style scoped>
.galeria-section {
  min-height: 82vh;
}

.card-hover {
  background: rgba(240, 74, 92, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.35);
}

.card-image-wrapper {
  height: 250px;
  overflow: hidden;
  position: relative;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.card-hover:hover .card-image {
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

.card h5 {
  color: #ffffff;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
}

.card p {
  font-size: 0.95rem;
  line-height: 1.4;
}

.btn-ingresar {
  border: 2px solid #dc3545;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.btn-ingresar:hover {
  background-color: #dc3545;
  color: white;
}
</style>
