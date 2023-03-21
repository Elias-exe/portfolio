import React from "react";
import Typewriter from "typewriter-effect";

export default function Typewritter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Front End Developer",
          "Web Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
