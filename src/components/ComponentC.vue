<script setup lang="ts">
import BlockOverride from './Block/BlockOverride.vue';
import BlockParent from './Block/BlockParent.vue';

</script>

<template>
  <BlockOverride name="introduction" #default="{ parent, data }">
    <p>Here is Component C 🍀</p>
    <button @click="data.increment">increment</button>
    <BlockParent :parent="parent" />
  </BlockOverride>
</template>