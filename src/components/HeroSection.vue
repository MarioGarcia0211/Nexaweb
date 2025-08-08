<template>
  <section class="hero-section text-white py-5">
    <div class="container">
      <div class="row align-items-center">
        <!-- Columna izquierda -->
        <div class="col-md-6 mb-4 mb-md-0">
          <h1 class="fw-bold display-6 mb-3">
            Somos expertos en la<br />
            <span class="text-acento">creación de Web Apps</span>
          </h1>

          <p class="descripcion">
            <span class="fw-semibold">¡Bienvenido a Nexaweb!</span><br />
            Creamos soluciones digitales innovadoras y personalizadas para
            impulsar tu negocio en el mundo digital. Descubre cómo podemos
            ayudarte a destacar y alcanzar tus metas.<br />
            ¡Tu éxito es nuestra prioridad!
          </p>

          <div class="mt-4 d-flex flex-wrap gap-3">
            <button class="btn btn-demo" @click="irAContacto">
              AGENDA UNA DEMO
            </button>
            <button class="btn btn-portafolio" @click="irAServicios">
              VER PORTAFOLIO
            </button>
          </div>

          <div class="mt-4 d-flex gap-3 flex-wrap">
            <span class="tech-badge text-danger">
              <i class="bi bi-check-circle me-1"></i> React
            </span>
            <span class="tech-badge text-danger">
              <i class="bi bi-check-circle me-1"></i> Node JS
            </span>
            <span class="tech-badge text-danger">
              <i class="bi bi-check-circle me-1"></i> Microsoft Azure
            </span>
          </div>
        </div>

        <!-- Columna derecha con carousel -->
        <div class="col-md-6 text-center">
          <div class="bg-dark bg-opacity-50 rounded-5 shadow-lg p-3">
            <div
              id="heroCarousel"
              class="carousel slide carousel-fade rounded-5 shadow-lg overflow-hidden"
              data-bs-ride="carousel"
              data-bs-interval="3000"
            >
              <!-- Indicadores -->
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#heroCarousel"
                  data-bs-slide-to="0"
                  class="active"
                ></button>
                <button
                  type="button"
                  data-bs-target="#heroCarousel"
                  data-bs-slide-to="1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#heroCarousel"
                  data-bs-slide-to="2"
                ></button>
              </div>

              <!-- Imágenes -->
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="../assets/images/diseno-web.jpg"
                    class="d-block w-100"
                    alt="App demo 1"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../assets/images/marketing-digital.jpg"
                    class="d-block w-100"
                    alt="App demo 2"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../assets/images/asesoria.webp"
                    class="d-block w-100"
                    alt="App demo 3"
                  />
                </div>
              </div>

              <!-- Controles -->
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon custom-control"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Anterior</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon custom-control"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Siguiente</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const irAContacto = () => {
  router.push("/contacto");
};

const irAServicios = () => {
  router.push("/servicios");
};
</script>

<style scoped>
.hero-section {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 82vh;
}

.text-acento {
  color: #f04a5c;
}

.descripcion {
  color: #ccc;
  font-size: 0.95rem;
  line-height: 1.6;
}

.btn-demo {
  background-color: #f04a5c;
  border: none;
  color: white;
  padding: 0.6rem 1.4rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.9rem;
}

.btn-demo:hover {
  background-color: #c83748;
}

.btn-portafolio {
  background-color: #212121;
  color: white;
  border: none;
  padding: 0.6rem 1.4rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.9rem;
}

.btn-portafolio:hover {
  background-color: #333;
}

.tech-badge {
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.4rem 1rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(6px);
  font-size: 0.85rem;
  transition: transform 0.2s ease, background 0.3s ease;
}

.tech-badge:hover {
  transform: scale(1.05);
  background: rgba(255, 255, 255, 0.15);
}

.carousel-inner img {
  border-radius: 1.2rem;
  object-fit: cover;
  height: 350px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  transition: transform 0.5s ease-in-out;
}

.carousel-inner img:hover {
  transform: scale(1.03);
}

.carousel-indicators [data-bs-target] {
  background-color: #f04a5c;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  opacity: 0.7;
  transition: all 0.3s ease;
}

.carousel-indicators .active {
  opacity: 1;
  transform: scale(1.2);
}

.custom-control {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-size: 100%, 100%;
  width: 2.5rem;
  height: 2.5rem;
}
</style>
