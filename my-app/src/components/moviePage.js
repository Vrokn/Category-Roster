import React from "react";
import { Container, Row, Col, Carousel, Badge } from 'react-bootstrap'
import icons from './icons'


export default function MoviePage(title, imagebase, genres, score, overview, watched, favorite, queue, poster_path, imagesList) {
    return (
        <Container>
            <Carousel controls='false' indicators='false'>
                {imagesList.map(item =>
                    <Carousel.Item>
                        <img src={item.file_path ? `${imagebase}${item.file_path}` : 'https://es.zenit.org/wp-content/uploads/2018/05/no-image-icon.png'}
                            alt={title} />
                        <Carousel.Caption>
                            <p>{overview}</p>
                        </Carousel.Caption>
                    </Carousel.Item>)}
            </Carousel>
            <Row className="justify-content-md-center">
                <Col xs lg="4">
                    <img src={poster_path ? `${imagebase}${poster_path}` : 'https://es.zenit.org/wp-content/uploads/2018/05/no-image-icon.png'}
                        alt={title} />
                    {score}
                </Col>
                <Col xs lg="5">
                    <Row>{title}</Row>
                    <Row>{overview}</Row>
                    <Row>
                        <div class="col-auto row offset-1 ">{genres.map((post) => <Badge variant="secondary">{post.name}{' '}</Badge>)}</div>
                        <div class="col col-lg-auto row">
                            <div onClick={() => this.setState({ watched: !watched })}>{watched ? icons.eyeFill : icons.eye}</div>
                            <div onClick={() => this.setState({ favorite: !favorite })}>{favorite ? icons.heartFill : icons.heart}</div>
                            <div onClick={() => this.setState({ queue: !queue })}>{queue ? icons.clockFill : icons.clock}</div>
                        </div>
                    </Row>

                </Col>
            </Row>
        </Container>
    )
}