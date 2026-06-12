import * as mundial from "../../data/mundiales.js";

export const random = (req, res) => {
  res.status(200).json(mundial.getRandom());
};