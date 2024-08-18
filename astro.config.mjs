import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://mihomo.party',
	integrations: [
		starlight({
			title: 'Mihomo Party',
			favicon: '/favicon.ico',
			social: {
				github: 'https://github.com/pompurin404/mihomo-party',
			},
			sidebar: [
				{
					label: '使用指南',
					items: [
						{
							label: '下载安装', items: [
								'guides/install/windows',
								'guides/install/macos',
								{
									label: 'Linux', items: [
										'guides/install/linux-debian',
										'guides/install/linux-redhat',
										'guides/install/linux-arch',
										'guides/install/linux-other'
									]
								}
							]
						},
						{
							label: '常见问题', items: [
								'guides/issue/general',
								'guides/issue/windows',
								'guides/issue/macos',
								'guides/issue/linux'
							]
						},
						{
							label: '使用教程', items: [
								{
									label: '覆写', items: [
										'guides/function/override/yaml',
										'guides/function/override/js',
									]
								}
							]
						},
					],
				}
			],
		}),
	],
});
