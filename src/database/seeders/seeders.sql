USE dgtapp;
INSERT INTO tiposEquipamiento 
	(tipo, descripcion)
VALUES
    ('Sin especificar', 'valor de tipos generico que se usa cuando no aplica ninguno de las opcionesd de la tabla'),
	('Desktop', 'Equipos de escritorios diseñados para instalarse en una ubicación fija, incluye los equipos AIO'),
    ('Laptop', 'Equipo informático portatil, también conocido como notebook'),
    ('Impresora','Periféricos utilizados para imprimir información, incluye los equipos multifunción'),
    ('Escaner', 'Periféricos que captura imagenes, los procesa y muestra en pantalla, no incluye los equipos multifunción'),
    ('Monitor', 'Periféricos que muestran información que procesa una computadora');

INSERT INTO acls 
	(nombre, descripcion)
VALUES
    ('Sin especificar', 'Valor que se usa cuando no aplica ninguna de las otras opciones'),
	('Prosecretarios','Acceso cortado entre las 11 y las 14 hs'),
    ('Ilimitado', 'sin limitaciones de acceso'),
    ('WhatsappWeb','solo acceso a la plataforma de chat'),
    ('Redes', 'acceso a redes sociales');
    
INSERT INTO edificios
	(ubicacion,localidad,codigoPostal,descripcion)
VALUES
    ('Sin especificar','sin especificar','sin especificar','Valor que se usa cuando no aplica ninguna de las otras opciones'),
	('Av. Comodoro Py 2002','CABA','C1104BEN','Tribunales de Comodoro Py'),
    ('Libertad 731','CABA','C1012AAO','Edificio del consejo de la Magistratura (en el 8vo piso esta la DGT)'),
    ('Lavalle 1240','CABA','C1048AAF','Edificio donde se encuentra el DataCenter'),
    ('Av. De LosInmigrantes 1950','CABA','C1104ADO','Tribunales de Inmigrantes'),
    ('Cerrito 536','CABA','C1010AAL','Edificio donde esta el área de insumos y el taller'),
    ('Viamonte 1147','CABA','C1053ABW','Edificio donde esta la jefatura de comunicaciones y el área de cableado');
    
INSERT INTO areas
	(codigoAreaId, nombre, encargado, email, telefono, edificioId)
VALUES
    ('SIN-ESPECIFICAR', 'sin especificar','sin especificar','sinEspecificar@pjn.gov.ar','',1),
	('DGT-C2', 'Centro de computos de Comodoro Py', 'Hernan Garay', 'dgt.cc-comodoropy@pjn.gov.ar', '4032-7480', 1),
    ('DGT-TALLER', 'Taller', 'Guillermo Iglesias', 'dgt.taller@pjn.gov.ar', '4124-4444', 5),
    ('DGT-REDES', 'Redes', 'Pablo Rossi', 'dgt.redes@pjn.gov.ar', '4124-8888', 3),
    ('DGT-SERVIDORES', 'Servidores', 'Diego Charek', 'dgt.servidores@pjn.gov.ar', '4124-3333', 3),
    ('DGT-CABLEADO', 'Cableado', 'Raul Zelaya', 'dgt.cableado@pjn.gov.ar', '4124-1111', 6);

INSERT INTO operadores
    (cuilOperadorId, nombre, apellido, email, telefono, codigoAreaId, avatar, contrasenia, rol)
VALUES  
    ('1', 'Sin', 'especificar', 'sinEspecificar@pjn.gov.ar', '', 'sin-especificar', 'default.jpg', '$2a$10$t7HYveBsDzY/NAiINNmCyu.h4tdarOi4WXPNjyy1ZOSOAtUYfCMLC',''),
    ('20318243655', 'Cristian', 'Villafañe', 'cristian.villafane@pjn.gov.ar', '4032-7479', 'dgt-c2', 'default.jpg', '$2a$10$t7HYveBsDzY/NAiINNmCyu.h4tdarOi4WXPNjyy1ZOSOAtUYfCMLC',''),
    ('27181628419', 'Graciela', 'Olivera', 'graciela.olivera@pjn.gov.ar', '4032-7479', 'dgt-c2', 'default.jpg', '$2a$10$t7HYveBsDzY/NAiINNmCyu.h4tdarOi4WXPNjyy1ZOSOAtUYfCMLC',''),
    ('20146363483', 'Hernan', 'Garay', 'hernan.garay@pjn.gov.ar', '4032-7479', 'dgt-c2', 'default.jpg', '$2a$10$t7HYveBsDzY/NAiINNmCyu.h4tdarOi4WXPNjyy1ZOSOAtUYfCMLC','');
    

    INSERT INTO equipos 
        (nroSerieId,tipoEquipamientoId,codigoDependenciaId,cuilUsuarioId,aclId) 
    VALUES
        ('SIN-ESPECIFICAR','1','SIN-ESPECIFICAR','1','1');

    INSERT INTO usuarios 
        (cuilUsuarioId,nombre,apellido,codigoDependenciaId) 
    VALUES
        (1,'Sin','especificar','SIN-ESPECIFICAR');


    /*******NUEVOS SEEDERS AL 16/03/2025*******/


    INSERT INTO estados
        (estado) 
    VALUES
        ('Instalado'),
        ('Para prestamo'),
        ('Prestado'),
        ('Stock para instalacion'),
        ('Dado de baja');

    INSERT INTO clasificacionIncidentes
        (clasificacionNombre)
    VALUES  
        ('Entrega de insumos'),
        ('Permisos de internet'),
        ('ABM de carpetas en el servidor'),
        ('ABM de usuarios de dominio'),
        ('Instalacion de software'),
        ('Reparacion de equipos'),
        ('Configuracion de impresora'),
        ('Otros');

    INSERT INTO edificios
        (ubicacion,localidad,codigoPostal,descripcion)
    VALUES
        ('Sin especificar',NULL,NULL,NULL),
        ('Av. Comodoro Py 2002','CABA','C1104BEN',NULL),
        ('Libertad 731','CABA','C1012AA0',NULL),
        ('Lavalle 1240','CABA','C1048AAF',NULL),
        ('Av. De los Inmigrantes 1950','CABA','C1104ASO',NULL),
        ('Cerrito 536','CABA','C1010AL',NULL),
        ('Viamonte 1147','CABA','C1053ABW',NULL);

