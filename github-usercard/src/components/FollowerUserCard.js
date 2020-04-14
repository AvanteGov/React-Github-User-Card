import React from "react";

const FollowerCard = (props) => {

    return (
        <div className="follower-card-container">
            {/* {console.log("follower card props", props)} */}
            <img className="follow-card-container__img" src={props.followerdata.avatar_url} alt="user-img" />

            <div className="follow-card-container__copy-container">
                <h1 className="copy-container__header">{props.followerdata.login}</h1>
                <div className="copy-container__follow-container">
                    <p className="follow-container__copy">{`Followers: ${Math.floor(Math.random() * 100)}`}</p>
                    <p className="follow-container__copy">{`Following: ${Math.floor(Math.random() * 100)}`}</p>
                </div>
            </div>
        </div>
    )
}

export default FollowerCard;