import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface YoutubeThumbnailProps {
  defaultImg: string;
  gifImages: string[];
}

export const ThumbnailContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: auto;
`;

const GifFrames = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const GifFrame = styled.img<{ isVisible: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

const YoutubeThumbnail: React.FC<YoutubeThumbnailProps> = ({
  defaultImg,
  gifImages,
}) => {
  const [hovering, setHovering] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (hovering) {
      intervalId = setInterval(() => {
        setCurrentFrame((prevFrame) => (prevFrame + 1) % gifImages.length);
      }, 100); // Adjust speed as needed
    } else {
      setCurrentFrame(0);
    }

    return () => clearInterval(intervalId);
  }, [hovering, gifImages.length]);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  return (
    <ThumbnailContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ThumbnailImage src={defaultImg} />
      <GifFrames>
        {gifImages.map((gif, index) => (
          <GifFrame key={index} src={gif} isVisible={index === currentFrame} />
        ))}
      </GifFrames>
    </ThumbnailContainer>
  );
};

export default YoutubeThumbnail;
