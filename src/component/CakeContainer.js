import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'
 function CakeContainer(props){
    return(
        <div>
            <h1>Number of Cakes - {props.numberofCakes}</h1>
            <button onClick={props.buyCake}>Add</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
      numberofCakes:state.cake.numberofCakes
    }
  }
  const mapDispatchToProps = dispatch => {
    return{
      buyCake: () => dispatch(buyCake())
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);