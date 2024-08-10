import mongoose from "mongoose";

const astrologerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isTop: {
    type: Boolean,
    default: false,
  },
  connections: {
    type: Number,
    default: 0,
  },
  maxConnections: {
    type: Number,
    default: 10,
  },
});

const Astrologer = mongoose.model("Astrologer", astrologerSchema);
export default Astrologer;
