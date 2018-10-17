import React from "react"
import PropTypes from 'prop-types';
import styled from "styled-components";
import Layout from "../components/layout"

const links = [
   {name: "Česká limnologická společnost", link: "http://www.limnospol.cz"},
]

const Links = props => {
    const linksList = links.map(i => {
        return <li key={i.name}><A href={i.link}>{i.name}</A></li>;
    })
    return (<Layout>
    <Container>
        <h1> Odkazy </h1>
    {linksList}
    </Container></Layout>
    );
};

Links.propTypes = {

};

export default Links;


const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    @media (max-width: 800px) {
      width: 100%;
    }
`;

const A = styled.a`
        color: #333;
`;