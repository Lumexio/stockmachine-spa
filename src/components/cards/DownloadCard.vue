<template>
  <div class="featured">
    <div class="card-title">
      <h2>Download the latest version!</h2>
    </div>
    <div class="card-actions">
      <button class="button-accent" @click="handleDownload('windows')">
        <FontAwesomeIcon size="2x" :icon="faDownload" />
        <h3>Windows version</h3>
      </button>
      <button class="button-accent" @click="handleDownload('linux')">
        <FontAwesomeIcon size="2x" :icon="faDownload" />
        <h3>Linux version</h3>
      </button>
      <button class="button-accent" @click="handleDownload('android')">
        <FontAwesomeIcon size="2x" :icon="faDownload" />
        <h3>Android version</h3>
      </button>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

import { ref, onMounted } from 'vue'

const windowsDownloadUrl = ref(
  'https://github.com/Lumexio/stockmachine-desktop/releases/latest'
)
const linuxDownloadUrl = ref(
  'https://github.com/Lumexio/stockmachine-desktop/releases/latest'
)
const androidDownloadUrl = ref(
  'https://github.com/Lumexio/stockmachine-mobile/releases/latest'
)

onMounted(async () => {
  try {
    const response = await fetch(
      'https://api.github.com/repos/Lumexio/stockmachine-desktop/releases/latest'
    )
    if (response.ok) {
      const release = await response.json()
      const exeAsset = (release.assets ?? []).find((a) => a.name.endsWith('.exe'))
      if (exeAsset?.browser_download_url) windowsDownloadUrl.value = exeAsset.browser_download_url

      const debAsset = (release.assets ?? []).find((a) => a.name.endsWith('.deb'))
      if (debAsset?.browser_download_url) linuxDownloadUrl.value = debAsset.browser_download_url
    }

    const mobileResponse = await fetch(
      'https://api.github.com/repos/Lumexio/stockmachine-mobile/releases/latest'
    )
    if (mobileResponse.ok) {
      const mobileRelease = await mobileResponse.json()
      const apkAsset = (mobileRelease.assets ?? []).find((a) => a.name.endsWith('.apk'))
      if (apkAsset?.browser_download_url) androidDownloadUrl.value = apkAsset.browser_download_url
    }
  } catch {
    // Fall back to defaults
  }
})

function downloadFileDirect(url) {
  window.open(url, '_blank', 'noopener,noreferrer')
}

function handleDownload(os) {
  if (os === 'windows') {
    downloadFileDirect(windowsDownloadUrl.value)
  } else if (os === 'linux') {
    downloadFileDirect(linuxDownloadUrl.value)
  } else if (os === 'android') {
    downloadFileDirect(androidDownloadUrl.value)
  }
}
</script>

<style>
/* Add your styles here */
</style>
