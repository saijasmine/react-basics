import React, { useState, useEffect } from "react";

const WindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.title = `Size:${width} x ${height}`;
  }, [width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  return (
    <div>
      <p>Window Width:{width} px</p>
      <p>Window Height:{height} px</p>
    </div>
  );
};

export default WindowSize;
