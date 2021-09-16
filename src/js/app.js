import Vue from 'vue';
import MainComponent from '../components/Main.vue';

export default function timelinesVue() {
  new Vue({
    el: '#app',
    components: {
      MainComponent,
    },
  });
}
