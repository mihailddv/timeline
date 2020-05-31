import Vue from 'vue';
import TimelineStep from '../components/TimelineStep.vue';

export default function timelinesVue() {
  new Vue({
    el: '#timelines',
    data() {
      return {
        design: {
          optionLabelTopSide: true,
          optionLabelTopCenter: false,
          optionLabelBottomSide: false,
          optionLabelBottomCenter: false,
        },
        stepsPanel: {
          prev: true,
          next: true,
        },
        timelineSteps: [
          {
            step: 1,
            complete: false,
          },
          {
            step: 2,
            complete: false,
          },
          {
            step: 3,
            complete: false,
          },
          {
            step: 4,
            complete: false,
          },
        ],
      };
    },
    mounted() {
      this.checkFirstStep();
    },
    methods: {
      checkFirstStep() {
        const stepIndex = this.timelineSteps.find((s) => s.complete === false);

        if (stepIndex.step === 1) {
          this.stepsPanel.prev = false;
        }
      },
      addStep() {
        const nextStep = this.timelineSteps.length + 1;

        this.timelineSteps.push({ step: nextStep, complete: false });
      },
      removeStep() {
        this.timelineSteps.pop();
      },
      nextStep() {
        const stepIndex = this.timelineSteps.find((s) => s.complete === false);

        if (stepIndex) {
          this.$set(stepIndex, 'complete', true);
        }

        if (stepIndex.step === this.timelineSteps.length) {
          this.stepsPanel.next = false;
        }

        this.stepsPanel.prev = true;
      },
      prevStep() {
        const stepIndex = this.timelineSteps.find((s) => s.complete === false);

        if (stepIndex) {
          const prev = stepIndex.step - 2;
          this.$set(this.timelineSteps[prev], 'complete', false);
        } else {
          const last = this.timelineSteps.length - 1;
          this.$set(this.timelineSteps[last], 'complete', false);
        }

        if (stepIndex && stepIndex.step === 2) {
          this.stepsPanel.prev = false;
        }

        this.stepsPanel.next = true;
      },
      changeDesign(option) {
        const prop = `option${option}`;

        this.design.optionLabelTopSide = false;
        this.design.optionLabelTopCenter = false;
        this.design.optionLabelBottomSide = false;
        this.design.optionLabelBottomCenter = false;

        if (this.design.hasOwnProperty(prop)) {
          this.design[prop] = true;
        }

        // for eslint
        // if (Object.prototype.hasOwnProperty.call(this.design, prop)) {
        //   this.design[prop] = true;
        // }
      },
    },
    components: {
      TimelineStep,
    },
  });
}
