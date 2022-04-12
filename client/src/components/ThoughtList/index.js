import React from "react";
import { Link } from "react-router-dom";
import cornfield from "../../assets/images/field-of-corn.jpeg";

const ThoughtList = ({ thoughts }) => {
  if (!thoughts.length) {
    return (
      <div>
        <h3 className="bg-dark text-secondary p-2">No Thoughts Yet</h3>
      </div>
    );
  }

  return (
    <div>
      {thoughts &&
        thoughts.map((thought) => (
          <div key={thought._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${thought.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {thought.username}
              </Link>{" "}
              thought on {thought.createdAt}
            </p>
            {/* <img
              className="p-3"
              src={`http://localhost:3000/uploads/${thought.image}`}
              alt=""
              width={300}
              height={300}
            /> */}
            <img className="p-3" src={cornfield} alt="" width={300} height={300} />

            <div className="card-body">
              <Link to={`/thought/${thought._id}`}>
                <p>{thought.thoughtText}</p>
                <p className="mb-0">
                  Reactions: {thought.reactionCount} || Click to{" "}
                  {thought.reactionCount ? "see" : "start"} destinations!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ThoughtList;
