<template>
  <div class="container-token">
    <h1>TOKEN</h1>
    <div class="contenido">
      <div class="cont1">
        <label for="semilla">Semilla</label>
        <input id="semilla" type="text" placeholder="Introduzca la semilla" v-model="semilla"/>
      </div>
      <div class="cont1">
        <label for="vigencia">Tiempo de Vigencia</label>
        <input
          id="vigencia"
          type="text"
          placeholder="Introduzca tiempo de vigencia en segundos"
          v-model="vigencia"
        />
      </div>
      <div class="cont1">
        <label for="token">Token</label>
        <input id="token" type="text" v-model="token"/>
      </div>

      <button id="generar" @click="getToken">Generar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      semilla: "",
      token: "",
      vigencia: "",
    };
  },
  methods: {
    async getToken() {
      const usuario = {
        userName: "erick",
        password: "1234",
      };

      await obtenerTokenFachada(usuario);
    },
  },
};
</script>

<style scoped>
.container-token,
.contenido,
.cont1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
}

.contenido {
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

.cont1 {
  padding: 10px;
}

#token {
  height: 150px;
}

#generar {
  padding: 10px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
}

#generar:hover {
  background-color: aqua;
}
</style>