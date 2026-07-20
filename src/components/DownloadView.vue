<template>
  <div class="title-download">
    <img src="@/assets/download-green.svg" />
    <h1 v-if="isLoading">Download StockMachine — Fetching latest version…</h1>
    <h1 v-else-if="versionTag">Download StockMachine {{ versionTag }}</h1>
    <h1 v-else>Download StockMachine Tool</h1>

    <h3>Click below to download and install StockMachine on your desktop device!</h3>
    <div class="download-buttons" style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-top: 2rem;">
      <button class="download-button" @click="handleDownload('windows')">
        <FontAwesomeIcon :icon="faDownload" />
        Windows
      </button>
      <button class="download-button" @click="handleDownload('linux')">
        <FontAwesomeIcon :icon="faDownload" />
        Linux (.deb)
      </button>
      <button class="download-button" @click="handleDownload('android')">
        <FontAwesomeIcon :icon="faDownload" />
        Android (.apk)
      </button>
    </div>
  </div>
  <div class="cards-product-description">
    <CardComponent
      v-for="(card, index) in cardContents"
      :iconName="card.icon"
      :title="card.title"
      :key="index"
    >
      <p>{{ card.content }}</p>
    </CardComponent>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CardComponent from '@/components/cards/CardComponent.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const FALLBACK_WINDOWS_URL =
  'https://github.com/Lumexio/ps-electron/releases/download/1.0.1/STOCKMACHINE-1.0.1-Setup.exe'
const FALLBACK_LINUX_URL =
  'https://github.com/Lumexio/ps-electron/releases/download/1.0.1/stockmachine_1.0.1_amd64.deb'
const FALLBACK_ANDROID_URL =
  'https://github.com/Lumexio/stockmachine-mobile/releases/latest/download/app-release.apk'

const isLoading = ref(true)
const versionTag = ref('')
const windowsDownloadUrl = ref(FALLBACK_WINDOWS_URL)
const linuxDownloadUrl = ref(FALLBACK_LINUX_URL)
const androidDownloadUrl = ref(FALLBACK_ANDROID_URL)

onMounted(async () => {
  try {
    const response = await fetch('https://api.github.com/repos/Lumexio/ps-electron/releases/latest')
    if (response.ok) {
      const release = await response.json()
      versionTag.value = release.tag_name ?? ''
      
      const exeAsset = (release.assets ?? []).find((a) => a.name.endsWith('.exe'))
      if (exeAsset?.browser_download_url) {
        windowsDownloadUrl.value = exeAsset.browser_download_url
      }
      
      const debAsset = (release.assets ?? []).find((a) => a.name.endsWith('.deb'))
      if (debAsset?.browser_download_url) {
        linuxDownloadUrl.value = debAsset.browser_download_url
      }
    }

    const mobileResponse = await fetch('https://api.github.com/repos/Lumexio/stockmachine-mobile/releases/latest')
    if (mobileResponse.ok) {
      const mobileRelease = await mobileResponse.json()
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
    title: 'Simple',
    content: 'Simplifying your daily stocking management.',
    icon: 'icon-simple-leaf'
  },
  {
    title: 'Portable',
    content: 'Easy to import and export your data, between devices.',
    icon: 'icon-simple-portable-brief-case'
  },
  {
    title: 'Easy installation',
    content: 'Simple installation process, no need to be a tech expert.',
    icon: 'icon-simple-portable-feather'
  }
]

function handleDownload(os) {
  if (os === 'windows') {
    window.open(windowsDownloadUrl.value, '_blank')
  } else if (os === 'linux') {
    window.open(linuxDownloadUrl.value, '_blank')
  } else if (os === 'android') {
    window.open(androidDownloadUrl.value, '_blank')
  }
}
</script>
