import * as mundial from "../../data/mundiales.js";

export const getAll = (req, res) => {
  const include = req.query.include;

  if (include === "full") {
    return res.status(200).json(mundial.getAllFull());
  }

  res.status(200).json(mundial.getAll());
};