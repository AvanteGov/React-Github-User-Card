import React, {Component} from 'react';

import FollowerCard from "./FollowerUserCard";

class FollowerList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            followerdata: []
        }
    }

    componentDidMount() {
        // console.log("follow component did mount", this.props)

        fetch(`${this.props.link}`)
        .then((response) => response.json())
        .then((response) => { 
            // console.log("follower response:", response)
            this.setState({
                followerdata: response
            })
        })
        .catch((error) => console.log("error in the followers fetch", error))
    }

    render() {
        return (
            <div>
                {/* {console.log("list state", this.state)} */}
                {this.state.followerdata.map((follower) => (
                    <FollowerCard followerdata={follower} />
                ))}
            </div>
        )
    }
}

export default FollowerList;

// need to write map function to create user cards from the fetch repsonse now set to state 
// need to build out simple user cards to display reponse data passed by props

// youre getting a weird error in from the catch in the followers fetch, but it is 
// still getting the data back properly formatted as far as I can tell?

