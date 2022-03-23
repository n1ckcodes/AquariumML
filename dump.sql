--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

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
-- Name: Tank; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Tank" (
    "TankID" integer NOT NULL,
    "UserID" integer,
    "Name" text,
    "Size" numeric,
    "Type" text,
    "Location" text,
    "DateStarted" date
);


ALTER TABLE public."Tank" OWNER TO postgres;

--
-- Name: Tank_TankID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."Tank" ALTER COLUMN "TankID" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Tank_TankID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- PostgreSQL database dump complete
--

