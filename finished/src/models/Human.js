import { model, Schema } from 'mongoose';

const humanSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: 'Give your human a name 💁🏽‍♂️',
	},
	dogs: [{
		type: Schema.Types.ObjectId,
		ref: 'Dog',
		required: false,
	}],
});

export default model('Human', humanSchema);
