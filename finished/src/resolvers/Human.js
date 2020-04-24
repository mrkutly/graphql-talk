export default {
	async dogs(parent, args, ctx) {
		let dogs = await ctx.dogs.find({ human: parent });
		return dogs;
	},
};
