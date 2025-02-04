INSERT INTO tipos_equipamiento 
	(tipo)
VALUES
	('desktop'),
    ('laptop'),
    ('impresora'),
    ('escaner'),
    ('monitor');
    
INSERT INTO edificios
	(ubicacion,descripcion)
VALUES
	('Av. Comodoro Py 2002', 'Tribunales de Comodoro Py'),
    ('Libertad 731', 'Consejo de la Magistratura'),
    ('Lavalle 300', 'Datacenter'),
    ('Av. Inmigrantes', 'Tribunales de Inmigrantes'),
    ('Cerrito 930', 'Edificio de la DGT'),
    ('Viamonte 618', 'Edificio de comunicaciones y cableado');
    
INSERT INTO areas
	(codigoArea_id, nombre, encargado, email, telefono, edificio_id)
VALUES
	('c2', 'Centro de computos de Comodoro Py', 'Hernan Garay', 'dgt.cc-comodoropy@pjn.gov.ar', '4032-7480', 1),
    ('dgt-taller', 'Taller', 'Guillermo Iglesias', 'dgt.taller@pjn.gov.ar', '4124-4444', 5),
    ('dgt-redes', 'Redes', 'Pablo Rossi', 'dgt.redes@pjn.gov.ar', '4124-8888', 3),
    ('dgt-servidores', 'Servidores', 'Diego Charek', 'dgt.servidores@pjn.gov.ar', '4124-3333', 3),
    ('dgt-cableado', 'Cableado', 'Raul Zelaya', 'dgt.cableado@pjn.gov.ar', '4124-1111', 6);
    
INSERT INTO operadores 
	(cuilOperador_id, nombre, apellido, email, telefono, codigoArea_id)
VALUES
	(20318243655, 'Cristian', 'Villafañe', 'cristian.villafane@pjn.gov.ar', '4032-7479', 'c2'),
    (27181628419, 'Graciela', 'Olivera', 'graciela.olivera@pjn.gov.ar', '4032-7479', 'c2'),
    (20146363483, 'Hernan', 'Garay', 'hernan.garay@pjn.gov.ar', '4032-7808', 'c2');

INSERT INTO dependencias
	(codigoDependencia_id, nombre, email, telefono, piso, lado, descripcion)
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
	('v01', 'Cámara Federal de Casacion Penal - Vocalia 1','vocalia1@pjn.gov.ar','4032-9889', 1, 'rio','En el piso 9 lado rio hay un anexo'),
    ('v02', 'Cámara Federal de Casacion Penal - Vocalia 2','vocalia2@pjn.gov.ar','4032-9889', 1, 'retiro','En la planta baja lado retiro hay un anexo'),
    ('v03', 'Cámara Federal de Casacion Penal - Vocalia 3','vocalia3@pjn.gov.ar','4032-9889', 1, 'rio','En el piso 9 lado rio hay un anexo'),
    ('v04', 'Cámara Federal de Casacion Penal - Vocalia 4','vocalia4@pjn.gov.ar','4032-9889', 1, 'rio',''),
    ('v05', 'Cámara Federal de Casacion Penal - Vocalia 5','vocalia5@pjn.gov.ar','4032-9889', 1, 'retiro','En la Sala I, primer piso lado retiro hay un anexo');

