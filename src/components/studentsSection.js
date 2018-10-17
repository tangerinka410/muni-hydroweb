import React, {Component} from "react";
import styled from "styled-components";

import Link from "../components/atoms/Link";
import H2 from "../components/atoms/h2";


const StudentsSection = ({students, type}) => {
    const studentsList = students.map(i => {
            return <li><Link key={i.name} href={i.link} >{i.name}</Link></li>;
          })
    return (
      <>
        <H2>{type}</H2>
        <div><ul>{studentsList}</ul></div>
      </>
    );
};

export default StudentsSection;