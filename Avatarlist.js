import React from 'react';

const Avatarlist = (props) => {
    return(
        <div className="avatarstyle ma4 bg-light-pink dib pd3 tc grow "> 
        <img src= {'https://joeschmoe.io/api/v1/${props.name} '} alt="avatar"></img>

         <h1>{props.name}</h1>
   
          <p>{props.work}</p>
          </div>
    )


}
export default Avatarlist;