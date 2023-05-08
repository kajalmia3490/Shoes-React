import React from "react";
import Search from "./components/search-box";
import Header from "./components/head-section";
import Shoe from "./components/shoes";
// import Banner from "./components/banner";
import About from "./components/about";
import Contact from "./components/contact";

class App extends React.Component {

  render() {
    return (
      <div className="mx-20 font-sans">
        <div className='mx-80 mt-8'>
          <Search />
        </div>

        <div className="text-center mt-5 bg-gray-200 rounded" >
          <Header />
        </div>

        <div className="flex justify-around gap-5">
          <Shoe
            device='Nike'
            paragraph='This is an amazing Shoe. It has done rank in google SEO. Nice Perform and All men appriciated.'
            price='200$'
          />
          <Shoe
            device='Bata'
            paragraph='This is an amazing Shoe. It has done rank in google SEO. Nice Perform and All men appriciated.'
            price='199$'
          />
          <Shoe
            device='Adidas'
            paragraph='This is an amazing Shoe. It has done rank in google SEO. Nice Perform and All men appriciated.'
            price='219$'
          />
        </div>

        <div className="text-center mt-8">
          <a href="#" className="text-xl border p-2 px-3 rounded border-gray-400">
            See All
          </a>
        </div>

        <div className="flex justify-between">
          <div className="text-justify p-5">
            <About />
          </div>
          <div className="text-justify p-5">
            <Contact />
          </div>
        </div>

      </div>
    )
  }
}

export default App;