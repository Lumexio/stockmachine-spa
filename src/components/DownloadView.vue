<template>
  <div class="download-page">
    <div class="hero-section">
      <div class="hero-content">
        <img src="@/assets/download-green.svg" class="hero-icon floating-icon" />
        <h1 class="hero-title" v-if="isLoading">Getting Ready...</h1>
        <h1 class="hero-title" v-else>Download <span class="highlight">StockMachine</span></h1>

        <p class="hero-subtitle">
          Install published Windows, Linux, or Android builds directly from the producing GitHub
          Releases.
        </p>

        <div class="download-buttons-wrapper">
          <button class="download-button premium-btn btn-win" @click="handleDownload('windows')">
            <FontAwesomeIcon :icon="faWindows" class="btn-icon" />
            <div class="btn-text">
              <span class="btn-os">Windows</span>
              <span class="btn-arch">{{ desktopVersionTag || 'Latest' }}</span>
            </div>
          </button>
          <button class="download-button premium-btn btn-linux" @click="handleDownload('linux')">
            <FontAwesomeIcon :icon="faLinux" class="btn-icon" />
            <div class="btn-text">
              <span class="btn-os">Linux</span>
              <span class="btn-arch">{{ desktopVersionTag || 'Latest' }}</span>
            </div>
          </button>
          <button
            class="download-button premium-btn btn-android"
            @click="handleDownload('android')"
          >
            <FontAwesomeIcon :icon="faAndroid" class="btn-icon" />
            <div class="btn-text">
              <span class="btn-os">Android</span>
              <span class="btn-arch">{{ mobileVersionTag || 'Latest' }}</span>
            </div>
          </button>
        </div>
      </div>
    </div>

    <div class="features-section">
      <h2 class="features-title">Why StockMachine?</h2>
      <div class="cards-product-description">
        <div
          v-for="(card, index) in cardContents"
          :key="index"
          class="feature-card hover-lift animated-card"
          :style="{ animationDelay: `${index * 0.15}s` }"
        >
          <div class="feature-icon-wrapper" :class="card.colorClass">
            <FontAwesomeIcon :icon="card.icon" class="feature-icon" />
          </div>
          <h3 class="feature-card-title">{{ card.title }}</h3>
          <p class="feature-card-desc">{{ card.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faRocket, faSync, faShieldAlt } from '@fortawesome/free-solid-svg-icons'
import { faWindows, faLinux, faAndroid } from '@fortawesome/free-brands-svg-icons'

const FALLBACK_WINDOWS_URL =
  'https://github.com/Lumexio/stockmachine-desktop/releases/latest'
const FALLBACK_LINUX_URL =
  'https://github.com/Lumexio/stockmachine-desktop/releases/latest'
const FALLBACK_ANDROID_URL =
  'https://github.com/Lumexio/stockmachine-mobile/releases/latest'

const isLoading = ref(true)
const desktopVersionTag = ref('')
const mobileVersionTag = ref('')
const windowsDownloadUrl = ref(FALLBACK_WINDOWS_URL)
const linuxDownloadUrl = ref(FALLBACK_LINUX_URL)
const androidDownloadUrl = ref(FALLBACK_ANDROID_URL)

onMounted(async () => {
  try {
    const response = await fetch(
      'https://api.github.com/repos/Lumexio/stockmachine-desktop/releases/latest'
    )
    if (response.ok) {
      const release = await response.json()
      desktopVersionTag.value = release.tag_name ?? ''

      const exeAsset = (release.assets ?? []).find((a) => a.name.endsWith('.exe'))
      if (exeAsset?.browser_download_url) {
        windowsDownloadUrl.value = exeAsset.browser_download_url
      }

      const debAsset = (release.assets ?? []).find((a) => a.name.endsWith('.deb'))
      if (debAsset?.browser_download_url) {
        linuxDownloadUrl.value = debAsset.browser_download_url
      }
    }

    const mobileResponse = await fetch(
      'https://api.github.com/repos/Lumexio/stockmachine-mobile/releases/latest'
    )
    if (mobileResponse.ok) {
      const mobileRelease = await mobileResponse.json()
      mobileVersionTag.value = mobileRelease.tag_name ?? ''
      const apkAsset = (mobileRelease.assets ?? []).find((a) => a.name.endsWith('.apk'))
      if (apkAsset?.browser_download_url) {
        androidDownloadUrl.value = apkAsset.browser_download_url
      }
    }
  } catch {
    // Silently fall back to hardcoded URLs
  } finally {
    isLoading.value = false
  }
})

const cardContents = [
  {
    title: 'Lightning Fast',
    content:
      'StockMachine is built for speed. Add, edit, and search through thousands of inventory items instantly with zero lag.',
    icon: faRocket,
    colorClass: 'icon-red'
  },
  {
    title: 'VPS-Backed Sync',
    content:
      'Authenticated clients synchronize inventory records through the StockMachine API and its VPS SQLite database.',
    icon: faSync,
    colorClass: 'icon-blue'
  },
  {
    title: 'Storage Boundary',
    content:
      'Appwrite handles account identity only. Inventory data is not stored in Appwrite or advertised as managed-cloud storage.',
    icon: faShieldAlt,
    colorClass: 'icon-green'
  }
]

function handleDownload(os) {
  if (os === 'windows') {
    window.open(windowsDownloadUrl.value, '_blank', 'noopener,noreferrer')
  } else if (os === 'linux') {
    window.open(linuxDownloadUrl.value, '_blank', 'noopener,noreferrer')
  } else if (os === 'android') {
    window.open(androidDownloadUrl.value, '_blank', 'noopener,noreferrer')
  }
}
</script>

<style scoped>
.download-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  padding: 3rem 1rem;
}

