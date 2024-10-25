import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/header"
import Main from "./components/main"
import Footer from "./components/footer"

const App = (
  <div className="body-container">
    <Header />
    <Main />
    <Footer />
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(App)
