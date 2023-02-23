import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="130" cy="130" r="130" />
    <rect x="109" y="278" rx="0" ry="0" width="0" height="16" />
    <rect x="0" y="280" rx="0" ry="0" width="280" height="26" />
    <rect x="118" y="400" rx="16" ry="16" width="164" height="37" />
    <rect x="0" y="315" rx="18" ry="18" width="280" height="67" />
    <rect x="0" y="400" rx="0" ry="0" width="98" height="37" />
  </ContentLoader>
);

export default Skeleton;
