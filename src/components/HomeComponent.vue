<template>
  <div class="home-page-container">
    <!-- Full-page Background Decorators -->
    <div class="page-background-layer">
      <div class="glow-backdrop"></div>
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
      <div class="floating-3d-icon icon-thunder">
        <FontAwesomeIcon :icon="faBolt" />
      </div>
      <div class="floating-3d-icon icon-laptop">
        <FontAwesomeIcon :icon="faLaptop" />
      </div>
      <div class="floating-3d-icon icon-user">
        <FontAwesomeIcon :icon="faUser" />
      </div>
      <div class="floating-3d-icon icon-history">
        <FontAwesomeIcon :icon="faHistory" />
      </div>
      <div class="floating-3d-icon icon-users">
        <FontAwesomeIcon :icon="faUsers" />
      </div>
      <div class="floating-3d-icon icon-csv">
        <FontAwesomeIcon :icon="faFileCsv" />
      </div>
      <div class="floating-3d-icon icon-bell">
        <FontAwesomeIcon :icon="faBell" />
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

    <!-- Features Marquee Section -->
    <section class="features-section">
      <h2 class="features-heading">Everything you need to manage your inventory</h2>
      <div class="marquee-container">
        <!-- Render 4 groups (instead of the tutorial's 2) to ensure 4K/Ultrawide compatibility -->
        <div class="marquee-group" v-for="i in 4" :key="'group-' + i" :aria-hidden="i !== 1">
          <div
            v-for="feature in features"
            :key="i + '-' + feature.title"
            class="feature-card hover-lift"
          >
            <div class="feature-icon-wrapper" :class="feature.colorClass">
              <FontAwesomeIcon :icon="feature.icon" class="feature-card__icon" />
            </div>
            <h3 class="feature-card__title">{{ feature.title }}</h3>
            <p class="feature-card__desc">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
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
  faBolt,
  faLaptop,
  faUser,
  faHistory,
  faUsers,
  faFileCsv,
  faBell
} from '@fortawesome/free-solid-svg-icons'

const router = useRouter()

function openWebApp() {
  window.open('https://app.stockmachine.online', '_blank')
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
  },
  {
    icon: faHistory,
    colorClass: 'icon-pink',
    title: 'Operation History',
    description: 'Every stock movement creates an immutable audit trail.'
  },
  {
    icon: faUsers,
    colorClass: 'icon-yellow',
    title: 'Team Collaboration',
    description: 'Invite members and assign custom roles across organizations.'
  },
  {
    icon: faFileCsv,
    colorClass: 'icon-indigo',
    title: 'Bulk Import/Export',
    description: 'Easily migrate data with CSV/JSON/XLSX imports and exports.'
  },
  {
    icon: faBell,
    colorClass: 'icon-crimson',
    title: 'Low-Stock Alerts',
    description: 'Get notified immediately when inventory reaches critical thresholds.'
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

/* Constellation Icon Positions & Colors */
/* Top Row */
.icon-box {
  top: 15%;
  left: 15%;
  animation-delay: 0s;
  font-size: 3.5rem;
}

.icon-bell {
  top: 10%;
  left: 45%;
  animation-delay: -2s;
  color: #ef5350;
  filter: drop-shadow(0 15px 25px rgba(239, 83, 80, 0.4));
  font-size: 3rem;
}

.icon-users {
  top: 18%;
  right: 15%;
  animation-delay: -5s;
  color: #fbc02d;
  filter: drop-shadow(0 15px 25px rgba(251, 192, 45, 0.4));
  font-size: 4rem;
}

/* Middle Row */
.icon-mobile {
  top: 45%;
  left: 8%;
  animation-delay: -3s;
  color: #4fc3f7;
  filter: drop-shadow(0 15px 25px rgba(79, 195, 247, 0.4));
  font-size: 3.2rem;
}

.icon-thunder {
  top: 45%;
  left: 50%;
  animation-delay: -7s;
  color: #ffca28;
  filter: drop-shadow(0 15px 25px rgba(255, 202, 40, 0.4));
  font-size: 4.5rem;
}

.icon-history {
  top: 55%;
  right: 12%;
  animation-delay: -1s;
  color: #ec407a;
  filter: drop-shadow(0 15px 25px rgba(236, 64, 122, 0.4));
  font-size: 3.5rem;
}

/* Bottom Row */
.icon-laptop {
  top: 80%;
  left: 20%;
  animation-delay: -6s;
  color: #ab47bc;
  filter: drop-shadow(0 15px 25px rgba(171, 71, 188, 0.4));
  font-size: 3.5rem;
}

.icon-csv {
  top: 85%;
  left: 55%;
  animation-delay: -4s;
  color: #5c6bc0;
  filter: drop-shadow(0 15px 25px rgba(92, 107, 192, 0.4));
  font-size: 4rem;
}

.icon-user {
  top: 75%;
  right: 25%;
  animation-delay: -8s;
  color: #66bb6a;
  filter: drop-shadow(0 15px 25px rgba(102, 187, 106, 0.4));
  font-size: 3.5rem;
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

/* Container (matches tutorial's .carousel) */
.marquee-container {
  display: flex;
  overflow: hidden;
  width: 100vw;
  max-width: 100%;
  padding: 2rem 0;
  
  /* Fade out left and right edges */
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

/* Group (matches tutorial's .group) */
.marquee-group {
  display: flex;
  flex-shrink: 0;
  gap: var(--standard-gap);
  padding-right: var(--standard-gap); /* This is the secret sauce from the tutorial */
  will-change: transform; /* Performance optimization */
  animation: scrollMarquee 50s linear infinite;
}

/* Hover to pause */
.marquee-container:hover .marquee-group {
  animation-play-state: paused;
}

/* Keyframes (matches tutorial's @keyframes scrolling) */
@keyframes scrollMarquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%); /* Perfect -100% translation */
  }
}

.feature-card {
  flex: 0 0 320px;
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
.icon-pink {
  background: linear-gradient(135deg, #ec407a, #c2185b);
  color: white;
}
.icon-yellow {
  background: linear-gradient(135deg, #fbc02d, #f57f17);
  color: white;
}
.icon-indigo {
  background: linear-gradient(135deg, #5c6bc0, #3949ab);
  color: white;
}
.icon-crimson {
  background: linear-gradient(135deg, #ef5350, #c62828);
  color: white;
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
    flex: 0 0 85vw; /* Take up most of screen width on mobile */
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
