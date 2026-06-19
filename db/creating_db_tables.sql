create table users (
	id integer generated always as identity primary key,
	username text not null,
	email text not null,
	password_hash text not null,
	phone text,
	created_at timestamp default current_timestamp
);

create table listings (
	id integer generated always as identity primary key,
	title text not null,
	description text,
	price integer,
	tags text[],
	images text[],
	seller_id integer references users(id),
	seller_email text,
	seller_phone text,
	emailShow bool default false,
	phoneShow bool default false,
	created_at timestamp default current_timestamp,
	visibility bool default true
);

create table stats (
    id integer generated always as identity primary key,
    total_listings_created bigint default 0
);
insert into stats (total_listings_created) values (0);