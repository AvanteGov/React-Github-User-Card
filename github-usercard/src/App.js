// dependencies
import React from 'react';

//components
import UserContainer from "./components/UserContainer";
import SearchForm from "./components/SearchForm";
import FollowContainer from "./components/FollowContainer";

//styling
import './App.css';
import FollowerCard from './components/FollowerUserCard';

function App() {
  return (
    <div className="App">
    <SearchForm />
    <UserContainer />
    </div>
  );
}

export default App;
