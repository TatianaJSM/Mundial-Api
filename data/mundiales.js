import { DatabaseSync } from "node:sqlite";
import { cwd } from "node:process";

const db = new DatabaseSync(`${cwd()}/data/mundiales.db`);

export const getAll = () => {
  const query = db.prepare("SELECT slug FROM mundiales");
  return query.all();
};

export const getAllFull = () => {
  const query = db.prepare("SELECT * FROM mundiales");
  return query.all();
};

export const getBySlug = (slug) => {
  const query = db.prepare("SELECT * FROM mundiales WHERE slug = ?");
  return query.get(slug);
};

export const getByChampion = (pais) => {
  const query = db.prepare("SELECT slug FROM mundiales WHERE lower(campeon) = lower(?)");
  return query.all(pais);
};

export const getRandom = () => {
  const query = db.prepare("SELECT * FROM mundiales ORDER BY RANDOM() LIMIT 1");
  return query.get();
};

export const search = (text) => {
  const query = db.prepare(`
    SELECT slug FROM mundiales
    WHERE lower(nombre) LIKE lower(?)
       OR lower(sede) LIKE lower(?)
       OR lower(campeon) LIKE lower(?)
       OR lower(subcampeon) LIKE lower(?)
       OR lower(goleador) LIKE lower(?)
       OR lower(resumen) LIKE lower(?)
       OR lower(descripcion) LIKE lower(?)
  `);

  const value = `%${text}%`;

  return query.all(value, value, value, value, value, value, value);
};