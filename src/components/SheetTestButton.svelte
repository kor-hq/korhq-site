<script lang="ts">
    import { useSheet } from "$lib/hooks/use-sheet.svelte";
    import { Button } from "@korhq/ui/button";
    import TestContent from "./TestContent.svelte";

    const sheet = useSheet();

    function openTestSheet() {
        sheet.open(TestContent, {
            title: "Test Sheet",
            description: "This is a test sheet opened from index.astro",
            side: "right",
            className: "shadow-glass",
            onClose: () => {
                console.log("Test sheet closed");
            },
        });
    }

    function openLeftSheet() {
        sheet.open(TestContent, {
            title: "Left Side Sheet",
            description: "This sheet slides in from the left",
            side: "left",
            className: "shadow-glass",
            props: {
                message: "Custom props passed to component",
            },
        });
    }
</script>

<div class="flex gap-3 mb-6">
    <Button onclick={openTestSheet} size="sm">Open Test Sheet</Button>
    <Button onclick={openLeftSheet} appearance="soft" size="sm">
        Open Left Sheet
    </Button>
</div>
