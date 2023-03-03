import React from "react";

export interface Props extends React.PropsWithChildren {
  title?: string;
  desc?: string;
  autoHeight?: boolean;
  snap?: boolean;
}
