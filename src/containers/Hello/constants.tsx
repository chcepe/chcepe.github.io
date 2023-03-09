import {
  AiOutlineMedium,
  AiOutlineTwitter,
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export const SOCIAL_LINKS = [
  {
    id: "linkedin",
    icon: <AiFillLinkedin />,
    name: "LinkedIn",
    link: "https://linkedin.com/in/chcepe",
  },
  {
    id: "medium",
    icon: <AiOutlineMedium />,
    name: "Github",
    link: "https://medium.com/@chcepe",
  },
  {
    id: "github",
    icon: <AiFillGithub />,
    name: "Github",
    link: "https://github.com/chcepe",
  },
  {
    id: "youtube",
    icon: <AiFillYoutube />,
    name: "YouTube",
    link: "https://youtube.com/chcepe",
  },
  {
    id: "twitter",
    icon: <AiOutlineTwitter />,
    name: "Twitter",
    link: "https://twitter.com/chcepe",
  },
  {
    id: "whatsapp",
    icon: <AiOutlineWhatsApp />,
    name: "Whatsapp",
    link: "whatsapp://send?phone=+420603401295&text=Hello",
  },
  {
    id: "email",
    icon: <AiFillMail />,
    name: "Email",
    link: "mailto:chcepe@gmail.com",
  },
];
