<template>
  <div class="title-download">
    <img src="@/assets/download-green.svg" />
    <h1 v-if="isLoading">Download StockMachine — Fetching latest version…</h1>
    <h1 v-else-if="versionTag">Download StockMachine {{ versionTag }}</h1>
    <h1 v-else>Download StockMachine Tool</h1>

    <h3>Click below to download and install StockMachine on your desktop device!</h3>
    <button class="download-button" @click="handleDownload('windows')">
      <img class="icon-windows" alt="Windows" />
      Download now
    </button>
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

const FALLBACK_WINDOWS_URL =
  'https://github.com/Lumexio/ps-electron/releases/download/1.0.1/STOCKMACHINE-1.0.1-Setup.exe'

const isLoading = ref(true)
const versionTag = ref('')
const windowsDownloadUrl = ref(FALLBACK_WINDOWS_URL)

onMounted(async () => {
  try {
    const response = await fetch('https://api.github.com/repos/Lumexio/ps-electron/releases/latest')
    if (!response.ok) throw new Error('Failed to fetch release')
    const release = await response.json()
    versionTag.value = release.tag_name ?? ''
    const exeAsset = (release.assets ?? []).find((a) => a.name.endsWith('.exe'))
    if (exeAsset?.browser_download_url) {
      windowsDownloadUrl.value = exeAsset.browser_download_url
    }
  } catch {
    // Silently fall back to hardcoded URL
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
  }
}
</script>
