require('express');
require('mongodb');

exports.setApp = function ( app, client )
{
    app.post('/api/loadpopular100', async (req, res, next) =>
    {
    // incoming: search
    // outgoing: results[], error

    var error = '';

    var _search = '';

    const db = client.db();
    const movieResults = await db.collection('Popular100').find({"Title":{$regex:_search+'.*', $options:'ri'}}).toArray();

    var _ret = [];
    for( var i=0; i < movieResults.length; i++ )
    {
        _ret.push( {
        title:movieResults[i].Title,
        imdbID:movieResults[i].ID,
        poster: movieResults[i].Thumbnail
        });
    }

    var ret = {results:_ret, error:error};
    res.status(200).json(ret);
    });

    app.post('/api/loadpopular100tv', async (req, res, next) =>
    {
    // incoming: search
    // outgoing: results[], error

    var error = '';

    var _search = '';

    const db = client.db();
    const movieResults = await db.collection('Popular100TV').find({"Title":{$regex:_search+'.*', $options:'ri'}}).toArray();

    var _ret = [];
    for( var i=0; i < movieResults.length; i++ )
    {
        _ret.push( {
        title:movieResults[i].Title,
        imdbID:movieResults[i].ID,
        poster: movieResults[i].Thumbnail
        });
    }

    var ret = {results:_ret, error:error};
    res.status(200).json(ret);
    });

    app.post('/api/loadtop250', async (req, res, next) =>
    {
    // incoming: search
    // outgoing: results[], error

    var error = '';

    var _search = '';

    const db = client.db();
    const movieResults = await db.collection('Top250').find({"Title":{$regex:_search+'.*', $options:'ri'}}).toArray();

    var _ret = [];
    for( var i=0; i < movieResults.length; i++ )
    {
        _ret.push( {
        title:movieResults[i].Title,
        imdbID:movieResults[i].ID,
        poster: movieResults[i].Thumbnail
        });
    }

    var ret = {results:_ret, error:error};
    res.status(200).json(ret);
    });

    app.post('/api/loadtop250tv', async (req, res, next) =>
    {
    // incoming: search
    // outgoing: results[], error

    var error = '';

    var _search = '';

    const db = client.db();
    const movieResults = await db.collection('Top250TV').find({"Title":{$regex:_search+'.*', $options:'ri'}}).toArray();

    var _ret = [];
    for( var i=0; i < movieResults.length; i++ )
    {
        _ret.push( {
        title:movieResults[i].Title,
        imdbID:movieResults[i].ID,
        poster: movieResults[i].Thumbnail
        });
    }

    var ret = {results:_ret, error:error};
    res.status(200).json(ret);
    });

    app.post('/api/register', async(req, res, next) =>
    {
    // incoming: login, password, first name, last name, email, phone number
    // outgoing: error
    //const userId = uuid();

    const { userId, login, password, firstName, lastName, phoneNumber, email } = req.body;

    const newUser = { UserId:userId,Login:login,Password:password,FirstName:firstName,LastName:lastName,PhoneNumber:phoneNumber,Email:email };
    var error = '';

    try
    {
        const db = client.db();
        const results = await db.collection('Users').insertOne(newUser);
    }
    catch(e)
    {
        error = e.toString();
    }

    var ret = { error: error };
    res.status(200).json(ret);
    });

    app.post('/api/login', async (req, res, next) =>
    {
    // incoming: login, password
    // outgoing: id, firstName, lastName, error

    var error = '';

    const { login, password } = req.body;

    const db = client.db();
    const results = await db.collection('Users').find({Login:login,Password:password}).toArray();

    var id = -1;
    var fn = '';
    var ln = '';
    var email = '';
    var phone = '';
    var following = '';
    var reviews = '';
    var watchlist = '';

    if( results.length > 0 )
    {
        id = results[0].UserId;
        fn = results[0].FirstName;
        ln = results[0].LastName;
        email = results[0].Email;
        phone = results[0].PhoneNumber;
        following = results[0].Following;
        reviews = results[0].Reviews;
        watchlist = results[0].WatchList;
    }

    var ret = { id:id, firstName:fn, lastName:ln, email:email, phoneNumber:phone, following:following, reviews:reviews, watchList:watchlist, error:''};
    res.status(200).json(ret);
    });

    app.post('/api/search', async (req, res, next) =>
    {
    // incoming: search
    // outgoing: results[], error

    var error = '';
    var imdbID = '';
    var title = '';
    var poster = '';

    const { Title } = req.body;

    var _search = Title.trim();

    const db = client.db();
    const movieResults = await db.collection('Medias').find({"Title":{$regex:_search+'.*', $options:'ri'}}).toArray();
    const actorResults = await db.collection('Actors').find({"Name":{$regex:_search+'.*', $options:'ri'}}).toArray();
    const userResults = await db.collection('Users').find({"Login":{$regex:_search+'.*', $options:'ri'}}).toArray();

    var _ret = [];
    for( var i=0; i < movieResults.length; i++ )
    {
        _ret.push( {
        title:movieResults[i].Title,
        imdbID:movieResults[i].imdbID,
        poster: movieResults[i].Poster
        });
    }
    for( var i=0; i < actorResults.length; i++ )
    {
        _ret.push( actorResults[i].Name );
    }
    for( var i=0; i < userResults.length; i++ )
    {
        _ret.push( userResults[i].Login );
    }

    var ret = {results:_ret, error:error};
    res.status(200).json(ret);
    });

    app.post('/api/searchmovie', async (req, res, next) =>
    {
    // incoming: search
    // outgoing: results[], error

    var error = '';
    var imdbID = '';
    var title = '';
    var poster = '';

    const { Title } = req.body;

    var _search = Title.trim();

    const db = client.db();
    const movieResults = await db.collection('Medias').find({"Title":{$regex:_search+'.*', $options:'ri'}}).toArray();

    var _ret = [];
    for( var i=0; i < movieResults.length; i++ )
    {
        if(movieResults[i].Type == "movie")
        {
        _ret.push( {
            title:movieResults[i].Title,
            imdbID:movieResults[i].imdbID,
            poster: movieResults[i].Poster
        });
        }
    }

    var ret = {results:_ret, error:error};
    res.status(200).json(ret);
    });

    app.post('/api/searchseries', async (req, res, next) =>
    {
    // incoming: search
    // outgoing: results[], error

    var error = '';
    var imdbID = '';
    var title = '';
    var poster = '';

    const { Title } = req.body;

    var _search = Title.trim();

    const db = client.db();
    const movieResults = await db.collection('Medias').find({"Title":{$regex:_search+'.*', $options:'ri'}}).toArray();

    var _ret = [];
    for( var i=0; i < movieResults.length; i++ )
    {
        if(movieResults[i].Type == "series")
        {
        _ret.push( {
            title:movieResults[i].Title,
            imdbID:movieResults[i].imdbID,
            poster: movieResults[i].Poster
        });
        }
    }

    var ret = {results:_ret, error:error};
    res.status(200).json(ret);
    });

    app.post('/api/editprofile', async (req, res, next) =>
    {
    var error = '';

    const { userid, newemail, newphone, newpassword, newlogin, newfn, newln } = req.body;

    var _search = userid.trim();

    const db = client.db();

    const results = await db.collection('Users').findOneAndUpdate({"UserId":{$regex:_search+'.*', $options:'ri'}},
    {$set:{Email:newemail, PhoneNumber:newphone, Login:newlogin, Password:newpassword, FirstName:newfn, LastName:newln}},{returnNewDocument: "true"} );

    var ret = {FirstName:newfn, LastName:newln, Login:newlogin, Password:newpassword, PhoneNumber:newphone, Email:newemail, error: ''};
    res.status(200).json(ret);
    });

    app.post('/api/deactivate', async (req, res, next) =>
    {
    var error = '';

    const { userid } = req.body;

    var _search = userid.trim();

    const db = client.db();
    const results = await db.collection('Users').findOneAndDelete({"UserId":{$regex:_search+'.*', $options:'ri'}});

    var ret = { error: ''};
    res.status(200).json(ret);
    });

    app.post('/api/addtowatchlist', async (req, res, next) =>
    {
    var error = '';

    const { userid, ID } = req.body;

    var _search = userid.trim();

    const db = client.db();
    const results = await db.collection('Users').findOneAndUpdate({"UserId":{$regex:_search+'.*', $options:'ri'}},
    {$push:{WatchList:ID}},{returnNewDocument: "true"} );

    var ret = {imdbId:ID,error:''};
    res.status(200).json(ret);
    });

    app.post('/api/deletefromwatchlist', async (req, res, next) =>
    {
    var error = '';

    const { userid, ID } = req.body;

    var _search = userid.trim();

    const db = client.db();
    const results = await db.collection('Users').findOneAndUpdate({"UserId":{$regex:_search+'.*', $options:'ri'}},
    {$pull:{WatchList:ID}},{returnNewDocument: "true"} );

    var ret = {imdbId:ID,error:''};
    res.status(200).json(ret);
    });

    app.post('/api/addtoreviews', async (req, res, next) =>
    {
    var error = '';

    const { userid, ID, rating } = req.body;

    var userrating = parseFloat(rating);

    var _search = userid.trim();
    var _moviesearch = ID.trim();

    const db = client.db();

    const movieResults = await db.collection('Medias').findOne({imdbID:ID});

    let totalrating = movieResults.imdbRating;
    let totalvotes = movieResults.imdbVotes;

    var floattotalvotes = parseFloat(totalvotes.replace(/,/g, ''));
    var floattotalrating = parseFloat(totalrating);

    floattotalvotes = floattotalvotes + 1;
    floattotalrating = ((floattotalrating * (floattotalvotes - 1)) + userrating) / floattotalvotes;

    let updatedtotalrating = floattotalrating.toString();
    let updatedtotalvotes = floattotalvotes.toString();

    const ratingresults = await db.collection('Medias').findOneAndUpdate({"imdbID":{$regex:_moviesearch+'.*', $options:'ri'}},
    {$set:{imdbRating:updatedtotalrating,imdbVotes:updatedtotalvotes}},{returnNewDocument: "true"} );

    const results = await db.collection('Users').findOneAndUpdate({"UserId":{$regex:_search+'.*', $options:'ri'}},
    {$push:{Reviews:ID}},{returnNewDocument: "true"} );

    var ret = {imdbID:ID, Rating:rating, TotalRating:updatedtotalrating, TotalVotes:updatedtotalvotes, error:''};
    res.status(200).json(ret);
    });

    app.post('/api/addtofollowing', async (req, res, next) =>
    {
    var error = '';

    const { userid, userid2 } = req.body;

    var _search = userid.trim();

    const db = client.db();
    const results = await db.collection('Users').findOneAndUpdate({"UserId":{$regex:_search+'.*', $options:'ri'}},
    {$push:{Following:userid2}},{returnNewDocument: "true"} );

    var ret = {Following:userid2,error:''};
    res.status(200).json(ret);
    });

    app.post('/api/removefromfollowing', async (req, res, next) =>
    {
    var error = '';

    const { userid, userid2 } = req.body;

    var _search = userid.trim();

    const db = client.db();
    const results = await db.collection('Users').findOneAndUpdate({"UserId":{$regex:_search+'.*', $options:'ri'}},
    {$pull:{Following:userid2}},{returnNewDocument: "true"} );

    var ret = {Following:userid2,error:''};
    res.status(200).json(ret);
    });

    app.post('/api/loadmovie', async (req, res, next) =>
    {

    var error = '';

    const { ID } = req.body;

    const db = client.db();
    const results = await db.collection('Medias').findOne({imdbID:ID});

    var title = '';
    var poster = '';
    var genre = '';
    var rated = '';
    var runtime = '';
    var imdbrating = '';
    var type = '';
    var released = '';
    var actors = '';
    var plot = '';
    var year = '';
    var director = '';
    var writer = '';
    var language = '';
    var country = '';
    var awards = '';
    var ratings = '';
    var metascore = '';
    var imdbvotes = '';
    var dvd = '';
    var boxoffice = '';
    var production = '';
    var website = '';
    var totalseasons = '';


        title = results.Title;
        poster = results.Poster;
        genre = results.Genre;
        rated = results.Rated;
        runtime = results.Runtime;
        imdbrating = results.imdbRating;
        type = results.Type;
        released = results.Released;
        actors = results.Acotrs;
        plot = results.Plot;
        year = results.Year;
        director = results.Director;
        writer = results.Writer;
        language = results.Language;
        country = results.Country;
        awards = results.Awards;
        ratings = results.Ratings;
        metascore = results.Metascore;
        imdbvotes = results.imdbVotes;
        dvd = results.DVD;
        boxoffice = results.BoxOffice;
        production = results.Production;
        website = results.Website;
        totalseasons = results.totalSeasons;

    var ret = { title:title, poster:poster, genre:genre, rated:rated, runtime:runtime, imdbRating:imdbrating, type:type, released:released, actors:actors, plot:plot, year:year, director:director, writer:writer, language:language, country:country, awards:awards, ratings:ratings, metascore:metascore, imdbVotes:imdbvotes, dvd:dvd, boxOffice:boxoffice, production:production, website:website, totalSeasons:totalseasons, error:''};
    res.status(200).json(ret);
    });

    app.post('/api/loadprofile', async (req, res, next) =>
    {

    var error = '';

    const { ID } = req.body;

    const db = client.db();
    const results = await db.collection('Users').findOne({UserId:ID});

    var login = '';
    var password = '';
    var firstName = '';
    var lastName = '';
    var phoneNumber = '';
    var email = '';
    var watchList = [];
    var reviews = [];
    var following = [];

    login = results.Login;
    password = results.Password;
    firstName = results.FirstName;
    lastName = results.LastName;
    phoneNumber = results.PhoneNumber;
    email = results.Email;
    watchList = results.WatchList;
    reviews = results.Reviews;
    following = results.Following;

    var ret = { login:login, password:password, firstName:firstName, lastName:lastName, phoneNumber:phoneNumber, email:email, watchList:watchList, reviews:reviews, following:following, error:''};
    res.status(200).json(ret);
    });

    app.post('/api/loadactor', async (req, res, next) =>
    {

    var error = '';

    const { ID } = req.body;

    const db = client.db();
    const results = await db.collection('Actors').findOne({actorID:ID});

    var ascharacter = '';
    var image = '';
    var name = '';

    if(true)
    {
        ascharacter = results.asCharacter;
        image = results.Image;
        name = results.name;
    }

    var ret = { asCharacter:ascharacter, image:image, name:name, error:''};
    res.status(200).json(ret);
    });
}
