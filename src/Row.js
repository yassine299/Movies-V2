import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./row.css";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

function Row({ title, fetchUrl, islargRow }) {
    const [movies, setmovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const baseimg = 'https://image.tmdb.org/t/p/original';

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setmovies(request.data.results);
            return request
        }
        fetchData();
    }, [fetchUrl])

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        },
    };

    const handlClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            const link = "https://api.themoviedb.org/3/tv/" + movie.id + "/videos?api_key=bbed96cafb26651d7db489d58dcc5f56&language=en-US";

            const getLink = () => {
                axios.get(link).
                    then((response) => {
                        const trailer = response.data.results;

                        var trailerLink;
                        for (let i = 1; i < trailer.length; i++) {
                            if (trailer[i].type === "Trailer") {
                                trailerLink = trailer[i].key;
                            }
                        }
                        setTrailerUrl(trailerLink);
                        //ok
                    })
            }

            getLink();

        }
    };

    return (
        <div className="container-fluid">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map((movie) => (
                    <>
                        <img
                            onClick={() => handlClick(movie)}
                            key={movie.id}
                            className="row__poster"
                            src={islargRow ? baseimg + movie.poster_path : baseimg + movie.backdrop_path} alt={movie.name}
                        />
                        <Link className={islargRow ? "list" : "info"} to={`/Row/${movie.id}`}>
                            <i className="fas fa-info fa-3x"></i>
                        </Link>

                    </>
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}

export default Row;
