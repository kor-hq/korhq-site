<script>
    import { Button } from "@korhq/ui/button";
    import IconHeart from "phosphor-icons-svelte/IconHeartRegular.svelte";
</script>

<nav class="w-screen h-fit p-1.5 flex justify-between sticky top-0">
    <div class="flex gap-1.5 h-9">
        <div
            class="bg-surface-primary border border-stroke shadow-glass backdrop-blur-raised-1 px-4 py-1.5 rounded-full"
        >
            <a href="/" class="body">KORHQ</a>
        </div>
        <div
            class="bg-surface-primary border border-stroke shadow-glass backdrop-blur-raised-1 px-4 py-1.5 rounded-full"
        >
            <p class="body opacity-70">Open software for an better world</p>
        </div>
    </div>

    <div class="flex gap-1.5 h-9">
        <div
            class="bg-surface-primary flex gap-3 border border-stroke shadow-glass backdrop-blur-raised-1 px-4 py-1.5 rounded-full"
        >
            <a href="/" class="body hover:font-bold duration-200 ease-out">
                Home
            </a>
            <a
                href="/handbook"
                class="body hover:font-bold duration-200 ease-out"
            >
                Handbook
            </a>
            <a href="/about" class="body hover:font-bold duration-200 ease-out">
                About
            </a>
            <a href="/blog" class="body hover:font-bold duration-200 ease-out">
                Blog
            </a>
            <a
                href="/contact"
                class="body hover:font-bold duration-200 ease-out"
            >
                Contact
            </a>
        </div>
        <Button class="h-full px-3 flex gap-1">Donate <IconHeart /></Button>
    </div>
</nav>
