<template>
  <div class="menu">
    <h2 class="title">Films</h2>
    <!-- <youtube :video-id="videoId0" :player-vars="playerVars" @playing="playing"></youtube> -->
    <youtube :video-id="videoId0" @playing="playing"></youtube>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import axios from 'axios';

export default {
  name: 'Comments',
  setup() {
    const comments = ref([]);
    const fields = ref([]);
    const hateOnly = ref(false);
    const videoId0 = ref('n3pmrBaJSgA');
    // const playerVars = ref({});

    // playerVars = {
    //     autoplay: 1
    // }

    fields.value = [
      {
        key: 'author',
        label: 'Author',
        sortable: true
      },
      {
        key: 'subreddit',
        label: 'Subreddit',
        sortable: true
      },
      {
        key: 'body',
        label: 'Comment',
        sortable: true
      },
      {
        key: 'certainty',
        label: 'Confidence',
        sortable: true
      }
    ];

    async function onRefresh() {

      let response = [];
      comments.value = [];

      if (hateOnly.value) {
        response = await axios.get('http://localhost:4000/getHateComments');
      } else {
        response = await axios.get('http://localhost:4000/getAllComments');
      }

      response.data.forEach(comment => {
        console.log(comment.certainty);
        comments.value.push({
          body: comment.body,
          author: comment.author,
          subreddit: comment.subreddit,
          certainty: String(comment.certainty * 100).substring(0, 6) + " %"
        });
      });

      if (comments.value.length === 0) {
        comments.value.push({
          body: 'No comments found',
          author: 'No comments found',
          subreddit: 'N/A',
          certainty: 'N/A'
        })
      }
    }

    function filterHate() {
      hateOnly.value = !hateOnly.value;

      onRefresh();
    }

    onRefresh();

    return {
      comments,
      fields,
      videoId0,
      // playerVars,
      hateOnly,
      onRefresh,
      filterHate,
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
</style>