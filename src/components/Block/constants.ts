import type {InjectionKey, Slot} from 'vue';

export const BLOCK_CONTEXT = Symbol('block-context') as InjectionKey<Record<string, (Slot)[]>>;