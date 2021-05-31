import { useContext } from "react";

import "../styles/list.css";
import { UsersContext } from "../context/UsersContext";

export default function List() {
  const { page, setPage, setProfileData, users } = useContext(UsersContext);

  const handleClick = (e) => {
    if (e.target.innerHTML === "Next Page") {
      setPage(page + 1);
    } else {
      page > 1 && setPage(page - 1);
    }
  };

  const handleClickTwo = (data) => {
    setProfileData(data);
  };

  const usersList = users.map((user, index) => {
    const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;

    return (
      <div className="list-item" key={index}>
        <div className="list-user">
          <img src={user.picture.medium} alt="thumbnail" />
          <div>
            <p>{fullName}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        </div>
        <button onClick={() => handleClickTwo(user)}>See More</button>
      </div>
    );
  });

  return (
    <div className="list">
      {usersList}
      <div className="list-pagination">
        <button onClick={handleClick}>Previous page</button>
        {page}
        <button onClick={handleClick}>Next Page</button>
      </div>
    </div>
  );
}
