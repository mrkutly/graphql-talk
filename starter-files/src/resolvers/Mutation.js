import { Types } from 'mongoose';
import Dog from '../models/Dog';
import Human from '../models/Human';

export default {
	async createDog(parent, { name, breed, human }) {
		let foundHuman = await Human.findOne({ name: human.name });

		if (!foundHuman) {
			foundHuman = await Human.create({ name: human.name });
		}

		const dog = await Dog.create({ name, breed, human: foundHuman });
		return dog;
	},

	async deleteDog(parent, args) {
		const id = new Types.ObjectId(args.id);
		const dog = await Dog.findByIdAndDelete(id);
		return dog;
	},
};
