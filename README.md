# Zoolodex
![Logo](https://i.imgur.com/luPwxIE.png)

# Table of Contents

1. [Introduction](#introduction)
2. [Technologies](#technologies)
3. [Documentation](#documentation)
4. [How To use](#how-to-use)
5. [What I learned](#what-i-learned)
6. [Future Plans](#future-plans)

## Introduction

Zoolodex is a full stack application that serves as an educational platform to satisfy curiosity towards wildlife and nature. You can browse articles to understand the origins, traits, and modern influence of the animal kingdom on their ecosystems. You can discuss these articles in a comment section as well. If you're interested in browsing a region these animals may be located in, there is a gallery of regions to choose from. Don't see an animal or region you love or would like to know more about? Submit a suggestion on the website to let me know! If you want to know if it's been suggested already, you can view the suggestions submitted by users filtered by animals or regions. If you want to quickly find the animal or region you're looking for. You can view your own details regarding just your suggestions, and soon your most recent sighting. Don't know where to start? The splash and home page will give you some direction!

### Explore your curiosity with Zoolodex [here!](https://zoolodex.herokuapp.com)

## Technologies

* Docker
* PostgresQL
* Flask-SQLAlchemy
* AWS S3
* React
* Redux

## Documentation

* [Database Schema](https://github.com/ShawnBoyle7/Zoolodex/wiki/Database-Schema)
* [Redux State](https://github.com/ShawnBoyle7/Zoolodex/wiki/State)
* [User Stories](https://github.com/ShawnBoyle7/Zoolodex/wiki/User-Stories)
* [Feature List](https://github.com/ShawnBoyle7/Zoolodex/wiki/Feature-List)
* [API Routes](https://github.com/ShawnBoyle7/Zoolodex/wiki/API-Routes)
* [Frontend Routes](https://github.com/ShawnBoyle7/Zoolodex/wiki/Frontend-Routes)

## How To Use

### Landing Page

When you first load up the website, you'll encounter this splash page where you can sign up or log in.

![Splash](https://i.imgur.com/llFIVH5.jpeg)

You will need to be signed in to post suggestions or comments, but anything else is open to all users. If you'd like to try out those features feel free to use the Demo!

### Galleries

After navigating to the animals or regions tab in the navigation bar, you'll encounter a gallery page.

![Gallery](https://i.imgur.com/4JNsvhA.jpeg)

Here you can click on a card for an animal or, or if on the regions page, a region. This wil redirect you to the page for that animal or region. The region page is not yet implemented.

### Animal Page

Here you can read about the origins, traits, or the effects the animal has on their ecosystem. Let me know what you think in the comment section!

### Suggestions

Is there an animal or region you'd like to see? You can post a new suggestion to me in the upper right on the navigation bar.

![Suggestions](https://i.imgur.com/6ZTXxhm.png)

You can also see other user's suggestions on the suggestions tab! There you can edit or delete your suggestions you see listed.

### Profile

If you'd like to see just your own suggestions and update them there, or change your user information, you can visit your profile by clicking the profile button in the right section of the navigation bar.

![Profile](https://i.imgur.com/G7b5B9A.png)

## What I learned

* I solidified a strong understanding of workflow and pace with this project. Initially, I set some goals for extra features that I thought I'd have plenty of time to implement. I realized with time how much I really need to get from point A to B in a sprint. There's a lot more that I want to implement that I haven't gotten to yet, but I will be ironing them out as time goes on.

* Throughout this project I got much more familiar with external technologies such as AWS. I've found myself enjoying the process of reading about the properties of an API and what you can really do with them. I've gotten a stronger skill at reading completely foreign API's and integrating them as needed.

* I learned to love Python & Flask-SQLAlchemy. Python and this extension were still pretty new to me as I began this project. I found this project to be a very effective way for me to understand how to practically use associations in SQLAlchemy to set up a powerful Redux store. Being able to load up my frontend data to be quickly accessible from my backend relationships makes the data management in my React components very simple. 

## Future Plans

In the future, I'll be integrating a Google Maps API represented at the center coordinates of said region. You will be able to explore this map to see the locality of a region, as well as post or view live sightings of wildlife in that region represented as a clickable node with coordinates on the map. These nodes contain photos and a description of the sighting which you'll be able to comment on as well.

Additionally, I'll be implementing a search feature which you can filter by many criteria such as a region's name, climate or continent, or traits of an animal such as their name, regions or physical attributes.
