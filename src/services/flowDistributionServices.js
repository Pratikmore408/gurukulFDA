import Astrologer from "../models/Astrologer.js";
import User from "../models/User.js";

export const distributeUserFlow = async (userId) => {
  const user = await User.findById(userId);
  const astrologers = await Astrologer.find({}).sort({ connections: 1 });

  for (let astrologer of astrologers) {
    if (astrologer.connections < astrologer.maxConnections) {
      user.connectedAstrologer = astrologer._id;
      astrologer.connections += 1;
      await user.save();
      await astrologer.save();
      return user;
    }
  }

  throw new Error("No available astrologers");
};
