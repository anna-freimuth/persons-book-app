import React, {useEffect} from "react";
import {connect} from "react-redux";
import {addDislikeToPhoto, addLikeToPhoto} from "../../store/actions/photos";

const AddReaction = ({ photo, addLike, addDislike, }) => {
    useEffect(() => {
        console.log(photo);
    }, [photo]);
    const addNewLike = (event) => {
        event.preventDefault();
        addLike(photo.id);

    };

    const addNewDislike = (event) => {
        event.preventDefault();
        addDislike(photo.id);

    };

    return (
        <div>
            <button value={photo.like} onClick={addNewLike}>
                Like({photo.like})
            </button>
            <button onClick={addNewDislike}>DisLike({photo.dislike})</button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addLike: (id) => dispatch(addLikeToPhoto(id)),
        addDislike: (id) => dispatch(addDislikeToPhoto(id)),

    };
};

export default connect(null, mapDispatchToProps)(AddReaction);
