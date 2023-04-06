import Card from "./components/Card"
import Footer from "./components/Footer"
import Header from "./components/Header"

import "./scss/app.scss"
import data from "./data"

function App() {
  return (
    <>
      <Header />
      <Card data={data} /> {/* datayı bir bütün olarak gönderdik. data.js de dest ederek karşılayacağız*/}
      <Footer />
    </>
  )
}

export default App
  

// npm i sass  veya yarn add sass diyerek sass kütüphanisini terminale kuruyoruz.
//yarn upgrade --latest dersek eklediğimiz kütüphanelerin yeni versiyonlarını güncellemiş oluruz. 