import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

const App = () => {
  const [cartCount, setCartCount] = React.useState(0);
  
  const handleCartCount = ()=> {
    setCartCount((prevState)=> {
      return (
        prevState + 1
      )
    })
  }
  
  return (
    <>
      <Header cartCount={cartCount}/>
      <Main handleCartCount={handleCartCount}/>
      <Footer/>
    </>
  )
}

export default App
