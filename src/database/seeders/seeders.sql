USE dgtapp;
INSERT INTO tiposEquipamiento 
	(tipo, descripcion)
VALUES
    ('sin_especificar', 'valor de tipos generico que se usa cuando no aplica ninguno de las opcionesd de la tabla'),
	('desktop', 'Equipos de escritorios diseñados para instalarse en una ubicación fija, incluye los equipos AIO'),
    ('laptop', 'Equipo informático portatil, también conocido como notebook'),
    ('impresora','Periféricos utilizados para imprimir información, incluye los equipos multifunción'),
    ('escaner', 'Periféricos que captura imagenes, los procesa y muestra en pantalla, no incluye los equipos multifunción'),
    ('monitor', 'Periféricos que muestran información que procesa una computadora');

INSERT INTO acls 
	(nombre, descripcion)
VALUES
    ('sin_especificar', 'Valor que se usa cuando no aplica ninguna de las otras opciones'),
	('prosecretarios','Acceso cortado entre las 11 y las 14 hs'),
    ('ilimitado', 'sin limitaciones de acceso'),
    ('whatsappWeb','solo acceso a la plataforma de chat'),
    ('redes', 'acceso a redes sociales');
    
INSERT INTO edificios
	(ubicacion,localidad,codigoPostal,descripcion)
VALUES
    ('sin_especificar','sin especificar','sin especificar','Valor que se usa cuando no aplica ninguna de las otras opciones'),
	('Av. Comodoro Py 2002','CABA','C1104BEN','Tribunales de Comodoro Py'),
    ('Libertad 731','CABA','C1012AAO','Edificio del consejo de la Magistratura (en el 8vo piso esta la DGT)'),
    ('Lavalle 1240','CABA','C1048AAF','Edificio donde se encuentra el DataCenter'),
    ('Av. De LosInmigrantes 1950','CABA','C1104ADO','Tribunales de Inmigrantes'),
    ('Cerrito 536','CABA','C1010AAL','Edificio donde esta el área de insumos y el taller'),
    ('Viamonte 1147','CABA','C1053ABW','Edificio donde esta la jefatura de comunicaciones y el área de cableado');
    
INSERT INTO areas
	(codigoAreaId, nombre, encargado, email, telefono, edificioId)
VALUES
    ('sin_especificar', 'sin especificar','sin especificar','sinEspecificar@pjn.gov.ar','',1),
	('dgt-c2', 'Centro de computos de Comodoro Py', 'Hernan Garay', 'dgt.cc-comodoropy@pjn.gov.ar', '4032-7480', 1),
    ('dgt-taller', 'Taller', 'Guillermo Iglesias', 'dgt.taller@pjn.gov.ar', '4124-4444', 5),
    ('dgt-redes', 'Redes', 'Pablo Rossi', 'dgt.redes@pjn.gov.ar', '4124-8888', 3),
    ('dgt-servidores', 'Servidores', 'Diego Charek', 'dgt.servidores@pjn.gov.ar', '4124-3333', 3),
    ('dgt-cableado', 'Cableado', 'Raul Zelaya', 'dgt.cableado@pjn.gov.ar', '4124-1111', 6);

INSERT INTO operadores
    (cuilOperadorId, nombre, apellido, email, telefono, codigoAreaId, avatar, contrasenia, rol)
VALUES  
    ('1', 'Sin', 'especificar', 'sinEspecificar@pjn.gov.ar', '', 'sin_especificar', 'default.jpg', '$2a$10$t7HYveBsDzY/NAiINNmCyu.h4tdarOi4WXPNjyy1ZOSOAtUYfCMLC',''),
    ('20318243655', 'Cristian', 'Villafañe', 'cristian.villafane@pjn.gov.ar', '4032-7479', 'dgt-c2', 'default.jpg', '$2a$10$t7HYveBsDzY/NAiINNmCyu.h4tdarOi4WXPNjyy1ZOSOAtUYfCMLC',''),
    ('27181628419', 'Graciela', 'Olivera', 'graciela.olivera@pjn.gov.ar', '4032-7479', 'dgt-c2', 'default.jpg', '$2a$10$t7HYveBsDzY/NAiINNmCyu.h4tdarOi4WXPNjyy1ZOSOAtUYfCMLC',''),
    ('20146363483', 'Hernan', 'Garay', 'hernan.garay@pjn.gov.ar', '4032-7479', 'dgt-c2', 'default.jpg', '$2a$10$t7HYveBsDzY/NAiINNmCyu.h4tdarOi4WXPNjyy1ZOSOAtUYfCMLC','');
    

    INSERT INTO equipos 
        (nroSerieId,tipoEquipamientoId,codigoDependenciaId,cuilUsuarioId,aclId) 
    VALUES
        ('sin_especificar','1','sin_especificar','1','1'),
        ('LKPCAKX','2','f01_sec2','1','1'),
        ('ANCI400250124','2','f03_sec5','1','1'),
        ('460015652356','4','v10','1','1');

    INSERT INTO equiposDetalles  
        (marca,modelo,tipoEquipamientoId,procesador,memoriaRam,tipoDiscoRigido,capacidadDiscoRigido,lectograbadoraDVD,foto,detalles)
    VALUES
        ('Lenovo','9485-A21',2,'Pentium','DDR2 4GB', 'HDD', '160 GB','si','sinImagen.jpg',''),
        ('Bangho','Optima 1793',2,'AMD APU A8','DDR3 4GB', 'HDD', '500 GB','si','sinImagen.jpg',''),
        ('Bangho','Ziva',2,'AMD FX4100','DDR3 4GB', 'HDD', '320 GB','si','sinImagen.jpg',''),
        ('Bangho','Optima T4',2,'AMD Ryzen 3','DDR4 8GB', 'SDD', '256 GB','no','sinImagen.jpg',''),
        ('Dell','AIO 7100',2,'Intel I5','DDR2 8GB', 'HDD', '1 TB','si','sinImagen.jpg',''),
        ('SANSEI','AIO',2,'Intel I5','DDR4 8GB', 'HDD', '1 TB','si','sinImagen.jpg',''),
        ('Lexmark','421DN',4,'','','','','','sinImagen.jpg',''),
        ('Lexmark','610DN',4,'','','','','','sinImagen.jpg',''),
        ('Lexmark','432DN',4,'','','','','','sinImagen.jpg',''),
        ('Samsung','X464',4,'','','','','','sinImagen.jpg',''),
        ('Samsung','4020DN',4,'','','','','','sinImagen.jpg',''),
        ('Canon','CR-240',5,'','','','','','sinImagen.jpg',''),
        ('Alaris','S2040',5,'','','','','','sinImagen.jpg','');