/// <reference types="vite/client" />

declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>> & {height: number, width: number, fill: string};
  const src: string;
  export default src;
}