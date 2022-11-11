<script>
	import Header from './Header.svelte';
	import Tailwind from './Tailwind.svelte';
	import img from '$lib/assets/vbook.jpg';
	import gif from '$lib/assets/gif_virtual.gif';
	import img1 from '$lib/assets/s08.jpg';
</script>

<Header />

<section class="bg-white dark:bg-gray-900">
	<div class="grid max-w-screen-xl px-10 py-12 mx-auto lg:gap-4 xl:gap-10 lg:py-16 lg:grid-cols-12">
		<div class="mr-auto place-self-center lg:col-span-10">
			<h1 class="max-w-2xl mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-10xl xl:text-6xl dark:text-white">Virtual Book Store</h1>
			<p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
			<a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
				Get started
				<svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
				</svg>
			</a>
			<a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
				Order now
			</a>
		</div>
		<div class="hidden lg:mt-0 lg:col-span-1 lg:flex">
			<img class="ml-auto max-w-xl h-auto" src={img} alt="image description">
        </div>
	</div>
</section>


<div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
	<a href="#">
		<img class="rounded-t-lg" src={img1} alt="">
    </a>
	<div class="p-5">
		<a href="#">
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
		</a>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
		<a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
			Read more
			<svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
			</svg>
		</a>
	</div>
</div>
