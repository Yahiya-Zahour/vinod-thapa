import React from 'react';

const Service = (props) => {
    console.log(props)
    return (
        <div>
            <h1>you {props.name } {props.age}</h1>
            {props.children}
          <h1><img src="Assets/photo.jpg" alt="" width="400px" height="400px"/></h1>  

        </div>
    );
};

export default Service;