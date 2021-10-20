# Endpoint Path : **/api**

# Endpoint follows the below rules

## Responder :

-   Response type : JSON
-   Format : { success : boolean, message : string, data : any }
-   Successor : success
-   Toastable : message
-   Info : data

## Response code :

-   success : 200
-   error : 400 / 500
-   not-found : 404
-   created : 201
-   unauthorized : 401

## Helper :

**Use src/helpers/response.helper**
