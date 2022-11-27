<script>
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';
	import Hero from '../Hero.svelte';
	import Tailwind from '../Tailwind.svelte';
	import rewards from '$lib/assets/green_card_rewards.jpg';
	import foot from '$lib/assets/carbon-footprint.png';
</script>

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


<div class="flex flex-col w-full border-opacity-70">

  <div class="grid h-56  rounded-box place-items-center">
  
			<img src={rewards} class="h-full object-scale-down">
  
  </div>
 
 
 <div class="divider"> </div>

  <div class="flex flex-col w-full lg:flex-row">
  <div class="grid  h-56 w-xl bg-white-600  rounded-box place-items-center">
  
	
  
  </div> 
  <div class="divider lg:divider-horizontal"> </div> 

  <div class="grid  h-56 card rounded-box place-items-center">
  
  	<img src={foot} class="h-full object-scale-down rounded-lg shadow-2xl">
		
		
</div>
 &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

  <div class="grid h-56  w-full  rounded-box place-items-center">


	  <div class="hero  bg-white" >
		  <div class="hero-content text-left text-neutral-content">
			  <div class="max-w-md">
				  <h1 class="mb-5 text-5xl font-bold" style="color:black">This week's tasks performed by you!</h1>
			  </div>
		  </div>
	  </div>
	  
	  
		 <div class="w-full bg-green-600 rounded-full dark:bg-green-200">
    <div class="bg-green-200 text-xs font-medium text-green-600 text-center p-0.5 leading-none rounded-full" style="width: 45%"> 45%</div>
  </div>


</div>
</div>


</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<div class="flex w-full">
	<div class="grid h-20 flex-grow card  rounded-box place-items-center">
		<div class="flex w-full">
			
			<div class="grid h-20 flex-grow card  rounded-box place-items-center">
				<br/>
				<div class="hero  bg-white" >
					<div class="hero-content text-center text-neutral-content">
						<div class="max-w-md">
							<h1 class="mb-5 text-2xl font-semibold  text-green-600" >Your progress to Free environment kit!</h1>
						</div>
					</div>
				</div>
				<br/>

			</div>
			<br/>
			<br/>
			<br/>
			<br/>
			<div class="radial-progress  border-white-600  bg-green-600 text-white" style="--value:70; --size:12rem; --thickness: 2rem;">70%</div>
			<br/>
			<br/>
		
			
			
			
		</div>
		
		
	</div>
	
	

	
	
	
	<div class="grid h-20 flex-grow card  rounded-box place-items-center">
		<br/>
		<br/>
		<br/>
				<div class="stats shadow">

				<div class="stat">
					<div class="stat-figure text-primary">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
						</svg>
					</div>
					<div class="stat-title">Total tasks</div>
					<div class="stat-value text-primary">25.6K</div>
					<div class="stat-desc">21% more than last month</div>
				</div>

				<div class="stat">
					<div class="stat-figure text-green-600">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
						</svg>
					</div>
					<div class="stat-title">Participants for kit</div>
					<div class="stat-value text-green-600">2.6M</div>
					<div class="stat-desc">21% more than last month</div>
				</div>

				<div class="stat">
					<div class="stat-figure text-green-600">
						<div class="avatar online">
							<div class="w-16 rounded-full">
								<img src="https://placeimg.com/128/128/people" />
							</div>
						</div>
					</div>
					<div class="stat-value">86%</div>
					<div class="stat-title">Tasks done</div>
					<div class="stat-desc text-green-600">31 tasks remaining</div>
				</div>

	</div>
		
	</div>
	
	
</div>

<br/>
<br/>
<br/>
<br/>
<br/>



<div class="divider"></div>





<div class="flex w-full">
	<div class="grid h-20 flex-grow card  rounded-box place-items-center">
		<div class="flex w-full">

			<div class="grid h-20 flex-grow card  rounded-box place-items-center">
				<br/>
				<div class="hero  bg-white" >
					<div class="hero-content text-center text-neutral-content">
						<div class="max-w-md">
							<h1 class="mb-5 text-2xl font-semibold  text-green-600" >Vegetable food tokens of your favourite restraunts for the whole week!</h1>
						</div>
					</div>
				</div>
				<br/>

			</div>
			<br/>
			<br/>
			<br/>
			<br/>
			<div class="radial-progress  border-white-600  bg-green-600 text-white" style="--value:30; --size:12rem; --thickness: 2rem;">30%</div>
			<br/>
			<br/>




		</div>


	</div>






	<div class="grid h-20 flex-grow card  rounded-box place-items-center">
		<br/>
		<br/>
		<br/>
		<div class="stats shadow">

			<div class="stat">
				<div class="stat-figure text-primary">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
					</svg>
				</div>
				<div class="stat-title">Total tasks</div>
				<div class="stat-value text-primary">12.2K</div>
				<div class="stat-desc">9% more than last month</div>
			</div>

			<div class="stat">
				<div class="stat-figure text-green-600">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
					</svg>
				</div>
				<div class="stat-title">Participants for kit</div>
				<div class="stat-value text-green-600">0.9M</div>
				<div class="stat-desc">11% more than last month</div>
			</div>

			<div class="stat">
				<div class="stat-figure text-green-600">
					<div class="avatar online">
						<div class="w-16 rounded-full">
							<img src="https://placeimg.com/128/128/people" />
						</div>
					</div>
				</div>
				<div class="stat-value">55%</div>
				<div class="stat-title">Tasks done</div>
				<div class="stat-desc text-green-600">17 tasks remaining</div>
			</div>

		</div>

	</div>


</div>

<br/>
<br/>
<br/>
<br/>
<br/>


<div class="divider"></div>





<div class="flex w-full">
	<div class="grid h-20 flex-grow card  rounded-box place-items-center">
		<div class="flex w-full">

			<div class="grid h-20 flex-grow card  rounded-box place-items-center">
				<br/>
				<div class="hero  bg-white" >
					<div class="hero-content text-center text-neutral-content">
						<div class="max-w-md">
							<h1 class="mb-5 text-2xl font-semibold  text-green-600" >Paper bags supply for whole month!</h1>
						</div>
					</div>
				</div>
				<br/>

			</div>
			<br/>
			<br/>
			<br/>
			<br/>
			<div class="radial-progress  border-white-600  bg-green-600 text-white" style="--value:85; --size:12rem; --thickness: 2rem;">85%</div>
			<br/>
			<br/>




		</div>


	</div>






	<div class="grid h-20 flex-grow card  rounded-box place-items-center">
		<br/>
		<br/>
		<br/>
		<div class="stats shadow">

			<div class="stat">
				<div class="stat-figure text-primary">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
					</svg>
				</div>
				<div class="stat-title">Total tasks</div>
				<div class="stat-value text-primary">104.3K</div>
				<div class="stat-desc">59% more than last month</div>
			</div>

			<div class="stat">
				<div class="stat-figure text-green-600">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
					</svg>
				</div>
				<div class="stat-title">Participants for kit</div>
				<div class="stat-value text-green-600">10.9M</div>
				<div class="stat-desc">78% more than last month</div>
			</div>

			<div class="stat">
				<div class="stat-figure text-green-600">
					<div class="avatar online">
						<div class="w-16 rounded-full">
							<img src="https://placeimg.com/128/128/people" />
						</div>
					</div>
				</div>
				<div class="stat-value">89%</div>
				<div class="stat-title">Tasks done</div>
				<div class="stat-desc text-green-600">3 tasks remaining</div>
			</div>

		</div>

	</div>


</div>

<br/>
<br/>
<br/>
<br/>
<br/>