import React, {Component} from "react";
import styled from "styled-components";
import researchgate from "../images/social-researchgate.png";
import email from "../images/social-email.png";
import is from "../images/social-is.png";
class PersonBox extends Component {

    render() {
      const {img, personInfo} = this.props

        return (
        <Box>
            <BoxPart>
                <BoxSubPart><Img src={img} alt={personInfo.name}/></BoxSubPart>
                <BoxSubPart style={{paddingTop: '1em'}}>
                    <a href={`mailto:${personInfo.email}` || '#'}><img src={email}/></a>
                    <a href={personInfo.researchgate || '#'}><img src={researchgate}/></a>
                    <a href={personInfo.is || '#'}><img src={is}/></a>
                </BoxSubPart>
            </BoxPart>
            <BoxPart >
                <Name>{personInfo.name}
                </Name>
                <div style={{textAlign: 'center'}}><b>Práce: </b>{personInfo.thesis}</div>
                <div style={{textAlign: 'center'}}>
                    <b>Školitel: </b>{personInfo.supervisor}
                </div>
            </BoxPart>

        </Box>
);
}}
export default PersonBox;


const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  min-width: 300px;
  min-height: 300px;
  padding: 0.4em;
  line-height: 1.6em;
  @media (max-width: 800px) {
    min-width: 200px;
    min-height: 200px;
  }
`;

const Name = styled.h3`
    display: flex;
    color: #46ACC2;
    text-transform: uppercase;
    justify-content: center;
    margin-top: 0;
    border-bottom: 0.08em solid rgb(229, 229, 229);
 `

const BoxPart = styled.div`
    padding: 1em;
 `

 const BoxSubPart = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
 `

const Img = styled.img`
  max-height: 200px
`;