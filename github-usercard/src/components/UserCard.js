import React, {Component} from 'react';
import { Link, Route } from "react-router-dom";


class UserCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            followersdata: []
        }
    }



    render () {
        return (
            <div className="user-card">
                {console.log("usercard props", this.props)}
                <div className="user-card__profile-container">
                    <img className="profile-container__img" src={this.props.userdata.avatar_url} alt="user-imge" />
                    
                    <div className="profile-container__copy-container">
                        <h1 className="copy-container__display-name">{this.props.userdata.name}</h1>
                        <a href={this.props.userdata.url} alt="github-direct-link" className="copy-container__username">{this.props.userdata.login}</a>
                        <p className="copy-container__bio">{this.props.userdata.bio}</p>
                        <p className="copy-container__company">{this.props.userdata.company}</p>
                        <p className="copy-container__location">{this.props.userdata.location}</p>
                        
                        <div className="copy-container__follow-link-container">
                            <div className="follow-link-container__follow-container">
                                <Link className="follow-container__link" to="/followers">Followers:</Link> 
                                <p className="follow-container__count">{this.props.userdata.followers}</p>
                            </div>

                            <div className="follow-link-container__follow-container">
                                <Link className="follow-container__link" to="/following">Following:</Link>
                                <p className="follow-container__count">{this.props.userdata.following}</p>
                            </div>
                        </div>

                    </div>

                </div>

                 {/* Need to add the routes to render the respective following and follower lists  */}
                 {/* These lists will need to be passed the respoective link to do a fetch in the compoent */}
            </div>
        )
    }

}

export default UserCard;

