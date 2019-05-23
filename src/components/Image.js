import React from "react";

export default function Image(props) {
  console.log("hhhijjio", props.props);
  return (
    <div className="containe">
      <img className="image" src={props.props.selectedFile} alt="Snow" />
      <h2 className="top">{props.props.data.header}</h2>
      <h2 className="bottom">{props.props.data.footer}</h2>
      <h2 className="center">{props.props.data.Author}</h2>
    </div>
  );
}
