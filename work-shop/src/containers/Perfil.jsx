import React from 'react';
import styled from 'styled-components';
import MenuApp from '../components/MenuApp';

const InfoPerfil = styled.div`
display: flex;
justify-content: space-between;
width: 80%;
margin: 0 auto;`

const Avatar = styled.div`
margin-top: -2rem;
`

const Divflex =  styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-weight: 500;
`

const ContainerBtn = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap:1rem;
margin-top: 0.5rem;`

const Buttons = styled.button`
padding: 0.2rem 3.5rem;
background-color: #ff7674;
border: none;
border-radius:5px;
cursor: pointer;
color: #fff;
font-weight: bold;`

const DivFotos = styled.div`
background-color:#fff;
border-radius:15px;
margin-top: 2rem;
padding:1rem;`

const ContainerList = styled.ul`
display: flex;
justify-content: center;
gap: 2rem;
font-weight: 500;

& li {
    list-style-type: none;
}
`
const Gallery = styled.ul`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(150px,1fr));
gap: 1rem;
& li{
    list-style-type: none;
}
`

const Perfil = () => {
    return (
        <div>
            <MenuApp />
            <div>
                <img src="https://res.cloudinary.com/academiageek/image/upload/v1659129679/workshop/Group_14_j6s6zp.png" alt="" />
            </div>
            <div>
                <InfoPerfil>
                    <Divflex className="followers">
                        <span>10.7 M</span>
                        <span>Followers</span>
                    </Divflex>

                    <Avatar className="avatar">
                        <img src="https://res.cloudinary.com/academiageek/image/upload/v1659129679/workshop/Group_2_lbti6d.png" alt="" />
                    </Avatar>

                    <Divflex className="likes">
                        <span>108.3 M</span>
                        <span>Likes</span>
                    </Divflex>
                </InfoPerfil>

                <Divflex style={{lineHeight: '1.5'}}>
                    <span>Jennie Kim</span>
                    <span>J. Hello Guys</span>
                    <span>Follow me and like my post</span>
                </Divflex>

                <ContainerBtn>
                    <Buttons>Follow</Buttons>
                    <Buttons>Messages</Buttons>
                </ContainerBtn>
            </div>
            <DivFotos>
                <ContainerList style={{marginBottom:'1rem'}}>
                    <li>Photos</li>
                    <li>Videos</li>
                    <li>Album</li>
                    <li>Tag</li>
                </ContainerList>
                <Gallery>
                    <li><img src="https://res.cloudinary.com/academiageek/image/upload/v1659129679/workshop/Group_15_u4mh7t.png" alt="" /></li>

                    <li><img src="https://res.cloudinary.com/academiageek/image/upload/v1659129679/workshop/Group_16_y794el.png" alt="" /></li>
                    
                    <li><img src="https://res.cloudinary.com/academiageek/image/upload/v1659129679/workshop/Group_17_i3giam.png" alt="" /></li>
                    
                    <li><img src="https://res.cloudinary.com/academiageek/image/upload/v1659129680/workshop/Group_19_kp7oqu.png" alt="" /></li>
                </Gallery>
            </DivFotos>
        </div>
    );
}

export default Perfil;
