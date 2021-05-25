export const state = () => {
	return {
		title: 'It is not a matter of if, but when and how',
		blocks: [
			{
				icon: 'live_tv',
				title: 'Many high profile incidents',
				text: 'Notable incidents do not happen yearly, or monthly. They happen daily. Even estabilished firms with huge capitals cannot whitstand attackers, when proper security and processes have not been estabilished or have been postponed.',
			},
			{
				icon: 'wifi_tethering',
				title: 'A connected world has consequences',
				text: 'Prosperous markets can be highly competitive. Knowledge of hacking has become trivial to obtain even for small businesses. As such it is not just a matter of “what could happen”, but “when” and “how to be prepared”.',
			},
			{
				icon: 'volunteer_activism',
				title: 'Trust and human data',
				text: 'When you are processing and managing user data, personal or credit information, every breach would be disastrous and have permanent, long-lasting consequences on both the wellness of your users, and your reputation.',
			},
		],
		button: {
			class: 'secondary',
			text: 'See Services',
			path: '/services',
		},
	}
}
