import { MouseEventHandler } from "react";

import { IconDefinition } from "@fortawesome/pro-solid-svg-icons";


export type TTopBar = {
  icons?: {
    icon: IconDefinition;
    title?: string;
    className?: string;
    onClick?: MouseEventHandler<SVGSVGElement>;
  }[];
};