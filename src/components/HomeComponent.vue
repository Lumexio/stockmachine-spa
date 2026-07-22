<template>
  <!-- Hero Section -->
  <div class="home-section">
    <div class="home-section__header">
      <h1 class="hero-headline">The inventory system built for teams and solo users</h1>
      <p class="hero-subheading">
        Track products, manage locations, and sync across all your devices — desktop, web, and
        mobile.
      </p>
      <div class="hero-ctas">
        <button class="download-button hero-cta-primary" @click="router.push('/download')">
          Get Started Free
        </button>
        <button class="hero-cta-outline" @click="openWebApp">Launch Web App</button>
      </div>
    </div>

    <CardComponent :customStyle="{ padding: '0px', maxWidth: '30rem' }">
      <template v-slot:image>
        <img alt="stock promotional" src="../assets/stockmachine-promotional.jpg" />
      </template>
    </CardComponent>
  </div>

  <!-- Features Grid Section -->
  <section class="features-section">
    <h2 class="features-heading">Everything you need to manage your inventory</h2>
    <div class="features-grid">
      <div v-for="feature in features" :key="feature.title" class="feature-card">
        <span class="feature-card__icon">{{ feature.emoji }}</span>
        <h3 class="feature-card__title">{{ feature.title }}</h3>
        <p class="feature-card__desc">{{ feature.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import CardComponent from './cards/CardComponent.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function openWebApp() {
  window.open('https://app.stockmachine.online', '_blank')
}

const features = [
  {
    emoji: '🏢',
    title: 'Multi-location',
    description: 'Manage multiple warehouses and stores from one account.'
  },
  {
    emoji: '📦',
    title: 'Full CRUD',
    description: 'Create, edit, and delete products, categories, racks, and shelves.'
  },
  {
    emoji: '📊',
    title: 'Dashboard metrics',
    description: 'Live charts for stock movements, low-stock alerts, and top products.'
  },
  {
    emoji: '🔄',
    title: 'Offline sync',
    description: 'Desktop app works offline and syncs when back online.'
  },
  {
    emoji: '🌐',
    title: 'Web + Mobile',
    description: 'Access your inventory from any browser or mobile device.'
  },
  {
    emoji: '🌍',
    title: 'Multilingual',
    description: 'Available in English, Spanish, French, Japanese, and Russian.'
  }
]
</script>

<style scoped>
.hero-headline {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 800;
  line-height: 1.2;
  text-align: center;
}

.hero-subheading {
  font-size: 1.1rem;
  color: var(--color-text);
  text-align: center;
  max-width: 36rem;
  line-height: 1.6;
}

.hero-ctas {
  display: flex;
  flex-direction: row;
  gap: var(--standard-gap);
  flex-wrap: wrap;
  justify-content: center;
}

.hero-cta-primary {
  padding: 0 1.5rem;
}

.hero-cta-outline {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 0 1.5rem;
  border: 2px solid var(--primary-button-background-color);
  border-radius: var(--standard-border-radius);
  background-color: transparent;
  color: var(--primary-button-background-color);
  font-weight: 600;
  cursor: pointer;
  transition:
    background-color var(--transition-speed-medium),
    color var(--transition-speed-medium),
    transform var(--transition-speed-medium);
}

.hero-cta-outline:hover {
  background-color: var(--primary-button-background-color);
  color: var(--color-text-primary-button);
}

.hero-cta-outline:active {
  transform: scale(0.9);
}

/* Features Section */
.features-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--large-gap);
  padding: var(--large-gap) 0;
}

.features-heading {
  font-size: clamp(1.2rem, 2.5vw, 1.75rem);
  font-weight: 700;
  color: var(--color-heading);
  text-align: center;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  gap: var(--standard-gap);
  width: 100%;
}

.feature-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: var(--color-background-mute);
  border: 1px solid var(--color-border);
  border-radius: var(--card-border-radius);
  padding: var(--large-gap) var(--standard-gap);
  transition: box-shadow var(--transition-speed-medium);
}

.feature-card:hover {
  box-shadow: 0 4px 16px var(--color-border-hover);
}

.feature-card__icon {
  font-size: 2rem;
}

.feature-card__title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-heading);
  margin: 0;
}

.feature-card__desc {
  font-size: 0.9rem;
  color: var(--color-text);
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 480px) {
  .hero-ctas {
    flex-direction: column;
    width: 100%;
  }
  
  .hero-cta-outline,
  .hero-cta-primary {
    width: 100%;
  }
}
</style>
