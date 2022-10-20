import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from './components/contexts/UserContext'
import GlobalStyle from "./styles/GlobalStyles";
import SignInPage from "./components/pages/signinPage";
import SignUpPage from "./components/pages/signupPage";
import HomePage from './components/pages/homePage/index';

function App() {
  const [token, setToken] = useState('')

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ token, setToken}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
