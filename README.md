# Q2G JWT Proxy Redirect Mashup

Creates a valid session from an anonymous user with a valid Bearer in URL

## Informations

Required are two proxies with a JWT authentication methode. The first one is configured as proxy for "Always anonymous user". The secon one with no anonymous user. When you enter the Mashup, over the first proxy, it will send a request to the second proxy with the bearer in the header to create a valid session cookie for the user defined in the creation of the bearer and redirects to the hub via the second proxy.