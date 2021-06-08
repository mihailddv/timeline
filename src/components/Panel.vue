<template lang="pug">
  section(
    :class="[$style.container]"
  )
    h2(
      :class="[$style.caption]"
    ) {{title}}
    div(
      :class="[$style.content]"
    )
      slot
</template>

<script>
export default {
  props: {
    title: String,
  },
  components: {},
  data() {
    return {};
  },
}
</script>

<style lang="scss" module>
@import '../scss/component.scss';

.container {
  margin-bottom: 50px;
}

.caption {
  margin-bottom: 20px;
}

.content {
  & > div > * {
    &:not(:last-child) {
      margin-right: 16px;
    }
  }
}
</style>