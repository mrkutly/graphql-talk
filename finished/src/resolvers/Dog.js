export default {
	async human(parent, args, ctx) {
		if (!parent.human) return null;

		let human = await ctx.humans.findById(parent.human);
		return human;
	},
};
