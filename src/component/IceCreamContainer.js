import React from 'react'
import { connect } from 'react-redux'
import {  buyIceCream } from '../redux'

 function IceCreamContainer(props){
    return(
        <div>
            <h1>Number of Ice Cream - {props.numberofIceCream}</h1>
            <button onClick={props.buyIceCream}>Add</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
      numberofIceCream:state.iceCream.numberofIceCream
    }
  }
  const mapDispatchToProps = dispatch => {
    return{
      buyIceCream: () => dispatch(buyIceCream())
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer);