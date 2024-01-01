import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig(async () => {
	const mdx = await import('@mdx-js/rollup')
	const viteConfig = {
		plugins: [preact(), mdx.default()],
	}

	return viteConfig
})