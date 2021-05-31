import React, { useState, useEffect } from "react";
const UsersContext = React.createContext();

function Provider(props) {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const url = `https://randomuser.me/api?seed=exam&results=5&page=${page}`;
    const updateUsers = async () => {
      const data = await fetch(url)
        .then((res) => res.json())
        .then((data) => data.results);
      setUsers(data);
    };

    updateUsers();
  }, [page]);

  return (
    <UsersContext.Provider
      value={{ page, profileData, setPage, setProfileData, setUsers, users }}
    >
      {props.children}
    </UsersContext.Provider>
  );
}

export { UsersContext, Provider };
