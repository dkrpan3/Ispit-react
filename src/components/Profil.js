import React from "react";

const Profil = (props) => {
  return (
    <div className="list-group">
      <span>{props.profil.login}</span>
    </div>
  );
};

export default Profil;
