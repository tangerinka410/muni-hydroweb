import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import Layout from "../components/layout"
import HistoryBox from "../components/HistoryBox"
import {history} from "../../content/history"
import B_Zelinka from "../../static/images/history/B_Zelinka.jpg"
import F_Kubicek from "../../static/images/history/F_Kubicek.jpg"
import S_Hrabe from "../../static/images/history/S_Hrabe.jpg"
import M_Losos from "../../static/images/history/M_Losos.jpg"
const History = () => {
    return (<Layout>
    <Container>
            <HistoryBox history={history.hrabe} img={S_Hrabe}/>
            <HistoryBox history={history.zelinka}  img={B_Zelinka} reverse/>
            <HistoryBox history={history.losos}  img={M_Losos}/>
            <HistoryBox history={history.kubicek} img={F_Kubicek} reverse/>
            <HistoryBox history={history.opravilova} reverse/>
    </Container></Layout>
    );
};

History.propTypes = {

};

export default History;


const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    padding-top: 50px;
    @media (max-width: 800px) {
      width: 100%;
    }
`;
