<template>
  <NavBarVue/>
  <router-view/>
</template>

<script>
import EstudianteVue from './modules/module/pages/Estudiante.vue'
import NavBarVue from '@/modules/module/components/NavBar.vue'
import TokenVue from './modules/module/pages/Token.vue'

export default {
  name: 'App',
  components: {
    TokenVue,
    EstudianteVue,
    NavBarVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
