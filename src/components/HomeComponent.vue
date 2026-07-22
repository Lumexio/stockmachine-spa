<template>
  <div class="home-page-container">
    <!-- Full-page Background Decorators -->
    <div class="page-background-layer">
      <div class="glow-backdrop"></div>
      <div class="bg-decorator decorator-center">
        <img src="../assets/stockmachine-promotional.jpg" class="blurred-card-center" />
      </div>
      <div class="bg-decorator decorator-left">
        <img src="../assets/stockmachine-promotional.jpg" class="blurred-card" />
      </div>
      <div class="bg-decorator decorator-right">
        <img src="../assets/stockmachine-promotional.jpg" class="blurred-card" />
      </div>

      <!-- 3D Floating Icons -->
      <div class="floating-3d-icon icon-box">
        <FontAwesomeIcon :icon="faBoxOpen" />
      </div>
      <div class="floating-3d-icon icon-mobile">
        <FontAwesomeIcon :icon="faMobileAlt" />
      </div>
      
      <!-- NEW ICONS -->
      <div class="floating-3d-icon icon-thunder">
        <FontAwesomeIcon :icon="faBolt" />
      </div>
      <div class="floating-3d-icon icon-laptop">
        <FontAwesomeIcon :icon="faLaptop" />
      </div>
      <div class="floating-3d-icon icon-user">
        <FontAwesomeIcon :icon="faUser" />
      </div>
    </div>

    <!-- Hero Section -->
    <div class="hero-section hero-wow">
      <div class="hero-content-wrapper">
        <div class="badge-pill">🚀 The Ultimate Inventory Tool</div>
        <h1 class="hero-headline">
          The inventory system built for <span class="text-gradient">teams</span> and
          <span class="text-gradient">solo users</span>
        </h1>
        <p class="hero-subheading">
          Track products, manage locations, and sync across all your devices — desktop, web, and
          mobile.
        </p>
        <div class="hero-ctas mt-4">
          <button
            class="download-button hero-cta-primary glowing-btn"
            @click="router.push('/download')"
          >
            <FontAwesomeIcon :icon="faDownload" class="mr-2" />
            Get Started Free
          </button>
          <button class="hero-cta-outline" @click="openWebApp">
            <FontAwesomeIcon :icon="faGlobe" class="mr-2" />
            Launch Web App
          </button>
        </div>
      </div>
    </div>

    <!-- Features Grid Section -->
    <section class="features-section">
      <h2 class="features-heading">Everything you need to manage your inventory</h2>
      <div class="carousel-wrapper">
        <button class="carousel-nav nav-left" @click="scrollCarousel(-1)">
          <FontAwesomeIcon :icon="faChevronLeft" />
        </button>

        <div class="features-carousel" ref="carouselRef">
          <div
            v-for="(feature, index) in features"
            :key="feature.title"
            class="feature-card hover-lift animated-card"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="feature-icon-wrapper" :class="feature.colorClass">
              <FontAwesomeIcon :icon="feature.icon" class="feature-card__icon" />
            </div>
            <h3 class="feature-card__title">{{ feature.title }}</h3>
            <p class="feature-card__desc">{{ feature.description }}</p>
          </div>
        </div>

        <button class="carousel-nav nav-right" @click="scrollCarousel(1)">
          <FontAwesomeIcon :icon="faChevronRight" />
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CardComponent from './cards/CardComponent.vue'
import { useRouter } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faDownload,
  faGlobe,
  faBuilding,
  faBoxOpen,
  faChartLine,
  faWifi,
  faMobileAlt,
  faLanguage,
  faChevronLeft,
  faChevronRight,
  faBolt,
  faLaptop,
  faUser
} from '@fortawesome/free-solid-svg-icons'

const router = useRouter()
const carouselRef = ref(null)

function openWebApp() {
  window.open('https://app.stockmachine.online', '_blank')
}

function scrollCarousel(direction) {
  if (carouselRef.value) {
    const scrollAmount = 300 // Approximate width of a card + gap
    carouselRef.value.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' })
  }
}

