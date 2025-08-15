<script lang="ts">
    import { Button } from "@korhq/ui/button";
    import { useSheet } from "$lib/hooks/use-sheet.svelte";

    interface Props {
        message?: string;
    }

    let { message = "Default message" }: Props = $props();

    const sheet = useSheet();

    let count = $state(0);

    function increment() {
        count++;
    }

    function closeThisSheet() {
        sheet.closeAll();
    }
</script>

<div class="flex flex-col gap-4">
    <div class="rounded-20 border border-stroke bg-surface-primary p-6">
        <h4 class="title-3 text-text mb-3">Sheet Content</h4>
        <p class="body text-text-secondary mb-4">
            {message}
        </p>
        <div class="flex items-center gap-4">
            <Button
                size="sm"
                onclick={increment}
                class="rounded-12 shadow-glass"
            >
                Count: {count}
            </Button>
            <span class="caption text-text-tertiary">Click to increment</span>
        </div>
    </div>

    <div class="rounded-20 border border-stroke bg-surface-secondary p-6">
        <h4 class="title-3 text-text mb-3">Quick Form</h4>
        <form
            class="space-y-3"
            onsubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                console.log("Form submitted:", Object.fromEntries(formData));
            }}
        >
            <input
                type="text"
                name="name"
                placeholder="Enter your name"
                class="w-full px-4 py-3 body text-text placeholder:text-text-tertiary bg-surface-primary border border-stroke rounded-12 transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg focus:border-accent hover:border-stroke-secondary"
                required
            />
            <Button
                type="submit"
                size="sm"
                class="w-full rounded-12 shadow-glass"
            >
                Submit
            </Button>
        </form>
    </div>

    <div class="flex gap-3">
        <Button
            appearance="ghost"
            size="sm"
            onclick={closeThisSheet}
            class="flex-1 rounded-12"
        >
            Close Sheet
        </Button>
    </div>
</div>
