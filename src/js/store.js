/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
    design: 'TopSide',
  },
  mutations: {
    changeDesign(state, payload) {
      state.design = payload.prop;
    },
    addStep(state) {
      const nextStep = state.timelineSteps.length + 1;

      state.timelineSteps.push({ step: nextStep, complete: false });
    },
    removeStep(state) {
      state.timelineSteps.pop();
    },
    setStep1Disabled(state) {
      state.stepsPanel.prev = false;
    },
    setDisablePrevButton(state) {
      state.stepsPanel.prev = false;
    },
    setDisableNextButton(state) {
      state.stepsPanel.next = false;
    },
    setAvailablePrevButton(state) {
      state.stepsPanel.prev = true;
    },
    setAvailableNextButton(state) {
      state.stepsPanel.next = true;
    },
    setStepComplete(state, payload) {
      state.timelineSteps[payload.step - 1].complete = true;
    },
    setStepNotComplete(state, payload) {
      state.timelineSteps[payload.step - 1].complete = false;
    },
  },
});
