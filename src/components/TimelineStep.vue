<template lang="pug">
  .step(
    :class="{ 'step--complete': complete }"
  )
    .step-line
    .step-text Step {{ step }}
</template>

<script>
export default {
  props: [
    'step',
    'complete'
  ]
}
</script>