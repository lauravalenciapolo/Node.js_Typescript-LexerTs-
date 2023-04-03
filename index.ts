import server from './src/app';
import db  from './src/db';
// const empleadosBD = require('./src/datosInicialesBD/empleadosBD/index')
// const departamentosBD = require('./src/datosInicialesBD/departamentosBD/index')

db.conn.sync({ force: true }).then(() => {

  server.listen(1234, () => {
    console.log('%s listening at 1234'); 
  });
});