INSERT INTO acls
    (nombre,descripcion)
VALUES  
    ('IP permitidos','Internet sin redes sociales, youtube y zoom'),
    ('Usuarios ampliados','Internet con redes sociales, youtube'),
    ('Zoom','Internet con redes sociales, youtube y zoom'),
    ('Computos ampliados','Internet con redes sociales, youtube'),
    ('Prosecretarios','Internet sin redes sociales, youtube y zoom'),
    ('Youtube','Intenet sin redes sociales y con youtube'),
    ('Restringido','Solo determinadas paginas indicadas por la DGT y whatsapp web');
    
INSERT INTO tiposEquipamiento
    (tipo,descripcion)
VALUES  
    ('Sin especificar',NULL),
    ('Desktop',NULL),
    ('Laptop',NULL),
    ('Impresora',NULL),
    ('Escaner',NULL),
    ('Monitor',NULL);


INSERT INTO areas   
    (codigoAreaId,nombre,encargado,email,telefono,descripcion,edificioId)
VALUES
    ('SIN-ESPECIFICAR','Sin especificar',NULL,NULL,NULL,NULL,1),
    ('DGT-C2','Centro de Cómputos de Comodoro Py','Jorge JURE','dgt.cc-comodoropy@pjn.gov.ar','4032-7479/7480/7481/7482',NULL,2),
    ('DGT-TALLER','Taller','Guillermo Iglesias','dgt.taller@pjn.gov.ar',NULL,NULL,6),
    ('DGT-INSUMOS','Insumos','Paula Roldán','dgt.insumos@pjn.gov.ar','4124-4545',NULL,6),
    ('DGT-CABLEADO','Cableado','Raúl ZELAYA','dgt.cableado@pjn.gov.ar',NULL,NULL,7),
    ('DGT-OPERACIONES','Operaciones','Gastón CALLEJÓN','dgt.operaciones@pjn.gov.ar',NULL,NULL,4),
    ('DGT-SERVIDORES','Servidores','Diego CHAREK','dgt.servidores@pjn.gov.ar',NULL,NULL,4),
    ('DGT-REDES','Redes','Pablo ROSSI','dgt.redes@pjn.gov.ar',NULL,NULL,4),
    ('DGT-AUDIOVIDEO','Audio y video','Gabriel Giannateli','dgt.audiovideo@pjn.gov.ar',NULL,NULL,4);



INSERT INTO operadores
    (cuilOperadorId, nombre, apellido, email, telefono, codigoAreaId, avatar, contrasenia, rol)
VALUES  
    ('1', 'Sin', 'especificar', 'sinEspecificar@pjn.gov.ar', '', 'SIN-ESPECIFICAR', 'default.jpg', '$2a$10$t7HYveBsDzY/NAiINNmCyu.h4tdarOi4WXPNjyy1ZOSOAtUYfCMLC',NULL),
    ('20318243655', 'Cristian', 'VILLAFAÑE', 'cristian.villafane@pjn.gov.ar', '4032-7479', 'dgt-c2', 'default.jpg', '$2a$10$t7HYveBsDzY/NAiINNmCyu.h4tdarOi4WXPNjyy1ZOSOAtUYfCMLC',NULL),
    ('27181628419', 'Graciela', 'OLIVERA', 'graciela.olivera@pjn.gov.ar', '4032-7479', 'dgt-c2', 'default.jpg', '$2a$10$t7HYveBsDzY/NAiINNmCyu.h4tdarOi4WXPNjyy1ZOSOAtUYfCMLC',NULL),
    ('20146363483', 'Hernan', 'GARAY', 'hernan.garay@pjn.gov.ar', '4032-7808', 'dgt-c2', 'default.jpg', '$2a$10$t7HYveBsDzY/NAiINNmCyu.h4tdarOi4WXPNjyy1ZOSOAtUYfCMLC',NULL),
    ('20253141612', 'Hector', 'CAMPOS', 'hector.campos@pjn.gov.ar', '4032-7480', 'dgt-c2', 'default.jpg', '$2a$10$t7HYveBsDzY/NAiINNmCyu.h4tdarOi4WXPNjyy1ZOSOAtUYfCMLC',NULL);
