<template>
  <dev class="home-section">
    <!-- this is the home spage -->
    <div class="home-section__header ">
      <h1>Simple, fast and reliable tool for your daily stock management</h1>
      <p>StockMachine is a simple and portable tool for managing your stock. It allows you to track your inventory
        efficiently and effectively.</p>
      <button class="download-button" @click="() => {
        router.push('/download');
      }">
        Get started</button>
    </div>


    <CardComponent width="30rem" :customStyle="{ padding: '0px' }">
      <template v-slot:image>
        <img alt="stock promotional" src="../assets/stockmachine-promotional.jpg" />
      </template>
    </CardComponent>


  </dev>
</template>
<script setup>

import CardComponent from './cards/CardComponent.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
</script>
