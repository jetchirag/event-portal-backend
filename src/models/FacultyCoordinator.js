import mongoose from 'mongoose';

const FC = mongoose.model('FC', new mongoose.Schema({
	name: {
		type: String,
		required: true },
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
}, {
	collection: 'fc'
}));

export default FC;
