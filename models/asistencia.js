const modelsAsistencia = {
    queryExitsPer: `SELECT nombre FROM Personal WHERE nombre = ?`,
    queryExitsAsi: `SELECT asistencia FROM Asistencia WHERE asistencia = ?`,
    queryAddAsi: `INSERT INTO Asistencia (asistencia, aula, grupo, observacion, activo, IDA) VALUES (?, ?, ?, ?, ?, ?)`,
    queryAddPer: `INSERT INTO Personal (nombre, apellido, Activo) VALUES (?, ?, ?)`,
    queryMostrarPer: `SELECT * FROM Personal`,
    queryEditPer: `UPDATE Personal SET nombre = ?, apellido = ?, activo = ? WHERE ID = ?`,
    queryEliminarPer:`UPDATE Personal SET activo = 'N' WHERE ID = ?`
}

module.exports = modelsAsistencia