import React from "react";
import styled from "styled-components";

const Span = styled.span`
   color:var(--primary);
`;

export default function CardFooter({ copyright, date }) {
  return (
    <div className="card-footer">
      <span className="h3">{copyright}</span>
      <Span className="h3">{date}</Span>
      {/* <span className="h3">{date}</span> */}
    </div>
  );
}
