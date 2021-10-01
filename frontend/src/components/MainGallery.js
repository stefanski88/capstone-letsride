import styled from 'styled-components/macro'

export default styled.main`

  margin: 20px 20px;
  
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas: 
    ". ."
    ". ."
    ". .";


  overflow-y: scroll;

  
`