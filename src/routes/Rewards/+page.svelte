<script>
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';
	import Hero from '../Hero.svelte';
	import Tailwind from '../Tailwind.svelte';
	import rewards from '$lib/assets/green_card_rewards.jpg';
	import foot from '$lib/assets/carbon-footprint.png';
</script>

<Header />

<div class="body">
	<h1 class="text-5xl font-extrabold dark:text-black pl-20" style="color:black">Rewards</h1>
</div>

<br />

<div class="flex flex-col px-20">
	<ul class="steps">
		<li class="step step-info">Fly to moon</li>
		<li class="step step-info">Shrink the moon</li>
		<li class="step step-info">Grab the moon</li>
		<li class="step step-error" data-content="?">Sit on toilet</li>
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
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
					/></svg
				>
			</div>
			<div class="stat-title">Total Likes</div>
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
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 10V3L4 14h7v7l9-11h-7z"
					/></svg
				>
			</div>
			<div class="stat-title">Page Views</div>
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
			<div class="stat-title">Downloads</div>
			<div class="stat-value">31K</div>
			<div class="stat-desc">From January 1st to February 1st</div>
		</div>

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
			<div class="stat-title">New Registers</div>
			<div class="stat-value">1,200</div>
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
			<div class="radial-progress" style="--value:0;">0%</div>
			<div class="radial-progress" style="--value:20;">20%</div>
			<div class="radial-progress" style="--value:60;">60%</div>
			<div class="radial-progress" style="--value:80;">80%</div>
			<div class="radial-progress" style="--value:100;">100%</div>
		</div>
	</div>
	
</div>

<br />

<Footer />
