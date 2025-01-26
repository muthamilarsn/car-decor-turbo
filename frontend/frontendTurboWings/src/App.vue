<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div>
    <header>
      <img alt="Car Decor Logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/products">Products</RouterLink>
        <RouterLink to="/categories">Categories</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #ddd;
}

.logo {
  width: 100px;
  height: auto;
}

nav {
  display: flex;
  gap: 1.5rem;
}

nav a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #007bff;
}

main {
  padding: 2rem;
}
</style>