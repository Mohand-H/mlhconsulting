-- MySQL Script generated by MySQL Workbench
DROP DATABASE IF EXISTS db_mlhconsulting;

-- MySQL Script generated by MySQL Workbench
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema db_mlhconsulting
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db_mlhconsulting
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_mlhconsulting` DEFAULT CHARACTER SET utf8 ;
USE `db_mlhconsulting` ;

-- -----------------------------------------------------
-- Table `db_mlhconsulting`.`candidat`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_mlhconsulting`.`candidat` (
  `idcandidat` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NULL,
  `first_name` VARCHAR(255) NULL,
  `birth_date` DATE NULL,
  `phone_number` CHAR(13) NULL,
  `address` VARCHAR(255) NULL,
  `postal_code` INT NULL,
  `town` VARCHAR(255) NULL,
  `cover_letter` BLOB NULL,
  `cv` BLOB NULL,
  `message` LONGTEXT NULL,
  PRIMARY KEY (`idcandidat`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `email_UNIQUE` ON `db_mlhconsulting`.`candidat` (`email` ASC);


-- -----------------------------------------------------
-- Table `db_mlhconsulting`.`administrateur`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_mlhconsulting`.`administrateur` (
  `idadministrateur` INT NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `candidat_idcandidat` INT NOT NULL,
  PRIMARY KEY (`idadministrateur`),
  CONSTRAINT `fk_administrateur_candidat`
    FOREIGN KEY (`candidat_idcandidat`)
    REFERENCES `db_mlhconsulting`.`candidat` (`idcandidat`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE UNIQUE INDEX `email_UNIQUE` ON `db_mlhconsulting`.`administrateur` (`email` ASC);

CREATE INDEX `fk_administrateur_candidat_idx` ON `db_mlhconsulting`.`administrateur` (`candidat_idcandidat` ASC);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;