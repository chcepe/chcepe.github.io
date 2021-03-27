import { AppContext } from "lib/AppContext";
import React, { FC, HTMLProps, useContext } from "react";
import useSound from "use-sound";

import SOUNDS from "utils/sounds";

const Link: FC<HTMLProps<HTMLAnchorElement>> = ({ children, ...rest }) => {
  const { withSound } = useContext(AppContext);

  const [playPop] = useSound(SOUNDS.pop);

  return (
    <a
      onClick={() => {
        if (withSound) playPop();
      }}
      rel="noreferrer"
      {...rest}
    >
      {children}
    </a>
  );
};

export default Link;
