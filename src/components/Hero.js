import React from "react";


export default function Hero({children}) {
  return <div className="hero">
    <div className="banner">
      <h1>Retro tech restored</h1>
      <p>Relive the golden age of technology</p>
      {children}
    </div>
  </div>;
}
