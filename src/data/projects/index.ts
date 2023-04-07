// import { writeFileSync } from "fs";

import swapiDev from "./swapi-dev";
import simpleBottomSheet from "./react-simple-bottom-sheet";
import coinflip from "./coinflip";
import craveAdmin from "./crave-admin";
import craveCatering from "./crave-catering";
import lifebrand from "./lifebrand";
import minerva from "./minerva";
import sindro from "./sindro";
import lpu from "./lpu";
import cornelia from "./cornelia";
import phoebe from "./phoebe";
import magezi from "./magezi";
import sophia from "./sophia";
import lufthansaCareers from "./lufthansa-careers";
import lufthansaCMR from "./lufthansa-cmr";
import minervaPlus from "./minerva-plus";
import teeconcepts from "./teeconcepts";
import miui8 from "./miui";
import staffmd from "./staffmd";
import cabrini from "./cabrini";
import lpuGWA from "./lpu-gwa";
import lpuLMS from "./lpu-lms";
import lpuLMSV2 from "./lpu-lms-v2";
import others from "./others";

export const OPEN_SOURCE_PROJECTS = [swapiDev, simpleBottomSheet];

export const OTHER_PROJECTS = [
  craveCatering,
  craveAdmin,
  coinflip,
  sindro,
  lifebrand,
  minerva,
  lpu,
  cornelia,
  phoebe,
  magezi,
  sophia,
  lufthansaCareers,
  lufthansaCMR,
  minervaPlus,
  teeconcepts,
  miui8,
  staffmd,
  cabrini,
  lpuGWA,
  lpuLMS,
  lpuLMSV2,
  others,
];

export default [...OPEN_SOURCE_PROJECTS, ...OTHER_PROJECTS];
