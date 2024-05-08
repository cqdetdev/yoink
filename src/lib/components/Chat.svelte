<script lang="ts">
	import { onMount } from 'svelte';
	import SettingsIcon from "./ui/icons/SettingsIcon.svelte";
	import BotIcon from "./ui/icons/BotIcon.svelte";
	import Button from "./ui/button/button.svelte";
	import Input from "./ui/input/input.svelte";
	import Message from "./Message.svelte";
	import { Skeleton } from "$lib/components/ui/skeleton";

	import request from "../api";
	import { writable } from 'svelte/store';
	import SendIcon from './ui/icons/SendIcon.svelte';

	interface Message {
		ai: boolean;
		content: string;
	}

	let messages = writable<Message[]>([{ ai: true, content: "Hello I am Yoink! How can I help you." }]);
  	let content: string = "";
	let element;
  	let api;

	const doRequest = async () => {
		messages.update(msgs => [...msgs, { ai: false, content }, { ai: true, content: "Loading..." }]);
		content = ''
		api = request(content);
		await api.doRequest();
		api.subscribe(response => {
			messages.update(msgs => {
				const updatedMessages = [...msgs];
				updatedMessages[updatedMessages.length - 1].content = response;
				return updatedMessages;
			});
		});
	}

	onMount(async () => {
		if (content.length) {
			api = request(content);
			api.subscribe(response => {
				messages.update(msgs => {
					const updatedMessages = [...msgs];
					updatedMessages[updatedMessages.length - 1].content = response;
					return updatedMessages;
				});
			});
		}
	});
</script>

<section>
  <slot />
  <div class="flex flex-col h-screen text-gray-50">
      <header class="px-6 py-4 flex items-center justify-between border-b-2 border-b-red-500">
          <div class="flex items-center gap-2">
              <svelte:component this={BotIcon} />
              <h1 class="text-xl font-bold">Yoink AI</h1>
          </div>
      </header>
      <div class="flex-1 overflow-y-auto p-6 space-y-4">
          {#each $messages as { ai, content }}
              <Message message={content} {ai} loading={content === "Loading..."} />
          {/each}
      </div>
      <div class="bg-gray-900 px-6 py-4 flex items-center gap-4">
          <Input
              bind:value={content}
              class="flex-1 bg-gray-800 rounded-xl focus:ring-0 focus:outline-none"
              placeholder="Type your message..."
              type="text"
          />
          <Button size="icon" variant="ghost" on:click={doRequest}>
              <svelte:component this={SendIcon} />
              <span class="sr-only" >Send</span>
          </Button>
      </div>
  </div>
</section>
