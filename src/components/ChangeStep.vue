<template lang="pug">
  div
    Button(
      text="Previous step"
      :disabled="!isPrevDisabled"
      @click="prevStep()"
    )
    Button(
      text="Next step"
      :disabled="!isNextDisabled"
      @click="nextStep()"
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
    return {};
  },
  computed: {
    ...mapState({
      isPrevDisabled: (state) => state.stepsPanel.prev,
      isNextDisabled: (state) => state.stepsPanel.next,
      timelineSteps: (state) => state.timelineSteps,
    }),
  },
  methods: {
    nextStep() {
      const stepIndex = this.timelineSteps.find((s) => s.complete === false);

      if (stepIndex) {
        store.commit('setStepComplete', {
          step: stepIndex?.step,
        });
      }

      if (stepIndex?.step === this.timelineSteps.length) {
        store.commit('setDisableNextButton');
      }

      store.commit('setAvailablePrevButton');
    },
    prevStep() {
      const stepIndex = this.timelineSteps.find((s) => s.complete === false);
      
      if (stepIndex) {
        store.commit('setStepNotComplete', {
          step: stepIndex.step - 1,
        });
      } else {
        store.commit('setStepNotComplete', {
          step: this.timelineSteps.length,
        });
      }

      if (stepIndex && stepIndex.step === Steps.MIN) {
        store.commit('setDisablePrevButton');
      }

      store.commit('setAvailableNextButton');
    },
  }
}
</script>