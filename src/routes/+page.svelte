<script>
	import Tailwind from './Tailwind.svelte';
	import login from '$lib/assets/pexels-anna-shvets-5029853.jpg';
</script>

<Tailwind />

<!-- component -->
<div class="relative flex h-full w-full">
	<div class="h-screen w-1/2 bg-white">
		<div class="mx-auto flex h-full w-2/3 flex-col justify-center text-black xl:w-1/2">
			<div>
				<p class="text-2xl">Login|</p>
				<p>please login to continue|</p>
			</div>
			<div class="my-6">
				<button
					class="flex w-full justify-center rounded-3xl border-none bg-white p-1 text-black hover:bg-gray-200 sm:p-2"
					><img src="https://freesvg.org/img/1534129544.png" class="mr-2 w-6 object-fill" />Sign in
					with Google</button
				>
			</div>
			<div>
				<fieldset class="border-t border-solid border-gray-600">
					<legend class="mx-auto px-2 text-center text-sm">Or login via our secure system</legend>
				</fieldset>
			</div>
			<div class="mt-10">
				<form>
					<div>
						<label class="mb-2.5 block font-extrabold" for="email">Email</label>
						<input
							type="email"
							id="email"
							class="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
							placeholder="mail@user.com"
						/>
					</div>
					<div class="mt-4">
						<label class="mb-2.5 block font-extrabold" for="email">Password</label>
						<input
							type="password"
							id="email"
							class="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow"
						/>
					</div>
					<div class="mt-4 flex w-full flex-col justify-between sm:flex-row">
						<!-- Remember me -->
						<div>
							<input type="checkbox" id="remember" /><label for="remember" class="mx-2 text-sm"
								>Remember me</label
							>
						</div>
						<!-- Forgot password -->
						<div>
							<a href="#" class="text-sm hover:text-gray-200">Forgot password</a>
						</div>
					</div>
					<div class="my-10">
						<button class="w-full rounded-full bg-black p-5 hover:bg-green-800 " style="color:white">Login</button>
					</div>
				</form>
			</div>
		</div>
	</div>
	<div class="h-screen w-1/2 bg-white">
		<img
			src={login} 
			class="h-full w-full object-scale-down"
		/>
	</div>
</div>

<!-- The button to open modal -->
<label for="my-modal" class="btn">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <label for="my-modal" class="btn">Yay!</label>
    </div>
  </div>
</div>

<label for="my-modal-2" class="btn btn-primary modal-button">open modal</label> 
<input type="checkbox" id="my-modal-2" class="modal-toggle"> 
<div class="modal">
  <div class="modal-box">
    <p>Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea quasi eligendi. Saepe velit autem minima.</p> 
    <div class="modal-action">
      <label for="my-modal-2" class="btn btn-primary">Accept</label> 
      <label for="my-modal-2" class="btn">Close</label>
    </div>
  </div>
</div>