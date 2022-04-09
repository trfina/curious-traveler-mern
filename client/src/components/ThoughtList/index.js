import React from "react";
import { Link } from "react-router-dom";
import cornfield from "../../assets/field-of-corn.jpeg";

const ThoughtList = ({ thoughts }) => {
  // if (!thoughts.length) {
  //   return (
  //     <div>
  //       <h3>No Thoughts Yet</h3>
  //     </div>
  //   );
  // }

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

            <img className="p-3" src={cornfield} width={300} height={300} />

            <div className="card-body">
              <Link to={`/thought/${thought._id}`}>
                <p>{thought.thoughtText}</p>
                <p className="mb-0">
                  Reactions: {thought.reactionCount} || Click to{" "}
                  {thought.reactionCount ? "see" : "start"} the discussion!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ThoughtList;