.hero-section {
  text-align: center;
  max-width: 800px;
  width: 100%;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.hero-icon {
  width: 120px;
  margin-bottom: 1rem;
}

.floating-icon {
  animation: float 4s ease-in-out infinite;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-heading);
  line-height: 1.2;
}

.highlight {
  background: linear-gradient(90deg, var(--brand-red-primary), #ff7e67);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--color-text);
  line-height: 1.6;
  max-width: 600px;
}

.download-buttons-wrapper {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  width: 100%;
}

.download-button.premium-btn {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  border-radius: 12px;
  border: none;
  color: white;
  background-size: 200% auto;
  transition:
    0.5s ease,
    transform 0.2s ease,
    box-shadow 0.3s ease;
  cursor: pointer;
  text-align: left;
  min-width: 200px;
}

.btn-win {
  background: linear-gradient(90deg, #0078d7, #005a9e);
  box-shadow: 0 8px 20px -5px rgba(0, 120, 215, 0.4);
}
.btn-linux {
  background: linear-gradient(90deg, #e95420, #c94213);
  box-shadow: 0 8px 20px -5px rgba(233, 84, 32, 0.4);
}
.btn-android {
  background: linear-gradient(90deg, #3ddc84, #2cb76a);
  box-shadow: 0 8px 20px -5px rgba(61, 220, 132, 0.4);
}

.premium-btn:hover {
  background-position: right center;
  transform: translateY(-3px);
}

.btn-win:hover {
  box-shadow: 0 12px 25px -5px rgba(0, 120, 215, 0.6);
}
.btn-linux:hover {
  box-shadow: 0 12px 25px -5px rgba(233, 84, 32, 0.6);
}
.btn-android:hover {
  box-shadow: 0 12px 25px -5px rgba(61, 220, 132, 0.6);
}

.btn-icon {
  font-size: 2rem;
}

.btn-text {
  display: flex;
  flex-direction: column;
}

.btn-os {
  font-weight: 700;
  font-size: 1.2rem;
}

.btn-arch {
  font-size: 0.8rem;
  opacity: 0.9;
}

.features-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
}

.features-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-heading);
}

.hover-lift {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  border-radius: var(--card-border-radius);
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
}

.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.15);
  border-color: var(--brand-red-primary);
}

.cards-product-description {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1100px;
}

.feature-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2.5rem 1.5rem;
  background: var(--color-background-soft);
  border-radius: 20px;
  border: 1px solid var(--color-border);
  position: relative;
  overflow: hidden;
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

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  box-shadow: 0 8px 20px -5px rgba(0, 0, 0, 0.1);
}

.icon-red {
  background: linear-gradient(135deg, #ff7e67, var(--brand-red-primary));
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

.feature-card-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-heading);
}

.feature-card-desc {
  font-size: 1rem;
  color: var(--color-text);
  line-height: 1.6;
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

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 2.2rem;
  }
  .download-button.premium-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
