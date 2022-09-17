import './App.css';
import React, { UserContext } from 'react';

export default function App() {
  return (
    <UserContext.Provider value="Hello World">
      <User />
      </UserContext.Provider>
  );
}

function User() {
  const value = React.useContext(UserContext);

  return <h1>{value}</h1>
}
