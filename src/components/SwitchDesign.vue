<template lang="pug">
  div
    Button(
      v-for="item in buttons"
      :key="item.id"
      :text="item.text"
      :disabled="design === item.design"
      @click="changeDesign(item.design)"
    )
</template>

<script>
import { mapState } from 'vuex';
import Button from '../components/Button.vue';
import store from '../js/store';

export default {
  props: {},
  store,
  components: {
    Button,
  },
  data() {
    return {
      buttons: [
        {
          id: 1,
          text: 'Top and Side',
          design: 'TopSide',
        },
        {
          id: 2,
          text: 'Top and Center',
          design: 'TopCenter',
        },
        {
          id: 3,
          text: 'Bottom and Side',
          design: 'BottomSide',
        },
        {
          id: 4,
          text: 'Bottom and Center',
          design: 'BottomCenter',
        },
      ]
    };
  },
  computed: {
    ...mapState({
      design: (state) => state.design,
    }),
  },
  methods: {
    changeDesign(prop) {
      store.commit('changeDesign', {prop});
    },
  },
}
</script>