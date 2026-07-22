import React from "react";

function Content(props) {
  return (
    <section data-template="Content" data-view="default" className="Content">
      <div className="flex flex-col gap-y-6">
      <h2 className="text-2xl">{props.title}</h2>
      <h4 className="text-xl">{props.subTitle}</h4>
      <p className="text-lg">{props.content}</p>
      </div>
      {/* If contentList has stats */}
      {props.contentList &&
        props.contentList.map((item) => (
          <div key={item.id} className="flex flex-col gap-y-6 mb-6">
            <h6 className="text-lg font-semibold">{item.title}</h6>
            <p className="text-md">{item.content}</p>
          </div>
        ))}
      {/* If content has stats */}
      {props.stats &&
        props.stats.map((item) => (
          <div key={item.id} className="flex flex-col gap-y-4 mb-6">
            <h6 className="text-lg">{item.title}</h6>
            <p className="text-xl">{item.value}</p>
            <p className="text-md">{item.content}</p>
          </div>
        ))}
    </section>
  );
}

export default Content;
