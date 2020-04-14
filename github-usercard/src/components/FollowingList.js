import React, {Component} from 'react';

import FollowingCard from "./FollowingUserCard";

class FollowingList extends Component {

    constructor(props){
        super(props);
        this.state = {
            followingdata: []
        }
    }

    componentDidMount(){
        console.log("following component mounted");

        // fetch(`${this.props.link}`)
        fetch(`https://api.github.com/users/AvanteGov/following`)
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
            this.setState({
                followingdata: response
            })
        })
        .catch((error) => console.log("error on the following, tex", error))
    }

    render(){
        return(
            <div className="follow-list-container">
                {this.state.followingdata.map((following) => {
                    return (
                        <FollowingCard followingdata={following} />
                    )
                })}
            </div>
            
        )
    }
}

export default FollowingList;