import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import Layout from "../components/layout"

const History = () => {
    return (<Layout>
    <Container>
      <h1>Historie</h1>
            <p>Tady bude něco o historii</p>
    </Container></Layout>
    );
};

History.propTypes = {

};

export default History;


const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    @media (max-width: 800px) {
      width: 100%;
    }
`;

