<script lang="ts">
  import { cn, type WithElementRef } from "$lib/utils.js";
  import type { HTMLAttributes } from "svelte/elements";

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
  bind:this={ref}
  data-slot="sheet-footer"
  class={cn(
    "border-stroke bg-surface-secondary mt-auto flex flex-col gap-3 border-t p-6 pt-4",
    className
  )}
  {...restProps}
>
  {@render children?.()}
</div>
