import React, {Component} from "react";
import styled from "styled-components";
import Layout from "../components/layout"
import StaffBox from "../components/staffBox"
import StudentsSection from "../components/studentsSection"

import nophoto from './images/staff/nophoto.png'

const hrivovaInfo = {
    id: "hrivova",
    name: "Dana Hřívová",
    thesis: "Taxocenózy plazivek (Copepoda: Harpacticoida) na prameništních slatiništích Západních Karpat",
    supervisor: "Marie Zhai",
    email: "323984@mail.muni.cz",
    research: ["V době studia se věnoval ornitologii a chiropterologii",
     "Do roku 1990 pracoval v resortním ústavu Ministerstva dopravy, kde se věnoval se toxikologii, ochraně povrchových a podzemních vod a čistírenství",
     "Po návratu na MU se zpočátku věnoval ekotoxikologii a detekci znečištění prostředí perzistentními polutanty." ,
     "Specialista na řád pošvatky (Plecoptera), bioindikace stavu tekoucích vod (habilitace v roce 1999).",
     "Nyní se především věnuje ekologii tekoucích vod, hyporealu, procesům na a v říčním dně a obecným problémům populací a společenstev vodních bezobratlých."],
    img: nophoto,
    phoneNumber: "+420111222333",
    researchgate: 'https://www.researchgate.net/profile/Jan_Helesic2',
    is: 'https://is.muni.cz/osoba/580'
}

const absolvents = [{name: 'Mgr. Student', link: "https://is.muni.cz"}, {name: 'Mgr. Student2', link: "https://is.muni.cz"}]
const mgrStudents = [{name: 'Bc. Student', link: "https://is.muni.cz"}, {name: 'Bc. Student2', link: "https://is.muni.cz"}]
const bcStudents = [{name: 'Student', link: "https://is.muni.cz"}, {name: 'Student2', link: "https//is.muni.cz"}]

class Students extends Component {
    render() {
        return (
            <Layout>
                <StaffBox personInfo={hrivovaInfo} isStudent={true}/>
                <StaffBox personInfo={hrivovaInfo} isStudent={true}/>
                <StudentsSection type="Mgr. Students" students={mgrStudents}/>
                <StudentsSection type="Bc. Students" students={bcStudents}/>
                <StudentsSection type="Absolvents" students={absolvents}/>
            </Layout>
        );
}}

export default Students;

