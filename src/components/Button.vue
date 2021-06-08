<template lang="pug">

  button(
    :class="[$style.button]"
    :disabled="disabled"
    @click="$emit('click')"
  ) {{ text }}

</template>

<script>
export default {
  props: {
    text: String,
    disabled: Boolean,
    primary: {
      type: Boolean,
      default: true
    },
  },
}
</script>

<style lang="scss" module>
@import '../scss/component.scss';

.button {
  @extend .button;

  position: relative;
  color: #fff;
  height: 35px;
  line-height: 34px;
  letter-spacing: 0.96px;
  font-weight: bold;
  background: $action-color;
  text-transform: uppercase;
  transition: .3s;
  box-shadow: 0 5px 10px #c7c7c7;
  border-radius: 2px;
  padding: 0 25px;
  font-size: 12px;

  &:disabled {
    background: #c7c7c7;
    box-shadow: none;
    cursor: default;

    &:hover {
      background: #c7c7c7;
    }
  }
}

@include desktop() {
  .button {
    &:hover {
      background-color: darken($action-color, 15%);
    }
  }
}
</style>