<template>
  <nav>
    <router-link to="/" class="title-icon logo-link">
      <img src="@/assets/icon.png" alt="stockmachine" width="30rem" />
      <h1>Stock machine</h1>
    </router-link>
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
      <button class="launch-web-btn premium-btn-nav" @click="openWebApp">
        <FontAwesomeIcon :icon="faGlobe" class="nav-btn-icon" />
        Launch Web App
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useThemeStore } from '@/stores/theme'

defineOptions({ name: 'Navbar-component' })

const themeStore = useThemeStore()
const selectedTheme = ref(themeStore.currentTheme)

onMounted(() => {
  themeStore.initTheme()
})

function onThemeChange() {
  themeStore.setTheme(selectedTheme.value)
}

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

function openWebApp() {
  window.open('https://app.stockmachine.online', '_blank')
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

.logo-link {
  text-decoration: none;
  color: inherit;
}

.nav-links a {
  text-decoration: none;
  color: var(--color-text);
  position: relative;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: var(--brand-red-primary);
  transition: width 0.3s ease;
}

.nav-links a:hover {
  color: var(--brand-red-primary);
}

.nav-links a:hover::after,
.nav-links .router-link-exact-active::after {
  width: 100%;
}

.launch-web-btn {
  font-size: 0.9rem;
  padding: 0 1.25rem;
  height: 40px;
  white-space: nowrap;
}

.premium-btn-nav {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(90deg, var(--brand-red-primary), #e53935);
  background-size: 200% auto;
  border: none;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 4px 15px -3px rgba(229, 57, 53, 0.4);
  transition:
    0.4s ease,
    transform 0.2s ease;
}

.premium-btn-nav:hover {
  background-position: right center;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px -3px rgba(229, 57, 53, 0.6);
}

@media (max-width: 600px) {
  .launch-web-btn {
    display: none;
  }
}

@media (max-width: 768px) {
  .title-icon h1 {
    display: none;
  }

  .nav-links {
    gap: 0.5rem;
    font-size: 0.9rem;
  }

  .theme-select {
    max-width: 100px;
    padding: 0.3rem;
  }
}
</style>
