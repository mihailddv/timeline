<template lang="pug">
  div
    Button(
      text="Add step"
      :disabled="timelineSteps.length === this.max"
      @click="addStep()"
    )
    Button(
      text="Remove step"
      :disabled="timelineSteps.length === this.min"
      @click="removeStep()"
    )
</template>

<script>
import { mapState } from 'vuex';
import { Steps } from '../js/Const';

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
      max: Steps.MAX,
      min: Steps.MIN,
    };
  },
  computed: {
    ...mapState({
      timelineSteps: (state) => state.timelineSteps,
    }),
  },
  methods: {
    addStep() {
      store.commit('addStep');
      store.commit('setAvailableNextButton');
    },
    removeStep() {
      const steps = this.timelineSteps.length;
      if (this.timelineSteps[steps - 1].complete) {
        store.commit('setDisableNextButton');
      }
      store.commit('removeStep');
    },
  }
}
</script>