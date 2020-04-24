import { Types } from 'mongoose';
import Dog from '../models/Dog';
import Human from '../models/Human';

export default {
	async allDogs() {
		let dogs = await Dog.find({});
		return dogs;
	},

	async dogsWhere(parent, args) {
		let { name, breed, id } = args;
		id = new Types.ObjectId(id);

		let dogs = await Dog.find({
			$or: [
				{ name },
				{ breed },
				{ _id: id },
			],
		});
		return dogs;
	},

	async dogWhereID(parent, args) {
		let id = new Types.ObjectId(args.id);
		let dog = await Dog.findOne({ _id: id });
		return dog;
	},

	async allHumans() {
		let humans = await Human.find({});
		return humans;
	},
};
