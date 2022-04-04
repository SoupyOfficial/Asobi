const axios = require('axios');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000; 
app.set('port', (process.env.PORT || 5000)); 

const path = require("path");

app.use(cors());
app.use(bodyParser.json({limit: "100mb"}));
app.use(bodyParser.urlencoded({limit: "100mb", extended: true, parameterLimit:100000}));


require('dotenv').config();
const url = process.env.MONGODB_URI;
const IMDBHOST = process.env.IMDBHOST;
const APIKEY = process.env.APIKEY;
const STREAMHOST = process.env.STREAMHOST;
const TOPHOST = process.env.TOPHOST;
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(url);
client.connect();

var medias = require('./Medias.json')

if (process.env.NODE_ENV === 'production') 
{
  // Set static folder
  app.use(express.static('frontend/build'));
  app.get('*', (req, res) => 
{
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

app.post('/api/addactor', async (req, res, next) =>
{
  // incoming: userId, color
  // outgoing: error

  const { 
    asCharacter, ID, Image, Name
  } = req.body;

  const newCard = {
            asCharacter: asCharacter,
            actorID:ID,
            Image: Image,
            Name: Name

  };
  var error = '';

  try
  {
    const db = client.db();
    const results = await db.collection('Actors').findOne({"actorID":{$regex:ID+'.*', $options:'ri'}})

    if (results == null) {
      const result = await db.collection('Actors').insertOne(newCard);
    }
    else {
      console.log(results)
    }
  }
  catch(e)
  {
    error = e.toString();
  }

  var ret = { error: error };
  res.status(200).json(ret);
});

app.post('/api/addmedia', async (req, res, next) =>
{
  // incoming: userId, color
  // outgoing: error

  const { 
    Title, imdbID, Poster, Genre, Rated, Runtime, imdbRating, Type, Released, Actors, Plot, 
    Year, Director, Writer, Language, Country, Awards, Ratings, Metascore, imdbVotes, DVD, BoxOffice, Production, Website, totalSeasons
  } = req.body;

  const newCard = {
            imdbID:imdbID,
              Title:Title, 
              Poster:Poster, 
              Genre:Genre, 
              Rated:Rated, 
              Runtime:Runtime, 
              imdbRating:imdbRating, 
              Type:Type, 
              Released: Released, 
              Actors: Actors, 
              Plot:Plot,
              Year: Year,
              Director: Director,
              Writer: Writer,
              Language: Language,
              Country: Country,
              Awards: Awards,
              Ratings: Ratings,
              Metascore: Metascore,
              imdbVotes: imdbVotes,
              DVD: DVD,
              BoxOffice: BoxOffice,
              Production: Production,
              Website: Website,
              totalSeasons: totalSeasons,
  };
  var error = '';

  try
  {
    const db = client.db();
    const result = await db.collection('Medias').insertOne(newCard);
  }
  catch(e)
  {
    error = e.toString();
  }

  var ret = { error: error };
  res.status(200).json(ret);
});

app.post('/api/importdbmedias', async (req, res, next) => 
{
  // incoming: search
  // outgoing: results[], error

  var error = '';
  
  var _ret = [];
  for( var i=0; i<medias.length; i++ )
  {
    _ret.push( {ID : medias[i].ID });

  }

  var ret = {results:_ret, error:error};
  res.status(200).json(ret);
});

app.post('/api/streamsearch', async (req, res, next) => 
{
  // incoming: search
  // outgoing: results[], error

  var error = '';

  const { imdbID } = req.body;
  
  const options = {
    method: 'GET',
    url: 'https://ott-details.p.rapidapi.com/gettitleDetails',
    params: {imdbid:imdbID},
    headers: {
      'X-RapidAPI-Host': STREAMHOST,
      'X-RapidAPI-Key': APIKEY
    }
  };

  const results = axios.create(options)

  var _ret = [];
  await results.request(options)
    .then(response => {
      _ret = response.data; 
      
      var ret = {results:_ret, error:error};
      res.status(200).json(ret);   
    })

  
});

app.post('/api/castsearch', async (req, res, next) => 
{
  // incoming: search
  // outgoing: results[], error

  var error = '';

  const { imdbID } = req.body;
  
  const options = {
    method: 'GET',
    url: `https://imdb-api.com/en/API/FullCast/k_it8m7kc9/${imdbID}`,
  };

  const results = axios.create(options)

  var _ret = [];
  await results.request(options)
    .then(response => {
      _ret = response.data;     
      var ret = {results:_ret, error:error};
      res.status(200).json(ret);   
    })

  
});

app.post('/api/imdbTitlesearch', async (req, res, next) => 
{
  // incoming: search
  // outgoing: results[], error

  var error = '';

  const { Title } = req.body;
  
  var options = {
    method: 'GET',
    url: 'https://imdb-data-searching.p.rapidapi.com/om',
    params: {s: Title},
    headers: {
      'X-RapidAPI-Host': IMDBHOST,
      'X-RapidAPI-Key': APIKEY,
    }
  };

  const results = axios.create(options)

  var _ret = [];
  await results.request(options)
    .then(response => {
      _ret = response.data.Search;
      var ret = {results:_ret, error:error};
      res.status(200).json(ret); 
    })

  
});

app.post('/api/imdbIDsearch', async (req, res, next) => 
{
  // incoming: search
  // outgoing: results[], error

  var error = '';

  const { imdbID } = req.body;
  
  var options = {
    method: 'GET',
    url: 'https://imdb-data-searching.p.rapidapi.com/om',
    params: {i: imdbID},
    headers: {
      'X-RapidAPI-Host': IMDBHOST,
      'X-RapidAPI-Key': APIKEY,
    }
  };

  const results = axios.create(options)

  var _ret = [];
   await results.request(options)
    .then(response => {
      _ret = response.data;
      var ret = {results:_ret, error:error};
      res.status(200).json(ret); 
    })

  
});

app.post('/api/top250search', async (req, res, next) => 
{
  // incoming: search
  // outgoing: results[], error

  var error = '';
  
  const options = {
    method: 'GET',
    url: 'https://aiom-db-imdb-all-in-one-movie-database.p.rapidapi.com/showtime/',
    params: {mode: 'populartv'}, //Top 250 TV: 'toptv' Top 100 Movies: 'popular' Top 100 TV: 'populartv' Upcoming: 'upcoming'
    headers: {
      'X-RapidAPI-Host': TOPHOST,
      'X-RapidAPI-Key': APIKEY,
    }
  };

  const results = axios.create(options)

  var _ret = [];
   await results.request(options)
    .then(response => {
      _ret = response.data;
      var ret = {results:_ret, error:error};
      res.status(200).json(ret); 
    })

  
});

app.post('/api/searchduplicates', async (req, res, next) => 
{
  // incoming: search
  // outgoing: results[], error

  var error = '';

  const { imdbID } = req.body;
  if(imdbID == '') return console.log('failed search')

  var _search = imdbID.trim();

  const db = client.db();
  const results = await db.collection('Medias').find({"imdbID":{$regex:_search+'.*', $options:'ri'}}).toArray();

  var _ret = [];
  for( var i=0; i<results.length; i++ )
  {
    _ret.push( results[i].Title );
  }

  var ret = {results:_ret, error:error};
  res.status(200).json(ret);
});

app.post('/api/updatestream', async (req, res, next) => 
{
  // incoming: search
  // outgoing: results[], error

  var error = '';

  const { imdbID, Genre, streamingAvailability } = req.body;

  var _search = imdbID.trim();


  const db = client.db();
  const results = await db.collection('Medias').findOneAndUpdate({"imdbID":{$regex:_search+'.*', $options:'ri'}}, 
    {$set:{streamingAvailability:streamingAvailability, Genre:Genre}},{returnNewDocument:"true" } );

  var _ret = [];
  _ret.push( results);  
  var ret = {results:_ret, error:error};
  res.status(200).json(ret);
});

app.post('/api/tempupdate', async (req, res, next) => 
{
  // incoming: search
  // outgoing: results[], error

  var error = '';

  const { imdbID, Rated } = req.body;

  var _search = imdbID.trim();


  const db = client.db();
  const results = await db.collection('Medias').findOneAndUpdate({"imdbID":{$regex:_search+'.*', $options:'ri'}}, 
    {$set:{Rated:Rated}},{returnNewDocument:"true" } );

  var _ret = [];
  _ret.push( results.value.Title );  
  var ret = {results:_ret, error:error};
  res.status(200).json(ret);
});

app.post('/api/updateFactor', async (req, res, next) => 
{
  // incoming: search
  // outgoing: results[], error

  var error = '';

  const { ID } = req.body;

  var _search = ID.trim();


  const db = client.db();
  const results = await db.collection('Medias').findOneAndUpdate({"imdbID":{$regex:_search+'.*', $options:'ri'}}, 
    {$unset:{Director: 1, Writer: 1}});

  var _ret = [];
  _ret.push( results.value.Title );  

  var ret = {results:_ret, error:error};
  res.status(200).json(ret);
});

app.post('/api/updatecast', async (req, res, next) => 
{
  // incoming: search
  // outgoing: results[], error

  var error = '';

  const { imdbID, Actors, Directors, Others, Writers } = req.body;

  var _search = imdbID.trim();


  const db = client.db();
  const results = await db.collection('Medias').findOneAndUpdate({"imdbID":{$regex:_search+'.*', $options:'ri'}}, 
    {$set:{Actors:Actors, Directors:Directors, Others:Others, Writers:Writers}},{returnNewDocument:"true" } );

  var _ret = [];
  _ret.push();  

  var ret = {results:_ret, error:error};
  res.status(200).json(ret);
});




app.use((req, res, next) => 
{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

// app.listen(5000); // start Node + Express server on port 5000
app.listen(PORT, () => 
{
  console.log('Server listening on port ' + PORT);
});
