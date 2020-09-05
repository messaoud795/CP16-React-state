import React from "react";
import PropTypes from "prop-types";
import { act } from "@testing-library/react";

function Profile(props) {
  /* Specify default values of props */
  const defaults = {
    fullName: "enter the full name",
    profession: "enter exprience",
    bio: "enter the bio",
  };
  const user = { ...defaults, ...props.user };
  return (
    <div style={{ border: "solid 1px gray", display: "flex" }}>
      {/* passing an image as chidren props  */}
      {props.children}
      <div style={{ marginLeft: "30px" }}>
        {/* passing a function as props */}
        <h2
          onClick={() => props.handleName(user.fullName)}
          style={{ color: "blue" }}
        >
          {user.fullName}
        </h2>
        <h3 style={{ color: "gray" }}>{user.profession}</h3>
        <p>{user.bio}</p>
      </div>
    </div>
  );
}

{
  /* set the type of the props */
}

Profile.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string,
    profession: PropTypes.string,
    bio: PropTypes.string,
  }),
};
{
}
export default Profile;
