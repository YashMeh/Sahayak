# ![Sahayak Logo](./views/logo.png)

![NodeV](https://img.shields.io/badge/node-v11.8.0-brightgreen.svg) ![npmV](https://img.shields.io/badge/npm-6.8.0-brightgreen.svg)

# Sahayak :syringe:

An anonymous TB reporting, diagnostic and analysis platform for Informal Practitioners.

## Features :ballot_box_with_check:

- Aadhar scanning of patient to log the information.
- Region-wise medicine recommendation based on patient's location.
- Central visualisation platform for government agencies.

## Setting up

- Change the mongoDB URI in the index.js file to match your local database.
  > You may want to run populate.js to pre-populate the database

## Installing

```
npm install
```

## Running

```bash
nodemon index.js
```

## Run using docker :whale:

- Build the image using

```
docker build -t sahayak:0.0.1 .
```

- Run the image

```
docker container run -d --name sahayak -p 3000:3000 sahayak:0.0.1
```

## Live

- The application is live at https://tbhack2.herokuapp.com

## Demo

- The application demo can be found at https://youtu.be/r9Szg8D_AT4

## Project Origin

- This project was made during UNSW-Health-Hackathon in 2018
