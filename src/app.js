let express = require ('express');
let path = require ('path'); 
let app = express(); 





//*** seteamos EJS como template engine y de la carpeta views como la carpeta donde estarás las vistas ***/
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views','hola')); 



//*********** indicamos cual es el archivo principal de ruteo **************** //
const mainRoutes = require ('./routes/main-routes'); 
app.use('/',mainRoutes); 

//*** levantamos el servidor, lo ponemos a escuchar en el puerto 3000 ***/; 
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
}) 

