import React, { useState } from 'react';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';
import Wrapper from './components/Helpers/Wrapper';


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUsersHandler = (uName, uAge) => {
    setUsersList((prevState) => {
      return [...prevState, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  };

  return (
    <Wrapper>
      <AddUsers onAddUsers={addUsersHandler} />
      <UserList users={usersList} />
    </Wrapper>
  );
}

export default App;
