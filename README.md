# Informacinių sistemų projektas
Komanda Roskosmos

Instaliavimas:
```
1. paleisti apache ir mysql per xampp
2. įsikelt į xampp folderius:
- ./admin
- ./php_emailo_rest_api
esančius: ./web/front

3. Paleist go backendą esantį ./web/back/Go
./run.sh

4. paleist react frontą esantį ./web/react-front
npm install
npm start
```
kreipimasis:
```
http://localhost/admin
http://localhost/php_emailo_rest_api/api.php
```
Emailo siuntimas:
```
POST metodas http://localhost/php_emailo_rest_api/api.php
body:
{
    "email": "email_adresas",
    "pavadinimas": "emailo_headeris",
    "zinute": "emailo_body"
}
```

naudojimas:
```
git init
git remote add origin https://github.com/kristutis/roskosmos
*do changes*
./push.sh "commit message"
```