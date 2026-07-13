import mongoose from 'mongoose';
const { Schema } = mongoose;

const carSchema = new Schema({
  make: {
    type: String,
    required: [true, 'שדה make הוא חובה'],
    minlength: [2, 'שדה make חייב להכיל לפחות 2 תווים'],
    maxlength: [256, 'שדה make לא יכול להכיל יותר מ-256 תווים'],
    trim: true
  },
  
  model: {
    type: String,
    required: [true, 'שדה model הוא חובה'],
    minlength: [2, 'שדה model חייב להכיל לפחות 2 תווים'],
    maxlength: [256, 'שדה model לא יכול להכיל יותר מ-256 תווים'],
    trim: true
  },
  
  year: {
    type: Number,
    required: [true, 'שדה year הוא חובה'],
    min: [1886, 'השנה חייבת להיות 1886 ומעלה'],
    max: [new Date().getFullYear() + 1, 'השנה לא יכולה להיות גדולה מהשנה הבאה'],
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} אינה שנה תקינה (חייב להיות מספר שלם)'
    }
  },
  
  price: {
    type: Number,
    required: [true, 'שדה price הוא חובה'],
    validate: {
      validator: function(value) {
        return value > 0;
      },
      message: 'המחיר חייב להיות מספר חיובי גדול מאפס'
    }
  },
  
  isSpecial: {
    type: Boolean,
    required: [true, 'שדה isSpecial הוא חובה'],
    default: false
  },
  
}, {
  timestamps: true // אופציונלי: מוסיף אוטומטית createdAt ו-updatedAt
});

const Car = mongoose.models.Car || mongoose.model('Car', carSchema);

export default Car;