
import styled from 'styled-components';

export const InputN = styled.input.attrs(props => ({
    type: "text"
  }))`
  box-sizing: border-box;
  padding: 10px;
  position: absolute;
    width: 358px;
    height: 44px;
    left: 16px;
    top: 272px;
  border-radius: 15px;
  `;
  export const InputE = styled.input.attrs(props => ({
    type: "text"
  }))`
  box-sizing: border-box;
  padding: 10px;
  position: absolute;
    width: 358px;
    height: 44px;
    left: 16px;
    top: 326px;
  border-radius: 15px;
  `;
  
  export const TitleC = styled.div`
  /* Create new Account */


        position: absolute;
        left: 4.1%;
        right: 35.64%;
        top: 18.72%;
        bottom: 77.84%;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        /* identical to box height */

        text-align: center;
        letter-spacing: -0.3px;

        /* Dark color */

        color: #4B4B4B;

  
  `
  export const InputT1 = styled.input.attrs(({
    type: "number"
  }))`
  box-sizing: border-box;
    padding: 10px;
    position: absolute;
        width: 358px;
        height: 44px;
        left: 16px;
        top: 380px;
    border-radius: 15px;
  `;

  export const InputP1 = styled.input.attrs(props => ({
    type: "text"
  }))`
  box-sizing: border-box;
  padding: 10px;
  position: absolute;
    width: 358px;
    height: 44px;
    left: 16px;
    top: 434px;
  
  border-radius: 15px;
  `;

  export const InputT = styled.input.attrs(({
    type: "number"
  }))`
  box-sizing: border-box;
    padding: 10px;
    position: absolute;
    width: 358px;
    height: 44px;
    left: 16px;
    top: 272px;
    border-radius: 15px;
  `;
  export const InputP = styled.input.attrs(props => ({
    type: "text"
  }))`
  box-sizing: border-box;
  padding: 10px;
  position: absolute;
    width: 358px;
    height: 44px;
    left: 16px;
    top: 326px;
  border-radius: 15px;
  `;

  export const Texts = styled.div`
/* D’ont have account ? Sign up */


position: absolute;
left: 5.38%;
right: 25.38%;
top: 93.6%;
bottom: 4.38%;

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
/* identical to box height */

text-align: center;


background-color: blue; ;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;

`

export const BtNext = styled.div`

/* Rectangle 1 */


position: absolute;
left: 4.1%;
right: 4.1%;
top: 87.68%;
bottom: 7.11%;

/* Main color (gradient) */

background-color: pink; 
border-radius: 15px;
`
export const TexBT = styled.div`
/* Next */


position: absolute;
left: 46.15%;
right: 45.9%;
top: 25.22%;
bottom: 8.77%;

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
/* identical to box height */

text-align: center;
letter-spacing: -0.3px;

/* Dark color */

color: #4B4B4B;

`
export const InputP2 = styled.input.attrs(props => ({
    type: "text"
  }))`
  box-sizing: border-box;
  padding: 10px;
  position: absolute;
    width: 358px;
    height: 44px;
    left: 16px;
    top: 490px;
  
  border-radius: 15px;
  `;
export const DivContainMenuApp = styled.div`
    display: flex;
    position: fixed;
    justify-content: space-around;
    align-items: center;
    bottom: 0;
    width: 100vw;
    height: 57px;
    background-color: #FF7674;
`

export const DivContainHead = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 60px;
`

export const DivContainHistories = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 100px;
`

export const PForText = styled.p`
    font-size: 12px;
    font-family: 'Balsamiq Sans', cursive;
`

export const DivHistories = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`

export const DivCardsPost = styled.div`
    display: flex;
    width: 390px;
    height: 558px;
    justify-content: center;
    align-items: flex-start;
`

export const DivCardsIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    margin-top: 3px
`

export const DivCardsIcons2 = styled.div`
    display: flex;
    justify-content: space-between;
    width: 120px
`

export const DivStyleCard = styled.div`
    display: flex;
    background-color: white;
    flex-flow: column;
    border-radius: 10px;
`

export const DivPerfil = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Balsamiq Sans', cursive;
    margin-left: 5px
`

export const ImgStyle = styled.img`
    border-radius: 10px;
    margin-top: 3px
`

