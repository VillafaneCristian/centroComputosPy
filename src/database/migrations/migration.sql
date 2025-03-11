DROP SCHEMA IF EXISTS dgtapp;
CREATE SCHEMA dgtapp;
USE dgtapp;

DROP TABLE IF EXISTS edificios;
CREATE TABLE edificios (
	edificioId SMALLINT AUTO_INCREMENT,
    ubicacion VARCHAR(300), 
    localidad VARCHAR(100),
    codigoPostal VARCHAR(10),
    descripcion VARCHAR(500),
    PRIMARY KEY (edificioId)
); 

DROP TABLE IF EXISTS tiposEquipamiento;
CREATE TABLE tiposEquipamiento (
	tipoEquipamientoId TINYINT AUTO_INCREMENT,
    tipo VARCHAR(50) UNIQUE,
    descripcion VARCHAR(400),
    PRIMARY KEY (tipoEquipamientoId)
);

DROP TABLE IF EXISTS dependencias;
CREATE TABLE dependencias (
	codigoDependenciaId VARCHAR(20),
    nombre VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(100),
    telefono VARCHAR(100),
    piso TINYINT,
    lado VARCHAR(10),
    edificioId SMALLINT,
    descripcion VARCHAR(200),
    PRIMARY KEY (codigoDependenciaId),
    FOREIGN KEY (edificioId) REFERENCES edificios (edificioId)    
);

DROP TABLE IF EXISTS areas;
CREATE TABLE areas (
	codigoAreaId VARCHAR(15),
    nombre VARCHAR(100) NOT NULL UNIQUE,
    encargado VARCHAR(50),
    email VARCHAR(100),
    telefono VARCHAR(100),
    descripcion VARCHAR(200),
    edificioId SMALLINT,
    PRIMARY KEY (codigoAreaId),
    FOREIGN KEY (edificioId) REFERENCES edificios (edificioId)
);

DROP TABLE IF EXISTS operadores;
CREATE TABLE operadores (
	cuilOperadorId BIGINT,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    telefono VARCHAR(100),
    codigoAreaId VARCHAR(15),
    avatar VARCHAR(200), 
    contrasenia VARCHAR(200),
    rol VARCHAR(100),
    PRIMARY KEY (cuilOperadorId),
    FOREIGN KEY (codigoAreaId) REFERENCES areas (codigoAreaId)
);

DROP TABLE IF EXISTS acls;
CREATE TABLE acls (
	aclId TINYINT AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL UNIQUE,
    descripcion VARCHAR(200),
    PRIMARY KEY(aclId)
);

DROP TABLE IF EXISTS usuarios;
CREATE TABLE usuarios(
	cuilUsuarioId BIGINT,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    telefono VARCHAR(100),
    comentario VARCHAR(300),
    codigoDependenciaId VARCHAR(20),
    PRIMARY KEY (cuilUsuarioId),
    FOREIGN KEY (codigoDependenciaId) REFERENCES dependencias (codigoDependenciaId)
);

DROP TABLE IF EXISTS marcasModelos;
CREATE TABLE marcasModelos (
	marcasModelosId INT AUTO_INCREMENT,
    marcaModelo VARCHAR(400), 
    tipoEquipamientoId TINYINT,
    procesador VARCHAR(100),
    memoriaRam VARCHAR(100),
    tipoDiscoRigido VARCHAR(20),
    capacidadDiscoRigido VARCHAR(20),
    lectograbadoraDVD VARCHAR(5),
    sistemaOperativo VARCHAR(200),
    foto VARCHAR(200),
    detalles TEXT,
    PRIMARY KEY (marcasModelosId),
    FOREIGN KEY (tipoEquipamientoId) REFERENCES tiposEquipamiento (tipoEquipamientoId)
); 

DROP TABLE IF EXISTS equipos;
CREATE TABLE equipos (
	nroSerieId VARCHAR(100),
    tipoEquipamientoId TINYINT,
    marcasModelosId INT,
    hostname VARCHAR(50),
    nroIp VARCHAR(20),
    estado VARCHAR(15),
    procesador VARCHAR(100),
    memoriaRam VARCHAR(100),
    tipoDiscoRigido VARCHAR(20),
    capacidadDiscoRigido VARCHAR(20),
    lectograbadoraDVD VARCHAR(5),
    sistemaOperativo VARCHAR(200),
    foto VARCHAR(100),
    codigoDependenciaId VARCHAR(20),
    cuilUsuarioId BIGINT,
    internetHabilitado VARCHAR(5),
    aclId TINYINT,    
    comentarios VARCHAR (300),
    ordenCompra VARCHAR(30),
    inventario VARCHAR(30),
    PRIMARY KEY (nroSerieId),
    FOREIGN KEY (tipoEquipamientoId) REFERENCES tiposEquipamiento (tipoEquipamientoId),
    FOREIGN KEY (marcasModelosId) REFERENCES marcasModelos (marcasModelosId),
    FOREIGN KEY (codigoDependenciaId) REFERENCES dependencias (codigoDependenciaId),
    FOREIGN KEY (cuilUsuarioId) REFERENCES usuarios (cuilUsuarioId),
    FOREIGN KEY (aclId) REFERENCES acls (aclId)
);

DROP TABLE IF EXISTS incidentes;
CREATE TABLE incidentes (
	nroIncidenteId INT AUTO_INCREMENT,
    codigoDependenciaId VARCHAR(20),
    cuilUsuarioId BIGINT,
    fechaAlta DATETIME,
    clasificacionIncidente VARCHAR(100),
    estado VARCHAR(20),
    nroSerieId VARCHAR(100),
    codigoAreaId VARCHAR(15),
    cuilOperadorIdAlta BIGINT,
    cuilOperadorIdAsignado BIGINT,
    tituloIncidente VARCHAR(200), 
    descripcionIncidente TEXT,
    detalles TEXT,
    descripcionCierre TEXT,
    fechaCierre DATETIME,
    PRIMARY KEY(nroIncidenteId),
    FOREIGN KEY (codigoDependenciaId) REFERENCES dependencias (codigoDependenciaId),
    FOREIGN KEY (cuilUsuarioId) REFERENCES usuarios (cuilUsuarioId),
    FOREIGN KEY (nroSerieId) REFERENCES equipos (nroSerieId),
    FOREIGN KEY (codigoAreaId) REFERENCES areas (codigoAreaId),
    FOREIGN KEY (cuilOperadorIdAlta) REFERENCES operadores (cuilOperadorId),
    FOREIGN KEY (cuilOperadorIdAsignado) REFERENCES operadores (cuilOperadorId)
);

