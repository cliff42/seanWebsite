<template>
  <div class="art">
    <h2>Artwork</h2>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import axios from 'axios';

export default {
  name: 'Bots',
  setup() {
    const bots = ref([]);
    const modalInfo= ref([]);
    const modalSub = ref('');
    const modalName = ref('');
    const fields = ref([]);
    const newFields = ref([]);
    // const newFakeNews = ref(false);
    // const newHateSpeech = ref(false);

    fields.value = [
      {
        key: 'name',
        label: 'Bot name',
        sortable: true
      },
      {
        key: 'subreddit',
        sortable: true
      },
      {
        key: 'actions',
        label: 'Actions',
        sortable: false,
        thClass: 'actions-col',
        tdClass: 'actions-col'
      }
    ];

    return {
      bots,
      modalSub,
      modalName,
      modalInfo,
      // newFakeNews,
      // newHateSpeech,
      fields,
      newFields,
      handleModal,
      getBots,
      deleteBot,
      editBot,
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

</style>
