import React from "react";

export default function Item({ title, completed, onPress, ...rest }) {
  return (
    <li
      onClick={() =>
        onPress({
          title,
          completed,
          ...rest
        })
      }
      className={`item ${completed ? "completed" : null }`}
    >
      {title}
    </li>
  );
}
