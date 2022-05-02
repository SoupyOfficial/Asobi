import React, {useState} from 'react'
import { Col, Container, Row, Button, CardImg } from 'react-bootstrap'
import Carousel from './Carousel';

const MovieUI = () => {
    var _ud = localStorage.getItem('user_data');
    var ud = JSON.parse(_ud);
    const userId = ud.id;    
    const [message,setMessage] = useState('');
    const [actors, setActors] = useState([]);

    let bp = require('./Path.js');
    

    const app_name = 'asobi-1'
    function buildPath(route)
    {
        if (process.env.NODE_ENV === 'production') 
        {
            return 'https://' + app_name +  '.herokuapp.com/' + route;
        }
        else
        {        
            return 'http://localhost:5000/' + route;
        }
    }

    const [searchResults,setResults] = useState('');
    const [title,setTitle] = useState('');
    const [poster,setPoster] = useState('');
    const [plot,setPlot] = useState('');
    const [genre,setGenre] = useState([]);
    const [list, setList] = useState(false);
    const queryParams = new URLSearchParams(window.location.search);
    const imdbID = queryParams.get('imdbID');

    const searchMovie = async event => 
    {
        
        event.preventDefault();

        if(imdbID == null) {
            window.location = '/search'
        }
        
        var obj = {ID:userId};
        var js = JSON.stringify(obj);
        
        try
        {
            const response = await fetch(bp.buildPath('api/loadprofile'),
            {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
            
            var txt = await response.text();
            var res = JSON.parse(txt);
            //console.log(res.watchList.length)
            for(var i = 0; i < res.watchList.length; i++) {
                if(res.watchList[i].ID == imdbID) {
                    setList(true)
                    break;
                }
                else {setList(false)}
            }
            
        }
        catch(e)
        {
            console.log(e.toString());
        }

        //console.log(imdbID)
        
        var obj = {ID:imdbID};
        var js = JSON.stringify(obj);
        
        try
        {
            const response = await fetch(buildPath('api/loadmovie'),
            {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
            
            var txt = await response.text();
            var res = JSON.parse(txt);
            //console.log(res)
            setActors(res.actors)
            console.log(res.actors)
            document.querySelector("#title").innerHTML = res.title
            setTitle(res.title);
            document.querySelector("#poster").src = res.poster
            setPoster(res.poster);
            document.querySelector("#plot").innerHTML = res.plot
            setPlot(res.plot);
            document.querySelector("#released").innerHTML = res.released
            document.querySelector("#director").innerHTML = res.director
            document.querySelector("#genre").innerHTML = res.genre
            setGenre(res.genre)

            //console.log(res.streaming)
            res.streaming.map((streamingon) => {
                document.querySelector('#streamingon').innerHTML += streamingon.platform + ': ' + '<a href=' + streamingon.url + '> Link <a/>' + "<br/>";
                return true;
            })

            //console.log(res.ratings)
            res.ratings.map((rating) => {
                document.querySelector('#ratings').innerHTML += rating.Source + ': ' + rating.Value + "<br/>";
                return true;
            })
            
        }
        catch(e)
        {
            console.log(e.toString());
            setResults(e.toString());
        }

        
    };
    window.onload = searchMovie;

    const addToWatchlist = async event =>
    {
        event.preventDefault();
        
        var obj = {ID:userId};
        var js = JSON.stringify(obj);
        
        try
        {
            const response = await fetch(bp.buildPath('api/loadprofile'),
            {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
            
            var txt = await response.text();
            var res = JSON.parse(txt);
            for(var i = 0; i < res.watchList.length; i++) {
                if(res.watchList[i].ID === imdbID) {
                    console.log(res.watchList[i].ID)
                    setMessage('Already in watchlist')
                    setList(true)
                    return;
                }
            }
            
        }
        catch(e)
        {
            console.log(e.toString());
        }

        obj = {userId:userId,ID:{ID:imdbID, Title:title, Poster:poster, Plot:plot}};
        js = JSON.stringify(obj);
        
        try
        {
            const response = await fetch(bp.buildPath('api/addtowatchlist'),
            {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
            
            txt = await response.text();
            res = JSON.parse(txt);
            //console.log(res)
            setMessage("Added to watchlist")
            setList(true)
            
        }
        catch(e)
        {
            console.log(e.toString());
        }
    }

    const removeFromWatchlist = async event =>
    {
        event.preventDefault();
        
        var obj = {ID:userId};
        var js = JSON.stringify(obj);

        obj = {userId:userId,ID:imdbID};
        js = JSON.stringify(obj);
        
        try
        {
            const response = await fetch(bp.buildPath('api/deletefromwatchlist'),
            {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
            
            var txt = await response.text();
            var res = JSON.parse(txt);
            //console.log(res)
            setMessage("Removed from watchlist")
            setList(false)
            
        }
        catch(e)
        {
            console.log(e.toString());
        }
    }

    const actorscarouselItemData = actors.map((actors) => {
        return (
            <div key={actors.id} className='col p-2 ms-md-auto' style={{alignContent:"center", justifyContent:"center", maxWidth:"11rem", minWidth:"11rem"}}>                                
                <div className='card bg-dark border-0'>
                    <CardImg
                        className={`row_poster ${"row_posterLarge"}`}
                        src={actors.image}
                        alt={actors.name}
                        key={actors.id}
                        style={{ height:"255px", width:"170px", objectFit:"cover", borderRadius:"25px"}}
                        />
                    <h3 className='d-flex my-2 p-2'>{actors.name}</h3>
                    <h4 className='d-flex my-2 p-2'>As: {actors.asCharacter}</h4>
                </div>
            </div>
        );
    });

  return (
    <div className='primaryBackground' style={{textAlign:"left"}}>
        
        <Container>
            <Row className='' style={{ paddingTop: '5px' }}>
                <Col className=' rounded'>
                    <img src='' id="poster" alt='Movie Poster' width="100%" height="" style={{borderRadius:"25px"}}/>
                </Col>
                <Col>
                    <Row>
                        <Col >
                            <h1 className='text-center' id="title">Title</h1>
                            <Row>
                                <div className='text-center'>{list == false ? <Button className='text-center' onClick={addToWatchlist}>Add to Watchlist</Button> : <Button className='text-center' onClick={removeFromWatchlist}>Remove from Watchlist</Button>}</div>
                                <div className='py-2 text-center'>{message}</div>
                            </Row>
                        </Col>
                        <Col md={{ yoffset:10, span: 10}}>
                        <div className='h5 pt-3'>Ratings:</div>
                            <div className='px-3 pb-2' id="ratings"></div>
                        </Col>
                    </Row>
                    <Col className=' px-2 py-2 rounded' style={{backgroundColor:"#484848"}}>
                        <Row>
                            <div className='h5'>Released:</div>
                            <div className='px-4 pb-2 font-weight-normal' id="released"></div>
                        </Row>
                        <Row>
                            <div className='h5'>Genre:</div>
                            <div className='px-4 pb-2 font-weight-normal' id="genre"></div>
                        </Row>
                        <Row>
                            <div className='h5'>Directed By:</div>
                            <div className='px-4 pb-2 font-weight-normal' id="director"></div>
                        </Row>
                    </Col>
                    <Col className='p-2 my-2 ms-md-auto rounded' style={{backgroundColor:"#484848"}}>
                        <div className='h5'>Synopsis:</div>
                        <div className='px-3' id="plot"></div>
                    </Col>
                    
                </Col>
                <Col className='px-4 rounded' style={{backgroundColor:"#484848"}}>
                    <div className='h5 py-2'>Streaming on:</div>
                    <div id="streamingon"></div>
                </Col>
            </Row>
            
            <Row className='my-5 rounded bg-dark'>
                <h2>Actors</h2>
                <div style={{ maxWidth: 2000, marginLeft: 'auto', marginRight: 'auto'}}>
                <Carousel
                    show={10}
                    infiniteLoop={true}
                    >
                        {actorscarouselItemData}
                    </Carousel>
                </div>
            </Row>

        </Container>

    </div>
  )
}

export default MovieUI;