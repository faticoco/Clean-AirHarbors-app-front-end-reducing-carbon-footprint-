<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import Hero from './Hero.svelte';
	import Tailwind from './Tailwind.svelte';
</script>

<style>
	.ContactCards {
	display: inline-blocks;
	margin-top: 1rem;
	padding: 1rem;
	border: 2px red;
	}

	.body{
	background-color:white;
	text-align: center;
	}
</style>

<Header />
<div class="body" >
	<h1 class="text-5xl font-extrabold dark:text-black" style="color:black">
		Carbon Info
	</h1>

</div>

<div class="ContactCards">
<Footer />
</div>