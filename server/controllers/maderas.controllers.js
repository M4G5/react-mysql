export const getMaderas = (req, res) => {
    res.send('obteniendo registro maderas');
}
export const getMadera = (req, res) => {
    res.send('obteniendo registro madera');
}
export const updateMaderas = (req, res) => {
    res.send('actualizar madera');
}
export const createMaderas = (req, res) => {
    console.log(req.body);
    res.send('creando registro madera');
}
export const deleteMaderas = (req, res) => {
    res.send('eliminando registro madera');
}
