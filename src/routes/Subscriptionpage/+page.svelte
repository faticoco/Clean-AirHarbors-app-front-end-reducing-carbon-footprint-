<script>
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';
	import Hero from '../Hero.svelte';
	import Tailwind from '../Tailwind.svelte';
	import subscription from '$lib/assets/subscription.jpg';
</script>


<div class="drawer drawer-end">
	<input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<!-- Page content here -->

		<Header />

		<div class="hero bg-base-200">
			<div class="hero-content flex-col lg:flex-row">
				<img src="{subscription}" class="max-w-sm h-100 rounded-lg shadow-2xl" />
				<div >
					<h1 class="text-5xl font-bold">Subscription Plans</h1>
					<p class="py-6">
						Subscribe to our premium subscription to get the maximum benefits. Get monthly rewards on completing Carbon Reduction tasks.
					</p>
				
				</div>
			</div>
		</div>

		<br/>
		<br/>


		<h1 class="text-5xl font-bold px-96">Subscription Plans!</h1>
		<br/>
		<br/>
		<br/>
		<br/>



		<div class="flex flex-col w-full lg:flex-row">
			<div class="grid flex-grow h-64 card rounded-box place-items-center">


				<div class="w-full max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
					<h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Free plan</h5>
					<div class="flex items-baseline text-gray-900 dark:text-white">
						<span class="text-3xl font-semibold">$</span>
						<span class="text-5xl font-extrabold tracking-tight">0</span>
						<span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
					</div>
					<!-- List -->
					<ul role="list" class="space-y-5 my-7">
						<li class="flex space-x-3">
							<!-- Icon -->
							<svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<title>Check icon</title>
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
								Access to graphs
							</span>
						</li>
						<li class="flex space-x-3">
							<!-- Icon -->
							<svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<title>Check icon</title>
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
								Online help and support
							</span>
						</li>
						<li class="flex space-x-3">
							<!-- Icon -->
							<svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<title>Check icon</title>
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Get carbon Info of any area</span>
						</li>
						<li class="flex space-x-3 line-through decoration-gray-500">
							<!-- Icon -->
							<svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<title>Check icon</title>
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span class="text-base font-normal leading-tight text-gray-500">Sketch Files</span>
						</li>
						<li class="flex space-x-3 line-through decoration-gray-500">
							<!-- Icon -->
							<svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<title>Check icon</title>
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span class="text-base font-normal leading-tight text-gray-500">API Access</span>
						</li>
						<li class="flex space-x-3 line-through decoration-gray-500">
							<!-- Icon -->
							<svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<title>Check icon</title>
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span class="text-base font-normal leading-tight text-gray-500">Complete documentation</span>
						</li>
						<li class="flex space-x-3 line-through decoration-gray-500">
							<!-- Icon -->
							<svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<title>Check icon</title>
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span class="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>
						</li>
					</ul>
					<div class="my-10 px-20">
						<label for="my-modal-2" class="btn bg-green-600 modal-button">Select plan</label>
					</div>
				</div>

			</div>







			<div class="grid flex-grow h-64 card  rounded-box place-items-center">



				<div class="w-full max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
					<h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Basic Plan</h5>
					<div class="flex items-baseline text-gray-900 dark:text-white">
						<span class="text-3xl font-semibold">$</span>
						<span class="text-5xl font-extrabold tracking-tight">20</span>
						<span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
					</div>
					<!-- List -->
					<ul role="list" class="space-y-5 my-7">
						<li class="flex space-x-3">
							<!-- Icon -->
							<svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<title>Check icon</title>
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Online help and support</span>
						</li>
						<li class="flex space-x-3">
							<!-- Icon -->
							<svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<title>Check icon</title>
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Get carbon Info of any area</span>
						</li>
						<li class="flex space-x-3">
							<!-- Icon -->
							<svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<title>Check icon</title>
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Get limited day to day offers</span>
						</li>
						<li class="flex space-x-3 line-through decoration-gray-500">
							<!-- Icon -->
							<svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<title>Check icon</title>
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span class="text-base font-normal leading-tight text-gray-500">Sketch Files</span>
						</li>
						<li class="flex space-x-3 line-through decoration-gray-500">
							<!-- Icon -->
							<svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<title>Check icon</title>
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span class="text-base font-normal leading-tight text-gray-500">API Access</span>
						</li>
						<li class="flex space-x-3 line-through decoration-gray-500">
							<!-- Icon -->
							<svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<title>Check icon</title>
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span class="text-base font-normal leading-tight text-gray-500">Complete documentation</span>
						</li>
						<li class="flex space-x-3 line-through decoration-gray-500">
							<!-- Icon -->
							<svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<title>Check icon</title>
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span class="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>
						</li>
					</ul>
					<div class="my-10 px-20">
						<label for="my-modal-2" class="btn bg-green-600 modal-button">Select plan</label>
					</div>
				</div>

			</div>









			<div class="grid flex-grow h-64 card  rounded-box place-items-center">



				<div class="w-full max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
					<h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Premium plan</h5>
					<div class="flex items-baseline text-gray-900 dark:text-white">
						<span class="text-3xl font-semibold">$</span>
						<span class="text-5xl font-extrabold tracking-tight">49</span>
						<span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
					</div>
					<!-- List -->
					<ul role="list" class="space-y-5 my-7">
						<li class="flex space-x-3">
							<!-- Icon -->
							<svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<title>Check icon</title>
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Online help and supportspan>
            </li>
						<li class="flex space-x-3">
							<!-- Icon -->
							<svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<title>Check icon</title>
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Get carbon Info of any area</span>
						</li>
						<li class="flex space-x-3">
							<!-- Icon -->
							<svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-green-600 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<title>Check icon</title>
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Get limited day to day offers</span>
						</li>
						<li class="flex space-x-3 line-through decoration-gray-500">
							<!-- Icon -->
							<svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<title>Check icon</title>
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span class="text-base font-normal leading-tight text-gray-500">Sketch Files</span>
						</li>
						<li class="flex space-x-3 line-through decoration-gray-500">
							<!-- Icon -->
							<svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<title>Check icon</title>
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span class="text-base font-normal leading-tight text-gray-500">API Access</span>
						</li>
						<li class="flex space-x-3 line-through decoration-gray-500">
							<!-- Icon -->
							<svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<title>Check icon</title>
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span class="text-base font-normal leading-tight text-gray-500">Complete documentation</span>
						</li>
						<li class="flex space-x-3 line-through decoration-gray-500">
							<!-- Icon -->
							<svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<title>Check icon</title>
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span class="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>
						</li>
					</ul>
					<div class="my-10 px-20">
						<label for="my-modal-2" class="btn bg-green-600 modal-button">Select plan</label>
					</div>
				</div>

			</div>


		</div>



		<input type="checkbox" id="my-modal-2" class="modal-toggle">
			<div class="modal">
				<h3 class="font-bold text-lg">Subscription Plan Alert!</h3>
				<div class="modal-box">
					<p>Are you sure you want to select this plan?</p>
					<div class="modal-action">
						<label for="my-modal-2" class="btn  bg-green-600 ">Yes</label>
						<label for="my-modal-2" class="btn  bg-green-600 ">No</label>
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
			<!-- Sidebar content here -->
			<div class="slider">

				<aside class="w-64" aria-label="Sidebar">
					<div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
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
								<a href="http://127.0.0.1:5174/Profile" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 margin:30px">
									<svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path>
									</svg>
									<span class="flex-1 ml-3 whitespace-nowrap">Profile</span>
								</a>
							</li>
							<li>
								<a href="http://127.0.0.1:5174/Rewards" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 margin:30px">
									<svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path>
									</svg>
									<span class="flex-1 ml-3 whitespace-nowrap">Rewards</span>
								</a>
							</li>

							<li>
								<a href="http://127.0.0.1:5174/Signup" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 margin:30px">
									<svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path>
									</svg>
									<span class="flex-1 ml-3 whitespace-nowrap">Sign up</span>
								</a>
							</li>
							<br/>
							<br/>
							<br/>
							<br/>
							<li>
								<a href="http://127.0.0.1:5174/Logout" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 margin:30px">
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






<style>
	.ContactCards {
		background-color: white;
		display: inline-blocks;
		margin-top: 25rem;
		padding: 1rem;
		border: 2px red;
	}

.body {
		background-color: white;
		text-align: center;
	}


</style>
