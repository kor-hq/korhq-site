import { sheetManager } from "$lib/stores/sheet-manager.svelte";
import type { Component } from "svelte";
import type { Side } from "$lib/components/ui/sheet/sheet-content.svelte";

export function useSheet() {
  /**
   * Open a sheet with a component
   */
  function open<T extends Component>(
    component: T,
    options?: {
      props?: ComponentProps<T>;
      side?: Side;
      title?: string;
      description?: string;
      className?: string;
      onClose?: () => void;
      id?: string;
    },
  ) {
    return sheetManager.open({
      component,
      props: options?.props,
      side: options?.side,
      title: options?.title,
      description: options?.description,
      className: options?.className,
      onClose: options?.onClose,
      id: options?.id,
    });
  }

  return {
    open,
    close: sheetManager.close.bind(sheetManager),
    closeAll: sheetManager.closeAll.bind(sheetManager),
    update: sheetManager.update.bind(sheetManager),
    get: sheetManager.get.bind(sheetManager),
  };
}

// Helper type export
type ComponentProps<T> = T extends Component<infer P> ? P : never;
