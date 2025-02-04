DROP SCHEMA IF EXISTS dgtApp;
CREATE SCHEMA dgtApp;
USE dgtApp;

DROP TABLE IF EXISTS edificios;
CREATE TABLE edificios (
	edificio_id SMALLINT AUTO_INCREMENT,
    ubicacion VARCHAR(300), 
    descripcion VARCHAR(500),
    PRIMARY KEY (edificio_id)
); 

DROP TABLE IF EXISTS tipos_equipamiento;
CREATE TABLE tipos_equipamiento (
	tipoEquipamiento_id TINYINT AUTO_INCREMENT,
    tipo VARCHAR(50) UNIQUE,
    descripcion VARCHAR(400),
    PRIMARY KEY (tipoEquipamiento_id)
);

DROP TABLE IF EXISTS dependencias;
CREATE TABLE dependencias (
	codigoDependencia_id VARCHAR(10),
    nombre VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(100) UNIQUE,
    telefono VARCHAR (50),
    piso TINYINT,
    lado VARCHAR(10),
    descripcion VARCHAR(200),
    PRIMARY KEY (codigoDependencia_id)    
);

DROP TABLE IF EXISTS areas;
CREATE TABLE areas (
	codigoArea_id VARCHAR(15),
    nombre VARCHAR(100) NOT NULL UNIQUE,
    encargado VARCHAR(50),
    email VARCHAR(100),
    telefono VARCHAR (50),
    descripcion VARCHAR(200),
    edificio_id SMALLINT,
    PRIMARY KEY (codigoArea_id),
    FOREIGN KEY (edificio_id) REFERENCES edificios (edificio_id)
);

DROP TABLE IF EXISTS operadores;
CREATE TABLE operadores (
	cuilOperador_id BIGINT,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    telefono VARCHAR (50),
    codigoArea_id VARCHAR(15),
    avatar VARCHAR(200), 
    contrasenia VARCHAR(200),
    PRIMARY KEY (cuilOperador_id),
    FOREIGN KEY (codigoArea_id) REFERENCES areas (codigoArea_id)
);

DROP TABLE IF EXISTS acls;
CREATE TABLE acls (
	acl_id TINYINT,
    nombre VARCHAR(30) NOT NULL UNIQUE,
    descripcion VARCHAR(200),
    PRIMARY KEY(acl_id)
);

DROP TABLE IF EXISTS usuarios;
CREATE TABLE usuarios(
	cuilUsuario_id BIGINT,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    telefono VARCHAR (50),
    comentario VARCHAR(300),
    codigoDependencia_id VARCHAR(10),
    PRIMARY KEY (cuilUsuario_id),
    FOREIGN KEY (codigoDependencia_id) REFERENCES dependencias (codigoDependencia_id)
);

DROP TABLE IF EXISTS equipos;
CREATE TABLE equipos (
	nroSerie_id VARCHAR(100),
    tipoEquipamiento_id TINYINT,
    marca VARCHAR(50),
    modelo VARCHAR(50),
    hostname VARCHAR(50) UNIQUE,
    nroIp VARCHAR(20) UNIQUE,
    estado VARCHAR(15),
    foto VARCHAR(100),
    procesador VARCHAR(50),
    memoriaRam VARCHAR(50),
    tipo_discoRigido VARCHAR(10),
    capacidad_discoRigido VARCHAR(10),
    codigoDependencia_id VARCHAR(10),
    cuilUsuario_id BIGINT,
    internet_habilitado BOOLEAN,
    acl_id TINYINT,    
    comentarios VARCHAR (300),
    PRIMARY KEY (nroSerie_id),
    FOREIGN KEY (tipoEquipamiento_id) REFERENCES tipos_equipamiento (tipoEquipamiento_id),
    FOREIGN KEY(codigoDependencia_id) REFERENCES dependencias (codigoDependencia_id),
    FOREIGN KEY (cuilUsuario_id) REFERENCES usuarios (cuilUsuario_id),
    FOREIGN KEY (acl_id) REFERENCES acls (acl_id)
);

DROP TABLE IF EXISTS incidentes;
CREATE TABLE incidentes (
	nroIncidente_id INT AUTO_INCREMENT,
    cuilUsuario_id BIGINT,
    fecha_alta DATE,
    clasificacion VARCHAR(50),
    estado VARCHAR(20),
    nroSerie_id VARCHAR(100),
    codigoArea_id VARCHAR(15),
    cuilOperador_id_alta BIGINT,
    cuilOperador_id_asignado BIGINT,
    descripcion_problema TEXT,
    detalles TEXT,
    descripcion_cierre TEXT,
    fecha_cierre DATE,
    PRIMARY KEY(nroIncidente_id),
    FOREIGN KEY (cuilUsuario_id) REFERENCES usuarios (cuilUsuario_id),
    FOREIGN KEY (nroSerie_id) REFERENCES equipos (nroSerie_id),
    FOREIGN KEY (codigoArea_id) REFERENCES areas (codigoArea_id),
    FOREIGN KEY (cuilOperador_id_alta) REFERENCES operadores (cuilOperador_id),
    FOREIGN KEY (cuilOperador_id_asignado) REFERENCES operadores (cuilOperador_id)
);