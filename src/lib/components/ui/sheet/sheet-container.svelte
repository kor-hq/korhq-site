<script lang="ts">
    import { sheetManager } from "$lib/stores/sheet-manager.svelte";
    import * as Sheet from "./index";

    const sheets = $derived(sheetManager.sheets);
</script>

{#each sheets as sheet (sheet.id)}
    <Sheet.Root
        open={true}
        onOpenChange={(open) => {
            if (!open) {
                sheetManager.close(sheet.id);
            }
        }}
    >
        <Sheet.Content side={sheet.side} class={sheet.className}>
            {#if sheet.title || sheet.description}
                <Sheet.Header>
                    {#if sheet.title}
                        <Sheet.Title>{sheet.title}</Sheet.Title>
                    {/if}
                    {#if sheet.description}
                        <Sheet.Description
                            >{sheet.description}</Sheet.Description
                        >
                    {/if}
                </Sheet.Header>
            {/if}

            <div class="flex-1 overflow-y-auto p-6">
                {#if sheet.component}
                    <sheet.component {...sheet.props || {}} />
                {/if}
            </div>
        </Sheet.Content>
    </Sheet.Root>
{/each}
