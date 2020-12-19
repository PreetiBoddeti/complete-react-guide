import React, { useEffect , useRef} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  const toggleBtn = useRef(null);
  

    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      // setTimeout(() => {
      //   alert('Save date to cloud')
      // },1000);
      toggleBtn.current.click();
      return (()=> {console.log('[cockpit.js] cleanup work in useEffect');})
    },[]);

    useEffect(()=>{
      console.log('[Cockpit.js] 2nd useEffect');
      return () =>{
        console.log('[Cockpit.js] cleanup work in  2nd useEffect ');
      }
    })

    let assignedClasses = [];
    let btnClass = "";
    if(props.showPersons){
        btnClass = classes.Red;
    }
    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold); 
    }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <h2>Hi, Welcome to the course ReactJs</h2>
            <p className={assignedClasses.join(" ")}>
                    This is really working...!!!
            </p>
            <button ref ={toggleBtn} className={btnClass} onClick={props.clicked}>
                        Toggle Persons
            </button>
            <p></p>
            <button onClick = {props.logIn}>Log In</button>
        </div>
        );
};

export default React.memo(cockpit);
