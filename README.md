# **CollegeERP**

[![CollegeERP](https://github.com/pranav750/CollegeERP/blob/main/CollegeERP.gif)](https://drive.google.com/file/d/1XlgEI_yr9hiIXThvzn-HHx6MOoAEOkHC/view?usp=sharing)


### Table of Content

- [Introduction](#Introduction)
- [Tech Stack](#Tech-Stack)
  - [Frontend](#Frontend)
  - [Backend](#Backend)
  - [Database](#DataBase)
- [Application](#Application)
- [Future Scope](#Future-Scope)
- [Installation](#Installation)
- [Links](#Links)

## Introduction

CollegeERP is a college database management system. It is a full stack web application which can be used as a tool to store the information of Students, Teachers, Subjects and Admins on the campus on a MongoDB database. Admin can perform create, update, delete or read (CRUD) operations on Student, Teacher, Subject and Admin itself. Teachers can give marks of a particular test of a Subject to the Students. Students can use the application to get their marks on respective Subjects. Teachers are also given the functionality to mark attendance of a particular day. 

## Tech Stack

### Frontend

- [ReactJS](https://reactjs.org/) - React (also known as React.js or ReactJS) is an open-source front-end JavaScript library for building user interfaces or UI components.

- [Redux](https://react-redux.js.org) - React Redux is the official React UI bindings layer for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update state.

- [MaterialUI](https://material-ui.com/) - Material Design (codenamed Quantum Paper)[5] is a design language developed by Google in 2014. 

- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.

### Backend

- [Node.js](https://nodejs.org/en/) - As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.
- [Express.js](http://expressjs.com) - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- [Mongoose](https://mongoosejs.com) - Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

### DataBase

- [MongoDB](https://www.mongodb.com) - MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need

## Application

CollegeERP can be used as a college database management system and any school or college can use this application to keep track of their institute with just a few changes.

## Future Scope

- We can use Socket.io to add a chat system for Student and Teacher. Student can then ask their doubts to Teachers and they can also talk with other students to know how they learnt a particular skill, etc.
- We can give the option of timetable where the Admin can create the timetable for each semester.
- The validation can be improved furthermore. I have tried to keep the validation logic correct and there might be few things missing.

## Installation

Step1 - Clone this repository using:

```
$ git clone https://github.com/pranav750/CollegeERP.git
```

Step2 - Get in the client directory and install the client dependencies:

```
cd client
npm install
```

Step3 - Get in the server directory and install the server dependencies given in requirements.txt file:

```
cd server
npm install
```

Step4 - Create a .env file inside the server folder of the parent directory and put variable values as guided in .env.sample file

Step5- Now you can run the client and server side independently:

For client side run:
```
$ npm start
```
For server side run:
```
$ npm start
```
Now the app should get running on localhost:3000 :

<!-- ## Demo

You can see the demo video of the project below.

<!-- [![Demo Video](https://github.com/pranav750/SpyDark/blob/main/SpyDark.gif)](https://drive.google.com/file/d/1e0V3UxiAkOnxWarhY-CvX1KsRpV2dtAV/view) --> -->

## Links

You will get all the links that are related to the project below-

- [Github Repo's Link](https://github.com/pranav750/CollegeERP) - All the code of Project.
- [Live Hosted](https://college-erp.netlify.app/) - Website is live on this link.
