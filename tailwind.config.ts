import { join } from 'path';
import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
import forms from '@tailwindcss/forms';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			animation: {
				shimmer: 'shimmer 3s infinite'
			},
			keyframes: {
				shimmer: {
					'0%, 90%, 100%': {
						'background-position': 'calc(-100% - var(--shimmer-width)) 0'
					},
					'30%, 60%': {
						'background-position': 'calc(100% + var(--shimmer-width)) 0'
					}
				}
			},
			fontSize: {
				clamp: 'clamp(1rem, 3vw, 2rem)'
			}
		}
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				preset: [
					{
						name: 'skeleton',
						enhancements: true
					}
				]
			}
		})
	]
} satisfies Config;
