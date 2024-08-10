import {
  getAllAstrologers,
  toggleTopAstrologer,
} from "../services/astrologerServices.js";

export const getAllAstrologer = async (req, res) => {
  try {
    const astrologers = await getAllAstrologers();
    return res.status(200).json(astrologers);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const toggleAstrologer = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedAstrologer = await toggleTopAstrologer(id);
    return res.status(200).json(updatedAstrologer);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
