<script>
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';
	import Hero from '../Hero.svelte';
	import Tailwind from '../Tailwind.svelte';
	import subscription from '$lib/assets/subscription.jpg';
</script>

<style>

	.ContactCards {
	background-color: white;
	display: inline-blocks;
	margin-top: 1rem;
	padding: 1rem;
	border: 2px red;
	}

	.body{
	background-color:white;
	text-align: center;
	}

	.submit{
	margin-left: 20rem;
	}


</style>






<div class="drawer drawer-end">
	<input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<!-- Page content here -->

		<Header />



		<div class="body" >
			<h1 class="text-5xl font-extrabold dark:text-black" style="color:black">
				Profile Page
			</h1>
			<br/>
			<br/>
		</div>




		<form>
			<div class="grid gap-6 mb-6 md:grid-cols-2 px-80">
				<div>
					<label for="first_name" class="block mb-2 text-sm font-medium text-white-900 dark:text-white">First name</label>
					<input type="text" id="first_name" class="bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required="">
        </div>
				<div>
					<label for="last_name" class="block mb-2 text-sm font-medium text-white-900 dark:text-white">Last name</label>
					<input type="text" id="last_name" class="bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required="">
        </div>
				<div>
					<label for="company" class="block mb-2 text-sm font-medium text-white-900 dark:text-white">Company</label>
					<input type="text" id="company" class="bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required="">
        </div>
				<div>
					<label for="phone" class="block mb-2 text-sm font-medium text-white-900 dark:text-white">Phone number</label>
					<input type="tel" id="phone" class="bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required="">
        </div>
				<div>
					<label for="website" class="block mb-2 text-sm font-medium text-white-900 dark:text-white">Website URL</label>
					<input type="url" id="website" class="bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required="">
        </div>
				<div>
					<label for="visitors" class="block mb-2 text-sm font-medium text-white-900 dark:text-white">Unique visitors (per month)</label>
					<input type="number" id="visitors" class="bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="">
        </div>
			</div>
			<div class="mb-6 px-80">
				<label for="email" class="block mb-2 text-sm font-medium text-white-900 dark:text-white">Email address</label>
				<input type="email" id="email" class="bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required="">
    </div>
			<div class="mb-6 px-80">
				<label for="password" class="block mb-2 text-sm font-medium text-white-900 dark:text-white">Password</label>
				<input type="password" id="password" class="bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required="">
    </div>
			<div class="mb-6 px-80">
				<label for="confirm_password" class="block mb-2 text-sm font-medium text-white-900 dark:text-white">Confirm password</label>
				<input type="password" id="confirm_password" class="bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required="">
    </div>
			<div class="flex items-start mb-6 px-80">
				<div class="flex items-center h-5">
					<input id="remember" type="checkbox" value="" class="w-4 h-4 border border-white-300 rounded bg-white-50 focus:ring-3 focus:ring-blue-300 dark:bg-white-700 dark:border-white-600 dark:focus:ring-blue-600 dark:ring-offset-white-800" required="">
        </div>
				<label for="remember" class="ml-2 text-sm font-medium text-white-900 dark:text-white-300">
					I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.
				</label>
			</div>
			<div class="px-96 submit">
				<div class="my-10">
					<label for="my-modal-2" class="btn bg-green-600 modal-button">Save Profile</label>
				</div>
			</div>
		</form>






		<input type="checkbox" id="my-modal-2" class="modal-toggle">
			<div class="modal">
				<h3 class="font-bold text-lg">Profile information updated!</h3>
				<div class="modal-box">
					<p>Do you want to save changes to your profile?</p>
					<div class="modal-action">
						<label for="my-modal-2" class="btn  bg-green-600">Yes</label>
						<label for="my-modal-2" class="btn  bg-green-600">No</label>
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
					<div class="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
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



