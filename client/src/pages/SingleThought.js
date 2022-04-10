import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_THOUGHT } from "../utils/queries";
import ReactionList from "../components/ReactionList";
import cornfield from "../assets/photos/book-loft-inside.jpg";

const SingleThought = (props) => {
  const { id: thoughtId } = useParams();
  console.log(thoughtId);
  const { loading, data } = useQuery(QUERY_THOUGHT, {
    variables: { id: thoughtId }
  });
  const thought = data?.thought || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {thought.username}
          </span>{" "}
          Destination shared on {thought.createdAt}
        </p>
        <div className="card-body">
          <img src={cornfield} alt={""} width={500} height={500} />
          <p>{thought.thoughtText}</p>
        </div>
      </div>

      {thought.reactionCount > 0 && 
        <ReactionList reactions={thought.reactions} />
      }
    </div>
  );
};

export default SingleThought;
