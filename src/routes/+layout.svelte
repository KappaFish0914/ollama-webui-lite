<script>
	import "../app.css";
	import "../tailwind.css";
	import "tippy.js/dist/tippy.css";
	import { Toaster } from "svelte-french-toast";
  import '../locale/i18n';
  
  // initLocale();
</script>

<svelte:head>
	<title>Ollama</title>
</svelte:head>

<Toaster />
<slot />
