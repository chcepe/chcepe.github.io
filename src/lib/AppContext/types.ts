import { Blog, Project } from "utils/types";

export interface Props {
  darkMode: boolean;
  toggleDarkMode: () => void;

  withSound: boolean;
  toggleWithSound: () => void;

  loadingBlogs?: boolean;
  blogs: Blog[];
}
