import { distributeUserFlow } from "../services/flowDistributionServices.js";

export const distributeFlow = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await distributeUserFlow(userId);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
