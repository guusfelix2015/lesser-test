<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
</script>

<header>
	<nav class="flex justify-between items-center p-4">
		<div class="flex items-center">
			<img src={logo} alt="Svelte logo" class="w-8 h-8" />
			<h1 class="ml-2 font-bold">SvelteKit</h1>
		</div>
		<div class="flex items-center hover:underline">
			<a href="https://www.lesser.biz/" target="_blank" class="mr-4">Lesser</a>
		</div>
</header>
