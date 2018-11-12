import React from "react";
import styled from "styled-components";

import Link from "./atoms/Link";
import H2 from "./atoms/H2";

const StudentsSection = ({ students, type }) => (
    <Section>
      <H2>{type}</H2>
      <div><ul>{students.map(i => <li><Link key={i.name} href={i.link}>{i.name}</Link></li>)}</ul></div>
    </Section>
  )

export default StudentsSection;

const Section = styled.div`
  padding: 0 2em;
  @media (max-width: 800px) {
    padding: 0;
  }
`;