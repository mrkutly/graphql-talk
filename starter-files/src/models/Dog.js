import { model, Schema } from 'mongoose';

const dogSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: 'Give your doggie a name 🐶',
	},
	breed: {
		type: String,
		trim: true,
		required: 'Give your doggie a breed 🐶',
	},
	human: {
		type: Schema.Types.ObjectId,
		ref: 'Human',
		required: false,
	},
});

export default model('Dog', dogSchema);
