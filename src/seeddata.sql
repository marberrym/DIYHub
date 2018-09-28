insert into diy_users (first_name, last_name, email, password) VALUES
('Jason', 'Voorhees','mistermachete@campcrystallake.com','boopboop123'),
('Freddie', 'Kruger','nightmare@elmstreet.com','slashy123'),
('Jack', 'Torrance','caretaker@overlook.com','advocat123'),
('Randal', 'Flagg','captain@trips.com','boopboop123'),
('King Matt', 'Demagogue', 'matty@mattypie.com', 'matt'),
('Stanley', 'Kubrick', 'theshining@shining.com', 'shining');

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
('Murder Weapon,','B014LSF9YI'),
('Planks on planks', 'B00I0FJCGA'),
('White Paint for White People', 'B010I5D54E'),
('AN AXE FOR PEOPLES', 'B004WJGXAQ' ),
('Edgar Allen Poe Booze', 'B01J2K0AXK');

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
('2010-01-04 01:01:04',2,'Dream Scanner','https://myfengshuistore.com/wp-content/uploads/2016/09/Antique-Imitation-Dreamcatcher-Gift-checking-Dream-Catcher-Net-With-natural-stone-Feathers-Wall-Hanging-Decoration-Ornament-5.jpg',
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
(current_timestamp,3,'Delicious Red Rum','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT91oyqvplOQ-UZ4OqDpgTUZm0BCRrEGTGO9RO_MbnAAXz0aSjj5Q',
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

--Insert Fourth Project:

insert into diy_projects (creation_date, user_id, project_title, 
feature_image_url, time_range, cost_range, category_id,
project_description) VALUES
(current_timestamp,5,'Pretty Plank Wall','https://thediydreamer.com/wp-content/uploads/2015/08/Awesome-Plank-Wall-Project-Live-Laugh-Rowe.jpg',
3,2, 3, 'Is the inside of your 1 bedroom apartment a little barren and boring?  Do you want to leave something pretty for the next sad sap who lives there?  Why not install your own plank wall!?');

insert into diy_steps (project_id, step_order, step_image_URL, step_title, step_text)
VALUES
(4,1,'https://livelaughrowe.com/wp-content/uploads/2015/08/Project-Plank-Wall.gif',
'Get some 1x4 planks','Cut em up all nice and pretty and think about your positioning.'),
(4,2,'https://livelaughrowe.com/wp-content/uploads/2015/08/Plank-Wall-Project.-Sanding-and-Prepping-the-planks-for-painting.jpg',
'Get them aligned and screwed in','Please be careful with all of those powertools that are required.  If you sever a finger I will not be held liable.'),
(4,3,'https://livelaughrowe.com/wp-content/uploads/2015/08/Plank-Wall-Project.-Fabulous-White-Plank-Wall.jpg',
'Paint it WHITE!','You made a fabulous plank wall - good job.  You will be able to easily seduce members of the opposite (or same) sex with your crafty ingenuity.');

insert into diy_materials_bridge (project_id, material_id, quantity) VALUES
(4,8,1),
(4,7,20);

-- Project number 5:

insert into diy_projects (creation_date, user_id, project_title, 
feature_image_url, time_range, cost_range, category_id,
project_description) VALUES
(current_timestamp,6,'Create your own massacre!','https://frightfind.com/wp-content/uploads/2015/09/stanley-hotel-shining.jpg',
3,2, 3, 'Is your life a little boring?  Why not spice it up with some delusions and murder!?  COME ONE, COME ALL, kiddies, it is time to get down with the sickness!');

insert into diy_steps (project_id, step_order, step_image_URL, step_title, step_text)
VALUES
(5,1,'https://awculture.files.wordpress.com/2015/10/the-shining-family.png',
'Draw some inspiration from a cult classic','Watch this 1000 times and it will never be enough.'),
(5,2,'https://media1.popsugar-assets.com/files/thumbor/sOjoi2zPsqMYCvUl0H7icRfDrPg/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2016/09/28/904/n/1922283/2cc2d9e3475cf3be_twins/i/Grady-Twins-From-Shining.gif',
'Find some creepy twins to set the mood','Make sure they are as terrifying as possible.  Throw in some skinless old ladies.'),
(5,3,'https://thumbs.gfycat.com/HeavenlyFrighteningEyas-size_restricted.gif',
'HERES JOHNNY','Whatever you do, before murdering your family make sure you yell this classic line, HERES JOHNNY.');

insert into diy_materials_bridge (project_id, material_id, quantity) VALUES
(5,9,1),
(5,10,20);



