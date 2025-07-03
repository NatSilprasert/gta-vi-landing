'use client'
import { useMediaQuery } from "react-responsive";

export const useMaskSettings = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  if (isMobile) {
    return {
      initialMaskPos: "50% -1500vh",
      initialMaskSize: "4000% 4000%",
      maskPos: "50% 14.6vh",
      maskSize: "40% 40%",
    };
  }

  if (isTablet) {
    return {
      initialMaskPos: "50% -1700vh",
      initialMaskSize: "4000% 4000%",
      maskPos: "50% 18.9vh",
      maskSize: "25% 25%",
    };
  }

  return {
    initialMaskPos: "50% 22%",
    initialMaskSize: "3800% 3800%",
    maskPos: "50% 25.5%",
    maskSize: "16% 16%",
  };
};