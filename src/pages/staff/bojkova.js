import React, {Component} from "react";
import styled from "styled-components";
import {Link} from "gatsby"

import Layout from "../../components/layout";
import StaffDetail from "../../components/staffDetail"
import H2 from "../../components/atoms/h2";
import {staff} from "../staff"

const Bojkova = () => {
    return (
         <StaffDetail personInfo={staff[0]} />
    );
};

export default Bojkova;

//todo: create this page dynamically