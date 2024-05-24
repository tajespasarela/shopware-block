<script setup lang="ts">
import { type VNode, computed } from "vue";

  const props =defineProps<{
    parent: VNode | VNode[]
  }>();

  const computedParent = computed(()=>
    Array.isArray(props.parent) 
    ? ()=> props.parent 
    : props.parent
  );

</script>

<template>
  <component :is="computedParent" />
</template>