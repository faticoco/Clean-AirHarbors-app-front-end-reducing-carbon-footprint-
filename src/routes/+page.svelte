	<script>
		import Header from './Header.svelte';
		import Footer from './Footer.svelte';
		import Hero from './Hero.svelte';
		import Tailwind from './Tailwind.svelte';
		import carousel1 from '$lib/assets/carousel1.png';
		import carousel2 from '$lib/assets/carousel2.png';
		import carousel3 from '$lib/assets/carousel3.png';
		import goals from '$lib/assets/goals.png';
		import air from '$lib/assets/cleanair.png';
	</script>

	<div class="drawer drawer-end">
		<input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content">
			<!-- Page content here -->

			<Header />

			<div class="text-sm breadcrumbs">
				<ul>
					<li>
						<a>Home</a>
					</li>
				</ul>
			</div>

			<div class="hero min-h-screen" style="background-image: url(https://images.unsplash.com/photo-1604182049604-4a9d97a854d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGdyZWVuJTIwZm9yZXN0fGVufDB8fDB8fA%3D%3D&w=1000&q=80);">
				<div class="hero-overlay bg-opacity-60"></div>
				<div class="hero-content text-center text-neutral-content">
					<div class="max-w-md">
						<h1 class="mb-5 text-5xl font-bold"> Clean Air Harbors</h1>
						<p class="mb-5">Leading to cleaner and greener environment.</p>

					</div>
				</div>
			</div>

			
			
			
			

			<div class="hero min-h-screen bg-white">
				<div class="hero-content flex-col lg:flex-row-reverse">
					<img src={goals} class="max-w-sm rounded-lg shadow-2xl" />
					<div>
						<h1 class="text-5xl font-bold">Our Goals!</h1>
						<p class="py-6">
							Our goal is to help the government organizations to reduce carbon levels from the environment. Provide the opportunity to a common man to reduce their carbon footprint and move towards a cleaner greener and carbon free environment.
						</p>
						<a href="http://127.0.0.1:5173/Signup">
							<button class="btn bg-green-500">Get Started</button>
						</a>
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

						<label for="my-modal-5" class="btn bg-green-500">Preview</label>


					</div>
				</div>
			</div>

			<div class="ContactCards">
				<Footer />
			</div>



		</div>
		<div class="drawer-side">
			<label for="my-drawer-4" class="drawer-overlay"></label>
			<ul class="menu p-4 w-80 bg-base-100 text-base-content">
				<div class="slider">

					<aside class="w-64" aria-label="Sidebar">
						<div class="overflow-y-auto py-4 px-3  rounded dark:bg-gray-800">
							<ul class="space-y-2">
								<li>
									<a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
										<svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
											<path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
										</svg>
										<span class="ml-3">Dashboard</span>
									</a>
								</li>
								<li>
									<a href="http://127.0.0.1:5173/Profile" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 margin:30px">
										<svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path>
										</svg>
										<span class="flex-1 ml-3 whitespace-nowrap">Profile</span>
									</a>
								</li>
								<li>
									<a href="http://127.0.0.1:5173/Rewards" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 margin:30px">
										<svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path>
										</svg>
										<span class="flex-1 ml-3 whitespace-nowrap">Rewards</span>
									</a>
								</li>

								<li>
									<a href="http://127.0.0.1:5173/Signup" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 margin:30px">
										<svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path>
										</svg>
										<span class="flex-1 ml-3 whitespace-nowrap">Sign up</span>
									</a>
								</li>
								<li>
									<a href="http://127.0.0.1:5173/Industryinfo" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 margin:30px">
										<svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path>
										</svg>
										<span class="flex-1 ml-3 whitespace-nowrap">Industries information</span>
									</a>
								</li>
								<br/>
								<br/>
								<br/>
								<br/>
								<li>
									<a href="http://127.0.0.1:5173/Logout" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 margin:30px">
										<svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path>
										</svg>
										<span class="flex-1 ml-3 whitespace-nowrap">Logout</span>
									</a>
								</li>
							</ul>
						</div>
					</aside>

				</div>
			</ul>
		</div>
	</div>



	<!-- Put this part before </body> tag -->
	<input type="checkbox" id="my-modal-5" class="modal-toggle" />
	<div class="modal">
		<div class="modal-box w-11/12 max-w-5xl">
			<h3 class="font-bold text-lg">A gentle reminder for the day!</h3>
			<p class="py-4">

				Avoid meat today for your meals and eat local foods :)
			</p>
			<div class="modal-action">
				<label for="my-modal-5" class="btn">Yay!</label>
			</div>
		</div>
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
