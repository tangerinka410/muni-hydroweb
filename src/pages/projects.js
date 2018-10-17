import React, {Component} from 'react'
import styled from 'styled-components'

import img2 from './images/img2.jpg'
import Project from '../components/project'
import Layout from '../components/layout'

export const projects = [
  {
  id: 'project1',
  name:
    'Koexistence vodních bezobratlých na prameništních slatiništích: úloha abiotické heterogenity a biotických interakcí na regionální a lokální škále',
  nameEng: 'The coexistence of aquatic invertebrates in spring fens: the role of abiotic heterogeneity and biotic interactions at regional and local scale',
  mainSolver: 'Michal Horsák',
  solvers: 'Michal Horsák, Jindřiška Bojková, Vít Syrovátka, Marie Zhai, Jana Schenková, Vendula Polášková, Vanda Šorfová',
  cooperators: 'Dana Hřívová, David Výravský, Jan Šupina',
  finance: 'Grantová agentura České republiky, 16-03881S',
  period: '2016-2018',
  img: img2,
  anotation: 'Odhalení způsobu koexistence druhů je zásadní pro pochopení zákonitostí změn biodiverzity. Izolovaná praměništní slatiniště jsou obývaná druhově bohatými společenstvy bezobratlých, včetně mnoha stanovištních specialistů a generalistů, pro které jsou mechanismy jejich koexistence stále živě diskutovány. Jelikož prameniště představují relativně stabilní prostředí, předpokládá se, že jsou zde žijící společenstva strukturována převážně biotickými interakcemi. Avšak kolísání v čase, prostorová variabilita na malé škále a vliv biotických disturbancí jsou na prameništích téměř neznámé, ačkoli mohou mít pro koexistenci druhů důležitou roli. Poprvé se tak pokoušíme nalézt přímou souvislost změn v druhové skladbě vodních bezobratlých na prameništích a v zastoupení specialistů a generalistů (i) s časovými změnami podmínek prostředí a (ii) s biotickými disturbancemi způsobenými predátory a dominantním všežravcem s predačním chováním. Analyzujeme změny na regionální škále i v rámci lokalit a provádíme experimenty jak v terénu, tak v laboratoři.',
  goals: 'Prostudovat úlohu stability prostředí, prostorové heterogenity na lokalitě a biotických interakcí pro koexistenci vodních bezobratlých na prameništích, s využitím korelativních studií na regionální a lokální škále a experimentů studií v terénu i laboratoři',
},
{
  id: 'project2',
  name: 'Dlouhodobé změny',
  mainSolver: '',
  img: img2,
},
{
  id: 'project3',
  name: 'Biosucho',
  mainSolver: '',
  img: img2,
},
{
  id: 'project4',
  name: 'Silva Gabreta',
  mainSolver: 'Biosucho',
  img: img2,
},
{
  id: 'project5',
  name: 'Výsypky',
  mainSolver: 'Biosucho',
  img: img2,
},
{
  id: 'project6',
  name: 'Polní rozlivy',
  mainSolver: 'Biosucho',
  img: img2,
},
]

class Projects extends Component {
  render() {
    const projectsList = projects.map(i => <Project project={i} key={i.id}/>)
    return (
      <Layout>
          <Container>
            {projectsList}
          </Container>
      </Layout>
    )
  }
}

export default Projects

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
`
