import React, {Component} from "react";
import styled from "styled-components";
import {Link} from "gatsby"

import Layout from "../../components/layout";
import H2 from "../../components/atoms/h2";
import {projects} from "../projects"

const Section = ({ header, children }) => (
    <div><div><b>{header} </b></div> <div>{children}</div></div>
  );

const Project1 = () => {
    const projectData = projects[0]
    return (
    <Layout>
        <NarrowContainer>
            <H2>{projectData.name}</H2>
            <div>{projectData.nameEng}</div>
            <Section header='Financováno: '>{projectData.finance}</Section>
            <Section header='Doba trvání: '>{projectData.period}</Section>
            <Section header='Řešitelský tým: '>{projectData.solvers}</Section>
            <Section header='Spolupracovníci: '>{projectData.cooperators}</Section>
            <Section header='Anotace: '>{projectData.goals}</Section>
            <Section header='Cíl projektu: '>{projectData.finance}</Section>
            <Img src={projectData.img} />
            <StyledLink to="/projects/"><i className="fa fa-arrow-left"></i></StyledLink>
        </NarrowContainer>
    </Layout>
    );
};

export default Project1;

//todo: create this page dynamically

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
`
