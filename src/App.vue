<template>
  <div>
    <my-header></my-header>
    <router-view/>
  </div>
</template>

<script>
import 'normalize.css'
import './assets/main.css'
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    myHeader: Header
  }
}
</script>
