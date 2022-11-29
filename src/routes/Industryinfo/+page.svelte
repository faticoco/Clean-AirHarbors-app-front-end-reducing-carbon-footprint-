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

