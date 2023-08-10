import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const [darkMode, setDarkMode] = useState('light')
  const [toggleText, settoggleText] = useState('Enable Dark Mode')
  const [alert, setAlert] = useState(null)

  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  let theme = {
    dark: "#414951",
    blue: "rgb(22 53 83)",
    green: "#fff"
  }

  const toggleMode = () => {

    if (darkMode == 'dark') {
      setDarkMode('light')
      settoggleText('Enable Dark Mode')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Activated", "success")
      document.title = 'FirstApp | Light Mode'
    }

    else {
      setDarkMode('dark')
      settoggleText('Disable Dark Mode')
      document.body.style.backgroundColor = theme.dark
      showAlert("Dark Mode Activated", "success")

      document.title = 'FirstApp | Dark Mode'
    }

  }

  return (
    <BrowserRouter>
      <Navbar title="FirstApp" about="About Us" mode={darkMode} toggleText={toggleText} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route
          path='/'
          element={
            <TextForm showAlert={showAlert} heading="Enter Text to Analyse" mode={darkMode} theme={theme} />
          } />
        <Route
          path='/about'
          element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
