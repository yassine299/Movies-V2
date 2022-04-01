import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Details() {
    const { id } = useParams();
    const [Details, SetDetails] = useState([]);
    const baseimg = 'https://image.tmdb.org/t/p/original';

    const getDetails = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=bbed96cafb26651d7db489d58dcc5f56&language=en-US');
        const data = await response.json();
        SetDetails(data);
    }

    useEffect(() => {
        getDetails();
    }, [])

    return (
        <div style={{
            backgroundColor: "rgb(26, 25, 25)",
            width: "100%",
            height: "100%",
            position: "fixed",
            objectFit: "contain",
            textAlign: "center",
           
        }}
        >
            <div className="container">
                <>
                    <div class="card mb-3" style={{ marginTop: "100px", backgroundColor: "#33313b" }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img className="img-fluid" src={baseimg + Details.poster_path} alt={Details.title} style={{ height: "469px", width: "400px" }} />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 style={{marginTop:"-15px"}} class="card-title">{Details.title}</h5>
                                    <p class="card-text"><small class="text-muted">{Details.vote_average}</small></p>
                                    <p style={{lineHeight:"1.3",fontSize:"0.8rem",marginTop:"-13px"}} class="card-text">{Details.overview}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </div>
        </div>
    )
}

export default Details;
