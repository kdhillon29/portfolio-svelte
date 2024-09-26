---
title: 'Sveltekit for Beginners'
date: '2024-08-28'
updated: '2024-09-24'
published: true
categories:
  - 'Sveltekit'
  - 'markdown'
  - 'svelte'
coverImage: 'https://images.unsplash.com/photo-1610989001873-03968eed0f08?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
description: 'Beginner Guide to Sveltekit'
author: 'Kan Dhillon'
---

<script>
import Callout from '$lib/components/Callout.svelte';
   import { CodeBlock } from '@skeletonlabs/skeleton';

</script>

SvelteKit is an officially supported framework, built around Svelte. It adds key features to a Svelte app — such as routing, layouts and server-side rendering — and makes frontend development outrageously simple.

In this tutorial, we’ll take a beginner-friendly look at both Svelte and SvelteKit and build out a simple web app showing profile pages of imaginary users. Along the way, we’ll look at all the main features that SvelteKit has to offer.

However, the biggest advantage SvelteKit has to offer is its ease of use. Of course, we can manually set up our build process from scratch with all these features, but this can be tedious and frustrating. SvelteKit makes it as easy as possible for us, and the best way to experience this is by actually using it.

<CodeBlock language="js" code={`const skeleton: string = 'awesome';`}/>

<CodeBlock
language="ts"
code ={`
//svelte component

<script>
let name = 'world';
</script\>
<h1>Hello {name}!</h1>`}/>
