<script lang="ts" module>
  import { tv, type VariantProps } from "tailwind-variants";
  export const sheetVariants = tv({
    base: "bg-bg data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col shadow-glass border border-stroke transition ease-out data-[state=closed]:duration-200 data-[state=open]:duration-300 rounded-12 m-4",
    variants: {
      side: {
        top: "inset-x-0 top-0 h-auto border-b",
        bottom: "inset-x-0 bottom-0 h-auto border-t",
        left: "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  });

  export type Side = VariantProps<typeof sheetVariants>["side"];
</script>

<script lang="ts">
  import { Dialog as SheetPrimitive } from "bits-ui";
  import type { Snippet } from "svelte";
  import SheetOverlay from "./sheet-overlay.svelte";
  import { cn, type WithoutChildrenOrChild } from "$lib/utils.js";

  let {
    ref = $bindable(null),
    class: className,
    side = "right",
    portalProps,
    children,
    ...restProps
  }: WithoutChildrenOrChild<SheetPrimitive.ContentProps> & {
    portalProps?: SheetPrimitive.PortalProps;
    side?: Side;
    children: Snippet;
  } = $props();
</script>

<SheetPrimitive.Portal {...portalProps}>
  <SheetOverlay />
  <SheetPrimitive.Content
    bind:ref
    data-slot="sheet-content"
    class={cn(sheetVariants({ side }), className)}
    {...restProps}
  >
    {@render children?.()}
    <SheetPrimitive.Close
      class="rounded-12 bg-surface-primary border-stroke focus-visible:ring-accent focus-visible:ring-offset-bg absolute top-4 right-4 flex size-8 items-center justify-center border transition-all duration-200 ease-out hover:scale-105 hover:brightness-110 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-95 disabled:pointer-events-none disabled:opacity-50"
    >
      <span class="text-text">✕</span>
      <span class="sr-only">Close</span>
    </SheetPrimitive.Close>
  </SheetPrimitive.Content>
</SheetPrimitive.Portal>
