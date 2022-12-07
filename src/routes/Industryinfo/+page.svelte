<script>
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';
	import Hero from '../Hero.svelte';
	import Tailwind from '../Tailwind.svelte';
	import reduction from '$lib/assets/reduction_plan.jpg';
</script>
<Tailwind />

<style>

	.ContactCards {
	background-color: white;
	display: inline-blocks;
	margin-top: 1rem;
	padding: 1rem;
	border: 2px red;
	}


</style>



<div class="drawer drawer-end">
	<input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<Header />



		<div class="body px-80" >
			<h1 class="text-5xl font-extrabold dark:text-black " style="color:black">
				Industry Information
			</h1>

		</div>

		<br/>
		<br/>

		<form class="px-80">
			<div class="mb-6">
				<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Industry name</label>
				<input type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600-500 focus:border-green-600-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-600-500 dark:focus:border-green-600-500 dark:shadow-sm-light" required="">
  </div>
			<div class="mb-6">
				<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Industry email</label>
				<input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600-500 focus:border-green-600-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-600-500 dark:focus:border-green-600-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required="">
  </div>
			<div class="mb-6">
				<label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Industry code</label>
				<input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600-500 focus:border-green-600-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-600-500 dark:focus:border-green-600-500 dark:shadow-sm-light" required="">
  </div>
			<div class="flex items-start mb-6">
				<div class="flex items-center h-5">
					<input id="terms" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-green-600-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600-600 dark:ring-offset-gray-800" required="">
    </div>
				<label for="terms" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
					I agree with the <a href="#" class="text-green-600-600 hover:underline dark:text-green-600-500">terms and conditions</a>
				</label>
			</div>
			<label for="my-modal-2" class="btn bg-green-600 modal-button">SEND WARNING!</label>

		</form>

		<br/>
		<br/>
		<br/>
		<br/>

		<div class="body px-80" >
			<h1 class="text-4xl font-semibold dark:text-black text-4xl" style="color:black">
				Nearby industries
			</h1>

		</div>

		<br/>
		<br/>

		<div class="overflow-x-auto w-full px-20">
			<table class="table w-full">
				<!-- head -->
				<thead>
					<tr>
						<th>

						</th>
						<th>Name</th>
						<th>About</th>
						<th>Contact</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<!-- row 1 -->
					<tr>
						<th>

						</th>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-squircle w-12 h-12">
										<img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
									</div>
								</div>
								<div>
									<div class="font-bold">Victory Pipe Industries Pvt Ltd.</div>
									<div class="text-sm opacity-50">United States</div>
								</div>
							</div>
						</td>
						<td>
							One of the leading Manufacturers of Mild Steel (M.S) Galvanized Iron (G.I) Pipes, <br/>  Steel Tubes & Profiles
							<br/>
							<span class="badge badge-ghost badge-sm"> Support Team</span>
						</td>
						<td>xyz@gmail.com</td>
						<th>
							<button class="btn btn-ghost btn-xs">details</button>
						</th>
					</tr>
					<!-- row 2 -->
					<tr>
						<th>

						</th>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-squircle w-12 h-12">
										<img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
									</div>
								</div>
								<div>
									<div class="font-bold">Elektro Control Industries (Pvt) Ltd.</div>
									<div class="text-sm opacity-50">China</div>
								</div>
							</div>
						</td>
						<td>
							An engineering solutions provider company specialized in design, development, integration and <br/> production of customized products
							<br/>
							<span class="badge badge-ghost badge-sm">Engineering</span>
						</td>
						<td>xyz@gmail.com</td>
						<th>
							<button class="btn btn-ghost btn-xs">details</button>
						</th>
					</tr>
				</tbody>



			</table>
		</div>

		<br/>
		<br/>
		<input type="checkbox" id="my-modal-2" class="modal-toggle">
			<div class="modal">
				<div class="modal-box">
					<p>Are you sure you want to send warning to this industry?</p>
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


