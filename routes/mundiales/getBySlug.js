import * as mundial from "../../data/mundiales.js";

const notFound = (res, message) => {
  return res.status(404).json({
    error: message
  });
};

export const getBySlug = (req, res) => {
  const selectedMundial = mundial.getBySlug(req.params.slug);

  if (!selectedMundial) {
    return notFound(res, "Mundial no encontrado");
  }

  res.status(200).json(selectedMundial);
};