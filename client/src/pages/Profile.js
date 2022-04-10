import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { ADD_FRIEND } from '../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import ThoughtList from "../components/ThoughtList";
import FriendList from "../components/FriendList";
import Auth from "../utils/auth";
import ThoughtForm from '../components/ThoughtForm';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam }
  });

  const user = data?.me || data?.user || {};
  const [addFriend] = useMutation(ADD_FRIEND);
  // redirect to personal profile page if username is the logged-in user's
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this page. Use the navigation links
        above to sign up or log in!
       
      </h4>
    );
  }
  const handleClick = async () => {
    try {
      await addFriend({
        variables: { id: user._id }
      });
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      console.log({user.username});

      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
<<<<<<< HEAD
          Viewing {userParam ? `${user.username}'s` : "your"} travel profile
          console.log({user.username});
=======
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
>>>>>>> 3d3f5c5f6fdcd0de0d6aad29aee6e35b76609aa7
        </h2>

        {userParam && (
  <button className="btn ml-auto" onClick={handleClick}>
    Add Friend
  </button>
)}

      </div>
      
      <div className="flex-row justify-space-between mb-3">
        {/* the following div element is not rendering */}
      <div className="col-12 mb-3 col-lg-8">
          <ThoughtList
            thoughts={user.thoughts}
            title={`${user.username}'s curious destinations...`}
          />
      </div>

        <div className="col-12 col-lg-3 mb-3">
          <FriendList
            username={user.username}
            friendCount={user.friendCount}
            friends={user.friends}
          />
        </div>
      </div>
      <div className="mb-3">{!userParam && <ThoughtForm />}</div>
    </div>
  );
};

export default Profile;
