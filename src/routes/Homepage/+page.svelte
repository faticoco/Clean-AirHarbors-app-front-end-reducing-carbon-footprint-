<script>
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';
	import Hero from '../Hero.svelte';
	import Tailwind from '../Tailwind.svelte';
	import carousel1 from '$lib/assets/carousel1.png';
    import carousel2 from '$lib/assets/carousel2.png';
    import carousel3 from '$lib/assets/carousel3.png';
    import goals from '$lib/assets/goals.png';
</script>

<style>
	.ContactCards {
	display: inline-blocks;
	margin-top: 1rem;
	padding: 1rem;
	border: 2px red;
	}

	.body{
	background-color:white;
	text-align: center;
	}

    .body1{
    background-color:white;
    align-items: center;
    }

    .goals{
     background-color:white;
	text-align: left;
    width:50;
    height:50;
    }

	.flex-container {
	display: flex;
	background-color: white;

	}

    .preview{
     background-color:white;
     text-align: center;
	 align-items: center;
    }

</style>

<Header />


<div class="body" >
	<h1 class="text-5xl font-extrabold dark:text-black" style="color:black">
		Clean Air Harbours
	</h1>
</div>


<div class="text-sm breadcrumbs">
  <ul>
    <li><a>Home</a></li> 
  </ul>
</div>




<div id="default-carousel" class="relative" data-carousel="static">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
         <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <span class="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
            <img src="{carousel1}" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="haha">
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="{carousel2}" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="haha">
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="{carousel3}" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="haha3">
        </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
    </div>
    <!-- Slider controls -->
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>








<div class="body1" >

   

<div class="flex flex-col w-full h-150 lg:flex-row dark:text-black">
  <div class="grid flex-grow h-150 w-30 card bg-white-300  rounded-box place-items-center dark:text-black" style="color:black">
  
      <h1 class="text-2xl font-extrabold dark:text-black" style="color:black">
	              	    Our Goals
      </h1>
      Help the government organisations to reduce carbon level <br/> from the environment <br/> <br/>  Provide the opportunity to the common man to reduce <br/> carbon footprint on a personal level and move towards  <br/> a cleaner greener and carbon free environment <br/></div> 
 
 <div class="divider lg:divider-horizontal">OR</div> 
  
  <div class="grid flex-grow h-150 card bg-white-300 rounded-box place-items-center dark:text-black">
    <img src="{goals}" class="absolute block w-30 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="haha3">
  </div>
</div>


</div>



<br/>
<br/>
<br/>




<div class="preview">

<h1 class="text-2xl font-extrabold dark:text-black" style="color:black">
	              	Reminder Preview
</h1>

        <div >

                   <p>
                    Subscribe to our App to avail the reminders feature <br/>
                    Made to remind you of your daily routine tasks <br/>
                    to reduce your carbon footprint <br/>
                    </p>
         </div>
    
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                 Preview
              </span>
        </button>

</div>






<div class="ContactCards">
	
<Footer />
</div>