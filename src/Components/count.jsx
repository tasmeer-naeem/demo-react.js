import React,{useState} from "react";
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

var useStyles = makeStyles({                //internal css
    root: {
        minWidth: 200,
        width:600,

     }

});

const Count=()=>{
    const classes = useStyles();            //use  internal css

    const state=useState()

    const [currentvalue,updatedvalue]=useState(0)  //destructuring

const IncNum=()=>{
    updatedvalue(currentvalue + 1);
    //console.log('clicked');
};
const DecNum=()=>{
    updatedvalue(currentvalue - 1);
    //console.log('clicked');
};

    return(
        <div>
        <Card className={classes.root}>      
        <h1>Count Component</h1>
        <h1>{currentvalue}</h1>
        <Tooltip title="ADD">
        <Button onClick={IncNum}><AddBoxIcon/></Button>
        </Tooltip>
        <Tooltip title="Delete">
        <Button onClick={DecNum}><IndeterminateCheckBoxIcon/></Button>
        </Tooltip>
        </Card>
        </div>
    );  
};

export default Count;