import React, {Component} from "react";
import styled from "styled-components";
import {Link} from "gatsby"
class Project extends Component {
    render() {
      const {project} = this.props
      const linkTo =`/projects/${project.id}/`
        return (
          <Link to={linkTo}>
          <Box>
            <Img src={project.img} alt={project.name}/>
            <Name>{project.name}</Name>
            <div style={{fontSize: '0.8em', color: '#778899'}}>{project.mainSolver}</div>
        </Box>
        </Link>
);
}}
export default Project;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30em;
  min-width: 18em;
  min-height: 18em;
  margin: 1em;
  padding: 1em;
  line-height: 1.6em;
`;

const Name = styled.h3`
    color: #46ACC2;
    text-transform: uppercase;
    margin-top: 1em;
    border-bottom: 0.08em solid rgb(229, 229, 229);
 `

  const Img = styled.img`
    max-width: 500px;
 `
