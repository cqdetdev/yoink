<script lang="ts">
	import Skeleton from "./ui/skeleton/skeleton.svelte";

    export let ai: boolean
    export let loading: boolean
    export let message: string

    const BOT_IMG = "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
    const USER_IMG = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4k-EK9bwaXD1R_HGLkKam2lQJBpUZ6BB-5iWwW0nUXQ&s"
</script>

<section>
    <slot />
    <div class="flex items-start gap-4 {!ai ? "justify-end" : ""}">
        {#if ai}
            <img
            alt=""
            class="rounded-full"
            height={40}
            src={ai ? BOT_IMG : USER_IMG}
            style="aspect-ratio: 40/40; object-fit: cover;"
            width={40}
            />
        {/if}
        <div class="{ai ? "bg-gray-700" : "bg-[#ef4444]"} rounded-xl p-4 max-w-[80%]">
            {#if loading}
                <Skeleton class="lg:w-[500px] w-[200px] h-[20px] rounded-full bg-slate-100"/>
            {:else}
                <p>{message}</p>
            {/if}
        </div>
        {#if !ai}
            <img
            alt=""
            class="rounded-full"
            height={40}
            src={ai ? BOT_IMG : USER_IMG}
            style="aspect-ratio: 40/40; object-fit: cover;"
            width={40}
            />
        {/if}
      </div>
</section>