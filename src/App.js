import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Routes from './Routes/Routes';
// import { loadEmojis } from './Store/emojis';
import { checkLoggedInStatusThunk } from './Store/middleware/authThunk';
import { loadEmojisThunk } from './Store/middleware/emojisThunk';


function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(checkLoggedInStatusThunk())
    dispatch(loadEmojisThunk())
  })

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;