import React from "react";

export default function About({ image, about }) {
  return (
    <div>
      <aside>
        <img
          src={image ? image : "https://via.placeholder.com/215"}
          alt="blog logo"
        />
        <p> {about}</p>
      </aside>
    </div>
  );
}
