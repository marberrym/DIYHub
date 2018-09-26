DROP TABLE diy_users, diy_projects, 
    diy_categories, diy_materials, diy_steps, 
    diy_materials_bridge, diy_userfaves, diy_badges;

CREATE TABLE diy_users (
    id SERIAL PRIMARY KEY,
    first_name  varchar(200) NOT NULL,
    last_name  varchar(200) NOT NULL,
    email varchar(200) UNIQUE NOT NULL,
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
    project_title varchar(200) NOT NULL,
    feature_image_url varchar(200) NOT NULL,
    time_range INTEGER NOT NULL,
    cost_range INTEGER NOT NULL,
    category_id INTEGER REFERENCES diy_categories(id),
    project_description TEXT NOT NULL
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
    step_image_URL varchar(200),
    step_title varchar(200),
    step_text TEXT
);

CREATE TABLE diy_materials_bridge (
    project_id INTEGER REFERENCES diy_projects(id), 
    material_id INTEGER REFERENCES diy_materials(id),
    quantity INTEGER
);

CREATE TABLE diy_user_faves (
    user_id INTEGER REFERENCES diy_users(id),
    project_id INTEGER REFERENCES diy_projects(id)
);

CREATE TABLE diy_badges (
    user_id INTEGER REFERENCES diy_users(id),
    badge INTEGER
);