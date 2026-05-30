// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://vtuberkitforymm4.pages.dev',
	integrations: [
		starlight({
			title: 'VTuberKitForYMM4 マニュアル',
			social: [
				{ icon: 'external', label: 'BOOTH', href: 'https://takoyakisoft.booth.pm' },
				{ icon: 'x.com', label: 'X', href: 'https://x.com/takoyakisoft' },
				{ icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@takoyaki-soft' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/takoyakisoft/VTuberKitForYMM4-Manual' },
			],
			sidebar: [
				{
					label: 'マニュアル',
					items: [
						{ label: 'はじめに', link: '/' },
					],
				},
			],
		}),
	],
});