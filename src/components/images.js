import React, {Component} from "react";
import styled from "styled-components";
import hp01 from "../images/homepage/hp01.jpg";
import hp02 from "../images/homepage/hp02.jpg";
import hp03 from "../images/homepage/hp03.jpg";
import hp04 from "../images/homepage/hp04.jpg";

const imgs = [hp01, hp02, hp03, hp04] //do props

class Images extends Component {
    state = {imgIndex: 0}
    componentDidMount() {
         setTimeout(()=> this.pictureChanger(), 3000)
         console.log('did mount', this.state )
    }

    componentDidUpdate() {
         setTimeout(()=> this.pictureChanger(), 3000)
         console.log('did update ', this.state )
    }

    pictureChanger = () => {
        if (this.state.imgIndex<imgs.length-1) {
            this.setState((prevState) => ({imgIndex: prevState.imgIndex + 1}))
        } else {
            this.setState({imgIndex: 0})
        }
    }

    render() {
        const dots = imgs.map((i, index) => <RoundDot key={i} active={this.state.imgIndex === index}>{false && <InnerDot key={i} active={this.state.imgIndex === index}/>}</RoundDot>)
        return (
        <ImgWrapper>
            <Img src={imgs[this.state.imgIndex]} />
            {dots}
        </ImgWrapper>

);
}}
export default Images;

  const Img = styled.img`
   object-fit: none;
   height: 450px;
   width: 100%;
 `
  const ImgWrapper = styled.div`
  text-align: center;
  background-color: white;
 `

   const RoundDot = styled.div`
  height: 20px;
  width: 20px;
  background-color:  ${props => props.active ? props.theme.secondary : 'lightgrey'};
  border:  ${props => props.active ? `1px solid ${props.active}` : '1px solid lightgrey'};
  border-radius: 50%;
  display: inline-block;
  margin: 1px
 `
   const InnerDot = styled.span`
  height: 10px;
  width: 10px;
  background-color:  ${props => props.active ? 'white' : 'lightgrey'};
  border-radius: 50%;
  display: inline-block;
 `