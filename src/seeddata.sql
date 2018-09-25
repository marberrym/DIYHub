insert into diy_users (first_name, last_name, email, password) VALUES
('Jason', 'Voorhees','mistermachete@campcrystallake.com','boopboop123'),
('Freddie', 'Kruger','nightmare@elmstreet.com','slashy123'),
('Jack', 'Torrance','caretaker@overlook.com','advocat123'),
('Randal', 'Flagg','captain@trips.com','boopboop123');

insert into diy_categories (category_title) VALUES
('Food'),
('Drinks'),
('Crafts'),
('Tech'),
('Clothing');

insert into diy_materials (title, amazon_asin) VALUES
('Elmers Glue','B010DS107K'),
('Index Cards','B010DS00Y4'),
('Popsicle Sticks','B071L59Q7J'),
('Murder Weapon,','B014LSF9YI');

insert into diy_projects (creation_date, user_id, project_title, 
feature_image_url, time_range, cost_range, category_id,
project_description) VALUES
('2010-01-02 03:04:56',1,'Counselor Cabin','https://cdn.instructables.com/FEX/ES8L/F9T3NR1D/FEXES8LF9T3NR1D.LARGE.jpg',
4,2,3,'Today we will make a charming little log cabin style bungalow out of popsicle sticks. It will require a few ordinary things and can be completed relatively quickly. Then you can relax as the glue dries, by sharpening your machete, or going for a swim in the lake unsupervised.');

insert into diy_steps (project_id, step_order, step_image_URL, step_title, step_text)
VALUES
(1,1,'https://www.makeandtakes.com/wp-content/uploads/popsicle-stick-baby-chick-1-945x630.jpg',
'Roof Frame','Glue three sticks together in a triangle to form the first part of your roof frame. This attic is where mom keeps her sweater.'),
(1,2,'https://www.thecraftpatchblog.com/wp-content/uploads/2015/11/washitapepopsiclesticksledbackside.jpg',
'Door','Glue 5 sticks together. This will make a weak door that you can knock over when you need to menace some campers.');

insert into diy_materials_bridge (project_id, material_id, quantity) VALUES
(1,1,1),
(1,3,912);

insert into diy_user_faves (user_id, project_id) VALUES
(1,1);