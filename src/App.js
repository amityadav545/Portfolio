
import Home from './Pages/Home/Home';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ncontext from './NContext';
import { useRef, useState } from 'react';

function App() {
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);

  const Handlescroll = () => {



    ref4.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const Handlescroll1 = () => {



    ref5.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const Handlescroll2 = () => {



    ref6.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const topScrollevent = () => {

    ref7.current?.scrollIntoView({ behavior: 'smooth' });

  }

  return (
    <Ncontext.Provider value={{ ref4: ref4, ref5: ref5, ref6: ref6, ref7: ref7, Handlescroll: Handlescroll, Handlescroll1: Handlescroll1, Handlescroll2: Handlescroll2, topScrollevent: topScrollevent }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>

          </Route>
        </Routes>
      </BrowserRouter>
    </Ncontext.Provider>
  );
}

export default App;
