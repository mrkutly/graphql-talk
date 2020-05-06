import { Types } from 'mongoose';
import Dog from '../models/Dog';

export default {
	async allDogs() {
		const dogs = await Dog.find({});
		return dogs;
	},

	async dogById(parent, args) {
		const id = new Types.ObjectId(args.id);
		const dog = await Dog.findById(id);
		return dog;
	},
};
