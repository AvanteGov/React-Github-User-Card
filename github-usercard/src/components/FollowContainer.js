import React, {Component} from "react";
import { Route } from "react-router-dom";

// components 
import FollowerList from "./FollowersList";
import FollowingList from "./FollowingList";

class FollowContainer extends Component {

    constructor (props) {
        super(props);
        this.state = {
        }
    }
    
    render() {
        return (
            <div className="follow-container">
            <Route exact path="/followers" component={() => {
                return (
                    <FollowerList link={this.props.userdata.followers_url} />
                )
            }} />

            <Route exact path="/following" component={() => {
                return(
                    <FollowingList link={this.props.userdata.following_url} />
                )
            }} />
            </div>
        )
    }
}

export default FollowContainer;