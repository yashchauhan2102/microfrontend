import React, { useRef, useEffect } from "react";
import { mount as mountMarketing } from "marketing/MarketingApp";

const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mountMarketing(ref.current);
  }, []);

  return <div ref={ref}></div>;
};

export default MarketingApp;
