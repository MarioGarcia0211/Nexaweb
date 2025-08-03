<template>
  <nav class="navbar navbar-expand-lg sticky-top shadow-sm">
    <div class="container">
      <a class="navbar-brand fw-bold text-white fs-4" href="#">NEXAWEB</a>

      <!-- Botón hamburguesa solo visible en pantallas pequeñas -->
      <button
        class="navbar-toggler border-0 d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menú horizontal visible solo en pantallas grandes -->
      <div class="d-none d-lg-flex justify-content-end w-100">
        <ul class="navbar-nav gap-4 align-items-center ms-auto">
          <li class="nav-item">
            <RouterLink
              class="nav-link custom-link"
              to="/"
              exact-active-class="active-link"
            >
              <i class="bi bi-house-door me-1"></i> Inicio
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link custom-link"
              to="/nosotros"
              exact-active-class="active-link"
            >
              <i class="bi bi-people me-1"></i> Nosotros
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link custom-link"
              to="/servicios"
              exact-active-class="active-link"
            >
              <i class="bi bi-briefcase me-1"></i> Servicios
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              class="btn btn-contacto px-4 py-2 fw-semibold"
              to="/contacto"
            >
              <i class="bi bi-envelope-fill me-1"></i> Contáctanos
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Offcanvas para móviles -->
      <div
        class="offcanvas offcanvas-end bg-black text-white d-lg-none"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title fw-bold" id="offcanvasNavbarLabel">
            NEXAWEB
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav gap-3">
            <li class="nav-item">
              <RouterLink
                class="nav-link custom-link"
                to="/"
                exact-active-class="active-link"
              >
                <i class="bi bi-house-door me-1"></i> Inicio
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink
                class="nav-link custom-link"
                to="/nosotros"
                exact-active-class="active-link"
              >
                <i class="bi bi-people me-1"></i> Nosotros
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink
                class="nav-link custom-link"
                to="/servicios"
                exact-active-class="active-link"
              >
                <i class="bi bi-briefcase me-1"></i> Servicios
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink
                class="btn btn-contacto px-4 py-2 fw-semibold"
                to="/contacto"
              >
                <i class="bi bi-envelope-fill me-1"></i> Contáctanos
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  min-height: 70px;
  background-color: black;
}

.custom-link {
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
}

.custom-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0%;
  height: 2px;
  background-color: #f04a5c;
  transition: width 0.3s ease;
}

.custom-link:hover::after {
  width: 100%;
}

.custom-link:hover {
  color: #f04a5c;
}

.active-link {
  color: #f04a5c !important;
}

.active-link::after {
  width: 100%;
}

.btn-contacto {
  background-color: #f04a5c;
  color: white;
  border-radius: 999px;
  font-size: 0.9rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 2px 6px rgba(240, 74, 92, 0.4);
}

.btn-contacto:hover {
  background-color: #c83748;
  transform: scale(1.05);
  color: white;
}
</style>
