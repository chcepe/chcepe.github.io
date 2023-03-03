import React from "react";

export interface Props extends React.PropsWithChildren {
  title: string;
  fixedHeader?: boolean;
  header?: React.ReactNode;
}

export type HeaderType = "no" | "fixed" | "fixed-bg" | "normal";
