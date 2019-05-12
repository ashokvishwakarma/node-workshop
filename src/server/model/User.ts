/**
 * UserModel
 * 
 * Mongoose model for users collection
 */

/**
 * Schema, model
 * 
 * from mongoose
 */
import { Schema, model} from 'mongoose';

/**
 * message
 * 
 * Constant messages
 */
import { message } from '../constant';

/**
 * validateEmail
 * 
 * Helper utility to validate email
 */
import { validateEmail } from '../utility/helper';

/**
 * UserSchema
 * 
 * Mongoose schema for users collection
 */
const UserSchema: Schema = new Schema({
  _id: String,
  name: {
    type: String,
    required: [true, message.NAME_REQUIRED]
  },
  email: {
    type: String,
    required: [true, message.EMAIL_REQUIRED],
    unique: true,
    validate: {
      validator: validateEmail,
      message: (props: any) => `${props.value} is not a valid email.`
    }
  },
  passowrd: {
    type: String,
    minlength: 6
  },
  avatar: String,
  birtday: Date,
  gender: {
    type: String,
    enum: ['male', 'female', 'other']
  },
  phone: Number,
  area: String,
  locality: String,
  city: String,
  state: String,
  country: String,
  pincode: Number
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

/**
 * Converting schema to model
 */
export default model('User', UserSchema);