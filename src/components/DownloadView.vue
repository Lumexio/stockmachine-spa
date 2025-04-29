<template>
  <div class="title-download">
    <img src="@/assets/download-green.svg" />
    <h1>Download StockMachine Tool</h1>

    <h3>Click below to download and install StockMachine on your desktop device!</h3>
    <button class="download-button" @click="handleDownload('windows')"><img class="icon-windows" alt="Windows" />
      Download now</button>

  </div>
  <div class="cards-product-description">

    <CardComponent v-for="(card, index) in cardContents" :iconName="card.icon" :title="card.title" :key="index">

      <p>{{ card.content }}</p>
    </CardComponent>

  </div>
</template>

<script setup>
import CardComponent from '@/components/cards/CardComponent.vue'

const cardContents = [
  {
    title: 'Simple',
    content: 'Simplifying  your daily stocking management.',
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

function downloadFile(url, filename) {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function downloadFileDirect(url) {
  window.open(url, '_blank');
}

function handleDownload(os) {
  let path = '/todownload/';
  let fileName = '';

  if (os === 'windows') {
    fileName = 'STOCKMACHINE-1.0.0 Setup.exe';
    downloadFileDirect('https://github.com/Lumexio/ps-electron/releases/download/1.0.1/STOCKMACHINE-1.0.1-Setup.exe');
  } else {
    fileName = 'stockmachine_1.0.0_amd64.deb';
    downloadFile(`${path}${fileName}`, fileName);
  }


}

</script>
