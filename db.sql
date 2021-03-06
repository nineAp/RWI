PGDMP     +                    z         
   restaurant    14.4    14.4                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            	           1262    41565 
   restaurant    DATABASE     g   CREATE DATABASE restaurant WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
    DROP DATABASE restaurant;
                postgres    false            ?            1259    41831    Category    TABLE     ?   CREATE TABLE public."Category" (
    id integer NOT NULL,
    title text NOT NULL,
    image text DEFAULT 'no_photo.jpg'::text
);
    DROP TABLE public."Category";
       public         heap    postgres    false            ?            1259    41830    Category_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."Category_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Category_id_seq";
       public          postgres    false    211            
           0    0    Category_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Category_id_seq" OWNED BY public."Category".id;
          public          postgres    false    210            ?            1259    41841    Dish    TABLE     ?   CREATE TABLE public."Dish" (
    id integer NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    price double precision NOT NULL,
    weight text NOT NULL,
    image text DEFAULT 'no_photo.jpg'::text,
    "categoryId" integer
);
    DROP TABLE public."Dish";
       public         heap    postgres    false            ?            1259    41840    Dish_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."Dish_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."Dish_id_seq";
       public          postgres    false    213                       0    0    Dish_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."Dish_id_seq" OWNED BY public."Dish".id;
          public          postgres    false    212            ?            1259    41821    _prisma_migrations    TABLE     ?  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap    postgres    false            g           2604    41834    Category id    DEFAULT     n   ALTER TABLE ONLY public."Category" ALTER COLUMN id SET DEFAULT nextval('public."Category_id_seq"'::regclass);
 <   ALTER TABLE public."Category" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    211    211            i           2604    41844    Dish id    DEFAULT     f   ALTER TABLE ONLY public."Dish" ALTER COLUMN id SET DEFAULT nextval('public."Dish_id_seq"'::regclass);
 8   ALTER TABLE public."Dish" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    213    213                      0    41831    Category 
   TABLE DATA           6   COPY public."Category" (id, title, image) FROM stdin;
    public          postgres    false    211   ?                 0    41841    Dish 
   TABLE DATA           \   COPY public."Dish" (id, title, description, price, weight, image, "categoryId") FROM stdin;
    public          postgres    false    213   e       ?          0    41821    _prisma_migrations 
   TABLE DATA           ?   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          postgres    false    209   3                  0    0    Category_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Category_id_seq"', 3, true);
          public          postgres    false    210                       0    0    Dish_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public."Dish_id_seq"', 7, true);
          public          postgres    false    212            n           2606    41839    Category Category_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Category"
    ADD CONSTRAINT "Category_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Category" DROP CONSTRAINT "Category_pkey";
       public            postgres    false    211            q           2606    41849    Dish Dish_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."Dish"
    ADD CONSTRAINT "Dish_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."Dish" DROP CONSTRAINT "Dish_pkey";
       public            postgres    false    213            l           2606    41829 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            postgres    false    209            o           1259    41850    Category_title_key    INDEX     S   CREATE UNIQUE INDEX "Category_title_key" ON public."Category" USING btree (title);
 (   DROP INDEX public."Category_title_key";
       public            postgres    false    211            r           1259    41851    Dish_title_key    INDEX     K   CREATE UNIQUE INDEX "Dish_title_key" ON public."Dish" USING btree (title);
 $   DROP INDEX public."Dish_title_key";
       public            postgres    false    213            s           2606    41913    Dish Dish_categoryId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."Dish"
    ADD CONSTRAINT "Dish_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public."Category"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 G   ALTER TABLE ONLY public."Dish" DROP CONSTRAINT "Dish_categoryId_fkey";
       public          postgres    false    211    213    3182               ?   x????0Fk{
?Ⱦ?cg?"Q1U6??B????0??'}?i?~??ͼ??E"?PF?ȏ??6.???|9I???W^?M(?D? ?`㕃?\??L??F]?n??{?>????_^??]{?g?B?*%?h?3?C[uJ???q?R? Nw@)         ?  x???͊?@???S?Y{?[???GpS?? ?O0?C??A]?mz???n?hn?n?????*?;?䈎>?z:?????^Ѻ?O?XM+Zt{?Ty??].:rT9!H'???I?X??^H????'???6??~?uųv??6G?{?????nZ6*}8<z??<{p?:?b?5?
Q???D?Y?T??1??Ȏ޵?|_OK?a{o??i`9}?r????Ê?^???TS?^0U8P?#D?=k??U??Y??>s[??mx????Noھi?'Zj?F??\].Q???}UT?C??Պ2Vę<???>??-?.u?~??\q?씋?YdP[?m??R?̪???cގ???v?}e??-?V?????f?o?-қ5?1????????X???VWf???1?}+?07p?b?m;?')2;??1rԵp2??bH&"??????;?s?      ?   ?   x?u?Kj?1????^???'ٖ??hs?(tӖ??0?7?)?
U?" X<1.?j?&??9??4?5d?????TrQt???d$e?HZ-:!?X?Q-?/HG?G?Cem???u0i??~????%??????]?>? ?p')C??B??R?b????iN n^?bf?????ؙjk??f&?K??s??"?o?hc?9??@҉????????=?F???þ?7d?^?     