import { FaDog, FaCoffee } from "react-icons/fa";
import { GiNightSleep } from "react-icons/gi";
import { MdLunchDining } from "react-icons/md";
import { BiCodeBlock } from "react-icons/bi";
import { MdSoupKitchen } from "react-icons/md";
import { GiBowlOfRice } from "react-icons/gi";
import { CgBrowser } from "react-icons/cg";
import { RiMovie2Fill } from "react-icons/ri";

export const ACTIVITIES = {
  SLEEPING: {
    icon: GiNightSleep,
    text: "Currently sleeping",
  },
  WALKING_THE_DOG: {
    icon: FaDog,
    text: "I'm walking the dogs outside",
  },
  WITH_DOG_OUTDOOR: {
    icon: FaDog,
    text: "I'm outdoor with dogs!",
  },
  EATING_BREAKFAST: {
    icon: FaCoffee,
    text: "Currently eating breakfast",
  },
  WORKING: {
    icon: BiCodeBlock,
    text: "Currently working til 5pm",
  },
  COOKING_LUNCH: {
    icon: MdSoupKitchen,
    text: "Currently cooking lunch! :)",
  },
  EATING_LUNCH: {
    icon: MdLunchDining,
    text: "Eating lunch now! :)",
  },
  COOKING_DINNER: {
    icon: MdSoupKitchen,
    text: "Currently cooking dinner! :)",
  },
  EATING_DINNER: {
    icon: GiBowlOfRice,
    text: "Eating dinner now!",
  },
  SURFING_THE_WEB: {
    icon: CgBrowser,
    text: "Hmm.. surfing the web",
  },
  WATCHING_SERIES: {
    icon: RiMovie2Fill,
    text: "Now watching some series",
  },
};

type Activity = keyof typeof ACTIVITIES;

export const getActivity = (date: Date): Activity => {
  const dayOfWeek = date.getDay();
  const hour = date.getHours();

  if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    if (hour === 7 || (hour >= 13 && hour < 13.5) || hour === 19) {
      return "WALKING_THE_DOG";
    } else if (hour === 8) {
      return "EATING_BREAKFAST";
    } else if ((hour >= 10 && hour < 12) || (hour >= 13.5 && hour < 17)) {
      return "WORKING";
    } else if (hour >= 12 && hour < 12.5) {
      return "COOKING_LUNCH";
    } else if (hour >= 12.5 && hour < 13) {
      return "EATING_LUNCH";
    } else if (hour >= 17 && hour < 18) {
      return "COOKING_DINNER";
    } else if (hour === 18) {
      return "EATING_DINNER";
    } else if (hour === 20) {
      return "SURFING_THE_WEB";
    } else if (hour === 21) {
      return "WATCHING_SERIES";
    } else {
      return "SLEEPING";
    }
  } else {
    if (hour === 9 || hour === 19) {
      return "WALKING_THE_DOG";
    } else if (hour === 10) {
      return "EATING_BREAKFAST";
    } else if (hour >= 11 && hour < 17) {
      return "WALKING_THE_DOG";
    } else if (hour >= 17 && hour < 18) {
      return "COOKING_DINNER";
    } else if (hour === 18) {
      return "EATING_DINNER";
    } else if (hour === 20) {
      return "SURFING_THE_WEB";
    } else if (hour >= 21 && hour < 23) {
      return "WATCHING_SERIES";
    } else {
      return "SLEEPING";
    }
  }
};
