import { Types } from 'mongoose';

export default {
	async createHuman(parent, args, ctx) {
		let human = await ctx.humans.create({ name: args.name });
		return human;
	},

	async createDog(parent, args, ctx) {
		let { name, breed } = args;
		let human = null;

		if (args.human) {
			human = await ctx.humans.findOne(args.human);
		}

		let dog = await ctx.dogs.create({ name, breed, human });
		return dog;
	},

	async updateDog(parent, args, ctx) {
		let id = new Types.ObjectId(args.id);
		let human = null;

		if (args.human) {
			let humanId = new Types.ObjectId(args.human.id);

			human = await ctx.humans.findOne({
				$or: [
					{ name: args.human.name },
					{ _id: humanId },
				],
			});
		}

		let updateOptions = { ...args };
		delete updateOptions.human;
		delete updateOptions.id;

		if (human) {
			updateOptions.human = human;
		}

		let dog = await ctx.dogs.findOneAndUpdate({ _id: id }, updateOptions, { new: true });
		return dog;
	},

	async deleteDog(parent, args, ctx) {
		let id = new Types.ObjectId(args.id);
		let dog = await ctx.dogs.findByIdAndDelete(id);
		return dog;
	},
};
