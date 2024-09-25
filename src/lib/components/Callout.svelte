<div class="callout">
	<slot />
</div>

<style>
	.callout {
		@apply bg-secondary-200;
		padding: 2rem 1rem;
		width: calc(100% + 2rem);
		max-width: unset;
		margin: 2rem 0 2rem -1rem;
		font-style: italic;
		border-radius: 0.125rem;

		@media (min-width: 48rem) {
			width: calc(100% + 4rem);
			margin: 2rem 0 2rem -2rem;
			padding: 2rem;
		}
	}
</style>
