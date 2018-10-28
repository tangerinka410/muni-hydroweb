import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import StaffBox from '../components/StaffBox'
import StudentsSection from '../components/StudentsSection'

export default ({ pageContext: { phdStudentsData, studentsData } }) => (
    <Layout>
      <Container>
        {phdStudentsData.map(student => <StaffBox personInfo={student} key={student.id} isStudent={true}/>)}
        <StudentsSection type="Mgr. Students" students={studentsData.mgrStudents}/>
        <StudentsSection type="Bc. Students" students={studentsData.bcStudents}/>
        <StudentsSection type="Absolvents" students={studentsData.absolvents}/>
      </Container>
    </Layout>
  )

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
