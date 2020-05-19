import React from "react";

export default function Header() {
  const date = new Date();

  return (
    <header className="header">
      <div className="header-date">
        <h1 className="header-date-day">{date.getDate()}</h1>
        <div className="header-date-year">
          <span>{date.toLocaleString("default", { month: "short" })}</span>
          <span>{date.getFullYear()}</span>
        </div>
      </div>
      <span>{date.toLocaleString("default", { weekday: "long" })}</span>
    </header>
  );
}
