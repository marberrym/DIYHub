DROP TABLE diy_users, diy_projects;

CREATE TABLE diy_users (
    id SERIAL PRIMARY KEY,
    first_name  varchar(200) NOT NULL,
    last_name  varchar(200) NOT NULL,
    email varchar(200) UNIQUE NOT NULL,
    password varchar(200) NOT NULL
);

CREATE TABLE diy_projects (
    id SERIAL PRIMARY KEY,
    creation_date TIMESTAMP,
    user_id INTEGER REFERENCES diy_users(id),
    title varchar(200) NOT NULL,
    description jsonb,
);

CREATE TABLE diy_materials (
    project_id INTEGER REFERENCES diy_projects(id),
    shopping_list jsonb,
    link_to_cart varchar(200)
);