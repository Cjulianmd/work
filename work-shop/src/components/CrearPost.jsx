import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import useForm from '../hooks/useForm'
import {USER} from '../helpers/urls'


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    `
const ContainerForm = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content:center;
    `
const Formulario = styled.form`
    display: flex;
    width: 100%;
    flex-direction:column;
    gap:2rem;`

const DivInput = styled.div`
    display:flex;
    width: 100%;
    flex-direction:column;
    gap:0;`

    const H1 = styled.h1`
    font-size: 25px;
    font-weight:600;`

const CrearPost = () => {

    const {data, handleChange} = useForm({
        url: '',
        description:''
      });

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            await axios.post(USER,data)
        } catch (err) {
            alert("Ocurrio un problema al guardar el post")

        }        
    }

  return (
    <Container>  
        <ContainerForm>
            <Formulario onSubmit={handleSubmit} >
                <H1>Crear nuevo post</H1>
                <DivInput>
                    <label htmlFor="url"> Url post</label>
                    <input style={{padding:'0.5rem'}} required  id='url' name='url' type="text" placeholder='Ingresa url de la imagen'
                        value={data.url}
                        onChange={handleChange} />
                </DivInput>
                <DivInput>
                <label htmlFor="description" style={{fontweight:'500'}}> Description post</label>
                    <input style={{padding:'0.5rem'}} id='description' name='description' type="text" placeholder='Descripcion del post'
                        value={data.description}
                        onChange={handleChange} />
                </DivInput>
                <div style={{marginTop: '5rem', width: '100%', padding:'1rem'}}>
                    <button style={{width: '100%', padding:'0.5rem', color:'#fff', backgroundColor:'#ff7674', border:'none', borderRadius:'20px', cursor:'pointer'}}>Cargar Post</button>
                </div>
            </Formulario>
        </ContainerForm>
    </Container>
  )
}

export default CrearPost