# Preference Center API

# Documentation for lunching Preference Center API Dev environment and running the app

> ## APP Name
Backend API for Preference Center 
application

 ## Setup the Config folder
 -Create a config folder at the root 
 -inside the folder, create a config.env file like "config/config.env"
 - open the .env file and setup the followings
  
 NODE_ENV=development
 PORT= whatever port of your choice!

 MONGO_URI=

## Setup the Database(on browser)
Configure the Mongodb Atlas Database@ 
https://www.mongodb.com
-copy the URI string after registration process and go to "config.env" 

## next on your machine
Downlaod Mongodb database Campass GUI to your machine@
https://www.mongodb.com/products/compass
 -run the setup on yor machine
 -paste the URI string:MONGO_URI=PASTE URI STRING HERE

## Note:
 The Mongodb cloud database has a free tier on AWS in javascript language.

## Install Dependencies

```
npm install
```

## Run App

```
# Run in dev mode
npm run dev

## Once connected
check console
..Server running in development mode on port .....
..MongoDB Connected: ????-shard-00-01.lhrko.mongodb.net

## Other Downloads
Download Postman for Route/Api Testing @
-https://www.postman.com/downloads/

## 
- Version: 1.0.0
- License: MIT
- Author: Ralph Emmason
