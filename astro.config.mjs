import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Mihomo Party',
			social: {
				github: 'https://github.com/pompurin404/mihomo-party',
			},
			sidebar: [
				{
					label: '使用指南',
					items: [
						{ label: '下载安装', slug: 'guides/install' },
					],
				}
			],
		}),
	],
});
