import React from "react";
import Content from "../components/Content";
import {
  AboutUs,
  OurMission,
  OurPlatform,
  JoinUs,
} from "../data/Page_content/about";
import TestmonialCard from "../components/TestmonialCard";
import { testmonials } from "../data/Page_content/testmonials";
function About(props) {
  return (
    <>
      <div className="flex flex-col gap-y-6 | mx-auto px-4 py-16 sm:px-6 lg:px-12 |  max-w-7xl">
        <Content
          title={AboutUs.title}
          subTitle={AboutUs.subTitle}
          content={AboutUs.content}
        />

        <Content
          title={OurMission.title}
          subTitle={OurMission.subTitle}
          content={OurMission.content}
        />

        <Content
          title={OurPlatform.title}
          subTitle={OurPlatform.subTitle}
          contentList={OurPlatform.contentList}
        />

        <Content
          title={JoinUs.title}
          subTitle={JoinUs.subTitle}
          stats={JoinUs.stats}
        />
      </div>
      {/* Featured Job */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-12">
        <h2 className="text-3xl uppercase">What Our Users Say</h2>
      </div>
      <div className="flex flex-col md:flex-row |  mx-auto px-4 py-16 sm:px-6 lg:px-12 |  max-w-7xl | gap-x-6">
        {testmonials.map((item) => (
          <TestmonialCard review={item} />
        ))}
      </div>
    </>
  );
}

export default About;
