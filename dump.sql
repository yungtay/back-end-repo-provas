--
-- PostgreSQL database dump
--

-- Dumped from database version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: disciplines; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.disciplines (
    id integer NOT NULL,
    name text NOT NULL,
    "periodId" integer NOT NULL
);


--
-- Name: disciplinesProfessors; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."disciplinesProfessors" (
    id integer NOT NULL,
    "disciplineId" integer NOT NULL,
    "professorId" integer NOT NULL
);


--
-- Name: disciplinesProfessors_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."disciplinesProfessors_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: disciplinesProfessors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."disciplinesProfessors_id_seq" OWNED BY public."disciplinesProfessors".id;


--
-- Name: disciplines_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.disciplines_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: disciplines_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.disciplines_id_seq OWNED BY public.disciplines.id;


--
-- Name: periods; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.periods (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: periods_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.periods_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: periods_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.periods_id_seq OWNED BY public.periods.id;


--
-- Name: professors; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.professors (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: professors_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.professors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: professors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.professors_id_seq OWNED BY public.professors.id;


--
-- Name: semesters; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.semesters (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: semesters_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.semesters_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: semesters_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.semesters_id_seq OWNED BY public.semesters.id;


--
-- Name: tests; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tests (
    id integer NOT NULL,
    "semesterId" integer NOT NULL,
    "categoryId" integer NOT NULL,
    "disciplineId" integer NOT NULL,
    pdf text NOT NULL,
    "professorId" integer NOT NULL
);


--
-- Name: tests_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tests_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: tests_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tests_id_seq OWNED BY public.tests.id;


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: disciplines id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.disciplines ALTER COLUMN id SET DEFAULT nextval('public.disciplines_id_seq'::regclass);


--
-- Name: disciplinesProfessors id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."disciplinesProfessors" ALTER COLUMN id SET DEFAULT nextval('public."disciplinesProfessors_id_seq"'::regclass);


--
-- Name: periods id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.periods ALTER COLUMN id SET DEFAULT nextval('public.periods_id_seq'::regclass);


--
-- Name: professors id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.professors ALTER COLUMN id SET DEFAULT nextval('public.professors_id_seq'::regclass);


--
-- Name: semesters id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.semesters ALTER COLUMN id SET DEFAULT nextval('public.semesters_id_seq'::regclass);


--
-- Name: tests id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tests ALTER COLUMN id SET DEFAULT nextval('public.tests_id_seq'::regclass);


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.categories VALUES (1, 'P1');
INSERT INTO public.categories VALUES (2, 'P2');
INSERT INTO public.categories VALUES (3, 'P3');
INSERT INTO public.categories VALUES (4, '2ch');
INSERT INTO public.categories VALUES (5, 'Outras');


--
-- Data for Name: disciplines; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.disciplines VALUES (1, 'Cálculo 1', 1);
INSERT INTO public.disciplines VALUES (2, 'Cálculo 2', 2);
INSERT INTO public.disciplines VALUES (3, 'Cálculo 3', 3);
INSERT INTO public.disciplines VALUES (4, 'Cálculo 4', 4);
INSERT INTO public.disciplines VALUES (5, 'Física 1', 1);
INSERT INTO public.disciplines VALUES (6, 'Física 2', 2);
INSERT INTO public.disciplines VALUES (7, 'Física 3', 3);
INSERT INTO public.disciplines VALUES (8, 'Física 4', 4);


--
-- Data for Name: disciplinesProfessors; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."disciplinesProfessors" VALUES (1, 1, 1);
INSERT INTO public."disciplinesProfessors" VALUES (2, 1, 2);


--
-- Data for Name: periods; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.periods VALUES (1, '1º período');
INSERT INTO public.periods VALUES (2, '2º período');
INSERT INTO public.periods VALUES (3, '3º período');
INSERT INTO public.periods VALUES (4, '4º período');
INSERT INTO public.periods VALUES (5, '5º período');
INSERT INTO public.periods VALUES (6, '6º período');
INSERT INTO public.periods VALUES (7, '7º período');
INSERT INTO public.periods VALUES (8, '8º período');
INSERT INTO public.periods VALUES (9, '9º período');
INSERT INTO public.periods VALUES (10, '10º período');


--
-- Data for Name: professors; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.professors VALUES (1, 'Heloisa');
INSERT INTO public.professors VALUES (2, 'Ronaldo');
INSERT INTO public.professors VALUES (3, 'Iene');
INSERT INTO public.professors VALUES (4, 'Monica');
INSERT INTO public.professors VALUES (5, 'Olga');
INSERT INTO public.professors VALUES (6, 'Fialho');
INSERT INTO public.professors VALUES (7, 'Teofilo');
INSERT INTO public.professors VALUES (8, 'Afonso');
INSERT INTO public.professors VALUES (9, 'Renan');


--
-- Data for Name: semesters; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.semesters VALUES (1, '2018.1');
INSERT INTO public.semesters VALUES (2, '2018.2');
INSERT INTO public.semesters VALUES (3, '2019.1');
INSERT INTO public.semesters VALUES (4, '2019.2');
INSERT INTO public.semesters VALUES (5, '2020.1');
INSERT INTO public.semesters VALUES (6, '2020.2');
INSERT INTO public.semesters VALUES (7, '2021.1');
INSERT INTO public.semesters VALUES (8, '2021.2');


--
-- Data for Name: tests; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.tests VALUES (2, 2, 2, 2, 'https://www.globo.com/', 1);
INSERT INTO public.tests VALUES (3, 1, 1, 1, 'https://www.globo.com/', 1);
INSERT INTO public.tests VALUES (4, 1, 1, 1, 'https://www.globo.com/', 2);
INSERT INTO public.tests VALUES (5, 8, 1, 1, 'https://www.globo.com/', 2);
INSERT INTO public.tests VALUES (6, 1, 2, 1, 'www.globo.com/', 2);
INSERT INTO public.tests VALUES (7, 1, 1, 1, 'https://joi.dev/api/?v=17.4.2', 1);
INSERT INTO public.tests VALUES (8, 1, 1, 1, 'https://joi.dev/api/?v=17.4.2', 1);
INSERT INTO public.tests VALUES (9, 1, 1, 1, 'https://joi.dev/api/?v=17.4.2', 1);


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.categories_id_seq', 5, true);


--
-- Name: disciplinesProfessors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."disciplinesProfessors_id_seq"', 3, true);


--
-- Name: disciplines_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.disciplines_id_seq', 8, true);


--
-- Name: periods_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.periods_id_seq', 10, true);


--
-- Name: professors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.professors_id_seq', 9, true);


--
-- Name: semesters_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.semesters_id_seq', 8, true);


--
-- Name: tests_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tests_id_seq', 9, true);


--
-- Name: categories categories_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pk PRIMARY KEY (id);


--
-- Name: disciplinesProfessors disciplinesProfessors_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."disciplinesProfessors"
    ADD CONSTRAINT "disciplinesProfessors_pk" PRIMARY KEY (id);


--
-- Name: disciplines disciplines_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.disciplines
    ADD CONSTRAINT disciplines_pk PRIMARY KEY (id);


--
-- Name: periods periods_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.periods
    ADD CONSTRAINT periods_name_key UNIQUE (name);


--
-- Name: periods periods_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.periods
    ADD CONSTRAINT periods_pk PRIMARY KEY (id);


--
-- Name: professors professors_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.professors
    ADD CONSTRAINT professors_pk PRIMARY KEY (id);


--
-- Name: semesters semesters_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.semesters
    ADD CONSTRAINT semesters_pk PRIMARY KEY (id);


--
-- Name: tests tests_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT tests_pk PRIMARY KEY (id);


--
-- Name: disciplinesProfessors disciplinesProfessors_fk1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."disciplinesProfessors"
    ADD CONSTRAINT "disciplinesProfessors_fk1" FOREIGN KEY ("professorId") REFERENCES public.professors(id);


--
-- Name: disciplines disciplines_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.disciplines
    ADD CONSTRAINT disciplines_fk0 FOREIGN KEY ("periodId") REFERENCES public.periods(id);


--
-- Name: tests tests_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT tests_fk0 FOREIGN KEY ("semesterId") REFERENCES public.semesters(id);


--
-- Name: tests tests_fk1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT tests_fk1 FOREIGN KEY ("categoryId") REFERENCES public.categories(id);


--
-- Name: tests tests_fk3; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT tests_fk3 FOREIGN KEY ("professorId") REFERENCES public.professors(id);


--
-- PostgreSQL database dump complete
--

