DROP SCHEMA IF EXISTS dgtapp;
CREATE SCHEMA dgtapp;
USE dgtapp;

DROP TABLE IF EXISTS edificios;
CREATE TABLE edificios (
	edificioId SMALLINT AUTO_INCREMENT,
    ubicacion VARCHAR(300), 
    localidad VARCHAR(100),
    codigoPostal VARCHAR(20),
    descripcion VARCHAR(500),
    PRIMARY KEY (edificioId)
); 

DROP TABLE IF EXISTS estados;
CREATE TABLE estados (
    estadoId SMALLINT AUTO_INCREMENT,
    estado VARCHAR(50),
    PRIMARY KEY (estadoId)
);

DROP TABLE IF EXISTS clasificacionIncidentes;
CREATE TABLE clasificacionIncidentes (
    clasificacionIncidenteId SMALLINT AUTO_INCREMENT,
    clasificacionNombre VARCHAR(200),
    PRIMARY KEY (clasificacionIncidenteId)
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
	codigoDependenciaId VARCHAR(30),
    nombre VARCHAR(200) NOT NULL UNIQUE,
    email VARCHAR(100),
    telefono VARCHAR(100),
    piso TINYINT,
    lado VARCHAR(10),
    edificioId SMALLINT,
    descripcion VARCHAR(300),
    PRIMARY KEY (codigoDependenciaId),
    FOREIGN KEY (edificioId) REFERENCES edificios (edificioId)    
);

DROP TABLE IF EXISTS areas;
CREATE TABLE areas (
	codigoAreaId VARCHAR(30),
    nombre VARCHAR(200) NOT NULL UNIQUE,
    encargado VARCHAR(100),
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
    codigoAreaId VARCHAR(30),
    avatar VARCHAR(200), 
    contrasenia VARCHAR(200),
    rol VARCHAR(100),
    PRIMARY KEY (cuilOperadorId),
    FOREIGN KEY (codigoAreaId) REFERENCES areas (codigoAreaId)
);

DROP TABLE IF EXISTS acls;
CREATE TABLE acls (
	aclId TINYINT AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL UNIQUE,
    descripcion VARCHAR(300),
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
    codigoDependenciaId VARCHAR(30),
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
    teclaBiosTeclaMenuBooteo VARCHAR(30),
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
    ipFija VARCHAR(5),
    estadoId SMALLINT,
    procesador VARCHAR(100),
    memoriaRam VARCHAR(100),
    tipoDiscoRigido VARCHAR(20),
    capacidadDiscoRigido VARCHAR(20),
    lectograbadoraDVD VARCHAR(5),
    sistemaOperativo VARCHAR(200),
    codigoDependenciaId VARCHAR(30),
    cuilUsuarioId BIGINT,
    internetHabilitado VARCHAR(5),
    aclId TINYINT,    
    inventario VARCHAR(30),
    ordenCompra VARCHAR(30),
    detalleOrdenCompra VARCHAR(100),
    comentarios VARCHAR (300),
    PRIMARY KEY (nroSerieId),
    FOREIGN KEY (tipoEquipamientoId) REFERENCES tiposEquipamiento (tipoEquipamientoId),
    FOREIGN KEY (marcasModelosId) REFERENCES marcasModelos (marcasModelosId),
    FOREIGN KEY (estadoId) REFERENCES estados (estadoId),
    FOREIGN KEY (codigoDependenciaId) REFERENCES dependencias (codigoDependenciaId),
    FOREIGN KEY (cuilUsuarioId) REFERENCES usuarios (cuilUsuarioId),
    FOREIGN KEY (aclId) REFERENCES acls (aclId)
);

DROP TABLE IF EXISTS incidentes;
CREATE TABLE incidentes (
	nroIncidenteId INT AUTO_INCREMENT,
    codigoDependenciaId VARCHAR(30),
    cuilUsuarioId BIGINT,
    fechaAlta DATETIME,
    clasificacionIncidenteId SMALLINT,
    estado VARCHAR(20),
    nroSerieId VARCHAR(100),
    codigoAreaId VARCHAR(30),
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
    FOREIGN KEY (clasificacionIncidenteId) REFERENCES clasificacionIncidentes (clasificacionIncidenteId),
    FOREIGN KEY (nroSerieId) REFERENCES equipos (nroSerieId),
    FOREIGN KEY (codigoAreaId) REFERENCES areas (codigoAreaId),
    FOREIGN KEY (cuilOperadorIdAlta) REFERENCES operadores (cuilOperadorId),
    FOREIGN KEY (cuilOperadorIdAsignado) REFERENCES operadores (cuilOperadorId)
);

