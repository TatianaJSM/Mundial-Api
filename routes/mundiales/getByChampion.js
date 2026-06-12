import * as mundial from "../../data/mundiales.js";

export const getByChampion = (req, res) => {
  const results = mundial.getByChampion(req.params.pais);

  res.status(200).json(results);
};