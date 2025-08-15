<script>
  import { Button } from "@korhq/ui/button";
  import IconHeart from "phosphor-icons-svelte/IconHeartRegular.svelte";
  import { LogoKOR } from "@korhq/ui/logo-kor";
</script>

<nav class="sticky top-0 flex h-fit w-screen justify-between p-1.5">
  <div class="flex h-9 gap-1.5">
    <a
      href="/"
      class="bg-surface-primary border-stroke shadow-glass backdrop-blur-raised-1 flex items-center gap-1.5 rounded-full border px-4 py-1.5 transition-[filter,scale] duration-150 ease-out hover:brightness-110 active:scale-[98%]"
    >
      <LogoKOR />
      <p class="body">KORHQ</p>
    </a>
    <div
      class="bg-surface-primary border-stroke shadow-glass backdrop-blur-raised-1 rounded-full border px-4 py-1.5"
    >
      <p class="body opacity-70">Open software for an better world</p>
    </div>
  </div>

  <div class="flex h-9 gap-1.5">
    <div
      class="bg-surface-primary border-stroke shadow-glass backdrop-blur-raised-1 flex gap-3 rounded-full border px-4 py-1.5"
    >
      <a href="/" class="body duration-200 ease-out hover:font-bold"> Home </a>
      <a href="/handbook" class="body duration-200 ease-out hover:font-bold">
        Handbook
      </a>
      <a href="/about" class="body duration-200 ease-out hover:font-bold">
        About
      </a>
      <a href="/blog" class="body duration-200 ease-out hover:font-bold">
        Blog
      </a>
      <a href="/contact" class="body duration-200 ease-out hover:font-bold">
        Contact
      </a>
    </div>
    <Button class="flex h-full gap-1 px-3">Donate <IconHeart /></Button>
  </div>
</nav>
