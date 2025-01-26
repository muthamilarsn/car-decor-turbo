<script setup>
// This script is currently empty but will be used for interactivity in the future.
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to Car Decor!</h1>
        <p>Your one-stop shop for premium car accessories and decor.</p>
        <div class="cta-buttons">
          <button class="btn-primary">Shop Now</button>
          <button class="btn-secondary">Learn More</button>
        </div>
      </div>
    </section>

    <!-- Featured Categories -->
    <section class="categories">
      <h2>Explore Our Categories</h2>
      <div class="category-grid">
        <div class="category-card">Car Accessories</div>
        <div class="category-card">Seat Covers</div>
        <div class="category-card">Floor Mats</div>
        <div class="category-card">Custom Decals</div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-choose-us">
      <h2>Why Choose Us?</h2>
      <ul>
        <li>High-Quality Products</li>
        <li>Exceptional Customer Service</li>
        <li>Affordable Prices</li>
        <li>Fast Shipping</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.home {
  font-family: Arial, sans-serif;
  color: #333;
  line-height: 1.6;
}

.hero {
  background: url('@/assets/hero-bg.jpg') no-repeat center center/cover;
  padding: 4rem 2rem;
  color: white;
  text-align: center;
}

.hero-content {
  max-width: 600px;
  margin: 0 auto;
}

.cta-buttons {
  margin-top: 1.5rem;
}

.cta-buttons .btn-primary {
  background-color: #007bff;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  cursor: pointer;
  margin-right: 1rem;
  border-radius: 5px;
}

.cta-buttons .btn-secondary {
  background-color: white;
  color: #007bff;
  padding: 0.75rem 1.5rem;
  border: 2px solid #007bff;
  cursor: pointer;
  border-radius: 5px;
}

.categories {
  text-align: center;
  padding: 2rem;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.category-card {
  background-color: #f8f9fa;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-weight: bold;
}

.why-choose-us {
  padding: 2rem;
  background-color: #f1f1f1;
}

.why-choose-us ul {
  list-style: none;
  padding: 0;
  max-width: 400px;
  margin: 0 auto;
}

.why-choose-us li {
  margin: 0.5rem 0;
  padding: 0.5rem;
  background: white;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>