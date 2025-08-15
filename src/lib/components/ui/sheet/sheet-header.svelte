<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { cn, type WithElementRef } from "$lib/utils.js";

    let {
        ref = $bindable(null),
        class: className,
        children,
        ...restProps
    }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
    bind:this={ref}
    data-slot="sheet-header"
    class={cn("flex flex-col gap-2 p-6 pb-4 border-b border-stroke", className)}
    {...restProps}
>
    {@render children?.()}
</div>
