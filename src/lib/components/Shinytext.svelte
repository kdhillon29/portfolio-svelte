<script lang="ts">
	import { cn } from '$lib/utils';

	export let shimmerWidth = 100;
	let className: any = '';
	export { className as class };

	import logo from '$lib/assets/logo2.png?enhanced';
</script>

<p
	style:--shimmer-width="{shimmerWidth}px"
	class={cn(
		'mx-auto max-w-md font-bold text-xl    text-primary-900/80 dark:text-primary-600/50 ',

		// Shimmer effect
		'animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]',

		// Shimmer gradient
		'bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent  dark:via-white/80',

		className
	)}
>
	<slot>
		<div class="flex justify-between text-xl md:text-3xl border-b p-2 shadow-lg rounded-xl">
			<b class="skew-x-12">K</b>
			<enhanced:img class="w-8 h-8 animate-pulse" src={logo} />

			<b class="text-violet-600 skew-y-12">D</b>
		</div>
	</slot>
</p>
