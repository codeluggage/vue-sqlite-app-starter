import { Images } from './base64images';


export const dataToImport: any = {
    database : "db-from-json",
    version: 1,
    encrypted : false,
    mode : "full",
    tables :[
        {
            name: "users",
            schema: [
                {column:"id", value: "INTEGER PRIMARY KEY NOT NULL"},
                {column:"email", value:"TEXT UNIQUE NOT NULL"},
                {column:"name", value:"TEXT"},
                {column:"age", value:"REAL"},
                {column:"last_modified", value:"INTEGER"}
            ],
            indexes: [
                {name: "index_user_on_name",value: "name"},
                {name: "index_user_on_last_modified",value: "last_modified DESC"},
                {name: "index_user_on_email_name", value: "email ASC, name", mode: "UNIQUE"}
            ],
            values: [
                [1,"Whiteley.com","Whiteley",40.5,1582536810],
                [2,"Jones.com","Jones",44.2,1582812800],
                [3,"Simpson@example.com","Simpson",69,1583570630],
                [4,"Brown@example.com","Brown",15,1590383895]
            ]
        },
        {
          name: "messages",
          schema: [
            {column:"id", value: "INTEGER PRIMARY KEY NOT NULL"},
            {column:"title", value:"TEXT NOT NULL"},
            {column:"body", value:"TEXT NOT NULL"},
            {column:"last_modified", value:"INTEGER"}
          ],
          values: [
              [1,"test post 1","content test post 1",1587310030],
              [2,"test post 2","content test post 2",1590388125]
          ]
        },
        {
          name: "images",
          schema: [
            {column:"id", value: "INTEGER PRIMARY KEY NOT NULL"},
            {column:"name", value:"TEXT UNIQUE NOT NULL"},
            {column:"type", value:"TEXT NOT NULL"},
            {column:"size", value:"INTEGER"},
            {column:"img", value:"BLOB"},
            {column:"last_modified", value:"INTEGER"}
          ],
          values: [
            [1,"feather","png","NULL",Images[1],1582536810],
            [2,"meowth","png","NULL",Images[0],1590151132]
          ]
        }
      
    ]
};

export const partialImport1: any = {
    database : "db-from-json",
    version: 1,
    encrypted : false,
    mode : "partial",
    tables :[
        {
            name: "users",
            values: [
                [5,"Addington.com","Addington",22,1590388335],
                [6,"Bannister.com","Bannister",59,1590393015],
                [2,"Jones@example.com","Jones",45,1590393325]

            ]
        },
        {
          name: "messages",
          indexes: [
            {name: "index_messages_on_title",value: "title"},
            {name: "index_messages_on_last_modified",value: "last_modified DESC"}

          ],
          values: [
              [3,"test post 3","content test post 3",1590396146],
              [4,"test post 4","content test post 4",1590396288]
          ]
        }

    ]
}; 
export const tableTwoImports: any = {
    database: "twoimports",
    version: 1,
    encrypted: false,
    mode: "full",
    tables: [
      {
        name: "areas",
        schema: [
          { column: "id", value: "INTEGER PRIMARY KEY NOT NULL" },
          { column: "name", value: "TEXT" },
          { column: "favourite", value: "INTEGER" },
          { column:"last_modified", value:"INTEGER"},
        ],
      },
      {
        name: "elements",
        schema: [
          { column: "id", value: "INTEGER PRIMARY KEY NOT NULL" },
          { column: "name", value: "TEXT" },
          { column: "favourite", value: "INTEGER" },
          { column:"last_modified", value:"INTEGER"},
        ],
      },
      {
        name: "issues",
        schema: [
          { column: "id", value: "INTEGER PRIMARY KEY NOT NULL" },
          { column: "name", value: "TEXT" },
          { column: "favourite", value: "INTEGER" },
          { column:"last_modified", value:"INTEGER"},
        ],
      },
    ],
}; 
export const dataTwoImports: any = {
    database: "twoimports",
    version: 1,
    encrypted: false,
    mode: "partial",
    tables: [
      {
        name: "areas",
        values: [
          [1, "Access road", 0, 1590396146],
          [2, "Accessway", 0, 1590396146],
          [3, "Air handling system", 0, 1590396146],
        ],

      },
      {
        name: "elements",
        values: [
          [1, "Access door < 3m in height", 0, 1590396288],
          [2, "Access door > 3m in height", 0, 1590396288],
          [3, "Air inflitration", 0, 1590396288],
          [4, "Air ventilation", 0, 1590396288],
        ],
      },
      {
        name: "issues",
        values: [
          [1, "Accumulation of internal moisture", 0, 1590388335],
          [2, "Backflow prevention device", 0, 1590388335],
          [3, "Backpressure", 0, 1590388335],
          [4, "Backsiphonage", 0, 1590388335],
        ],
      },
    ],
};
export const createSchema112 = `
CREATE TABLE IF NOT EXISTS teachers (
    id INTEGER PRIMARY KEY NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(50),
    office TEXT,
    size DOUBLE,
    age INT,
    phone DECIMAL(11,0),
    birth_date DATE,
    last_modified INTEGER DEFAULT (strftime('%s', 'now'))
);
CREATE INDEX IF NOT EXISTS teachers_index_email ON teachers (email);
CREATE INDEX IF NOT EXISTS teachers_index_last_modified ON teachers (last_modified);
CREATE TRIGGER IF NOT EXISTS teachers_trigger_last_modified
AFTER UPDATE ON teachers
FOR EACH ROW WHEN NEW.last_modified <= OLD.last_modified
BEGIN
    UPDATE teachers SET last_modified= (strftime('%s', 'now')) WHERE id=OLD.id;
END;
`; 

