import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import StaffBox from "../components/staffBox";
import H2 from "../components/atoms/H2";
import StyledLink from "../components/atoms/StyledLink";

export default ({ pageContext: { person } }) => {
  const research = person.research.map((i, index) => (
    <li key={index}>{i}</li>
  ));
  return (
    <Layout>
      <NarrowContainer>
        <H2>{person.name}</H2>
        <StaffBox personInfo={person} />
        <div>{person.description}</div>
        <div style={{ marginTop: "1em" }}>Výzkummá témata: </div>
        <div>{research}</div>
        <StyledLink to={person.supervisor ? "/students/" : "/staff/"} underline="underline">
          <i className="fa fa-arrow-left" />
        </StyledLink>
      </NarrowContainer>
    </Layout>
  );
};

const NarrowContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  @media (max-width: ${props => props.theme.mediumDevice}) {
    width: 100%;
  }
`;
