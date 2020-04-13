//dependencies
import React, {Component} from "react";

//components 
import UserCard from "./UserCard"

class UserContainer extends Component {

    constructor () {
        super()
    }

    render () {
        return (
            <div className="user-container">
                <h1> I AM THE USER CONTAINER</h1>
                <UserCard />
            </div>
        )
    }
}

export default UserContainer;