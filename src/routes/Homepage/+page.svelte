<script>
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';
	import Hero from '../Hero.svelte';
	import Tailwind from '../Tailwind.svelte';
	import carousel1 from '$lib/assets/carousel1.png';
	import carousel2 from '$lib/assets/carousel2.png';
	import carousel3 from '$lib/assets/carousel3.png';
	import goals from '$lib/assets/goals.png';
	import main from '$lib/assets/main_img.jpg';
</script>

<Header />
<div class="text-sm breadcrumbs">
    <ul>
        <li><a>Home</a></li>
    </ul>
</div>

<div class="hero min-h-screen bg-white">
    <div class="hero-content text-center">
      <div class="max-w-xl">
	  <img src="{main}" class="object-scale-down h-500 w-full" />
				<h1 class="text-5xl font-bold">Clean Hair Harbor</h1>
				<p class="py-6">Clean Air Harbors. Make your environment clean</p>
				<button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>

<div class="carousel w-xl">
	<div id="slide1" class="carousel-item relative w-full">
		<img src="{carousel1}"  class="object-cover h-100 w-full" />
		<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
			<a href="#slide4" class="btn btn-circle">❮</a>
			<a href="#slide2" class="btn btn-circle">❯</a>
		</div>
	</div>
	<div id="slide2" class="carousel-item relative w-full">
		<img src="{carousel2}"class="object-cover h-100 w-full" />
		<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
			<a href="#slide1" class="btn btn-circle">❮</a>
			<a href="#slide3" class="btn btn-circle">❯</a>
		</div>
	</div>
	<div id="slide3" class="carousel-item relative w-full">
		<img src="{carousel3}" class="object-scale-down h-100 w-full" />
		<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
			<a href="#slide2" class="btn btn-circle">❮</a>
			<a href="#slide4" class="btn btn-circle">❯</a>
		</div>
	</div>
</div>



<div class="hero min-h-screen  bg-white">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<img src={goals} class="max-w-sm rounded-lg shadow-2xl" />
		<div>
			<h1 class="text-5xl font-bold">Our Goals!</h1>
			<p class="py-6">
				Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
				quasi. In deleniti eaque aut repudiandae et a id nisi.
			</p>
			<button class="btn btn-primary">Get Started</button>
		</div>
	</div>
</div>

<br />
<br />
<br />

<div class="preview">
	<h1 class="text-2xl font-extrabold dark:text-black" style="color:black">Reminder Preview</h1>

	<div>
		<p>
			Subscribe to our App to avail the reminders feature <br />
			Made to remind you of your daily routine tasks <br />
			to reduce your carbon footprint <br />
		</p>
	</div>

	<button
		class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
	>
		<span
			class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
		>
			Preview
		</span>
	</button>
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
