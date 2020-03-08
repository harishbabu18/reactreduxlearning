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

function App() {
  return (
    <Provider store={store}>
        {/* <UserContainer /> */}
    <div className="App">
  
      {/* <OfferingContainer />
      <HooksCakeContainer />
     <CakeContainer />
     <IceCreamContainer />
    
     <DescriptionAlerts />
     <ComboBox />
     <CustomizedTables /> */}
      <CompanyContainer />
    </div>

   


 </Provider>
  );
}



export default App;
