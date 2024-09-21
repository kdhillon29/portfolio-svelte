<script>
	// @ts-nocheck

	import Typewriter from 'svelte-typewriter';
	import { quintOut } from 'svelte/easing';
	import { fade, fly, scale, slide } from 'svelte/transition';
	import { M } from 'svelte-motion';
	import { onMount } from 'svelte';
	import Socials from './Socials.svelte';

	let ready = false;
	import ProfileImg from '$lib/assets/design3.png?enhanced';
	onMount(() => (ready = true));
</script>

<div class="   grid md:grid-cols-2 md:w-[90%] mx-auto md:gap-12">
	{#if ready}
		<div
			class="  flex flex-col gap-3 md:gap-8 p-2 max-sm:bg-[url('/assets/images/waves.svg')] bg-cover bg-left"
		>
			<div
				transition:fly={{
					delay: 250,
					duration: 2000,
					x: -100,
					y: -200,
					opacity: 0,
					easing: quintOut
				}}
				class=" "
			>
				<!-- <h1 transition:fly="{{ delay: 250, duration: 3000, x: -200, y: 500, opacity: 0.5, easing: quintOut }}" >Welcome to Kanwar DHillon Portfolio</h1> -->

				<p class="text-primary-200 md:text-5xl text-3xl tracking-tight my-4">
					HEY, I AM <br />
					<span class="text-primary-500">Kanwar Dhillon</span>
				</p>
				<div class="text-3xl font-semibold text-secondary-100">
					<Typewriter {...{ mode: 'loop', element: 'b' }}>
						<b> Front-End </b>
						<b> JavaScript </b>
						<b> HTML5,CSS3 </b>
						<b> NodeJs </b>
					</Typewriter>
				</div>
			</div>
			<div transition:fade={{ delay: 1000, duration: 2000 }}>
				<p class="text-secondary-100 md:text-2xl text-lg tracking-wide leading-6">
					I am a passionate fullstack developer with over 5 years of experience.
				</p>
			</div>
			<div
				transition:scale={{
					delay: 1500,
					duration: 2000,
					opacity: 0,
					start: 0.5,
					easing: quintOut
				}}
			>
				<Socials />
			</div>
		</div>
		<div
			class=" hidden md:block mt-[-10px]"
			transition:scale={{
				delay: 1500,
				duration: 1000,
				opacity: 0.8,
				start: 0.9,
				easing: quintOut
			}}
		>
			<enhanced:img width="500" height="500" src={ProfileImg} alt="some alt text" />
			<!-- <img src="./images/profpic.png" class="w-[300px] md:w-[450px]" alt="profile" /> -->
		</div>
	{/if}
</div>
<!-- <div class="mt-24 max-w-[1200px] mx-auto relative">
        <div class="grid md:grid-cols-2 place-items-center gap-8">
            <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            >
                <!-- <TypeAnimation
                    sequence={[
                        "Fullstack Dev",
                        1000,
                        "Webdesigner",
                        1000,
                        "Consultant",
                        1000
                    ]}
                    speed={50}
                    repeat={Infinity}
                    class="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
                /> -->

<!-- <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                class="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
                >
                    HEY, I AM <br/>
                    <span class="text-purple-500">JOHN DOE</span>
                </motion.p> -->

<!-- <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                class="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
                >
                    I am a passionate fullstack developer with over 5 years of experience.
                </motion.p>

                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5 }}
                class="flex flex-row items-center gap-6 my-4 md:mb-0"
                >
                    <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                        class="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                                     border-purple-400 rounded-xl"     
                    >
                        Download CV
                    </motion.button>

                    <div class="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
                        <motion.a whileHover={{ scale: 1.2 }} href="#">
                            <AiOutlineGithub/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href="#">
                            <AiOutlineLinkedin/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href="#">
                            <AiOutlineInstagram/>
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div> -->

<!-- <motion.img 
                src={profilepic}
                class="w-[300px] md:w-[450px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            />
        </div> -->

<!-- <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2 }}
            class="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
        >
            <p class="text-gray-200 mr-6">My Tech Stack</p>
            <DiHtml5 class="text-orange-600 mx-2" />
            <DiCss3 class="text-blue-600 mx-2" />
            <DiJavascript1 class="text-yellow-500 mx-2" />
            <DiReact class="text-blue-500 mx-2" />
            <DiNodejsSmall class="text-green-500 mx-2" />

        </motion.div>

        <div class="absolute inset-0 hidden md:block">
            <ShinyEffect left={0} top={0} size={1400} />
        </div> -->

<!-- </div> -->
