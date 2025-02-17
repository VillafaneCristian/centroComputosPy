const express = require ('express');
const path = require ('path'); 
const app = express(); 
const session = require ('express-session');
const methodOverride = require ('method-override');

/** middleware de aplicacion donde se guarda la informacion del usuario logueado en una variable para compartir a las vistas**/
const operadorLogueadoDatosMiddleware = require ('./middlewares/operadorLogueadoDatos-middleware');

/*************middleware de aplicacion para que express vea la carpeta pubic como carpeta de archivos publicos ****/
const publicPath = path.join(__dirname,'../public');
app.use(express.static(publicPath)); 

/**********middleware para poder sobreescribir el method de los formularios cuando hacemos put o delete ********/
app.use(methodOverride('_method'));

//*** seteamos EJS como template engine y de la carpeta views como la carpeta donde estarás las vistas ***/
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views')); 

//*********** middleware para que se pueda capturar la informacion que viene en el body de los formularios ***********/
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//*************************** seteo del middleware express-session ***********************************************/
app.use (session({
    secret: 'Its a secret',
    resave: false,
    saveUninitialized: false
}));

app.use(operadorLogueadoDatosMiddleware);

//*********** indicamos cual es el archivo principal de ruteo **************** //
const mainRoutes = require ('./routes/main-routes'); 
app.use('/',mainRoutes); 



//*** levantamos el servidor, lo ponemos a escuchar en el puerto 3000 ***/; 
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
}) 



