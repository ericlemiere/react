import React, { useState, Fragment } from "react";
import AddUser from "./Components/Users/AddUser";
import ShowUser from "./Components/Users/ShowUser";

const usersArray = [{ id: "u1", username: "Pat Riley", age: "76" }];

function App() {
  const [usersList, setUsersList] = useState(usersArray);

  const addUserHandler = (newUser) => {
    setUsersList((prevUsersList) => {
      let newArray = [newUser, ...prevUsersList];
      console.log(newArray);
      return [newUser, ...prevUsersList];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <ShowUser users={usersList} />
    </Fragment>
  );
}

export default App;
