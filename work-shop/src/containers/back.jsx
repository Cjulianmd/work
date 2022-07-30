import React, { Component } from 'react'
import {  InputT, InputP, Texts, BtNext, TexBT} from '../style/style';
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import Cokkie  from 'universal-cookie';
const cookies = new Cokkie()

let baseUrl = 'https://app-liveedu.herokuapp.com/Usuarios/'
//https://app.getpostman.com/join-team?invite_code=950e74ddfd453ab2408546f1b16676ec
class back extends Component {
   state = {
      form: {
         telefono:'',
         password:''
      }
   }
   handleChange  = async evt => {
      await this.setState({
         form: {
            ...this.state.form,
            [evt.target.name]: evt.target.value
         }
      });console.log(this.state.form)
      
   }
  
   iniciarsesion = async () =>{console.log(this.state.form.telefono,this.state.form.password)
       await axios.get(baseUrl , {params: {telefono:this.state.form.telefono,password: this.state.form.password,}})
         
         .then(response =>{
            console.log(response.data.id)
            return response.data;
         })
         .then(response=>{
            if(response.length>0){
               
               console.log("einiciaste seccion")
               let respuesta = response[0];
               cookies.set('id-3', respuesta.id, {phat: "/"});
               window.location.href="./home";
               
            }else{
               alert('ni escribir un usuario sabes que haces con tu vida? usuario o contraseña incorrectos')
               window.location.href="./Singin";
            }
         })
         .catch(error =>{
            console.log(error)

         })
   }
//componentDidMount(){if(cookies.get('nombre')){window.location.href="./home";} }
  render() {
    return (
      <div>
         <React.StrictMode>
         <form>
            <InputT name="telefono" placeholder="phone number" size="2em" onChange={this.handleChange} />
            <InputP name="password" placeholder="Password" size="2em" onChange={this.handleChange}/>
         </form>
         
            <NavLink to="/" >
            <BtNext onClick={()=> this.iniciarsesion() }><TexBT>iniciarsesion</TexBT></BtNext>
            </NavLink>
         <NavLink  to="/registrer" >
         <Texts >¿no tienes cuenta? da clik aqui </Texts> 
         </NavLink>
         
         </React.StrictMode>
      </div>
    )
  }
}
export default back;
//to="/veryfication"