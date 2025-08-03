# README

Basic rewards redemption web app that allows a user to do the following:
- View their current reward points balance.
- Browse available rewards.
- Redeem rewards using their points.
- See a history of their reward redemptions.

## Technical Specs
- Ruby: 3.4.5
- Rails: 8
- React: 19
- SQlite 3
- TailwindCss

## Setup Instructions
- Clone project
- Run `bundle install` to install Ruby dependencies.
- Run `yarn install` to install JavaScript dependencies.
- Run `rails db:create db:migrate db:seed` to set up the database.
  -You will have a User and a few rewards setup, the app allows you to sign up and login through devise so feel free to either use the pre-created user or create a new one
  - Pre-created user info:
    - `email: "user@example.com",
      password: "password",`
    - This user will already have 1000 points in their balance
- To start server run `bin/dev`
