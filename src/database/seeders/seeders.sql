INSERT INTO tiposEquipamiento 
	(tipo)
VALUES
	('desktop'),
    ('laptop'),
    ('impresora'),
    ('escaner'),
    ('monitor');
    
INSERT INTO edificios
	(ubicacion,localidad,codigoPostal,descripcion)
VALUES
	('Av. Comodoro Py 2002','CABA','',''),
    ('Libertad 731','CABA','',''),
    ('Lavalle 1240','CABA','',''),
    ('Av. De LosInmigrantes 1950','CABA','',''),
    ('Cerrito 536','CABA','',''),
    ('Viamonte 1147','CABA','','');
    
INSERT INTO areas
	(codigoAreaId, nombre, encargado, email, telefono, edificioId)
VALUES
	('c2', 'Centro de computos de Comodoro Py', 'Hernan Garay', 'dgt.cc-comodoropy@pjn.gov.ar', '4032-7480', 1),
    ('dgt-taller', 'Taller', 'Guillermo Iglesias', 'dgt.taller@pjn.gov.ar', '4124-4444', 5),
    ('dgt-redes', 'Redes', 'Pablo Rossi', 'dgt.redes@pjn.gov.ar', '4124-8888', 3),
    ('dgt-servidores', 'Servidores', 'Diego Charek', 'dgt.servidores@pjn.gov.ar', '4124-3333', 3),
    ('dgt-cableado', 'Cableado', 'Raul Zelaya', 'dgt.cableado@pjn.gov.ar', '4124-1111', 6);
    
INSERT INTO operadores 
	(cuilOperadorId, nombre, apellido, email, telefono, codigoAreaId, avatar, contrasenia)
VALUES
	(20318243655, 'Cristian', 'Villafañe', 'cristian.villafane@pjn.gov.ar', '4032-7479', 'c2', 'default.jpg', '123456'),
    (27181628419, 'Graciela', 'Olivera', 'graciela.olivera@pjn.gov.ar', '4032-7479', 'c2','default.jpg', '123456'),
    (20146363483, 'Hernan', 'Garay', 'hernan.garay@pjn.gov.ar', '4032-7808', 'c2','default.jpg', '123456');

INSERT INTO dependencias
	(codigoDependenciaId, nombre, email, telefono, piso, lado, descripcion)
