import { ReactNode } from "react";

export interface Props {
  title: string;
  fixedHeader?: boolean;
  header?: ReactNode;
}

export type HeaderType = "no" | "fixed" | "fixed-bg" | "normal";
