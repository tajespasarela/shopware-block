<script setup lang="ts">
import { ref } from 'vue';
import Block from './Block/Block.vue';

const counter = ref(0);

const increment = () => {
  counter.value++;
};

</script>

<template>
  <Block name="introduction" :data="{counter, increment}">
    <p>Hey There! I'm component A ❤️</p>
    <p>Counter: {{ counter }}</p>
  </Block>
</template>