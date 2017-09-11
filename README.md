# Hashtag Finder

This app tries to find photos on Instagram with a given tag and store the result on mongodb
for further consulting

To run this code you will need to have:
- Node.js 8.1.4
- Node package manager (npm)
- Docker (with docker-compose installed)

### How to start the app

First, run `npm install` on the root folder of this code, giving the following output:

After that, start a sample mongodb database on Docker running: `docker-compose up`, giving the following results:

Finally, just run `npm start` to run the application locally.

### Execute the app

Just enter in http://localhost:3000/ in your browser, press on the 'login' button to log in with your Instagram account

To search for a hashtag enter in http://localhost:3000/search/{your_hashtag} and it will bring a list of photos urls

To save a hashtag, enter in http://localhost:3000/save/{your_hashtag} with an json like the following on body:

````
{
   "photos": [
      "http://somephotourlfrominstagram.jpg",
      "http://somephotourlfrominstagram.jpg"
   ]
}

````

### Remarks

This app is in development, and the fron end using Angular should be created very soon

Feel free to contact me in case of any questions at paulo.coe07 at gmail dot com.