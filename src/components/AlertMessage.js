import React from "react";

export default function AlertMessage({ primaryText, secondaryText }) {
  return (
    <div className="alert-msg">
      <h1>{primaryText}</h1>
      <p>{secondaryText}</p>
    </div>
  );
}
