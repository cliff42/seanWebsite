<template>
  <div class="art">
    <h2 class="title">Artwork</h2>
    <silent-box :gallery="images" class="gallery"></silent-box>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import axios from 'axios';

// images
import img1 from "@/./assets/seanTestGreen.png";
import img2 from "@/./assets/seanTestBlue.jpg";
import img3 from "@/./assets/seanTestRed.png";

export default {
  name: 'Artwork',
  setup() {
    const images = ref([
      {
        src: img1,
        description: 'Sean Test Green',
        thumbnailWidth: '260px',
        thumbnailHeight: '260px'
      },
      {
        src: img2,
        description: 'Sean Test Blue',
        thumbnailWidth: '260px',
        thumbnailHeight: '260px'
      },
      {
        src: img3,
        description: 'Sean Test Red',
        thumbnailWidth: '260px',
        thumbnailHeight: '260px'
      }
    ]);

    return {
      images,
    };
  }
}
</script>

<style>
.art h2 {
  font-weight: bold;
}

.art {
  display: flex;
  flex-direction: column;
  padding: 50px;
  align-items: center;
  justify-content: center;
}

.title {
  margin-bottom: 50px;
}

.silentbox-item {
  padding: 20px;
}
</style>