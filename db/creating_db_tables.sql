create table users (
	id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	username text not null,
	email text not null,
	password_hash text not null,
	phone text,
	created_at timestamp default current_timestamp
);

create table listings (
	id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
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
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    total_listings_created BIGINT DEFAULT 0
);
insert into stats (total_listings_created) values (0);