# Movies-Booking - NodeJs

## Setup :

-   ### `npm i`
-   ## Change the src/.env values

## Run :

-   ### dev : `npm run dev`

## Dev :

-   ### used absolute file import
-   ### used module-alias for resourving the root folder ie : src
-   ### always export all files of a folder fromn it's index.js
-   ### always import file from it's index.js of the folder

### Assignment On Nodejs - Movie Listing

## Assignment API calling

-- ### Get Movies list group by Genres

## http://localhost:8000/api/user/user/getMovies (GET), Authorization.headers (Bearer token)

-- ### Get All Movies List from DB

## http://localhost:8000/api/user/user/all (GET), Authorization.headers (Bearer token)

-- ### Login User to get token

## http://localhost:8000/api/user/user/userLogin (POST) --> Json

        {
        "username":"8123621996",
        "password":"12345678"

        }

-- ### Create new user

## http://localhost:8000/api/user/user/createUser (POST) --> Json

{
"phone":"8123621996",
"email":"desai@gmail.com",
"password":"12345678"
}
