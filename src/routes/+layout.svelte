<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="h-screen">
	<Header />

	<main class="flex justify-center items-center">
		<slot />
	</main>
</div>
