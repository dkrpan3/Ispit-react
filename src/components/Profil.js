import React from "react";

const Profil = ({ profil }) => {
  return (
    <div>
      {profil !== undefined ? (
        <div>
          <h2>{profil.login}</h2>
          <a href={profil.avatar_url}> {profil.name}</a>
          <span>{profil.location}</span>
          <span>{profil.bio}</span>
        </div>
      ) : (
        <p>ne postoje rezultati</p>
      )}
    </div>
  );
};

export default Profil;
