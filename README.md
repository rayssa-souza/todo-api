STACK:
- Express.js
- MySQL
- Sequelize

HOW TO RUN:
 - docker run -d --name todo_app_db -e MYSQL_USER=admin -e MYSQL_ROOT_PASSWORD=admin -e MYSQL_PASSWORD=admin -e MYSQL_DATABASE=todo_app_db -p 3306:3306 mysql:latest 
 
HOW TO INSTALL:
- npm install && npm start
