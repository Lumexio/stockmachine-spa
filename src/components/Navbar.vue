<template>
  <nav>
    <div class="title-icon">
      <img src="@/assets/icon.png" alt="stockmachine" width="30rem" />
      <h1>Stock machine</h1>
    </div>
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/pricing">Pricing</router-link>
      <router-link to="/download">Download</router-link>
    </div>
    <div class="nav-actions">
      <select v-model="selectedTheme" class="theme-select" @change="onThemeChange">
        <option value="default-light">Default Light</option>
        <option value="default-dark">Default Dark</option>
        <option value="electron-neon-light">Electron Neon Light</option>
        <option value="electron-neon-dark">Electron Neon Dark</option>
        <option value="tokyo-day">Tokyo Day</option>
        <option value="tokyo-night">Tokyo Night</option>
        <option value="newspaper-light">Newspaper Light</option>
        <option value="newspaper-dark">Newspaper Dark</option>
      </select>
      <button class="download-button launch-web-btn" @click="openWebApp">Launch Web App</button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useThemeStore } from '@/stores/theme';

defineOptions({ name: 'Navbar-component' });

const themeStore = useThemeStore();
const selectedTheme = ref(themeStore.currentTheme);

onMounted(() => {
  themeStore.initTheme();
});

function onThemeChange() {
  themeStore.setTheme(selectedTheme.value);
}

function openWebApp() {
  window.open('https://app.stockmachine.online', '_blank');
}
</script>

<style scoped>
.router-link-active {
  cursor: pointer;
}

.router-link-exact-active {
  color: var(--brand-red-primary);
}

.nav-links {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--standard-gap);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.theme-select {
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
  border: 1px solid var(--color-border);
  background-color: var(--color-background-soft);
  color: var(--color-text);
  font-size: 0.85rem;
  cursor: pointer;
}

.title-icon {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
}

.nav-links a {
  text-decoration: none;
  color: var(--color-text);
}

.nav-links a:hover {
  color: var(--brand-red-primary);
}

.launch-web-btn {
  font-size: 0.9rem;
  padding: 0 1.25rem;
  height: 40px;
  white-space: nowrap;
}

@media (max-width: 600px) {
  .launch-web-btn {
    display: none;
  }
}
</style>
