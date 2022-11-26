<script>
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';
	import Hero from '../Hero.svelte';
	import Tailwind from '../Tailwind.svelte';
	import subscription from '$lib/assets/subscription.jpg';
</script>

<Header />

<div class="hero bg-base-200">
	<div class="hero-content flex-col lg:flex-row">
		<img src="{subscription}" class="max-w-sm h-100 rounded-lg shadow-2xl" />
		<div >
			<h1 class="text-5xl font-bold">Box Office News!</h1>
			<p class="py-6">
				Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
				quasi. In deleniti eaque aut repudiandae et a id nisi.
			</p>
			<button class="btn btn-primary">Get Started</button>
		</div>
	</div>
</div>

<br/>
<br/>

<div class="container">
	<h1 class="text-5xl font-bold">Subscription Plans!</h1>
	<div class="grid">
		<div class="card">
			<h2 class="card_title">Free</h2>
			<p class="pricing">20$<span class="small">/per month</span></p>
			<p>Save $9</p>
			<hr />
			<ul class="features">
				<li>Get carbon calculation</li>
				<li>Cannot access graphs</li>
				<li>Online help and support</li>
			</ul>
			<a href="#" class="cta_btn btn-success">Buy Now</a>
		</div>
		<div class="card">
			<h2 class="card_title">Basic</h2>
			<p class="pricing">39$<span class="small">/per month</span></p>
			<p>Save $15</p>
			<hr />
			<ul class="features">
				<li>Access to graphs</li>
				<li>Online help and support</li>
				<li>Get carbon Info of any area</li>
			</ul>
			<a href="#" class="cta_btn btn-success">Buy Now</a>
		</div>
		<div class="card">
			<h2 class="card_title">Premium</h2>
			<p class="pricing">60$<span class="small">/per month</span></p>
			<p>Save $25</p>
			<hr />
			<ul class="features">
				<li>Online help and support</li>
				<li>Get carbon Info of any area</li>
				<li>Get limited day to day offers</li>
			</ul>
			<a href="#" class="cta_btn btn-success">Buy Now</a>
		</div>
	</div>
</div>

<div class="ContactCards">
	<Footer />
</div>

<style>
	.ContactCards {
		background-color: white;
		display: inline-blocks;
		margin-top: 1rem;
		padding: 1rem;
		border: 2px red;
	}


	body {
		min-height: 100vh;
		background-color: white;
		background-repeat: no-repeat;
		background-size: cover;
		color: white;
		font-family: Roboto;
		font-size: 16px;
	}

	.container {
		background-color: white;
		max-width: 1320px;
		margin: 0 auto;
		padding: 0 2rem;
		height: 100%;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 4%;
		padding: 12% 0;
	}

	.card {
		padding: 40px;
		background: rgba(255, 255, 255, 0.1);
		border: 2px solid rgb(0, 0, 0);
		backdrop-filter: blur(10px);
		border-radius: 25px;
	}
	.card_title {
		font-weight: normal;
		font-size: 36px;
		margin-bottom: 20px;
	}

	.pricing {
		font-weight: normal;
		font-size: 96px;
	}

	.pricing .small {
		font-size: 16px;
	}

	hr {
		margin-top: 70px;
	}

	.features {
		margin: 40px 0;
		list-style-position: inside;
	}

	.features li {
		padding-bottom: 10px;
	}

	a.cta_btn {
		width: 100%;
		display: inline-block;
		text-align: center;
		background: green;
		border-radius: 29px;
		padding: 20px 0;
		color: white;
		text-decoration: none;
		letter-spacing: 2px;
		transition: background 0.3s ease;
	}

	a.cta_btn:hover {
		background: #000;
	}
	.link {
		position: fixed;
		background-color: #d12322;
		padding: 23px 40px;
		right: -99px;
		border-radius: 5px;
		top: 50%;
		transform: translateY(-50%);
		transform: rotate(-90deg);
		font-size: 18px;
		font-weight: 500;
		color: #fff;
		text-decoration: none;
		text-transform: capitalize;
		transition: all 0.1s ease-in-out;
	}

	.link i {
		padding-left: 7px;
	}

	.link:hover {
		text-decoration: underline;
		background-color: black;
	}

	@media only screen and (max-width: 1024px) {
		.grid {
			grid-template-columns: 1fr 1fr;
			gap: 2%;
		}
	}

	@media only screen and (max-width: 425px) {
		.grid {
			grid-template-columns: 1fr;
			gap: 2%;
			padding-bottom: 25%;
		}

		.container {
			padding: 0 1rem;
		}

		body {
			font-size: 14px;
		}

		.card {
			padding: 30px;
		}

		.card_title {
			font-size: 24px;
			margin-bottom: 12px;
		}

		.pricing {
			font-size: 52px;
		}

		hr {
			margin-top: 50px;
		}

		a.cta_btn {
			font-size: 11px;
		}
	}
</style>
