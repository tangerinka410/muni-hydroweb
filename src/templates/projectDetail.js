import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Layout from "../components/layout";
import H2 from "../components/atoms/h2";


const Section = ({ header, children }) => (
    <div>
      <div>
        <b>{header} </b>
      </div>
      <div>{children}</div>
    </div>
  );

export default ({ pageContext: { project } }) => (
    <Layout>
      <NarrowContainer>
        <H2>{project.name}</H2>
        <div>{project.nameEng}</div>
        {project.finance && <Section header="Financováno: ">{project.finance}</Section>}
        {project.period && <Section header="Doba trvání: ">{project.period}</Section>}
        {project.solvers && <Section header="Řešitelský tým: ">{project.solvers}</Section>}
        {project.cooperators && <Section header="Spolupracovníci: ">{project.cooperators}</Section>}
        {project.anotation && <Section header="Anotace: ">{project.anotation}</Section>}
        {project.goals && <Section header="Cíl projektu: ">{project.goals}</Section>}
        <Img src={project.img} />
        <StyledLink to="/projects/">
          <i className="fa fa-arrow-left" />
        </StyledLink>
      </NarrowContainer>
    </Layout>
);

//todo: similar with staff
const StyledLink = styled(Link)`
  color: ${props => props.theme.grey};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    color: ${props => props.theme.secondary};
  }
`;

const NarrowContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  @media (max-width: ${props => props.theme.mediumDevice}) {
    width: 100%;
  }
`;

const Img = styled.img`
  max-width: 100%;
`;
