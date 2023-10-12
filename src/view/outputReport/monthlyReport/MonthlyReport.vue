<template>
  <div>
    <p>Value of a1: {{ a1 }}</p>
    <button @click="handleButtonClick(a1)">Change a1</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const a1 = ref(0);

    const handleButtonClick = (a1Ref) => {
      // Change the value of a1 using the .value property of the passed ref
      a1Ref.value = a1Ref.value + 1;
    };

    return {
      a1,
      handleButtonClick
    };
  }
}
</script>
