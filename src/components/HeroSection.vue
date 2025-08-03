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

        <!-- Columna derecha -->
        <div class="col-md-6 text-center">
          <div class="bg-dark bg-opacity-50 rounded-5 shadow-lg">
            <img
              src="../assets/images/002.gif"
              alt="App demo"
              class="img-fluid rounded-5 shadow-lg"
            />
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
  background-color: #4e2727;
  min-height: 90vh;
  display: flex;
  align-items: center;
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
  border: 1px solid #ffffff33;
  padding: 0.4rem 1rem;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.05);
  font-size: 0.85rem;
}
</style>