const features = [
  {
    icon: faBuilding,
    colorClass: 'icon-purple',
    title: 'Multi-location',
    description: 'Manage multiple warehouses and stores from one account.'
  },
  {
    icon: faBoxOpen,
    colorClass: 'icon-orange',
    title: 'Full CRUD',
    description: 'Create, edit, and delete products, categories, racks, and shelves.'
  },
  {
    icon: faChartLine,
    colorClass: 'icon-blue',
    title: 'Dashboard metrics',
    description: 'Live charts for stock movements, low-stock alerts, and top products.'
  },
  {
    icon: faWifi,
    colorClass: 'icon-green',
    title: 'Offline sync',
    description: 'Desktop app works offline and syncs when back online.'
  },
  {
    icon: faMobileAlt,
    colorClass: 'icon-red',
    title: 'Web + Mobile',
    description: 'Access your inventory from any browser or mobile device.'
  },
  {
    icon: faLanguage,
    colorClass: 'icon-teal',
    title: 'Multilingual',
    description: 'Available in English, Spanish, French, Japanese, and Russian.'
  }
]
</script>

<style scoped>
.home-page-container {
  overflow-x: hidden;
  width: 100%;
}

.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.hero-wow {
  position: relative;
  padding: 8rem 1rem;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  position: relative;
  z-index: 2;
  width: 100%;
}

