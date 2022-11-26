<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import Hero from './Hero.svelte';
	import Tailwind from './Tailwind.svelte';
	import graph from '$lib/assets/graph.png';
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

	.slider{
	margin: 10px;
	padding: 20px;
	font-size: 30px;
	}

	.img{
	margin-top: 40px;
	}

	.graph
	{

	margin-left: 40px;
	margin-right: 40px;
	margin-top: 60px;
	padding: 40px;
	font-size: 20px;
	}


	.flex-container {;
	display: flex;
	background-color: white;

	}


	.v54_231 {
	width: 862px;
	height: 369px;
	background: linear-gradient(rgba(77,212,155,1), rgba(112,205,110,1));
	opacity: 1;
	position: absolute;
	top: 0px;
	left: 0px;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
	border-bottom-left-radius: 15px;
	border-bottom-right-radius: 15px;
	overflow: hidden;
	}
	.v54_232 {
	width: 334px;
	color: rgba(0,0,0,1);
	position: absolute;
	top: 49px;
	left: 59px;
	font-family: Inter;
	font-weight: Bold;
	font-size: 24px;
	opacity: 1;
	text-align: left;
	}
	.v54_235 {
	width: 386px;
	color: rgba(0,106,61,1);
	position: absolute;
	top: 116px;
	left: 59px;
	font-family: Inter;
	font-weight: Bold;
	font-size: 20px;
	opacity: 1;
	text-align: left;
	}
	.v54_249 {
	width: 386px;
	color: rgba(0,106,61,1);
	position: absolute;
	top: 229px;
	left: 59px;
	font-family: Inter;
	font-weight: Bold;
	font-size: 20px;
	opacity: 1;
	text-align: left;
	}
	.name {
	color: #fff;
	}
	.name {
	color: #fff;
	}
	.v336_4100 {
	width: 862px;
	height: 369px;
	background: linear-gradient(rgba(77,212,155,1), rgba(112,205,110,1));
	opacity: 1;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
	border-bottom-left-radius: 15px;
	border-bottom-right-radius: 15px;
	overflow: hidden;
	}

	.v336_4101 {
	width: 334px;
	color: rgba(0,0,0,1);
	position: absolute;
	top: 49px;
	left: 59px;
	font-family: Inter;
	font-weight: Bold;
	font-size: 24px;
	opacity: 1;
	text-align: left;
	}
	.v336_4102 {
	width: 386px;
	color: rgba(0,106,61,1);
	position: absolute;
	top: 108px;
	left: 59px;
	font-family: Inter;
	font-weight: Bold;
	font-size: 24px;
	opacity: 1;
	text-align: left;
	}
	.v336_4103 {
	width: 432px;
	color: rgba(0,106,61,1);
	position: absolute;
	top: 229px;
	left: 59px;
	font-family: Inter;
	font-weight: Bold;
	font-size: 24px;
	opacity: 1;
	text-align: left;
	}
	.name {
	color: #fff;
	}
	.name {
	color: #fff;
	}

</style>

<Header />
<div class="body" >
	<h1 class="text-5xl font-extrabold dark:text-black" style="color:black">
		Carbon Info
	</h1>

</div>

<div class="flex-container">
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
						<a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
							<svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
							</svg>
							<span class="flex-1 ml-3 whitespace-nowrap">Profile</span>
							<span class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
						</a>
					</li>
					<li>
						<a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
							<svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
								<path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
							</svg>
							<span class="flex-1 ml-3 whitespace-nowrap">Rewards</span>
							<span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
						</a>
					</li>

					<li>
						<a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
							<svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path>
							</svg>
							<span class="flex-1 ml-3 whitespace-nowrap">Sign up</span>
						</a>
					</li>
					<li>
						<a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 margin:30px">
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

	<div class="graph" >


		<form class="flex items-center">
			<label for="simple-search" class="sr-only">Search</label>
			<div class="relative w-m">
				<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<svg aria-hidden="true" class="w-5 h-5 text-gray-400 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
					</svg>
				</div>
				<input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-400 dark:focus:border-green-400" placeholder="Enter Location" required="">
    </div>
			<button type="submit" class="p-2.5 ml-2 text-sm font-medium text-green bg-green-400 rounded-lg border border-green-700 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-400 dark:hover:bg-green-400 dark:focus:ring-green-800">
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
				</svg>
				<span class="sr-only">Search</span>
			</button>



			<span class="text-sm font-medium text-green-600 dark:text-green-500">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;          Carbon Percentage   </span>
			<div class="w-60 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
				<div class="h-5 bg-green-400 rounded" style="width: 70%"></div>
			</div>
			<span class="text-sm font-medium text-green-600 dark:text-green-500">70%</span>

		</form>


		<img class="max-w-full h-auto img" src="{graph}" alt="image description" />

	</div >


</div>



<div class="ContactCards">
	<Footer />
</div>