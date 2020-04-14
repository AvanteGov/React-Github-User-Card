import React from 'react';

const FollowingCard = (props) => {

    return (
        <div className="following-card-container">
             <img className="follow-card-container__img" src={props.followingdata.avatar_url} alt="user-img" />

            <div className="follow-card-container__copy-container">
                <h1 className="copy-container__header">{props.followingdata.login}</h1>
                <div className="copy-container__follow-container">
                    <p className="follow-container__copy">{`Followers: ${Math.floor(Math.random() * 100)}`}</p>
                    <p className="follow-container__copy">{`Following: ${Math.floor(Math.random() * 100)}`}</p>
                </div>
            </div>
        </div>
    )
}

export default FollowingCard;