VALUES
	('f01_sec1','Juzgado nacional criminal y correccional federal Nº1 Secretaría Nº1', 'jncrimcorrfed1.sec1@pjn.gov.ar','4032-7499', 3, 'rio', ''),
    ('f01_sec2','Juzgado nacional criminal y correccional federal Nº1 Secretaría Nº2', 'jncrimcorrfed1.sec2@pjn.gov.ar','4032-7411', 3, 'rio', ''),
    ('f01_priv','Juzgado nacional criminal y correccional federal Nº1 Secretaría privada', 'jncrimcorrfed1@pjn.gov.ar','4032-7499', 3, 'rio', ''),
    ('f02_sec3','Juzgado nacional criminal y correccional federal Nº2 Secretaría Nº3', 'jncrimcorrfed2.sec3@pjn.gov.ar','4032-7499', 3, 'rio', ''),
    ('f02_sec4','Juzgado nacional criminal y correccional federal Nº2 Secretaría Nº4', 'jncrimcorrfed2.sec4@pjn.gov.ar','4032-7411', 3, 'rio', ''),
    ('f02_priv','Juzgado nacional criminal y correccional federal Nº2 Secretaría privada', 'jncrimcorrfed2@pjn.gov.ar','4032-7499', 3, 'rio', ''),
    ('f03_sec5','Juzgado nacional criminal y correccional federal Nº3 Secretaría Nº5', 'jncrimcorrfed3.sec5@pjn.gov.ar','4032-7499', 3, 'rio', ''),
    ('f03_sec6','Juzgado nacional criminal y correccional federal Nº3 Secretaría Nº6', 'jncrimcorrfed3.sec6@pjn.gov.ar','4032-7411', 3, 'rio', ''),
    ('f03_priv','Juzgado nacional criminal y correccional federal Nº3 Secretaría privada', 'jncrimcorrfed3@pjn.gov.ar','4032-7499', 3, 'rio', ''),
    ('f04_sec7','Juzgado nacional criminal y correccional federal Nº4 Secretaría Nº7', 'jncrimcorrfed4.sec7@pjn.gov.ar','4032-7498', 3, 'retiro', ''),
    ('f04_sec8','Juzgado nacional criminal y correccional federal Nº4 Secretaría Nº8', 'jncrimcorrfed4.sec8@pjn.gov.ar','4032-7496', 3, 'retiro', ''),
    ('f04_priv','Juzgado nacional criminal y correccional federal Nº4 Secretaría privada', 'jncrimcorrfed4@pjn.gov.ar','4032-7487', 3, 'retiro', ''),
    ('f05_sec9','Juzgado nacional criminal y correccional federal Nº5 Secretaría Nº9', 'jncrimcorrfed5.sec9@pjn.gov.ar','4032-7498', 3, 'retiro', ''),
    ('f05_sec10','Juzgado nacional criminal y correccional federal Nº5 Secretaría Nº10', 'jncrimcorrfed5.sec10@pjn.gov.ar','4032-7496', 3, 'retiro', ''),
    ('f05_priv','Juzgado nacional criminal y correccional federal Nº5 Secretaría privada', 'jncrimcorrfed5@pjn.gov.ar','4032-7487', 3, 'retiro', ''),
	('v01', 'Cámara Federal de Casacion Penal - Vocalia 1','vocalia1@pjn.gov.ar','4032-9889', 1, 'rio','En el piso 9 lado rio hay un anexo'),
    ('v02', 'Cámara Federal de Casacion Penal - Vocalia 2','vocalia2@pjn.gov.ar','4032-9889', 1, 'retiro','En la planta baja lado retiro hay un anexo'),
    ('v03', 'Cámara Federal de Casacion Penal - Vocalia 3','vocalia3@pjn.gov.ar','4032-9889', 1, 'rio','En el piso 9 lado rio hay un anexo'),
    ('v04', 'Cámara Federal de Casacion Penal - Vocalia 4','vocalia4@pjn.gov.ar','4032-9889', 1, 'rio',''),
    ('v05', 'Cámara Federal de Casacion Penal - Vocalia 5','vocalia5@pjn.gov.ar','4032-9889', 1, 'retiro','En la Sala I, primer piso lado retiro hay un anexo'),
    ('v06', 'Cámara Federal de Casacion Penal - Vocalia 6','vocalia6@pjn.gov.ar','4032-9889', 1, 'rio','En la PB lado retiro hay un anexo'),
    ('v07', 'Cámara Federal de Casacion Penal - Vocalia 7','vocalia7@pjn.gov.ar','4032-9889', 1, 'rio','En el 9no piso hay un anexo'),
    ('v08', 'Cámara Federal de Casacion Penal - Vocalia 8','vocalia8@pjn.gov.ar','4032-9889', 1, 'retiro','En la planta baja lado retiro hay un anexo'),
    ('v09', 'Cámara Federal de Casacion Penal - Vocalia 9','vocalia9@pjn.gov.ar','4032-9889', 1, 'rio','En la Sala III, primer piso lado rio hay un anexo'),
    ('v10', 'Cámara Federal de Casacion Penal - Vocalia 10','vocalia10@pjn.gov.ar','4032-9889', 1, 'retiro','En la planta baja hay un anexo'),
    ('v11', 'Cámara Federal de Casacion Penal - Vocalia 11','vocalia11@pjn.gov.ar','4032-9889', 1, 'rio','En la planta baja hay un anexo'),
    ('v12', 'Cámara Federal de Casacion Penal - Vocalia 12','vocalia12@pjn.gov.ar','4032-9889', 1, 'retiro','En el 9no piso hay un anexo'),
    ('v13', 'Cámara Federal de Casacion Penal - Vocalia 13','vocalia13@pjn.gov.ar','4032-9889', 1, 'retiro','En el 9no piso hay un anexo');