<script>
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';
	import Hero from '../Hero.svelte';
	import Tailwind from '../Tailwind.svelte';
	import rewards from '$lib/assets/green_card_rewards.jpg';
	import foot from '$lib/assets/carbon-footprint.png';
</script>


<div class="drawer drawer-end">
	<input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<!-- Page content here -->


		<Header />

		<div class="body">
			<h1 class="text-5xl font-extrabold dark:text-black pl-20" style="color:black">Rewards</h1>
		</div>

		<br />

		<div class="flex flex-col px-20">
			<ul class="steps">
				<li class="step step-info">Free clean environment kit</li>
				<li class="step step-info">Vegetable food tokens of your favourite restraunts for the whole week</li>
				<li class="step step-info">Paper bags supply for whole month</li>
				<li class="step step-error" data-content="?">Coming soon</li>
			</ul>
			<br/>
			<br/>
			<div class="stats shadow items-end">
				<div class="stat">
					<div class="stat-figure text-primary">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="inline-block w-8 h-8 stroke-current"
					>
							<path
							   stroke-linecap="round"
							   stroke-linejoin="round"
							   stroke-width="2"
							   d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
					/>
						</svg
				>
					</div>
					<div class="stat-title">Winning participants</div>
					<div class="stat-value text-primary">25.6K</div>
					<div class="stat-desc">21% more than last month</div>
				</div>

				<div class="stat">
					<div class="stat-figure text-secondary">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="inline-block w-8 h-8 stroke-current"
					>
							<path
							   stroke-linecap="round"
							   stroke-linejoin="round"
							   stroke-width="2"
							   d="M13 10V3L4 14h7v7l9-11h-7z"
					/>
						</svg
				>
					</div>
					<div class="stat-title">Total participants</div>
					<div class="stat-value text-secondary">2.6M</div>
					<div class="stat-desc">21% more than last month</div>
				</div>

				<div class="stat">
					<div class="stat-figure text-secondary">
						<div class="avatar online">
							<div class="w-16 rounded-full">
								<img src="https://placeimg.com/128/128/people" />
							</div>
						</div>
					</div>
					<div class="stat-value">86%</div>
					<div class="stat-title">Tasks done</div>
					<div class="stat-desc text-secondary">31 tasks remaining</div>
				</div>
			</div>
			<br />

			<div class="stats shadow">
				

				<div class="stat place-items-center">
					<div class="stat-title">Users</div>
					<div class="stat-value text-secondary">4,200</div>
					<div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
				</div>

				<div class="stat place-items-center">
					<div class="stat-title">New Registers</div>
					<div class="stat-value">1,200</div>
					<div class="stat-desc">↘︎ 90 (14%)</div>
				</div>
			</div>

			<br />

			<div class="stats stats-vertical lg:stats-horizontal shadow">
				<div class="stat">
					<div class="stat-title">Downloads</div>
					<div class="stat-value">31K</div>
					<div class="stat-desc">Jan 1st - Feb 1st</div>
				</div>

				<div class="stat">
					<div class="stat-title">New Users</div>
					<div class="stat-value">4,200</div>
					<div class="stat-desc">↗︎ 400 (22%)</div>
				</div>

				<div class="stat">
					<div class="stat-title">Final reward winners for the month</div>
					<div class="stat-value">1,900</div>
					<div class="stat-desc">↘︎ 90 (14%)</div>
				</div>
			</div>
			<br />
			<br />
			<div class="flex  justify-between ">
				<div class="flex gap-5">
					<div>
						<span class="countdown font-mono text-4xl">
							<span style="--value:15;" />
						</span>
						days
					</div>
					<div>
						<span class="countdown font-mono text-4xl">
							<span style="--value:10;" />
						</span>
						hours
					</div>
					<div>
						<span class="countdown font-mono text-4xl">
							<span style="--value:24;" />
						</span>
						min
					</div>
					<div>
						<span class="countdown font-mono text-4xl">
							<span style="--value:59;" />
						</span>
						sec
					</div>
				</div>
				<div>
					
					<div class="radial-progress" style="--value:80;">80%</div>
					
				</div>
			</div>

		</div>

		<br />

		<Footer />








	</div>
	<div class="drawer-side">
		<label for="my-drawer-4" class="drawer-overlay"></label>
		<ul class="menu p-4 w-80 bg-base-100 text-base-content">
			<!-- Sidebar content here -->
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

