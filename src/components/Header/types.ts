import React from "react";

export interface Props extends React.PropsWithChildren {
  title?: string;
  withBack?: boolean;
}
