import React, {Component} from "react";
import { Route } from "react-router-dom";

// components 
import FollowerList from "./FollowersList";
import FollowingList from "./FollowingList";

class FollowContainer extends Component {

    constructor (props) {
        super(props);
    }
    
    render() {
        return (
            <div className="follow-container">
            <Route exact path="/followers" component={() => {
                return (
                    <FollowerList link={this.props.userdata.followers_url} />
                )
            }} />
            </div>
        )
    }
}

export default FollowContainer;