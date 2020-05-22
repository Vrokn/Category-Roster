import React from "react";
import { Container, Jumbotron, Row, Col, Carousel, Badge } from 'react-bootstrap'
import icons from './icons'


export default function MoviePage({ imagebase, selectedMovie, imagesList, onWatchedClick, onFavoriteClick, onQueueClick }) {
    const { title, overview, poster_path, score, watched, queue, favorite, genres } = selectedMovie;
    return (
        <Container>
            <Container display={'block'}>
                <Carousel controls={false} interval={2500} indicators={false} fade={true} className="d-block w-100">
                    {imagesList.map(item =>
                        <Carousel.Item>
                            <img className="d-block w-100" src={item.file_path ? `${imagebase}${item.file_path}` : 'https://es.zenit.org/wp-content/uploads/2018/05/no-image-icon.png'}
                                alt={title} />
                            {/* <Carousel.Caption>
                            <p>{overview}</p>
                        </Carousel.Caption> */}
                        </Carousel.Item>)}
                </Carousel>
            </Container>
            <Row className="justify-content-center ">
                <Col xs lg="5">
                    <Row>
                        <img id='#poster' className="d-block w-100" src={poster_path ? `${imagebase}${poster_path}` : 'https://es.zenit.org/wp-content/uploads/2018/05/no-image-icon.png'}
                            alt={title} /></Row>
                    <Row>{score}</Row>
                </Col>
                <Col xs lg="5">
                    <Jumbotron >
                        <h1><Row>{title}</Row></h1>
                        <p text-align='left'><Row>{overview}</Row></p>
                    </Jumbotron>
                    <Row>
                        <div class="col-auto row offset-1 ">{genres && genres.map((post) => <Badge variant="secondary">{post.name}</Badge>)}</div>
                        <div class="col col-lg-auto row">
                            <div onClick={() => onWatchedClick({ watched: !watched })}>{watched ? icons.eyeFill : icons.eye}</div>
                            <div onClick={() => onFavoriteClick({ queue: !queue })}>{queue ? icons.clockFill : icons.clock}</div>
                            <div onClick={() => onQueueClick({ favorite: !favorite })}>{favorite ? icons.heartFill : icons.heart}</div>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}