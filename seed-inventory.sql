USE tropical_inventory;

INSERT INTO inventories (product_code, description, SF_Box, dimension, quantity, wh2, wh3, total, location, createdAt, updatedAt)
VALUES 	("wmbd",  "12MM White Mocha", "15.10", "12 x 165 x 1215mm", 113, 0, 0, 113, "north", NOW(), NOW()),
		("sm", "12MM Siberian Maple", "21.96", "12 x 125 x 1215mm", 728, 0, 0, 728, "north", NOW(), NOW()), 
		("SR", "Eng. Hs. Havea Sumatra Ruby", "9.85", "9/16 x 5 1/2", 250, 0, 0, 250, "north", NOW(), NOW()), 
		("SmB", "Eng.Sm.Birch", "19.38", "3/5 x 4.9 x RL", 72, 0, 0, 72, "north", NOW(), NOW());

INSERT INTO histories (quantity, month, date, year, type, createdAt, updatedAt)
VALUES 	(500, "May", 19, 2017, "outgoing", NOW(), NOW()),
		(200, "May", 19, 2017, "incoming", NOW(), NOW()),
		(300, "June", 19, 2017,"outgong", NOW(), NOW()),
		(100, "June", 19, 2017, "incomig", NOW(), NOW()),
		(100, "July", 19, 2017, "outgoing", NOW(), NOW()),
		(200, "August", 19, 2017,"incoming", NOW(), NOW()),
		(400, "August", 19, 2017, "outgoing", NOW(), NOW()),
		(300, "July", 19, 2017, "incoming", NOW(), NOW()),
		(600, "September", 19, 2017, "outgoing", NOW(), NOW()),
		(700, "September", 19, 2017, "incoming", NOW(), NOW()),
		(400, "October", 19, 2017,  "incoming", NOW(), NOW()),
		(200, "October", 19, 2017, "outgoing", NOW(), NOW()),
		(100, "November", 19, 2017, "incoming", NOW(), NOW()),
		(400, "November", 19, 2017, "outgoing", NOW(), NOW()),
		(500, "December", 19, 2017, "incoming", NOW(), NOW()),
		(500, "December", 19, 2017, "outgoing", NOW(), NOW()),
		(200, "January", 19, 2017, "incoming", NOW(), NOW()),
		(800, "January", 19, 2017, "outgoing", NOW(), NOW()),
		(100, "February", 19, 2017, "incoming", NOW(), NOW()),
		(200, "February", 19, 2017, "outgoing", NOW(), NOW()),
		(300, "March", 19, 2017, "incoming", NOW(), NOW()),
		(500, "March", 19, 2017, "outgoing", NOW(), NOW()),
		(600, "April", 19, 2017, "incoming", NOW(), NOW()),
		(700, "April", 19, 2017, "outgoing", NOW(), NOW());



