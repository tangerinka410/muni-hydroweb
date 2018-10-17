import React, {Component} from "react";
import {Link} from "gatsby"
import styled, { withTheme } from 'styled-components';
import Layout from "./layout";
import StaffBox from "./staffBox"
import H2 from "./atoms/h2";
import StyledLink from "./atoms/styledLink"

class StaffDetail extends Component {
    render() {

        const {personInfo} = this.props
        const research = personInfo.research.map((i, index) => <li key={index}>{i}</li>)
        return (
        <Layout>
            <NarrowContainer>
                <H2>{personInfo.name}</H2>
                <StaffBox personInfo={personInfo} />
                <div>{personInfo.description}</div>
                <div style={{marginTop: '1em'}}>Výzkummá témata: </div>
                <div>{research}</div>
                <StyledLink to="/staff/" underline><i className="fa fa-arrow-left"></i></StyledLink>
            </NarrowContainer>
        </Layout>
        );
    }
}

export default withTheme(StaffDetail);

// const StyledLink = styled(Link)`
//   color: ${props => props.theme.grey};
//   text-decoration: none;
//   &:hover {
//     text-decoration: underline;
//   }
//   &:focus {
//     color: ${props => props.theme.secondary};
//   }
// `;

const NarrowContainer = styled.div`
    width: 60%;
    margin: 0 auto;
    @media (max-width: ${props => props.theme.mediumDevice}) {
        width: 100%;
    }
`;