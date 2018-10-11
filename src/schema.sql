DROP TABLE IF EXISTS diy_users, diy_projects, diy_votes, 
    diy_categories, diy_materials, diy_steps, 
    diy_materials_bridge, diy_badges, diy_my_projects, diy_comments, diy_collaborators CASCADE;

CREATE TABLE diy_users (
    id SERIAL PRIMARY KEY,
    first_name  varchar(200) NOT NULL,
    last_name  varchar(200) NOT NULL,
    email varchar(200) UNIQUE NOT NULL,
    avatar_file varchar(255),
    password varchar(200) NOT NULL
);

CREATE TABLE diy_categories (
    id SERIAL PRIMARY KEY,
    category_title varchar(200)
);

CREATE TABLE diy_projects (
    id SERIAL PRIMARY KEY,
    creation_date TIMESTAMP,
    user_id INTEGER REFERENCES diy_users(id),
    publish_status INTEGER NOT NULL,
    project_title varchar(200) NOT NULL,
    feature_image_file varchar(500),
    time_range INTEGER,
    cost_range INTEGER,
    category_id INTEGER REFERENCES diy_categories(id),
    project_description TEXT
);

CREATE TABLE diy_collaborators (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES diy_users(id),
    project_id INTEGER REFERENCES diy_projects(id),
    collab_status INTEGER NOT NULL,
    UNIQUE (user_id, project_id)
);

CREATE TABLE diy_votes (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES diy_users(id),
    project_id INTEGER REFERENCES diy_projects(id),
    UNIQUE (user_id, project_id)
);

CREATE TABLE diy_comments (
    id SERIAL PRIMARY KEY,
    creation_date TIMESTAMP,
    user_id INTEGER REFERENCES diy_users(id),
    project_id INTEGER REFERENCES diy_projects(id),
    comment varchar(500) NOT NULL
);

CREATE TABLE diy_materials (
    id serial primary key,
    title varchar(200),
    amazon_asin varchar(200)
);

CREATE TABLE diy_steps (
    id SERIAL PRIMARY KEY,
    project_id INTEGER REFERENCES diy_projects(id),
    step_order INTEGER,
    step_image_file varchar(500),
    step_title varchar(200),
    step_text TEXT
);

CREATE TABLE diy_materials_bridge (
    project_id INTEGER REFERENCES diy_projects(id), 
    material_id INTEGER REFERENCES diy_materials(id),
    quantity INTEGER
);

CREATE TABLE diy_badges (
    user_id INTEGER REFERENCES diy_users(id),
    badge INTEGER
);

CREATE TABLE diy_my_projects (
    user_id INTEGER REFERENCES diy_users(id),
    project_id INTEGER REFERENCES diy_projects(id),
    project_status INTEGER
);