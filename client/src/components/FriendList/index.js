import React from "react";
import { Link } from "react-router-dom";

const FriendList = ({ friendCount, username, friends }) => {
  if (!friends || !friends.length) {
    return <p className="bg-dark text-light p-3">{username}, Make some friends!</p>;
  }

  return (
    <div>
      <h5 className="card-header">
        {username}'s {friendCount} {friendCount === 1 ? "friend" : "friends"}
      </h5>
      <div className="card-body">
        {friends.map((friend) => (
          <button className="btn w-100 display-block mb-2" key={friend._id}>
            <Link to={`/profile/${friend.username}`}>{friend.username}</Link>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FriendList;
