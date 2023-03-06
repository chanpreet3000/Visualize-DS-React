import Navbar from "./components/Navbar/Navbar.component";
import './App.css'
import { useEffect } from "react";


function App() {
  var imageList = document.getElementsByClassName('main-section__item-image');
  console.log(imageList);
  var zIndex = 0;
  var currentIndex = -1;
  function showSlides() {
    currentIndex = (currentIndex + 1) % imageList.length;
    imageList[currentIndex].style.zIndex = zIndex;
    zIndex++;
    console.log(currentIndex);
    setTimeout(showSlides, 4000);
  }

  useEffect(() => {
    showSlides();
  }, [])


  return (
    <>
      <Navbar />
      <section>
        <div className="main-section">
          <div className="main-section__images">
            <div className="main-section__items">

              <div className="main-section__item-images">
                <div className="main-section__item-image"></div>
                <div className="main-section__item-image"></div>
                <div className="main-section__item-image"></div>
                <div className="main-section__item-image"></div>
                <div className="main-section__item-image"></div>
                <div className="main-section__item-image"></div>
                <div className="main-section__item-image"></div>
                <div className="main-section__item-image"></div>
              </div>

              <div className="main-section__item-frame"></div>

            </div>
          </div>
          <div className="divider"></div>
          <div className="main-section__content">
            <h1>Visualize DS</h1>
            <p>The Data Structure Visualization Application is a revolutionary tool designed to help you understand data structures in a new and interactive way. With our app, you can visualize algorithms for various data structures and follow along with step-by-step explanations that break down complex concepts into simple, easy-to-understand terms.</p>
            <p>So why wait? Sign up for our Data Structure Visualization Application today and start exploring the exciting world of data structures like never before!</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
