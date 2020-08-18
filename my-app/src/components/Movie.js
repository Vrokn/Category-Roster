import React from "react";
import icons from './icons'
import { Badge } from 'react-bootstrap'


export default function Movie({ title, imagebase, poster_path, genre_ids, id, onWatchedClick, onFavoriteClick, onQueueClick, watched, favorite, queue, genres, selectMovie }) {
    let filteredTerms = genres.filter((data) => {
        return genre_ids.includes(data.id)
    })
    return (
        <li onClick={() => selectMovie(id)}>
            <a href={`/${id}`}><img src={poster_path ? `${imagebase}${poster_path}` : 'https://es.zenit.org/wp-content/uploads/2018/05/no-image-icon.png'}
                alt={title} />
            </a>
            <div class="container">
                <h6>
                    <div class="row">
                        <div class="col">
                            <a href={`/?id=${id}`}>{title}</a>
                        </div>
                        <div class="col col-lg-auto row">
                            <div onClick={() => onWatchedClick({ watched: !watched })}>{watched ? icons.eyeFill : icons.eye}</div>
                            <div onClick={() => onFavoriteClick({ favorite: !favorite })}>{favorite ? icons.heartFill : icons.heart}</div>
                            <div onClick={() => onQueueClick({ queue: !queue })}>{queue ? icons.clockFill : icons.clock}</div>
                        </div>
                    </div>
                </h6>
                <div class="col-auto row offset-1 ">{filteredTerms.map((post) => <Badge variant="secondary">{post.name}{' '}</Badge>)}</div>
            </div>
        </li >
    );
}

