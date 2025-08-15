import type { Component } from "svelte";
import type { Side } from "$lib/components/ui/sheet/sheet-content.svelte";

export type SheetConfig = {
  id: string;
  component: Component;
  props?: Record<string, any>;
  side?: Side;
  title?: string;
  description?: string;
  className?: string;
  onClose?: () => void;
};

class SheetManager {
  sheets = $state<SheetConfig[]>([]);

  open(config: Omit<SheetConfig, "id"> & { id?: string }) {
    const id = config.id || crypto.randomUUID();
    const sheetConfig: SheetConfig = {
      ...config,
      id,
    };

    // Check if sheet with same id exists and replace it
    const existingIndex = this.sheets.findIndex((s) => s.id === id);
    if (existingIndex >= 0) {
      this.sheets[existingIndex] = sheetConfig;
    } else {
      this.sheets = [...this.sheets, sheetConfig];
    }

    return id;
  }

  close(id: string) {
    const sheet = this.sheets.find((s) => s.id === id);
    if (sheet?.onClose) {
      sheet.onClose();
    }
    this.sheets = this.sheets.filter((s) => s.id !== id);
  }

  closeAll() {
    for (const sheet of this.sheets) {
      if (sheet.onClose) {
        sheet.onClose();
      }
    }
    this.sheets = [];
  }

  update(id: string, updates: Partial<Omit<SheetConfig, "id">>) {
    const index = this.sheets.findIndex((s) => s.id === id);
    if (index >= 0) {
      this.sheets[index] = { ...this.sheets[index], ...updates };
    }
  }

  get(id: string) {
    return this.sheets.find((s) => s.id === id);
  }
}

export const sheetManager = new SheetManager();
