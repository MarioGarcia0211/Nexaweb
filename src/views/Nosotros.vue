<template>
  <section class="nosotros-section text-white">
    <div class="container py-4">
      <div class="row align-items-center">
        <!-- Columna izquierda: texto -->
        <div class="col-lg-7 mb-4 mb-lg-0">
          <div class="seccion mb-4">
            <h2 class="titulo-seccion">Nosotros.</h2>
            <p class="descripcion">
              En <strong>Nexaweb</strong>, diseñamos soluciones digitales
              personalizadas para impulsar a empresas y emprendedores en el
              mundo digital. Combinamos creatividad, calidad y tecnología para
              transformar ideas en realidades. Más que un servicio, somos tu
              aliado estratégico para el éxito en línea.
            </p>
          </div>

          <div class="seccion mb-4">
            <h2 class="titulo-seccion">Misión.</h2>
            <p class="descripcion">
              Brindar soluciones digitales innovadoras y personalizadas que
              impulsen el crecimiento de empresas y emprendedores, combinando
              diseño, tecnología y asesoramiento especializado para garantizar
              resultados efectivos y sostenibles.
            </p>
          </div>

          <div class="seccion">
            <h2 class="titulo-seccion">Visión.</h2>
            <p class="descripcion">
              Convertirnos en líderes en el desarrollo de soluciones digitales,
              siendo reconocidos por nuestra calidad, creatividad e impacto en
              la transformación tecnológica de nuestros clientes a nivel global.
            </p>
          </div>
        </div>

        <!-- Columna derecha: imagen mockup -->
        <div class="col-lg-5 text-center">
          <img
            src="../assets/images/iphone.svg"
            alt="Mockup Nexaweb"
            class="mockup-img img-fluid"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.nosotros-section {
  background-color: #411e1e;
  padding-top: 0.9rem;
  padding-bottom: 0.4rem;
}

.titulo-seccion {
  font-size: 1.6rem;
  font-weight: 700;
  color: #ff4d6d;
  margin-bottom: 0.4rem;
  position: relative;
  display: inline-block;
}

.titulo-seccion::after {
  content: "";
  display: block;
  width: 60px;
  height: 3px;
  background: linear-gradient(to right, #ff4d6d, #ff6b6b);
  margin-top: 4px;
  border-radius: 2px;
}

.descripcion {
  font-size: 0.95rem;
  color: #f0f0f0;
  line-height: 1.6;
}

.mockup-img {
  max-width: 80%;
  border-radius: 1rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease-in-out;
}

.mockup-img:hover {
  transform: scale(1.03);
}

/* Responsive ajustes adicionales si necesitas */
@media (max-width: 768px) {
  .mockup-img {
    max-width: 60%;
    margin-top: 1.5rem;
  }
}
</style>
