<template>
  <nav>
    <div class="title-icon">
      <img src="@/assets/icon.png" alt="stockmachine" width="30rem" />
      <h1>Stock machine</h1>
    </div>
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/download">Download</router-link>

    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar-component'
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
</style>
