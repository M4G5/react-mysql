import axios from "axios";

export const createTarea = async (tarea) =>
  await axios.post("http://localhost:4000/maderas", tarea);
