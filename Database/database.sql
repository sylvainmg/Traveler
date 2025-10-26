DROP DATABASE IF EXISTS TRAVELER;

CREATE DATABASE IF NOT EXISTS TRAVELER;
USE TRAVELER;
# -----------------------------------------------------------------------------
#       TABLE : DISPONIBILITE
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS DISPONIBILITE
 (
   CODE CHAR(32) NOT NULL  ,
   DISPONIBILITE VARCHAR(128) NULL  
   , PRIMARY KEY (CODE) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : VOL
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS VOL
 (
   NUM_VOL BIGINT(4) NOT NULL AUTO_INCREMENT ,
   CODE CHAR(32) NOT NULL  ,
   CODE_DECOLLER CHAR(32) NOT NULL  ,
   ID_COMPAGNIE_AERIENNE BIGINT(4) NOT NULL  ,
   PRIX DECIMAL(13,2) NOT NULL  ,
   DATE_VOL DATE NOT NULL  ,
   HEURE_DEPART TIME NOT NULL  
   , PRIMARY KEY (NUM_VOL) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE VOL
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_VOL_PAYS
     ON VOL (CODE ASC);

CREATE  INDEX I_FK_VOL_PAYS1
     ON VOL (CODE_DECOLLER ASC);

CREATE  INDEX I_FK_VOL_COMPAGNIE_AERIENNE
     ON VOL (ID_COMPAGNIE_AERIENNE ASC);

# -----------------------------------------------------------------------------
#       TABLE : PAYS
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS PAYS
 (
   CODE CHAR(32) NOT NULL  ,
   NOM VARCHAR(128) NOT NULL  ,
   VILLE VARCHAR(128) NOT NULL  
   , PRIMARY KEY (CODE) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : REFRESH_TOKEN
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS REFRESH_TOKEN
 (
   TOKEN VARCHAR(128) NOT NULL  ,
   ID_CLIENT BIGINT(4) NOT NULL  
   , PRIMARY KEY (TOKEN) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE REFRESH_TOKEN
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_REFRESH_TOKEN_CLIENT
     ON REFRESH_TOKEN (ID_CLIENT ASC);

# -----------------------------------------------------------------------------
#       TABLE : COMPAGNIE_AERIENNE
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS COMPAGNIE_AERIENNE
 (
   ID_COMPAGNIE_AERIENNE BIGINT(4) NOT NULL AUTO_INCREMENT ,
   NOM VARCHAR(128) NOT NULL  
   , PRIMARY KEY (ID_COMPAGNIE_AERIENNE) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : HOTEL
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS HOTEL
 (
   ID_HOTEL BIGINT(4) NOT NULL AUTO_INCREMENT ,
   CODE CHAR(32) NOT NULL  ,
   CODE_AVOIR CHAR(32) NOT NULL  ,
   NOM VARCHAR(128) NOT NULL  ,
   NB_ETOILE SMALLINT(1) NOT NULL  
   , PRIMARY KEY (ID_HOTEL) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE HOTEL
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_HOTEL_PAYS
     ON HOTEL (CODE ASC);

CREATE  INDEX I_FK_HOTEL_DISPONIBILITE
     ON HOTEL (CODE_AVOIR ASC);

# -----------------------------------------------------------------------------
#       TABLE : CLIENT
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS CLIENT
 (
   ID_CLIENT BIGINT(4) NOT NULL AUTO_INCREMENT ,
   CODE CHAR(32) NOT NULL  ,
   NOM VARCHAR(128) NOT NULL  ,
   PRENOM VARCHAR(128) NOT NULL  ,
   EMAIL VARCHAR(128) NOT NULL  ,
   PASSWORD VARCHAR(128) NOT NULL  
   , PRIMARY KEY (ID_CLIENT) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE CLIENT
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_CLIENT_PAYS
     ON CLIENT (CODE ASC);

# -----------------------------------------------------------------------------
#       TABLE : CONVENTION_HOTEL
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS CONVENTION_HOTEL
 (
   NUM_CONVENTION BIGINT(4) NOT NULL AUTO_INCREMENT ,
   ID_HOTEL BIGINT(4) NOT NULL  ,
   DATE_CONVENTION DATE NULL  
   , PRIMARY KEY (NUM_CONVENTION) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE CONVENTION_HOTEL
# -----------------------------------------------------------------------------


CREATE UNIQUE INDEX I_FK_CONVENTION_HOTEL_HOTEL
     ON CONVENTION_HOTEL (ID_HOTEL ASC);

# -----------------------------------------------------------------------------
#       TABLE : CATEGORIE
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS CATEGORIE
 (
   CODE CHAR(32) NOT NULL  ,
   LIBELLE VARCHAR(128) NOT NULL  
   , PRIMARY KEY (CODE) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : EVALUATION
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS EVALUATION
 (
   NUM_EVALUATION BIGINT(4) NOT NULL AUTO_INCREMENT ,
   NUM_RESERVATION BIGINT(4) NOT NULL  ,
   NOTE_HOTEL SMALLINT(1) NOT NULL  ,
   AVIS_HOTEL VARCHAR(255) NOT NULL  ,
   NOTE_COMPAGNIE_AERIENNE SMALLINT(1) NOT NULL  ,
   AVIS_COMPAGNE_AERIENNE VARCHAR(255) NOT NULL  
   , PRIMARY KEY (NUM_EVALUATION) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE EVALUATION
# -----------------------------------------------------------------------------


CREATE UNIQUE INDEX I_FK_EVALUATION_RESERVATION
     ON EVALUATION (NUM_RESERVATION ASC);

# -----------------------------------------------------------------------------
#       TABLE : RESERVATION
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS RESERVATION
 (
   NUM_RESERVATION BIGINT(4) NOT NULL AUTO_INCREMENT ,
   NUM_VOL BIGINT(4) NOT NULL  ,
   NUM_VOL_RETOURNER BIGINT(4) NOT NULL  ,
   ID_HOTEL BIGINT(4) NOT NULL  ,
   ID_CLIENT BIGINT(4) NOT NULL  ,
   CODE CHAR(32) NOT NULL  ,
   DATE_RESERVATION DATE NOT NULL  ,
   DEBUT_SEJOUR DATE NOT NULL  ,
   DUREE_SEJOUR INTEGER(2) NOT NULL  
   , PRIMARY KEY (NUM_RESERVATION) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE RESERVATION
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_RESERVATION_VOL
     ON RESERVATION (NUM_VOL ASC);

CREATE  INDEX I_FK_RESERVATION_VOL1
     ON RESERVATION (NUM_VOL_RETOURNER ASC);

CREATE  INDEX I_FK_RESERVATION_HOTEL
     ON RESERVATION (ID_HOTEL ASC);

CREATE  INDEX I_FK_RESERVATION_CLIENT
     ON RESERVATION (ID_CLIENT ASC);

CREATE  INDEX I_FK_RESERVATION_CATEGORIE
     ON RESERVATION (CODE ASC);

# -----------------------------------------------------------------------------
#       TABLE : CHAMBRE
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS CHAMBRE
 (
   NUM_CHAMBRE BIGINT(4) NOT NULL AUTO_INCREMENT ,
   CATEGORIE VARCHAR(128) NOT NULL  ,
   PRIX DECIMAL(13,2) NOT NULL  
   , PRIMARY KEY (NUM_CHAMBRE) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : CONVENTION_COMPAGNIE_AERIENNE
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS CONVENTION_COMPAGNIE_AERIENNE
 (
   NUM_CONVENTION BIGINT(4) NOT NULL AUTO_INCREMENT ,
   ID_COMPAGNIE_AERIENNE BIGINT(4) NOT NULL  ,
   DATE_CONVENTION DATE NOT NULL  
   , PRIMARY KEY (NUM_CONVENTION) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE CONVENTION_COMPAGNIE_AERIENNE
# -----------------------------------------------------------------------------


CREATE UNIQUE INDEX I_FK_CONVENTION_COMPAGNIE_AERIENNE_COMPAGNIE_AERIENNE
     ON CONVENTION_COMPAGNIE_AERIENNE (ID_COMPAGNIE_AERIENNE ASC);

# -----------------------------------------------------------------------------
#       TABLE : DESSERVIR
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS DESSERVIR
 (
   ID_COMPAGNIE_AERIENNE BIGINT(4) NOT NULL  ,
   CODE CHAR(32) NOT NULL  
   , PRIMARY KEY (ID_COMPAGNIE_AERIENNE,CODE) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE DESSERVIR
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_DESSERVIR_COMPAGNIE_AERIENNE
     ON DESSERVIR (ID_COMPAGNIE_AERIENNE ASC);

CREATE  INDEX I_FK_DESSERVIR_PAYS
     ON DESSERVIR (CODE ASC);

# -----------------------------------------------------------------------------
#       TABLE : POSSEDER
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS POSSEDER
 (
   ID_HOTEL BIGINT(4) NOT NULL  ,
   NUM_CHAMBRE BIGINT(4) NOT NULL  
   , PRIMARY KEY (ID_HOTEL,NUM_CHAMBRE) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE POSSEDER
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_POSSEDER_HOTEL
     ON POSSEDER (ID_HOTEL ASC);

CREATE  INDEX I_FK_POSSEDER_CHAMBRE
     ON POSSEDER (NUM_CHAMBRE ASC);


# -----------------------------------------------------------------------------
#       CREATION DES REFERENCES DE TABLE
# -----------------------------------------------------------------------------


ALTER TABLE VOL 
  ADD FOREIGN KEY FK_VOL_PAYS (CODE)
      REFERENCES PAYS (CODE) ;


ALTER TABLE VOL 
  ADD FOREIGN KEY FK_VOL_PAYS1 (CODE_DECOLLER)
      REFERENCES PAYS (CODE) ;


ALTER TABLE VOL 
  ADD FOREIGN KEY FK_VOL_COMPAGNIE_AERIENNE (ID_COMPAGNIE_AERIENNE)
      REFERENCES COMPAGNIE_AERIENNE (ID_COMPAGNIE_AERIENNE) ;


ALTER TABLE REFRESH_TOKEN 
  ADD FOREIGN KEY FK_REFRESH_TOKEN_CLIENT (ID_CLIENT)
      REFERENCES CLIENT (ID_CLIENT) ;


ALTER TABLE HOTEL 
  ADD FOREIGN KEY FK_HOTEL_PAYS (CODE)
      REFERENCES PAYS (CODE) ;


ALTER TABLE HOTEL 
  ADD FOREIGN KEY FK_HOTEL_DISPONIBILITE (CODE_AVOIR)
      REFERENCES DISPONIBILITE (CODE) ;


ALTER TABLE CLIENT 
  ADD FOREIGN KEY FK_CLIENT_PAYS (CODE)
      REFERENCES PAYS (CODE) ;


ALTER TABLE CONVENTION_HOTEL 
  ADD FOREIGN KEY FK_CONVENTION_HOTEL_HOTEL (ID_HOTEL)
      REFERENCES HOTEL (ID_HOTEL) ;


ALTER TABLE EVALUATION 
  ADD FOREIGN KEY FK_EVALUATION_RESERVATION (NUM_RESERVATION)
      REFERENCES RESERVATION (NUM_RESERVATION) ;


ALTER TABLE RESERVATION 
  ADD FOREIGN KEY FK_RESERVATION_VOL (NUM_VOL)
      REFERENCES VOL (NUM_VOL) ;


ALTER TABLE RESERVATION 
  ADD FOREIGN KEY FK_RESERVATION_VOL1 (NUM_VOL_RETOURNER)
      REFERENCES VOL (NUM_VOL) ;


ALTER TABLE RESERVATION 
  ADD FOREIGN KEY FK_RESERVATION_HOTEL (ID_HOTEL)
      REFERENCES HOTEL (ID_HOTEL) ;


ALTER TABLE RESERVATION 
  ADD FOREIGN KEY FK_RESERVATION_CLIENT (ID_CLIENT)
      REFERENCES CLIENT (ID_CLIENT) ;


ALTER TABLE RESERVATION 
  ADD FOREIGN KEY FK_RESERVATION_CATEGORIE (CODE)
      REFERENCES CATEGORIE (CODE) ;


ALTER TABLE CONVENTION_COMPAGNIE_AERIENNE 
  ADD FOREIGN KEY FK_CONVENTION_COMPAGNIE_AERIENNE_COMPAGNIE_AERIENNE (ID_COMPAGNIE_AERIENNE)
      REFERENCES COMPAGNIE_AERIENNE (ID_COMPAGNIE_AERIENNE) ;


ALTER TABLE DESSERVIR 
  ADD FOREIGN KEY FK_DESSERVIR_COMPAGNIE_AERIENNE (ID_COMPAGNIE_AERIENNE)
      REFERENCES COMPAGNIE_AERIENNE (ID_COMPAGNIE_AERIENNE) ;


ALTER TABLE DESSERVIR 
  ADD FOREIGN KEY FK_DESSERVIR_PAYS (CODE)
      REFERENCES PAYS (CODE) ;


ALTER TABLE POSSEDER 
  ADD FOREIGN KEY FK_POSSEDER_HOTEL (ID_HOTEL)
      REFERENCES HOTEL (ID_HOTEL) ;


ALTER TABLE POSSEDER 
  ADD FOREIGN KEY FK_POSSEDER_CHAMBRE (NUM_CHAMBRE)
      REFERENCES CHAMBRE (NUM_CHAMBRE) ;