export const firstTeachers = `
DELETE FROM teachers;
INSERT INTO teachers (name,email,office,size,age,phone,birth_date) VALUES ("Name1","name1@example.com",null,null,null,null,null);
INSERT INTO teachers (name,email,office,size,age,phone,birth_date) VALUES ("Name2","name2@example.com",null,null,null,null,null);
INSERT INTO teachers (name,email,office,size,age,phone,birth_date) VALUES ("Name3","name3@example.com",null,null,null,null,null);
INSERT INTO teachers (name,email,office,size,age,phone,birth_date) VALUES ("Name4","name4@example.com",null,null,null,null,null);
INSERT INTO teachers (name,email,office,size,age,phone,birth_date) VALUES ("Name5","name5@example.com",null,null,null,null,null);
INSERT INTO teachers (name,email,office,size,age,phone,birth_date) VALUES ("Name6","name6@example.com",null,null,null,null,null);
INSERT INTO teachers (name,email,office,size,age,phone,birth_date) VALUES ("Name7","name7@example.com",null,null,null,null,null);
INSERT INTO teachers (name,email,office,size,age,phone,birth_date) VALUES ("Name8","name8@example.com",null,null,null,null,null);
INSERT INTO teachers (name,email,office,size,age,phone,birth_date) VALUES ("Name9","name9@example.com",null,null,null,null,null);
INSERT INTO teachers (name,email,office,size,age,phone,birth_date) VALUES ("Name10","name10@example.com",null,null,null,null,null);
INSERT INTO teachers (name,email,office,size,age,phone,birth_date) VALUES ("Name11","name11@example.com",null,null,null,null,null);
INSERT INTO teachers (name,email,office,size,age,phone,birth_date) VALUES ("Name12","name12@example.com",null,null,null,null,null);
INSERT INTO teachers (name,email,office,size,age,phone,birth_date) VALUES ("Name13","name13@example.com",null,null,null,null,null);
INSERT INTO teachers (name,email,office,size,age,phone,birth_date) VALUES ("Name14","name14@example.com",null,null,null,null,null);
INSERT INTO teachers (name,email,office,size,age,phone,birth_date) VALUES ("Name15","name15@example.com",null,null,null,null,null);
INSERT INTO teachers (name,email,office,size,age,phone,birth_date) VALUES ("Name16","name16@example.com",null,null,null,null,null);
INSERT INTO teachers (name,email,office,size,age,phone,birth_date) VALUES ("Name17","name17@example.com",null,null,null,null,null);
INSERT INTO teachers (name,email,office,size,age,phone,birth_date) VALUES ("Name18","name18@example.com",null,null,null,null,null);
INSERT INTO teachers (name,email,office,size,age,phone,birth_date) VALUES ("Name19","name19@example.com",null,null,null,null,null);
INSERT INTO teachers (name,email,office,size,age,phone,birth_date) VALUES ("Name20","name20@example.com",null,null,null,null,null);
`;

