-- Table: public.utilisateur

-- DROP TABLE public.utilisateur;

CREATE TABLE public.utilisateur
(
  id_utilisateur integer NOT NULL DEFAULT nextval('utilisateur_id_utilisateur_seq'::regclass),
  username character varying(100),
  password_user character varying(20),
  role_user character varying(20),
  fullname character varying(100),
  CONSTRAINT primary_key_utilisateur PRIMARY KEY (id_utilisateur)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.utilisateur
  OWNER TO postgres;




-- Table: public.produits

-- DROP TABLE public.produits;

CREATE TABLE public.produits
(
  id_produit integer NOT NULL DEFAULT nextval('produits_id_produit_seq'::regclass),
  nom_produit character varying(100),
  prix_produit character varying(20),
  CONSTRAINT primary_key_produits PRIMARY KEY (id_produit)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.produits
  OWNER TO postgres;