import React, { useEffect } from "react";

const TwitterTimeline = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";

    // Append the script to the body to load it
    document.body.appendChild(script);

    return () => {
      // Cleanup script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <a
        className="twitter-timeline"
        href="https://twitter.com/cdc_iitdh?ref_src=twsrc%5Etfw"
      >
        Tweets by cdc_iitdh
      </a>
    </>
  );
};

export default TwitterTimeline;