export const partialImport112: any = {
    database : "testListeners",
    version : 1,
    encrypted : false,
    mode : "partial",
    tables :[
        {
            name: "teachers",
            values: [
              [21,"name21@example.com","Name21",null,null,null,null,null,1618634218],
              [22,"name22@example.com","Name22",null,null,null,null,null,1618644218],
              [23,"name23@example.com","Name23",null,null,null,null,null,1618654218],
              [24,"name24@example.com","Name24",null,null,null,null,null,1618634218],
              [25,"name25@example.com","Name25",null,null,null,null,null,1618644218],
              [26,"name26@example.com","Name26",null,null,null,null,null,1618654218],
              [27,"name27@example.com","Name27",null,null,null,null,null,1618634218],
              [28,"name28@example.com","Name28",null,null,null,null,null,1618644218],
              [29,"name29@example.com","Name29",null,null,null,null,null,1618654218],
              [30,"name30@example.com","Name30",null,null,null,null,null,1618654218],
              [31,"name31@example.com","Name31",null,null,null,44903671234,null,1618634218],
              [32,"name32@example.com","Name32","AVD",null,null,null,null,1618644218],
              [33,"name33@example.com","Name33","BKC",null,43,31671424567,"1978-12-03",1618654218],
              [34,"name34@example.com","Name34",null,null,null,44905671134,null,1618634218],
              [35,"name35@example.com","Name35","CBN",null,null,null,null,1618644218],
              [36,"name36@example.com","Name36","KWK",null,52,31671434467,"1969-08-20",1618654218],
              [37,"name37@example.com","Name37",null,null,null,44905671235,null,1618634218],
              [38,"name38@example.com","Name38","CDK",null,null,null,null,1618644218],
              [39,"name39@example.com","Name39","ZWK",null,42,null,"1979-02-03",1618654218],
              [40,"name40@example.com","Name40","PNC",null,47,31671434568,"1974-06-02",1618654218],
            ]
        },
        {
            name: "classes",
            schema: [
                {column:"id", value: "INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE"},
                {column:"courseCode", value:"INTEGER NOT NULL"},
                {column:"dayOfWeek", value:"VARCHAR(10) NOT NULL"},
                {column:"timeStart", value:"FLOAT"},
                {column:"timeEnd", value:"FLOAT"},
                {column:"teacherId", value:"INTEGER"},
                {column:"last_modified", value:"INTEGER"},
                {foreignkey: "teacherId", value:"REFERENCES teachers(id) ON DELETE CASCADE"}
            ],
            indexes: [
              {name: "index_classes_on_courseCode",value: "courseCode"},
              {name: "index_classes_on_last_modified",value: "last_modified DESC"}
            ],
            triggers: [
                {
                  name: "classes_trigger_last_modified",
                  timeevent: "AFTER UPDATE",
                  logic: "FOR EACH ROW WHEN NEW.last_modified <= OLD.last_modified BEGIN UPDATE images SET last_modified= (strftime('%s', 'now')) WHERE id=OLD.id;END;"
                }
            ],
            values: [
                [1,1,"Monday",8.30,10.00,1,1618634218],
                [2,2,"Wednesday",14.00,15.00,2,1618634218],
                [3,1,"Friday",10.00,12.00,1,1618634218],
                [4,10,"Tuesday",8.30,10.00,10,1618634218],
                [5,3,"Thursday",14.00,15.00,12,1618634218],
                [6,5,"Friday",10.00,12.00,21,1618634218],
                [7,5,"Monday",8.30,10.00,11,1618634218],
                [8,10,"Wednesday",14.00,15.00,12,1618634218],
                [9,3,"Friday",10.00,12.00,15,1618634218],
                [10,1,"Monday",8.30,10.00,17,1618634218],
                [11,2,"Wednesday",14.00,15.00,32,1618634218],
                [12,1,"Friday",10.00,12.00,24,1618634218],
            ]
        }
    ]
};