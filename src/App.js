import React from 'react';
import CakeContainer from './component/CakeContainer'
import {Provider} from 'react-redux'
import store from './redux/store'
import './App.css';
import HooksCakeContainer from './component/HooksCakeContainer';
import IceCreamContainer from './component/IceCreamContainer';
import UserContainer from './component/UserContainer';
import DescriptionAlerts from './component/DescriptionAlerts';
import ComboBox from './component/ComboBox';
import CustomizedTables from './component/CustomizedTable';
import OfferingContainer from './component/OfferingContainer';
import CompanyContainer from './component/CompanyContainer';
import Asynchronous from './component/Asynchronous';

function App(props) {
  const [autovalue, setAutovalue] = React.useState('');

  const _autocomplteValue = (event, value) =>{
    if(value==null){
    setAutovalue("the value is"+value)
  }
  else{
    setAutovalue("the value is"+value.id)
  }

  }

  return (
    <Provider store={store}>
      {autovalue}
        {/* <UserContainer /> */}
    <div className="App">
  
      {/* <OfferingContainer />
      <HooksCakeContainer />
     <CakeContainer />
     <IceCreamContainer />
    
     <DescriptionAlerts />
     <ComboBox />
     <CustomizedTables /> */}
      {/* <CompanyContainer /> */}
      <Asynchronous _autocomplteValue={_autocomplteValue} />
    </div>

   


 </Provider>
  );
}



export default App;
