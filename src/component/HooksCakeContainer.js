import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { buyCake } from '../redux'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'


const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

function HooksCakeContainer(){
    const classes = useStyles();

    const numberofCakes = useSelector(state => state.cake.numberofCakes)
    const dispatch = useDispatch()
    return(
        <div className={classes.root}>
        <h1>Hooks number of Cakes - {numberofCakes}</h1>
            <Button variant="contained" color="primary" onClick ={() => dispatch(buyCake())}>Hooks Button</Button>
        </div>
    )
}
export default HooksCakeContainer