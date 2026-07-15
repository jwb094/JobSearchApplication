import React from "react";

function Content(props) {
  return (
    <section data-template="Content" data-view="default" className="Content">
      <h2>{props.title}</h2>
      <h4>{props.subTitle}</h4>
      <p>{props.content}</p>
      {/* If contentList has stats */}
      {props.contentList &&
        props.contentList.map((item) => (
          <div key={item.id}>
            <h6>{item.title}</h6>
            <p>{item.content}</p>
          </div>
        ))}
      {/* If content has stats */}
      {props.stats &&
        props.stats.map((item) => (
          <div key={item.id}>
            <h6>{item.title}</h6>
            <p>{item.value}</p>
            <p>{item.content}</p>
          </div>
        ))}
    </section>
  );
}

export default Content;
