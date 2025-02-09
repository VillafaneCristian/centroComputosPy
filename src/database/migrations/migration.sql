DROP SCHEMA IF EXISTS dgtApp;
CREATE SCHEMA dgtApp;
USE dgtApp;

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
	codigoDependenciaId VARCHAR(10),
    nombre VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(100) UNIQUE,
    telefono VARCHAR(100),
    piso TINYINT,
    lado VARCHAR(10),
    descripcion VARCHAR(200),
    PRIMARY KEY (codigoDependenciaId)    
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
    codigoDependenciaId VARCHAR(10),
    PRIMARY KEY (cuilUsuarioId),
    FOREIGN KEY (codigoDependenciaId) REFERENCES dependencias (codigoDependenciaId)
);

DROP TABLE IF EXISTS equipos;
CREATE TABLE equipos (
	nroSerieId VARCHAR(100),
    tipoEquipamientoId TINYINT,
    marca VARCHAR(50),
    modelo VARCHAR(50),
    hostname VARCHAR(50) UNIQUE,
    nroIp VARCHAR(20) UNIQUE,
    estado VARCHAR(15),
    foto VARCHAR(100),
    procesador VARCHAR(50),
    memoriaRam VARCHAR(50),
    tipoDiscoRigido VARCHAR(10),
    capacidadDiscoRigido VARCHAR(10),
    codigoDependenciaId VARCHAR(10),
    cuilUsuarioId BIGINT,
    internetHabilitado BOOLEAN,
    aclId TINYINT,    
    comentarios VARCHAR (300),
    PRIMARY KEY (nroSerieId),
    FOREIGN KEY (tipoEquipamientoId) REFERENCES tiposEquipamiento (tipoEquipamientoId),
    FOREIGN KEY (codigoDependenciaId) REFERENCES dependencias (codigoDependenciaId),
    FOREIGN KEY (cuilUsuarioId) REFERENCES usuarios (cuilUsuarioId),
    FOREIGN KEY (aclId) REFERENCES acls (aclId)
);

DROP TABLE IF EXISTS incidentes;
CREATE TABLE incidentes (
	nroIncidenteId INT AUTO_INCREMENT,
    cuilUsuarioId BIGINT,
    fechaAlta DATE,
    clasificacion VARCHAR(100),
    estado VARCHAR(20),
    nroSerieId VARCHAR(100),
    codigoAreaId VARCHAR(15),
    cuilOperadorIdAlta BIGINT,
    cuilOperadorIdAsignado BIGINT,
    descripcionProblema TEXT,
    detalles TEXT,
    descripcionCierre TEXT,
    fechaCierre DATE,
    PRIMARY KEY(nroIncidenteId),
    FOREIGN KEY (cuilUsuarioId) REFERENCES usuarios (cuilUsuarioId),
    FOREIGN KEY (nroSerieId) REFERENCES equipos (nroSerieId),
    FOREIGN KEY (codigoAreaId) REFERENCES areas (codigoAreaId),
    FOREIGN KEY (cuilOperadorIdAlta) REFERENCES operadores (cuilOperadorId),
    FOREIGN KEY (cuilOperadorIdAsignado) REFERENCES operadores (cuilOperadorId)
);