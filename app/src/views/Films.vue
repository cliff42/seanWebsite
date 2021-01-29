<template>
  <div class="menu">
    <h2 class="title">Films</h2>
    <!-- <youtube :video-id="videoId0" :player-vars="playerVars" @playing="playing"></youtube> -->
    <youtube :video-id="videoId0"></youtube>
    <!-- <iframe src="http://www.youtube.com/embed/?listType=user_uploads&list=YOURCHANNELNAME" width="480" height="400"></iframe> -->
    <div class="channelLink">
      <div class="g-ytsubscribe" :data-channelid="channelId" data-layout="full" data-theme="default" data-count="default"></div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import '../gapis.js';

export default {
  name: 'Films',
  setup() {
    const videoId0 = ref('n3pmrBaJSgA');
    const channelId = ref('UCrhHo4x64Ong7FXdejiEf9Q');
    // const playerVars = ref({});

    // playerVars = {
    //     autoplay: 1
    // }

    return {
      videoId0,
      channelId,
      // playerVars,
    };
  }
}
</script>

<style scoped>
h2 {
  font-weight: bold;
}

.menu {
  display: flex;
  flex-direction: column;
  padding: 50px;
  align-items: center;
  justify-content: center;
}

.title {
  padding: 50px;
}

.channelLink {
  padding: 50px;
}
</style>