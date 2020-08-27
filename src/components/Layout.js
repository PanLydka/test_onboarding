import React, { useState, useEffect } from "react"

import "../styles/normalize.css"
import "../styles/bulma.scss"
import "../styles/layout.scss"
import leftArrow from "../../static/left-arrow.svg"
import hamburger from "../../static/hamburger.svg"
import SwipeableViews from "react-swipeable-views"

const Layout = ({ children }) => {

  const lastIndex = children.length - 1

  const [modalIsOpen, setModalIsOpen] = useState()
  const [activeIndex, setActiveIndex] = useState(0)


  useEffect(() => {
      let html = document.getElementsByTagName( 'html' )[0];
      if(modalIsOpen !== undefined)
        html.classList.toggle("overflow__hidden")
  }, [modalIsOpen])



  return (
    <>

      <div className="layout">
        <div className="steps">
            <ul>
              <li>
                number telefonu
              </li>
              <li>
                kod weryfikacyjny
              </li>
              <li>
                dane osobowe
              </li>
              <li>
                miejsce zamieszkania
              </li>
              <li>
                nazwisko mamy
              </li>
              <li>
                email
              </li>
              
              <li>
                źródła dochodu
              </li>
            </ul>
        </div>
        <div className="header">
          <div className="header__buttons">
            <img
              onClick={() => {
                if (activeIndex > 0) {
                  setActiveIndex(i => i - 1)
                }
              }}
              className="header_back--arrow"
              src={leftArrow}
            />

            <h1 className="title"> jakis title </h1>

            <img
              onClick={() => setModalIsOpen(true)}
              className="header_hamburger"
              src={hamburger}
            />
          </div>

          <div>
            <progress
              class="progress is-primary"
              value={activeIndex}
              max={lastIndex + 1}
            >
              15%
            </progress>
          </div>
        </div>
        <main>
          <form>
            <SwipeableViews
              index={activeIndex}
              onChangeIndex={i => setActiveIndex(i)}
              animateHeight={true}
            >
              {children}
            </SwipeableViews>
          </form>
        </main>

        <div class={`modal ${modalIsOpen && "is-active"}`}>
          <div class="modal-background"></div>
          <div class="modal-content">
            <div className="box">
              <h2> etataearfsdasrt test </h2>
              <h3> asdasdsadadfaf </h3>
            </div>
          </div>
          <button
            onClick={() => setModalIsOpen(false)}
            class="modal-close is-large"
            aria-label="close"
          ></button>
        </div>

        <div className="footer">
          <button 
            onClick={() => {
              if (activeIndex < lastIndex) {
                setActiveIndex(i => i + 1)
              }}
            }
            className="button is-primary footer_button--continue"
          > 
            Continue 
          </button>
        </div>
      </div>
    
    </>
  )
}

export default Layout
