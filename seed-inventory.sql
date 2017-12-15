USE tropical_inventory;

INSERT INTO inventory (product_code, description, SF_Box, dimension, quantity, wh2, wh3, total, location, createdAt, updatedAt)
VALUES 	("wmbd",  "12MM White Mocha", "15.10", "12 x 165 x 1215mm", 113, 0, 0, 113, "north", NOW(), NOW()),
		("sm", "12MM Siberian Maple", "21.96", "12 x 125 x 1215mm", 728, 0, 0, 728, "north", NOW(), NOW()), 
		("SR", "Eng. Hs. Havea Sumatra Ruby", "9.85", "9/16 x 5 1/2", 250, 0, 0, 250, "north", NOW(), NOW()), 
		("SmB", "Eng.Sm.Birch", "19.38", "3/5 x 4.9 x RL", 72, 0, 0, 72, "north", NOW(), NOW());