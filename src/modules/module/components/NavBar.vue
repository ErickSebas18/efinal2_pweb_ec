<template>
  <div class="nav">
    <router-link class="link" to="/token">Obtener Token</router-link>
    <router-link class="link" to="/guardar">Insertar Estudiante</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav{
  display: flexbox;
  justify-content: center;
  margin-bottom: 50px;
}
.link{
  padding: 15px;
  cursor: pointer;
}
a.router-link-exact-active {
  color: green;
}

a {
  color: gray;
}

</style>