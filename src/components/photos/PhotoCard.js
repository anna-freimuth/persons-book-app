import React, {useContext} from 'react'
import {GlobalContext} from "../App";


const PhotoCard = ({photo}) => {
    const context = useContext(GlobalContext);
    return (
        <div className="col-6 col-sm-4 col-md-3">
            <div className="card">
                <img src={photo.src} alt={photo.title}/>
                <div className="card-body">
                    <p className="card-title">{photo.title}</p>
                    <p className="card-text">
                        <button onClick={() => {
                            {
                                context.likeRating(photo.id)
                            }
                        }}>Like({photo.like})
                        </button>
                        <button
                            onClick={() => {
                                {
                                    context.dislikeRating(photo.id)
                                }
                            }}
                        >DisLike({photo.dislike})
                        </button>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default PhotoCard
