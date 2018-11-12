import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import StaffBox from '../components/staffBox'

export default ({ pageContext: { staffData } }) => (
    <Layout>
      <Container>
        {staffData.map(person => <StaffBox personInfo={person} key={person.id}/>)}
      </Container>
    </Layout>
  )

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
