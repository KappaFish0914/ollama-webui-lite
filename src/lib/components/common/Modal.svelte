<script lang="ts">
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
  import { _ } from 'svelte-i18n';
  
	export let show = true;
	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	$: if (mounted) {
		if (show) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}
</script>

{#if show}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="fixed top-0 right-0 left-0 bottom-0 bg-stone-900/50 w-full min-h-screen h-screen flex justify-center z-50 overflow-hidden overscroll-contain"
		on:click={() => {
			show = false;
		}}
	>
		<div
			class="m-auto rounded-xl max-w-full w-[40rem] mx-2 bg-gray-50 dark:bg-gray-900 shadow-3xl"
			transition:fade={{ delay: 100, duration: 200 }}
			on:click={(e) => {
				e.stopPropagation();
			}}
		>
			<slot />
		</div>
	</div>
{/if}
