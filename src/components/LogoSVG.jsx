import React, { useState, useEffect } from "react";

const LogoSVG = ({ src, alt, className }) => {
  const [svgContent, setSvgContent] = useState("");

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const response = await fetch(src);
        const svgText = await response.text();
        setSvgContent(svgText);
      } catch (error) {
        console.error("Error loading SVG:", error);
      }
    };

    fetchSvg();
  }, [src]);

  if (!svgContent) {
    return <div className={className} />; // Placeholder while loading
  }

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: svgContent }}
      role="img"
      aria-label={alt}
    />
  );
};

export default LogoSVG;
