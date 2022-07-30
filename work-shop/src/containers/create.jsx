import React, { Component } from 'react'
import { TitleC, InputT1, InputP1, InputN, InputE, BtNext, TexBT} from '../style/style';

import axios from 'axios'
import { InputP2 } from './../style/style';

const baseUrl = 'https://app-liveedu.herokuapp.com/Usuarios';
class create extends Component {

   state = {
      form: {
         nombre:'',
         email:'',
         telefono:'',
         password:'',
         foto_perfil:'',
         id:''
      }
   }

   registrer = () =>{
     console.log("creaste una cuenta");
     alert("creaste una cuenta")
    
      axios.post(baseUrl ,{
         id: this.state.form.password ,
         nombre:this.state.form.nombre,
         email:this.state.form.email,
         telefono:this.state.form.telefono,
         password: this.state.form.password,
         foto_perfil: this.state.form.foto_perfil,
         seguidores: "10.7M",
         likes: "108.3M",
         post: {
            poster: "https://res.cloudinary.com/academiageek/image/upload/v1659129680/workshop/Group_11_rvmco0.png",
            decription: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ullamcorper aliquam augue fermentum, vel, risus, adipiscing.Tellus vestibulum magnis ut elit, vitae mattis sapien. Laoreet nam",
            Me_enecanta: "300K",
            comentarios: "87K",
            mensajes: "10K"
         },
         fotos: {
            foto1: "https://res.cloudinary.com/academiageek/image/upload/v1659129679/workshop/Group_15_u4mh7t.png",
            foto2: "https://res.cloudinary.com/academiageek/image/upload/v1659129679/workshop/Group_16_y794el.png",
            foto3: "https://res.cloudinary.com/academiageek/image/upload/v1659129679/workshop/Group_17_i3giam.png",
            foto4: "https://res.cloudinary.com/academiageek/image/upload/v1659129680/workshop/Group_19_kp7oqu.png"
      }}
         ) 
        .catch(error =>{
         if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
        });
   window.location.href="./Singin"
   }
  
   handleChange  = async evt => {
      await this.setState({
         form: {
            ...this.state.form,
            [evt.target.name]: evt.target.value,
            
         }
      });console.log(this.state.form)
       
   }
   

  render() {
    return (
      <div>
         <React.StrictMode>
         <TitleC>
            registrer
         </TitleC>
         <form >
            <InputN  name="nombre" placeholder="nombre" size="2em" onChange={this.handleChange} />
            <InputE name="email" placeholder="email" size="2em"  onChange={this.handleChange} />
            <InputT1 name="telefono" placeholder="phone number" size="2em" onChange={this.handleChange}/>
            <InputP1 name="password" type="password" placeholder="password" size="2em" onChange={this.handleChange} />
            <InputP2 name="foto_perfil" type="img" placeholder="url imagen de perfil" size="2em" onChange={this.handleChange} />
         </form>
         
         <BtNext onClick={() => this.registrer()}><TexBT>crear</TexBT></BtNext> 
         
         </React.StrictMode>
      </div>
    )
  }
}
export default create;