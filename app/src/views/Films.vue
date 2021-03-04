<template>
  <div class="films">
    <h2 class="title">Films</h2>
    <!-- <youtube :video-id="videoId0" :player-vars="playerVars" @playing="playing"></youtube> -->
    <!-- <youtube :video-id="videoId0"></youtube> -->
    <silent-box :gallery="videos" class="gallery"></silent-box>
    <div class="channelLink">
      <div class="g-ytsubscribe" :data-channelid="channelId" data-layout="full" data-theme="default" data-count="default"></div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';

export default {
  name: 'Films',
  setup() {
    const videoId0 = 'prYReYk4f3k'
    const videoId1 = 'Aeu855db-Co'
    const channelId = ref('UCrhHo4x64Ong7FXdejiEf9Q');

    // videos 
    const videoList = [
      "https://www.youtube.com/watch?v=a0HPeuLBkN0&ab_channel=SeanKinsella",
      "https://www.youtube.com/watch?v=prYReYk4f3k&ab_channel=SeanKinsella",
      "https://www.youtube.com/watch?v=kPuPKrSKjX0&ab_channel=SeanKinsella",
      "https://www.youtube.com/watch?v=5bJH3ICTGng&ab_channel=SeanKinsella",
      "https://www.youtube.com/watch?v=Aeu855db-Co&ab_channel=SeanKinsella",
      "https://www.youtube.com/watch?v=07dcnoLL640&ab_channel=SeanKinsella",
      "https://www.youtube.com/watch?v=T9thX8V9TA8&ab_channel=SeanKinsella",
      "https://www.youtube.com/watch?v=oRILuKhZnuQ&ab_channel=SeanKinsella"
    ];
    
    const videos = ref([
      {
        src: videoList[0],
        description: "Put on Your Face",
        thumbnailWidth: '410px',
        thumbnailHeight: '260px'
      },
      {
        src: videoList[1],
        description: "Eyes 2",
        thumbnailWidth: '410px',
        thumbnailHeight: '260px'
      },
      {
        src: videoList[2],
        description: "Power",
        thumbnailWidth: '410px',
        thumbnailHeight: '260px'
      },
      {
        src: videoList[3],
        description: "The Box",
        thumbnailWidth: '410px',
        thumbnailHeight: '260px'
      },
      {
        src: videoList[4],
        description: "The Tea is Ready",
        thumbnailWidth: '410px',
        thumbnailHeight: '260px'
      },
      {
        src: videoList[5],
        description: "Unititled Series",
        thumbnailWidth: '410px',
        thumbnailHeight: '260px'
      },
      {
        src: videoList[6],
        description: "My Name Is",
        thumbnailWidth: '410px',
        thumbnailHeight: '260px'
      },      
      {
        src: videoList[7],
        description: "Eyes",
        thumbnailWidth: '410px',
        thumbnailHeight: '260px'
      }
    ]);

    // const playerVars = ref({});

    // playerVars = {
    //     autoplay: 1
    // }

    return {
      videoId0,
      videoId1,
      channelId,
      videos
      // playerVars,
    };
  }
}
</script>

<style>
.films h2 {
  font-weight: bold;
}

.films {
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