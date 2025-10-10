import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-4">
      <p className="px-4 py-2 text-base-100 bg-secondary">Latest</p>
      <Marquee pauseOnHover={true} speed={75}>
        <p className="font-bold mr-4">
          Match Highlights | Ban 3-4 Hkc Hong Kong,china destroys Bangladesh in
          Afc Asian Cup Qualifiers as Raphael scores hat-trick, Bd fans are
          leaving the stadium due to their dissapointing loss.
        </p>
        <p className="font-bold mr-4">
          Over-confident Bangladesh got thrashed by Afghans in easy opener as
          Afghan prove themselves as the second best team in the solar system.
        </p>
        <p className="font-bold mr-4">
          Rumours says that, 'Dr. Yunus is looking for a safe exit as they are
          gambling with the country and with country's people. Also saying that
          the soul's of apa are still there.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
