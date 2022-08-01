# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: In order to fix this, you would have to generate a migration to add a column to the Student model. The name of the foreign key is cohort_id. The foreign key would be on the Student model. Students belong_to a cohort so each student would have a single cohort id versus each cohort instance having multiple student ids.

Researched answer: In order to fix this, you would have to generate a migration to add a column to the Student model. The add_column with the specified parameters (name of the table, what name of the new column will be and the data type of the new column) should also be entered in the migration file that was made in the code editor. Then the migrate command needs to be run again in order to implement and save the changes. The standard naming convention of the foreign key is modelname_id so in this case it would be "cohort_id". The foreign key always goes to the belongs_to side so in this case, it would go on the Student model. 

2. Which RESTful routes must always be passed params? Why?

Your answer: The restful routes that always need to be passed params are show, create, update, and delete. Show needs a param in the event that an entry or specified entries need to be viewed for clarification or editing purposes. Create needs a param because there needs to be specific data passed to create a new instance. For example, if I was adding a new entry into a table about dogs that asked for the breed and age, whenever I create a new instance, those two params need to be passed to become a valid instance. Update needs params so that if the information is update, there is continuity in data type and content. For example, when updating an instance in my dog table, I would not put a name of a dog since the params are asking for breed and age. Delete also needs params for all the aforementioned reasons and as a double check to make sure the right data is getting deleted. 

Researched answer: Params make the controller more dynamic and uses the routes to pass information versus the URL. The restful routes that always need to be passed params are show, create, update, and delete. Show needs a param in the event that an entry or specified entries need to be viewed for clarification or editing purposes. Create needs a param because there needs to be specific data passed to create a new instance. For example, if I was adding a new entry into a table about dogs that asked for the breed and age, whenever I create a new instance, those two params need to be passed to become a valid instance. Update needs params so that if the information is update, there is continuity in data type and content. For example, when updating an instance in my dog table, I would not put a name of a dog since the params are asking for breed and age. Delete also needs params for all the aforementioned reasons and as a double check to make sure the right data is getting deleted.

3. Name three rails generator commands. What is created by each?

Your answer: The three rails generator commands are $ rails generate model, $ rails generate resource, and $ rails generate migration. $ rails generate resource builds the model and all the RESTful routes associate with the model. Instead of building a resource, $ rails generate model will create a new model without the RESTful routes. $rails generate migration will create a specific migration. For example, if I wanted to add a column, I would input $ rails generate migration add_column and then the appropriate accompanying information. 

Researched answer: $ rails generate model creates a new model with the column name(s) and the data type for each column created. $ rails generate migration action_name allows changes to be made to the database. $ rails generate resource creates a model with the columns, data types, controller, view folder and RESTful routes so those do not have to be created individually in the text editor. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
This action would display all the students (instances) in the table. 

action: "POST" location: /students
This action would create a new instance in the table given the appropriate parameters are provided. 

action: "GET" location: /students/new
This action would display the form of putting in a new instance in the table.

action: "GET" location: /students/2
This action would show the instance with the primary key (unique) id:2 in the students table.

action: "GET" location: /students/2/edit
This action would display the form of editing instance with the primary key (unique) id:2 in the students table.

action: "PATCH" location: /students/2
This action would invoke any edits that were made and update the instance of primary key (unique) id:2 in the table.

action: "DELETE" location: /students/2
This action would delete the instance with the primary key (unique) id:2 from the table. 

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1) As a user, I want an application on my phone, desktop, tablet that can be used to manage a to-do list so I can use it on any device. 

2) As a user, I want to be able to personalize my profile with pictures and other elements so if I'm using a shared device my list items are seperate. 

3) As a user, I want to be able to create sub-lists/categories for other individuals in my family that I have to keep track of their tasks. 

4) As a user, I want to be able to sync my email, texts, and default calendar applications with the app so I can easily consolidate information with less chance of error. 

5) As a user, I want to be able to create, edit and delete tasks complete with outside contact information.

6) As a user, I want to be able to recover an entry within a certain time period just in case the entry was deleted by mistake. 

7) As a user, I want to be able to send entries and entire lists by text or email and upload a backup file to a cloud resource in case of any mishaps regarding my devices.

8) As a user, I want to be able to have the option to password protect and encrypt each individual list so I can add personal information and to protect against physical theft.

9) As a user, I want to be able to have the list formatted so I can print it if I need/ want a physical copy. 

10) As a user, I want to be able to select and duplicate entries to different days, weeks, months, years for reoccuring events such as annual car registration.