.badge-pill {
  background: rgba(var(--v-theme-primary), 0.1);
  color: var(--brand-red-primary);
  border: 1px solid rgba(var(--v-theme-primary), 0.2);
  padding: 0.4rem 1rem;
  border-radius: 99px;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.hero-headline {
  font-size: clamp(2.5rem, 5vw, 3.8rem);
  font-weight: 900;
  line-height: 1.1;
  text-align: center;
  letter-spacing: -0.03em;
  max-width: 900px;
}

.text-gradient {
  background: linear-gradient(90deg, var(--brand-red-primary), #ff7e67);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subheading {
  font-size: 1.25rem;
  color: var(--color-text);
  text-align: center;
  max-width: 600px;
  line-height: 1.6;
}

.hero-ctas {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
}

.hero-cta-primary {
  padding: 0 2rem;
  font-size: 1.1rem;
  height: 52px;
  border-radius: 12px;
}

.glowing-btn {
  background: linear-gradient(90deg, var(--brand-red-primary), #e53935);
  background-size: 200% auto;
  box-shadow: 0 8px 25px -5px rgba(229, 57, 53, 0.5);
  transition:
    0.5s ease,
    transform 0.2s ease;
}

.glowing-btn:hover {
  background-position: right center;
  transform: translateY(-3px);
  box-shadow: 0 12px 30px -5px rgba(229, 57, 53, 0.7);
}

.hero-cta-outline {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  padding: 0 2rem;
  border: 2px solid var(--color-border);
  border-radius: 12px;
  background-color: var(--color-background-soft);
  color: var(--color-heading);
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.hero-cta-outline:hover {
  border-color: var(--brand-red-primary);
  color: var(--brand-red-primary);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px -5px rgba(0, 0, 0, 0.1);
}

.hero-cta-outline:active {
  transform: scale(0.98);
}

/* Background Decorators */
.page-background-layer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
}

.glow-backdrop {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(229, 57, 53, 0.15) 0%, rgba(229, 57, 53, 0) 70%);
  z-index: -1;
  pointer-events: none;
}

.bg-decorator {
  position: absolute;
  top: 10%;
  z-index: 0;
  opacity: 0.3;
  pointer-events: none;
}

.decorator-center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.5;
  animation: floatBackgroundCenter 12s ease-in-out infinite alternate;
}

.decorator-left {
  left: 2%;
  top: 15%;
  animation: floatBackgroundLeft 15s ease-in-out infinite alternate;
}

.decorator-right {
  right: 2%;
  top: 30%;
  animation: floatBackgroundRight 18s ease-in-out infinite alternate;
}

.blurred-card-center {
  width: 450px;
  border-radius: 16px;
  filter: blur(2px);
  transform: perspective(800px) rotateY(0deg) rotateX(5deg);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
}

.blurred-card {
  width: 250px;
  border-radius: 12px;
  filter: blur(6px);
  transform: perspective(800px) rotateY(25deg) rotateX(15deg);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.decorator-right .blurred-card {
  transform: perspective(800px) rotateY(-25deg) rotateX(15deg);
}

@keyframes floatBackgroundCenter {
  0% {
    transform: translate(-50%, -40%) scale(0.95);
  }
  100% {
    transform: translate(-50%, -60%) scale(1.05);
  }
}

@keyframes floatBackgroundLeft {
  0% {
    transform: translateY(0) translateX(0) scale(0.9);
  }
  100% {
    transform: translateY(-40px) translateX(30px) scale(1);
  }
}

@keyframes floatBackgroundRight {
  0% {
    transform: translateY(0) translateX(0) scale(1);
  }
  100% {
    transform: translateY(-50px) translateX(-30px) scale(0.9);
  }
}

/* 3D Floating Icons */
.floating-3d-icon {
  position: absolute;
  z-index: 1;
  font-size: 3.5rem;
  color: var(--brand-red-primary);
  opacity: 0.6;
  filter: drop-shadow(0 15px 25px rgba(229, 57, 53, 0.5));
  pointer-events: none;
  animation: float3DIcon 8s ease-in-out infinite;
}

.icon-box {
  top: 15%;
  left: 15%;
  animation-delay: 0s;
}

.icon-mobile {
  top: 45%;
  right: 12%;
  animation-delay: -3s;
  color: #4fc3f7; /* Cyan color */
  filter: drop-shadow(0 15px 25px rgba(79, 195, 247, 0.4));
}

.icon-thunder {
  top: 25%;
  right: 25%;
  animation-delay: -7s;
  color: #ffca28; /* Lightning yellow */
  filter: drop-shadow(0 15px 25px rgba(255, 202, 40, 0.4));
  font-size: 4rem; /* Slightly larger */
}

.icon-laptop {
  top: 70%;
  left: 20%;
  animation-delay: -5s;
  color: #ab47bc; /* Purple */
  filter: drop-shadow(0 15px 25px rgba(171, 71, 188, 0.4));
}

.icon-user {
  top: 80%;
  right: 20%;
  animation-delay: -2s;
  color: #66bb6a; /* Green */
  filter: drop-shadow(0 15px 25px rgba(102, 187, 106, 0.4));
}

@keyframes float3DIcon {
  0% {
    transform: perspective(600px) rotateX(15deg) rotateY(0deg) translateY(0);
  }
  50% {
    transform: perspective(600px) rotateX(-15deg) rotateY(30deg) translateY(-25px);
  }
  100% {
    transform: perspective(600px) rotateX(15deg) rotateY(0deg) translateY(0);
  }
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

.carousel-wrapper {
  position: relative;
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
}

.features-carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  gap: var(--standard-gap);
  padding: 1rem 0 2rem 0;
  width: 100%;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.features-carousel::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

.feature-card {
  flex: 0 0 300px;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 2.5rem 1.5rem;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  align-items: center;
  text-align: center;
}

.carousel-nav {
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-heading);
  cursor: pointer;
  z-index: 2;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.carousel-nav:hover {
  background: var(--brand-red-primary);
  color: white;
  border-color: var(--brand-red-primary);
}

.nav-left {
  margin-right: -20px;
}
.nav-right {
  margin-left: -20px;
}

.feature-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 2.5rem 1.5rem;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  align-items: center;
  text-align: center;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--brand-red-primary);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.hover-lift:hover::before {
  transform: scaleX(1);
}

.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px -10px rgba(0, 0, 0, 0.2);
  border-color: var(--brand-red-primary);
}

.feature-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 0.5rem;
  box-shadow: 0 8px 20px -5px rgba(0, 0, 0, 0.1);
}

.feature-card__icon {
  font-size: 1.5rem;
}

.icon-purple {
  background: linear-gradient(135deg, #ab47bc, #7b1fa2);
  color: white;
}
.icon-orange {
  background: linear-gradient(135deg, #ffa726, #f57c00);
  color: white;
}
.icon-blue {
  background: linear-gradient(135deg, #4fc3f7, #0288d1);
  color: white;
}
.icon-green {
  background: linear-gradient(135deg, #81c784, #388e3c);
  color: white;
}
.icon-red {
  background: linear-gradient(135deg, #ff7e67, var(--brand-red-primary));
  color: white;
}
.icon-teal {
  background: linear-gradient(135deg, #4db6ac, #00796b);
  color: white;
}

.animated-card {
  opacity: 0;
  animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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

@media (max-width: 600px) {
  .feature-card {
    flex: 0 0 85%; /* Take up most of screen on mobile */
  }
  .carousel-nav {
    display: none; /* Hide buttons on mobile, rely on swipe */
  }
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
