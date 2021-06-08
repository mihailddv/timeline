<template lang="pug">
  .timelines
    .timelines__design
      Panel(
        title="Switch design"
      )
        Switch-design

    .timelines__list

      .timeline(
        :class="`timeline${this.design}`"
      )
        Timeline-Step(
          v-for="(item, index) in this.timelineSteps"
          :key="item.index"
          :step="item.step"
          :complete="item.complete"
        )

    .timelines__action
      Panel(
        title="Change step"
      )
        Change-step

      Panel(
        title="Change the number of steps"
      )
        Number-of-steps
</template>

<script>
import { mapState } from 'vuex';

import TimelineStep from './TimelineStep.vue';
import ProjectButton from './Button.vue';
import SwitchDesign from './SwitchDesign.vue';
import ChangeStep from './ChangeStep.vue';
import NumberOfSteps from './NumberOfSteps.vue';
import Panel from './Panel.vue';
import store from '../js/store';

export default {
  store,
  components: {
    TimelineStep,
    ProjectButton,
    SwitchDesign,
    ChangeStep,
    NumberOfSteps,
    Panel,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      design: (state) => state.design,
      timelineSteps: (state) => state.timelineSteps,
    }),
  },
  mounted() {
    console.log(this.design);
    this.checkFirstStep();
  },
  methods: {
    checkFirstStep() {
      const stepIndex = this.timelineSteps.find(
        (s) => s.complete === false
      );

      if (stepIndex.step === 1) {
        store.commit('setStep1Disabled');
      }
    },
  },
}
</script>