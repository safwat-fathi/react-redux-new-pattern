import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// users slice
import { addUser, addUserAsync, selectUsers } from "./usersSlice";

const App = () => {
  const usersData = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(usersData);
  }, [usersData]);

  const handleClick = (e) => {
    dispatch(
      addUserAsync({
        id: 11,
        name: "Fakhry",
        checkedIn: "13:00",
        checkedOut: "20:00",
        actions: "actions",
      })
    );
  };

  return (
    <div>
      <h1>hi</h1>
      <ul>
        {usersData.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
      <button onClick={handleClick}>Add Fakhry</button>
    </div>
  );
};

export default App;
