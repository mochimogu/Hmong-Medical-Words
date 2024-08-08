

CREATE TABLE hmongmedicalwords (

    id SERIAL PRIMARY KEY,
    word VARCHAR(50),
    wordtype VARCHAR(20),
    definitions TEXT[]

);

INSERT INTO hmongmedicalwords (word, wordtype, definitions) 
VALUES ("abdonmen", "noun", ARRAY[{'dlawb' : "toom ntawm plab", "leeg" : "toom ntawm plaab"}]);


