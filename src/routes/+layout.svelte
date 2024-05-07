	
<script lang="ts">
	import * as Tabs from "$lib/components/ui/tabs/index";
	import * as Card from "$lib/components/ui/card/index";
	import { Button } from "$lib/components/ui/button/index";
	import { Input } from "$lib/components/ui/input/index";
	import { Label } from "$lib/components/ui/label/index";
	// inline-flex items-center justify-center rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-red-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-950 disabled:pointer-events-none disabled:opacity-50
</script>
<section style="width: 100%; height: 100vh;" class=" bg-gradient-to-br from-gray-950 to-[#1e1e1e]">
  <Tabs.Root value="account" class="w-[400px] flex flex-col min-h-screen container">
	<Tabs.List class="grid w-full grid-cols-1">
	</Tabs.List>
	<Tabs.Content value="account">
	  <Card.Root class="bg-[#030712] text-white border border-gray-700 dark:border-gray-800 shadow-gray-900 shadow-xl rounded-xl">
		<Card.Header class="text-center">
		  <Card.Title>To-Do</Card.Title>
		  <Card.Description>
			Add your To-Do's here.
		  </Card.Description>
		</Card.Header>
		<Card.Content class="space-y-2 text-center">
		  <div class="space-y-1">
			<Label for="name">Title</Label>
			<Input id="name" value="" />
		  </div>
		  <div class="space-y-1">
			<Label for="username">Description</Label>
			<Input id="username" value="" />
		  </div>
		</Card.Content>
		<Card.Footer>
		  <Button class="bg-[#ef4444] text-white rounded-xl">Save changes</Button>
		</Card.Footer>
	  </Card.Root>
	</Tabs.Content>
  </Tabs.Root>
</section>