<script lang="ts">
import { inject, useSlots } from 'vue';
import { BLOCK_CONTEXT } from "./constants.ts";

export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const blockContext = inject(BLOCK_CONTEXT);

    if (blockContext === undefined) {
      throw new Error('Block component must be configured');
    }

    blockContext[props.name] = blockContext[props.name] ?? [];

    const defaultSlot = useSlots().default;
    if (defaultSlot) {
      blockContext[props.name].push(defaultSlot);
    }
    return () => null;
  }
}
</script>