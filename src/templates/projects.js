import React from 'react'
import styled from 'styled-components'

import Project from '../components/project'
import Layout from '../components/layout'

export default ({ pageContext: { projectsData } }) => (
  <Layout>
    <Container>
      {projectsData.map(i => <Project project={i} key={i.id}/>)}
    </Container>
  </Layout>
)

 const Container = styled.div`
 display: grid;
 grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
 justify-content: center;	
`
