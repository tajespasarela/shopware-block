<script lang="ts">
import { inject, computed } from 'vue';
import { BLOCK_CONTEXT } from "./constants.ts";

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { slots }) {
    const blockContext = inject(BLOCK_CONTEXT);

    if (blockContext === undefined) {
      throw new Error('Block component must be configured');
    }

    blockContext[props.name] = blockContext[props.name] ?? [];
    const override = computed(() => {
      const blocks = blockContext[props.name];

      return blocks.length
        ? blocks.reduce((acc, block) => (block as any)({ parent: acc, data: props.data }), slots.default)
        : slots.default?.();
    });

    return () => override.value;
  }
}
</script>
