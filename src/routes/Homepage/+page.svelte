<script>
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';
	import Hero from '../Hero.svelte';
	import Tailwind from '../Tailwind.svelte';
	import carousel1 from '$lib/assets/carousel1.png';
	import carousel2 from '$lib/assets/carousel2.png';
	import carousel3 from '$lib/assets/carousel3.png';
	import goals from '$lib/assets/goals.png';
</script>

<Header />
<div class="text-sm breadcrumbs">
	<ul>
		<li><a>Home</a></li>
	</ul>
</div>

<div class="hero min-h-screen bg-white">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">Clean Hair Harbour</h1>
			<p class="py-6">
				Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
				quasi. In deleniti eaque aut repudiandae et a id nisi.
			</p>
			<button class="btn bg-green-500">Get Started</button>
		</div>
	</div>
</div>

<div class="carousel w-full">
	<div id="slide1" class="carousel-item relative w-full">
		<img src={carousel1} class="object-cover h-110 w-full" />
		<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
			<a href="#slide4" class="btn btn-circle">❮</a>
			<a href="#slide2" class="btn btn-circle">❯</a>
		</div>
	</div>
	<div id="slide2" class="carousel-item relative w-full">
		<img src={carousel2} class="object-cover h-110 w-full" />
		<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
			<a href="#slide1" class="btn btn-circle">❮</a>
			<a href="#slide3" class="btn btn-circle">❯</a>
		</div>
	</div>
	<div id="slide3" class="carousel-item relative w-full">
		<img src={carousel3} class="object-scale-down h-110 w-full" />
		<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
			<a href="#slide2" class="btn btn-circle">❮</a>
			<a href="#slide4" class="btn btn-circle">❯</a>
		</div>
	</div>
</div>

<div class="hero min-h-screen bg-white">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<img src={goals} class="max-w-sm rounded-lg shadow-2xl" />
		<div>
			<h1 class="text-5xl font-bold">Our Goals!</h1>
			<p class="py-6">
				Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
				quasi. In deleniti eaque aut repudiandae et a id nisi.
			</p>
			<button class="btn bg-green-500">Get Started</button>
		</div>
	</div>
</div>

<br />
<br />
<br />



<div class="hero  bg-white" >
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold" style="color:black">Reminder Preview</h1>
			<p class="mb-5" style="color:black">
				Subscribe to our App to avail the reminders feature <br />
			Made to remind you of your daily routine tasks <br />
			to reduce your carbon footprint 
			</p>
			<button class="btn bg-green-500" >Preview</button>
		</div>
	</div>
</div>

<div class="ContactCards">
	<Footer />
</div>

<style>
	.ContactCards {
		display: inline-blocks;
		margin-top: 1rem;
		padding: 1rem;
		border: 2px red;
	}

	.body {
		background-color: white;
		text-align: center;
	}

	.body1 {
		background-color: white;
		align-items: center;
	}

	.goals {
		background-color: white;
		text-align: left;
		width: 50;
		height: 50;
	}

	.flex-container {
		display: flex;
		background-color: white;
	}

	.preview {
		background-color: white;
		text-align: center;
		align-items: center;
	}
</style>
