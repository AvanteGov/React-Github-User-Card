// dependencies
import React from 'react';

//components
import UserContainer from "./components/UserContainer";
import SearchForm from "./components/SearchForm";

//styling
import './App.css';

function App() {
  return (
    <div className="App">
    <SearchForm />
    <UserContainer />
    </div>
  );
}

export default App;
