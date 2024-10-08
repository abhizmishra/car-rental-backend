import mongoose from 'mongoose';

const bookingSchema = mongoose.Schema({
  customerName: {
    type:Schema.Types.objectId
  }
})