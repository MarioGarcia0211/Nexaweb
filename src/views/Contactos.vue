<template>
  <section class="contact-section text-white py-5">
    <div class="container">
      <h2 class="fw-bold text-center mb-5">Contáctanos</h2>
      <div class="row">
        <!-- Formulario -->
        <div class="col-md-6 mb-4">
          <div
            class="card bg-dark bg-opacity-75 p-4 rounded-4 shadow-lg border-0"
          >
            <h5 class="text-center mb-4 fw-semibold text-white">
              Envíanos un mensaje
            </h5>

            <form @submit.prevent="enviarFormulario">
              <!-- Nombre -->
              <div class="mb-3">
                <label class="form-label text-white">Nombre</label>
                <input
                  type="text"
                  v-model="form.nombre"
                  @input="errores.nombre = false"
                  :class="[
                    'form-control bg-dark text-white border-0',
                    errores.nombre && 'is-invalid',
                  ]"
                />
              </div>

              <!-- Apellido -->
              <div class="mb-3">
                <label class="form-label text-white">Apellido</label>
                <input
                  type="text"
                  v-model="form.apellido"
                  @input="errores.apellido = false"
                  :class="[
                    'form-control bg-dark text-white border-0',
                    errores.apellido && 'is-invalid',
                  ]"
                />
              </div>

              <!-- Correo -->
              <div class="mb-3">
                <label class="form-label text-white">Correo Electrónico</label>
                <input
                  type="email"
                  v-model="form.correo"
                  @input="errores.correo = false"
                  :class="[
                    'form-control bg-dark text-white border-0',
                    errores.correo && 'is-invalid',
                  ]"
                />
              </div>

              <!-- Mensaje -->
              <div class="mb-3">
                <label class="form-label text-white">Mensaje</label>
                <textarea
                  rows="4"
                  v-model="form.mensaje"
                  @input="errores.mensaje = false"
                  :class="[
                    'form-control bg-dark text-white border-0',
                    errores.mensaje && 'is-invalid',
                  ]"
                ></textarea>
              </div>

              <button class="btn btn-danger w-100" type="submit">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>

        <!-- Información -->
        <div class="col-md-6">
          <div
            class="card bg-dark bg-opacity-75 p-4 mb-4 rounded-4 shadow-lg border-0 text-white"
          >
            <h5 class="fw-semibold mb-3">Información de Contacto</h5>
            <p><strong>Dirección:</strong> Calle Falsa 123</p>
            <p><strong>Teléfono:</strong> (+57) 123-456-7890</p>
            <p><strong>Correo Electrónico:</strong> nexaweb@gmail.com</p>
          </div>

          <div class="card p-0 overflow-hidden rounded-4 shadow-lg border-0">
            <iframe
              class="w-100"
              height="285"
              style="border: 0"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1673.6671628263123!2d-77.06369683037694!3d3.8799363908600712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e37247b9ae7f973%3A0x622c5794c3302258!2sCasa%20Blanca!5e0!3m2!1ses-419!2sco!4v1754022451502!5m2!1ses-419!2sco"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast();

const form = reactive({
  nombre: "",
  apellido: "",
  correo: "",
  mensaje: "",
});

const errores = reactive({
  nombre: false,
  apellido: false,
  correo: false,
  mensaje: false,
});

const validarCorreo = (correo) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo);
};

const enviarFormulario = () => {
  errores.nombre = false;
  errores.apellido = false;
  errores.correo = false;
  errores.mensaje = false;

  let hayErrores = false;

  if (!form.nombre) {
    errores.nombre = true;
    hayErrores = true;
  }

  if (!form.apellido) {
    errores.apellido = true;
    hayErrores = true;
  }

  if (!form.correo) {
    errores.correo = true;
    hayErrores = true;
  }

  if (!form.mensaje) {
    errores.mensaje = true;
    hayErrores = true;
  }

  // Mostrar mensaje general si faltan campos
  if (hayErrores) {
    toast.error("Todos los campos son obligatorios.");
    return;
  }

  // Validación de formato de correo
  if (!validarCorreo(form.correo)) {
    errores.correo = true;
    toast.error("El correo electrónico no es válido.");
    return;
  }

  toast.success("Formulario enviado exitosamente.");

  form.nombre = "";
  form.apellido = "";
  form.correo = "";
  form.mensaje = "";
};
</script>

<style scoped>
.contact-section {
  background: #4e2727;
  min-height: 100vh;
}

.form-control::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.form-control:focus {
  box-shadow: none;
  border-color: #f04a5c;
}

.btn-danger {
  background-color: #f04a5c;
  border-color: #f04a5c;
}

.btn-danger:hover {
  background-color: #d13f4f;
  border-color: #d13f4f;
}
</style>
