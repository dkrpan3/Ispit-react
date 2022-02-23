import React from "react";
import { Card } from "react-bootstrap";

const Profil = ({ profil }) => {
  return (
    <Card>
      {profil !== undefined ? (
        <div>
          <h2>{profil.login}</h2>
          <img src={profil.avatar_url} />
          <span>{profil.location}</span>
          <span>{profil.bio}</span>
        </div>
      ) : (
        <p>ne postoje rezultati</p>
      )}
    </Card>
  );
};

export default Profil;
