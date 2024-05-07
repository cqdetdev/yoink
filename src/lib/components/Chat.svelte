<script lang="ts">
	import SettingsIcon from "./SettingsIcon.svelte";
	import Button from "./ui/button/button.svelte";
	import Input from "./ui/input/input.svelte";
  import Message from "./Message.svelte";
  import { Skeleton } from "$lib/components/ui/skeleton";

  let messages: Map<boolean, string> = new Map();
  messages.set(true, "Hello! I'm an AI assistant powered by GPT! How may I assist you!")
</script>

<section>
  <slot />
    <div class="flex flex-col h-screen bg-gray-950 text-gray-50">
        <header class="bg-gray-900 px-6 py-4 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <svelte:component this={SettingsIcon} />
            <h1 class="text-xl font-bold">ChatGPT</h1>
          </div>
          <div class="flex items-center gap-4">
            <Button size="icon" variant="ghost">
              <svelte:component this={SettingsIcon} />
              <span class="sr-only">Settings</span>
            </Button>
            <!-- <Button size="icon" variant="ghost">
              <svelte:component this={SettingsIcon} />
              <span class="sr-only">Profile</span>
            </Button> -->
          </div>
        </header>
        <div class="flex-1 overflow-y-auto p-6 space-y-4">
          {#each [...messages] as [ai, message]}
              <Message {message} {ai} />
          {/each}
          <div class="flex items-start gap-4 justify-end">
          </div>
        </div>
        <div class="bg-gray-900 px-6 py-4 flex items-center gap-4">
          <Input
            class="flex-1 bg-gray-800 border-none focus:ring-0 focus:outline-none"
            placeholder="Type your message..."
            type="text"
          />
          <Button size="icon" variant="ghost">
            <svelte:component this={SettingsIcon} />
            <span class="sr-only">Send</span>
          </Button>
        </div>
      </div>
</section>