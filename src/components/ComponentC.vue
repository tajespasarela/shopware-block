<script setup lang="ts">
import BlockOverride from './Block/BlockOverride.vue';
import BlockParent from './Block/BlockParent.vue';

</script>

<template>
  <BlockOverride name="introduction" #default="{ parent }">
    <p>Here is Component C 🍀</p>
    <BlockParent :parent="parent" />
  </BlockOverride>
</template>