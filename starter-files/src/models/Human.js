import { model, Schema } from 'mongoose';

const humanSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: 'Give your human a name 💁🏽‍♂️',
	},
});

export default model('Human', humanSchema);
