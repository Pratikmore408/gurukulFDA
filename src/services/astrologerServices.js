import Astrologer from "../models/Astrologer.js";

export const getAllAstrologers = async () => {
  return await Astrologer.find({});
};

export const toggleTopAstrologer = async (id) => {
  const astrologer = await Astrologer.findById(id);
  if (!astrologer) {
    throw new Error("Astrologer not found");
  }

  astrologer.isTop = !astrologer.isTop;
  await astrologer.save();

  return astrologer;
};
