import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Breadcrumbs } from "@components/breadcrumb/breadcrumb";
import { TTopBar } from "@components/topBar/topBar.types";

import "@components/topBar/topBar.css";

export const TopBar: FC<TTopBar> = ({ icons }): JSX.Element => {
  return (
    <div id="topbar" className="top-bar">
      <Breadcrumbs />
      <div className="flex">
        {icons &&
          icons.map(({ icon, title, className, onClick }, index) => (
            <FontAwesomeIcon
              key={index}
              icon={icon}
              className={`w-5 h-5 cursor-pointer ${
                index !== 0 && "ml-3"
              } ${className}`}
              title={title}
              onClick={onClick}
            />
          ))}
      </div>
    </div>
  );
};
