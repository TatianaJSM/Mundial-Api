import * as mundial from "../../data/mundiales.js";
app.get("/search/:text", search);
export const random = (req, res) => {
  res.status(200).json(mundial.getRandom());
};