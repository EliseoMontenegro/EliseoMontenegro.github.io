// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import node from '@astrojs/node';

// https://EliseoMontenegro.github.io
export default defineConfig({
	output: 'server',
	adapter: node({
		mode: 'standalone',
	}),
	integrations: [svelte()],
});
