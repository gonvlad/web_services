CREATE DATABASE `office`;

USE `office`;

CREATE TABLE `office`.`programmers` ( 
    `id` INT NOT NULL AUTO_INCREMENT , 
    `name` VARCHAR(256) NOT NULL, 
    PRIMARY KEY (`id`),
    KEY(`name`)) ENGINE = InnoDB;

CREATE TABLE `office`.`applications` ( 
    `id` INT NOT NULL AUTO_INCREMENT , 
    `title` VARCHAR(256) NOT NULL , 
    `programmer` VARCHAR(256) NOT NULL , 
    PRIMARY KEY (`id`),
    CONSTRAINT `PROGRAMMER_FK` FOREIGN KEY (`programmer`) REFERENCES `programmers`(`name`) 
    ON DELETE CASCADE ON UPDATE CASCADE) ENGINE = InnoDB;