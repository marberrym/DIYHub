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
    project_title varchar(200) NOT NULL,
    feature_image_url varchar(200) NOT NULL,
    project_description TEXT NOT NULL
);

CREATE TABLE diy_materials (
    project_id INTEGER REFERENCES diy_projects(id),
    shopping_list jsonb,
    link_to_cart varchar(200)
);

CREATE TABLE diy_steps (
    project_id INTEGER REFERENCES diy_projects(id),
    step_order INTEGER,
    step_text TEXT,

);