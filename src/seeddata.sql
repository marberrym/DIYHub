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
('Feathers','B06VWKVZH1'),
('String','B005GYJZMY'),
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

-- Insert a second project.

insert into diy_projects (creation_date, user_id, project_title, 
feature_image_url, time_range, cost_range, category_id,
project_description) VALUES
('2010-01-04 01:01:04',2,'Dream Scanner','https://5.imimg.com/data5/OU/NQ/MY-16281911/rainbow-dream-catchers-500x500.jpg',
6,1,4,'Make a dream catcher, so that your nightmares get all tangled up in this string spider web thing. Then once a week you just take it out to the yard and hose it off.');

insert into diy_steps (project_id, step_order, step_image_URL, step_title, step_text)
VALUES
(2,1,'https://www.makeandtakes.com/wp-content/uploads/popsicle-stick-baby-chick-1-945x630.jpg',
'Make a Circle','First bend the tree branch in to a circle. Dont snap it or goblins will eat your soul.'),
(2,2,'https://www.barnowltrust.org.uk/wp/wp-content/uploads/Barn-Owl-Trust-recycled-string-no-box-1.jpg',
'Weave String','This is the hardest part, so just do it with your eyes closed. Weave some things all over the circle. Try to make it pretty'),
(2,3,'https://images-na.ssl-images-amazon.com/images/I/71MB3Hk4aYL._SX425_.jpg',
'Use Some Feathers','This is the hardest part, so just do it with your eyes closed. Weave some things all over the circle. Try to make it pretty');

insert into diy_materials_bridge (project_id, material_id, quantity) VALUES
(2,2,10),
(2,4,1);

insert into diy_user_faves (user_id, project_id) VALUES
(1,2),
(2,2);

-- Insert a third project

insert into diy_projects (creation_date, user_id, project_title, 
feature_image_url, time_range, cost_range, category_id,
project_description) VALUES
(current_timestamp,3,'Delicious Red Rum','https://cdn.diffordsguide.com/contrib/stock-images/2017/1/17/2017ba7d1b31dbf035beb25c291ca93e6030.jpg',
2,2,2,'Right before you go crazy in the snow all by yourself and chase your family through a hotel with a fire-axe you might find yourself simply parched. That dry winter air does cause a powerful thirst. Here is a delightful beverage to slake that internal fire, and quench your desire for something red and bloody.');

insert into diy_steps (project_id, step_order, step_image_URL, step_title, step_text)
VALUES
(3,1,'https://www.makeandtakes.com/wp-content/uploads/popsicle-stick-baby-chick-1-945x630.jpg',
'Get a glass','First get a fancy long stemmed cocktail glass. I like a traditional martini glass.'),
(3,2,'https://www.barnowltrust.org.uk/wp/wp-content/uploads/Barn-Owl-Trust-recycled-string-no-box-1.jpg',
'Get a shaker','Get a shaker and fill it with custom filtered boiled and clarified ice from the North Pole'),
(3,3,'https://images-na.ssl-images-amazon.com/images/I/71MB3Hk4aYL._SX425_.jpg',
'Screw it, drink out of the bottle','Noisily knock everything off the counter and spill it all over, grab the bottle, and take a big ole tug right from it. You dont need a glass. You are the caretaker.');

insert into diy_materials_bridge (project_id, material_id, quantity) VALUES
(3,5,237),
(3,6,237);

insert into diy_user_faves (user_id, project_id) VALUES
(1,2),
(2,2);