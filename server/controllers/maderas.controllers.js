import { pool } from "../db.js";

export const getMaderas = async (req, res) => {
  try {
    const [respuesta] = await pool.query("SELECT * FROM madera limit 2");
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getMadera = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM madera WHERE idmadera=?", [
      req.params.id,
    ]);
    if (result.length === 0)
      return res.status(404).json({ message: "Elemento no encontrado" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateMaderas = async (req, res) => {
  try {
    // const {sala, pieza, medida, cantidad} = req.body;
    const result = await pool.query("UPDATE madera SET ? WHERE idmadera = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createMaderas = async (req, res) => {
  try {
    const { sala, pieza, medida, cantidad } = req.body;
    const [result] = await pool.query(
      "INSERT INTO (sala,pieza,medida,cantidad) VALUES(?,?,?,?)",
      [sala, pieza, medida, cantidad]
    );
    //   console.log(result);
    res.json({
      id: result.insertId,
      sala,
      pieza,
      medida,
      cantidad,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteMaderas = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM madera WHERE idmadera = ?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0)
      return res.sendStatus(404).json({ message: "Elemento no encontrado" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
