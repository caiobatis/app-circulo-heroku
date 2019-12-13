import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "./cover.scss";

function Cover(props) {
  const [visible, setVisible] = useState(true);

  const { children, center, time = 2000 } = props;

  const coverClasses = classNames("cover", "custom", {
    ["center"]: center,
    ["visible"]: visible
  });

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, time);
  }, []);

  return (
    <div className={coverClasses}>
      <div className={"title"}>{children}</div>
    </div>
  );
}

export default Cover;
