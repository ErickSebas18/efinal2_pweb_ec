<template>
  <div class="contenedor-estudiante">
    <h1>Estudiante</h1>
    <div class="contenido2">
      <div class="cont2">
        <label for="tokenE">Token</label>
        <input v-model="token" id="tokenE" type="text" placeholder="Introduzca Token" />
      </div>
      <div class="cont2">
        <label for="nombre">Nombre</label>
        <input v-model="nombre" id="nombre" type="text" placeholder="Introduzca Nombre" />
      </div>
      <div class="cont2">
        <label for="apellido">Apellido</label>
        <input v-model="apellido" id="apellido" type="text" placeholder="Introduzca Apellido" />
      </div>
      <div class="cont2">
        <label for="cedula">Cédula</label>
        <input v-model="cedula" id="cedula" type="text" placeholder="Introduzca Cédula" />
      </div>
      <button id="guardar" @click="guardarEstudiante">Guardar</button>
    </div>
  </div>
</template>

<script>
import { ingresarEstudianteFacade } from "@/modules/module/helpers/estudianteApi.js";

export default {
  data() {
    return {
      token: null,
      nombre: null,
      apellido: null,
      cedula: null,
    };
  },
  methods: {
    guardarEstudiante() {
      const data = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        cedula: this.cedula
      };
      ingresarEstudianteFacade(data, this.token);
    },
  },
};
</script>

<style scoped>
.contenedor-estudiante,
.contenido2,
.cont2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
}

.contenido2 {
  width: 400px;
  border: 2px dotted;
  padding: 20px;
}

input {
  width: 300px;
  border: 1px solid;
  border-radius: 5px;
  padding: 5px;
  margin-top: 10px;
}

.cont2 {
  padding: 10px;
}

#tokenE {
  height: 150px;
}

#guardar {
  padding: 10px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
}

#guardar:hover {
  background-color: aqua;
}
</style>