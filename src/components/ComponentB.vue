<script setup lang="ts">
import BlockOverride from './Block/BlockOverride.vue';
import BlockParent from './Block/BlockParent.vue';

</script>

<template>
  <BlockOverride name="introduction" #default="{ parent }">
    <p>Hello! I'm component B 😀</p>
    <BlockParent :parent="parent" />
  </BlockOverride>
</template>