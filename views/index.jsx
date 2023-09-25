const React = require('react')
const Default = require('./layouts/default')
import Carousel from 'react-bootstrap/Carousel';
import '../public/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Index ({ movies, trendingMovies }) {
    const trendingDisplay = trendingMovies.results.map(movie => {
        return (
                <div className='white' key={movie.id}>
                    <a href={`https://image.tmdb.org/t/p/original`+movie.poster_path}>
                        {movie.title}
                    </a>
                </div>
        )  
    })

    const posterDisplay = trendingMovies.results.map(movie => {
        return (
            <div id='poster' key={movie._id}>
                    {movie.poster_path}
            </div>
        )        
    })

    const altDisplay = movies.map((movie) => {
        return (
            <div id='alt' key={movie.id}>
                <a href={`/movies/${movie.id}`}>
                    {movie.original_title}
                </a>
            </div>
        )        
    })

    const overviewDisplay = trendingMovies.results.map(movie => {
        return (
            <div id='overview' key={movie._id}>
                    {movie.overview}
            </div>
        )        
    })


    return (
        <html>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossOrigin="anonymous"
      />

      <Default>
         <h2>Trending Movies</h2>
         <Container className='bord'>

        <Row className='space'>
            <Col sm>
                <Card style={{ width: '30rem', height:'8rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original`+posterDisplay[0].props.children} />
                <Card.Body className='white'>
                    <Card.Title><h4>{trendingDisplay[0]}</h4></Card.Title>
                    <Card.Text>
                    <p>{overviewDisplay[0]}</p>
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>

            <Col sm>
                <Card style={{ width: '30rem', height:'8rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original`+posterDisplay[1].props.children} />
                <Card.Body className='white'>
                    <Card.Title><h4>{trendingDisplay[1]}</h4></Card.Title>
                    <Card.Text>
                    <p>{overviewDisplay[1]}</p>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>

            <Col sm>
                <Card style={{ width: '30rem', height:'8rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original`+posterDisplay[2].props.children} />
                <Card.Body className='white'>
                    <Card.Title><h4>{trendingDisplay[2]}</h4></Card.Title>
                    <Card.Text>
                    <p>{overviewDisplay[2]}</p>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
        </Row>

        <Row className='space'>
            <Col sm>
                <Card style={{ width: '30rem', height:'8rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original`+posterDisplay[3].props.children} />
                <Card.Body className='white'>
                    <Card.Title><h4>{trendingDisplay[3]}</h4></Card.Title>
                    <Card.Text>
                    <p>{overviewDisplay[3]}</p>
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>

            <Col sm>
                <Card style={{ width: '30rem', height:'8rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original`+posterDisplay[4].props.children} />
                <Card.Body className='white'>
                    <Card.Title><h4>{trendingDisplay[4]}</h4></Card.Title>
                    <Card.Text>
                    <p>{overviewDisplay[4]}</p>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>

            <Col sm>
                <Card style={{ width: '30rem', height:'8rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original`+posterDisplay[5].props.children} />
                <Card.Body className='white'>
                    <Card.Title><h4>{trendingDisplay[5]}</h4></Card.Title>
                    <Card.Text>
                    <p>{overviewDisplay[5]}</p>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
        </Row>

        <Row className='space'>
            <Col sm>
                <Card style={{ width: '30rem', height:'8rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original`+posterDisplay[6].props.children} />
                <Card.Body className='white'>
                    <Card.Title><h4>{trendingDisplay[6]}</h4></Card.Title>
                    <Card.Text>
                    <p>{overviewDisplay[6]}</p>
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>

            <Col sm>
                <Card style={{ width: '30rem', height:'8rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original`+posterDisplay[7].props.children} />
                <Card.Body className='white'>
                    <Card.Title><h4>{trendingDisplay[7]}</h4></Card.Title>
                    <Card.Text>
                    <p>{overviewDisplay[7]}</p>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>

            <Col sm>
                <Card style={{ width: '30rem', height:'8rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original`+posterDisplay[8].props.children} />
                <Card.Body className='white'>
                    <Card.Title><h4>{trendingDisplay[8]}</h4></Card.Title>
                    <Card.Text>
                    <p>{overviewDisplay[8]}</p>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
        </Row>

        <Row className='space'>
            <Col sm>
                <Card style={{ width: '30rem', height:'8rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original`+posterDisplay[9].props.children} />
                <Card.Body className='white'>
                    <Card.Title><h4>{trendingDisplay[9]}</h4></Card.Title>
                    <Card.Text>
                    <p>{overviewDisplay[9]}</p>
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>

            <Col sm>
                <Card style={{ width: '30rem', height:'8rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original`+posterDisplay[10].props.children} />
                <Card.Body className='white'>
                    <Card.Title><h4>{trendingDisplay[10]}</h4></Card.Title>
                    <Card.Text>
                    <p>{overviewDisplay[10]}</p>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>

            <Col sm>
                <Card style={{ width: '30rem', height:'8rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original`+posterDisplay[11].props.children} />
                <Card.Body className='white'>
                    <Card.Title><h4>{trendingDisplay[11]}</h4></Card.Title>
                    <Card.Text>
                    <p>{overviewDisplay[11]}</p>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
        </Row>

        <Row className='space'>
            <Col sm>
                <Card style={{ width: '30rem', height:'8rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original`+posterDisplay[12].props.children} />
                <Card.Body className='white'>
                    <Card.Title><h4>{trendingDisplay[12]}</h4></Card.Title>
                    <Card.Text>
                    <p>{overviewDisplay[12]}</p>
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>

            <Col sm>
                <Card style={{ width: '30rem', height:'8rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original`+posterDisplay[13].props.children} />
                <Card.Body className='white'>
                    <Card.Title><h4>{trendingDisplay[13]}</h4></Card.Title>
                    <Card.Text>
                    <p>{overviewDisplay[13]}</p>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>

            <Col sm>
                <Card style={{ width: '30rem', height:'8rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original`+posterDisplay[14].props.children} />
                <Card.Body className='white'>
                    <Card.Title><h4>{trendingDisplay[14]}</h4></Card.Title>
                    <Card.Text>
                    <p>{overviewDisplay[14]}</p>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
        </Row>

        <Row className='space'>
            <Col sm>
                <Card style={{ width: '30rem', height:'8rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original`+posterDisplay[15].props.children} />
                <Card.Body className='white'>
                    <Card.Title><h4>{trendingDisplay[15]}</h4></Card.Title>
                    <Card.Text>
                    <p>{overviewDisplay[15]}</p>
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>

            <Col sm>
                <Card style={{ width: '30rem', height:'8rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original`+posterDisplay[16].props.children} />
                <Card.Body className='white'>
                    <Card.Title><h4>{trendingDisplay[16]}</h4></Card.Title>
                    <Card.Text>
                    <p>{overviewDisplay[16]}</p>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>

            <Col sm>
                <Card style={{ width: '30rem', height:'8rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original`+posterDisplay[17].props.children} />
                <Card.Body className='white'>
                    <Card.Title><h4>{trendingDisplay[17]}</h4></Card.Title>
                    <Card.Text>
                    <p>{overviewDisplay[17]}</p>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
        </Row>
        </Container>
      </Default>
      </html>
    )
}

module.exports = Index