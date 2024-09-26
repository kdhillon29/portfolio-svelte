---
title: 'Javascript Functions for beginners'
date: '2023-04-28'
updated: '2024-09-24'
published: true
categories:
  - 'javascript'
  - 'markdown'
  - 'svelte'
coverImage: 'https://media.istockphoto.com/id/1284271878/photo/javascript-inscription-against-laptop-and-code-background-learn-javascript-programming.jpg?s=1024x1024&w=is&k=20&c=iGiUPCesPFZq06F0eE_I72w5Z7dW_LgUeciGmyONLcM='
description: 'Itroduction to JavaScript functions'
author: 'Kan Dhillon'
---

<script>
   import { CodeBlock } from '@skeletonlabs/skeleton';
import Callout from '$lib/components/Callout.svelte';
</script>

Quite often we need to perform a similar action in many places of the script.

For example, we need to show a nice-looking message when a visitor logs in, logs out and maybe somewhere else.

Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

We’ve already seen examples of built-in functions, like alert(message), prompt(message, default) and confirm(question). But we can create functions of our own as well.
<CodeBlock language="js"
code={`
//javascript
function showMessage() {
	alert('Hello everyone!');`
}/>
