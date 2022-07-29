import React from 'react';
import { DivContainHistories, DivHistories, PForText } from '../style/style';
import image from '../img/historia1.png';
import historia1 from '../img/historias2.png';
import historia2 from '../img/historias3.png';
import historia3 from '../img/historias4.png';
import historia4 from '../img/historias5.png';

const Historys = () => {
    return (
        <DivContainHistories>
            <DivHistories>
                <img src={image} alt="mis hostorias"/>
                <PForText>Your Story</PForText>
            </DivHistories>
            <DivHistories>
                <img src={historia1} alt="historias de alguien" />
                <PForText>Jennie Kim</PForText>
            </DivHistories>
            <DivHistories>
                <img src={historia2} alt="historias de alguien" />
                <PForText>Roseanne Park</PForText>
            </DivHistories>
            <DivHistories>
                <img src={historia3} alt="historias de alguien" />
                <PForText>kim Ji-soo</PForText>
            </DivHistories>
            <DivHistories>
                <img src={historia4} alt="historias de alguien" />
                <PForText>Lalisa Manob</PForText>
            </DivHistories>
        </DivContainHistories>
    );
}

export default Historys;
