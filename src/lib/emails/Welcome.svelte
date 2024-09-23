<script>
	import { emit } from 'process';
	import { Button, Hr, Html, Text } from 'svelte-email';

	export let name = 'World';
	export let email = '';
	export let subject = '';
	export let phone = '';
	export let message = '';
</script>

<Html lang="en">
	<Text class="bg-primary-400">
		Subject: {subject}
		Hi, {name} with phone:{phone} and email {email} has send a message:{message}
	</Text>
	<Hr />
	<Button href="https://svelte.dev">Visit Svelte</Button>
</Html>
