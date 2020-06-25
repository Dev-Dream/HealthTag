<h1>Admin Page</h1>

<h2>1. How to Access</h2>

![login-page](https://user-images.githubusercontent.com/54990367/85675850-07af4a00-b701-11ea-8e62-7c6122ce1609.png)

You can access admin page to link to http://localhost:3000/admin only if when you turned on the server. <br>
If you have not been logged in, the server shows login page to you. <br>
You can log in with your password that you pre-set in 'important' directory.

<h2>2. How to Use</h2>

There's 4 functions that you can deal with.

<h3>2-1. Add Disease</h3>

![image](https://user-images.githubusercontent.com/54990367/85679703-9d000d80-b704-11ea-89f5-b8a5d03d49c4.png)

You should fill the inputs with disease name, diesease description, and description url that you want to add or update. <br>
Most of all, url must be form of URL. <br>
If you submit with your inputs, the server updates disease DB.

<h3>2-2. Add Disease Tag</h3>

![image](https://user-images.githubusercontent.com/54990367/85680757-8e662600-b705-11ea-8542-6ccea68981c6.png)

You should fill the inputs with disease name, body-part, and tag that you want to add or update. <br>
Most of all, tag must be divided by one blank. <br>
If you submit with 'proper inputs', the server updates DB of proper body-part. <br>
If all tags can be found in tag list of given body-part, it calls 'proper inputs.' 

<h3>2-3. Remove Disease</h3>

![image](https://user-images.githubusercontent.com/54990367/85682019-d76aaa00-b706-11ea-8408-e4e74c7625fe.png)

You should fill the input with disease name that you want to remove. <br>
If you submit with the input, the server updates all DB. <br>

<h3>2-4. Remove Disease Tag</h3>

![image](https://user-images.githubusercontent.com/54990367/85682999-c5d5d200-b707-11ea-8a58-f95459d41185.png)

You should fill the inputs with disease name, and body-part that you want to remove. <br>
If you submit with the input, the server updates DB of proper body-part.

<h2>3. How to Logout</h2>

![image](https://user-images.githubusercontent.com/54990367/85683436-2ebd4a00-b708-11ea-9c9b-354a3047cb19.png)

You can log out with this button at this page most below.
