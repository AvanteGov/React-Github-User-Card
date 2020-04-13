//dependencies
import React, {Component} from "react";

//components 
import UserCard from "./UserCard"

class UserContainer extends Component {

    constructor () {
        console.log("user-container contructor ran")
        super();
        this.state = {
            userdata: []
        }
    }

    componentDidMount() {
        console.log("componentDidMount ran")
        
        fetch(`https://api.github.com/users/AvanteGov`)
        .then((response) => response.json())
        .then ((response) => {
            // console.log("fetch repsonse", response)
            this.setState( { userdata: response })
        })
        .catch((error) => {
            console.log("error, tex", error)
        })
    }

    render () {
        return (
            <div className="user-container">
                <h1> I AM THE USER CONTAINER</h1>
                <UserCard userdata={this.state.userdata} />
            </div>
        )
    }
}

export default UserContainer;