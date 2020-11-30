import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';

//--------------functional 


    class Avatar extends Component{
       constructor(){
           super();
           this.state= {
               name: "Welcome to Avatar World"
           }

       }
       nameChange(){
           this.setState({
              name:"Subscribe to my channel"
           })
       }
        render(){
            const avatarlistarray=[
                {
                    id:1,
                    name:'jugdeep',
                    work:'web developer'
                },
                {
                    id:2,
                    name:'lovepreet',
                    work:'web developer'
                },
                {
                    id:3,
                    name:'mani',
                    work:'web developer'
                },
                {
                    id:4,
                    name:'deep',
                    work:'web developer'
                }
            ]
            const arrayavatarcard = avatarlistarray.map( (avatarcard, i) =>{
                return <Avatarlist key={i} id={avatarlistarray[i].name} 
                name={avatarlistarray[i].name} 
                work={avatarlistarray[i].work}/>  
            }) 
            
            return(
                <div>
                   <h1>{this.state.name}</h1> 
                   {arrayavatarcard}
               
                   
                  <br></br> <button onClick={() => this.nameChange()}>Subscribe</button>
                   </div>
           
                  
           
               )
        }
    }

              
                   


export default Avatar;