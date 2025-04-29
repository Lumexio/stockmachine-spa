<script setup>
import Navbar from './components/Navbar.vue'
import FooterComponent from './components/Footer-component.vue'
</script>

<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
  <FooterComponent />
</template>
