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
    <button class="download-button launch-web-btn" @click="openWebApp">Launch Web App</button>
  </nav>
</template>

<script setup>
defineOptions({ name: 'Navbar-component' })

function openWebApp() {
  window.open('https://app.stockmachine.online', '_blank')
}
</script>

<style scoped>
/* router link cursor pointer style */
.router-link-active {
  cursor: pointer;
}

.router-link-exact-active {
  color: #42b983;
}

.nav-links {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--standard-gap);
}

.title-icon {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
}

.nav-links a {
  text-decoration: none;
}

.nav-links a:hover {
  color: #42b983;
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
