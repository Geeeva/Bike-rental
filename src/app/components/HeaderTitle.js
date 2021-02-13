import React from "react";

const HeaderTitle = (props) => {
  return (
    <div>
      <section className="s-header-title">
        <div className="container">
          <h1>{props.title}</h1>
          <ul className="breadcrambs">
            <li>
              <a href="/">Home</a>
            </li>
            <li>{props.title}</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default HeaderTitle;
