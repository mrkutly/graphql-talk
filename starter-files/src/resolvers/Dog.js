import fetch from 'node-fetch';
import Human from '../models/Human';

export default {
	async human(parent) {
		const human = await Human.findById(parent.human);
		return human;
	},

	async image() {
		const response = await fetch('https://dog.ceo/api/breeds/image/random');
		const parsed = await response.json();
		return parsed.message;
	},
};
