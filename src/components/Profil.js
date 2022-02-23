import React from "react";

const Profil = ({ profil }) => {
  return (
    <div>
      {profil !== undefined ? (
        <div>
          <h2>{profil.login}</h2>
        </div>
      ) : (
        <p>ne postoje rezultati</p>
      )}
    </div>
  );
};

export default Profil;
