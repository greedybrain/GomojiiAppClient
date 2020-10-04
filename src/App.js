import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import HeaderContainer from './Global/containers/HeaderContainer';
import Routes from './Routes/Routes';
import { checkLoggedInStatusThunk } from './Store/middleware/authThunk';

function App({ getState }) {
  const dispatch = useDispatch()
  const loggedIn = useSelector(state => state.authRed.loggedIn)


  useEffect(() => {
    dispatch(checkLoggedInStatusThunk())
  })

  return (
    <div className="App">
      {/* <HeaderContainer /> */}
      <Routes />
    </div>
  );
}

export default App;
