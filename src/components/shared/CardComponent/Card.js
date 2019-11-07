import React from "react";

import "./card.css";

import CardImg from "./CardImg";
import CardTitle from "./CardTitle";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";

export default function Card({data}) {
  if(!data) return <div>loading</div>
  return (
    <div className="card">
      <CardImg url={data.url} explanation={data.explanation} media_type={data.media_type}/>
      <CardTitle title={data.title}/>
      <CardContent explanation={data.explanation}/>
      <CardFooter copyright={data.copyright} date={data.date}/>
    </div>
  );
}
