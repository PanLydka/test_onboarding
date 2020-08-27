import React, { useEffect } from "react"
import Layout from "../components/Layout"
import StepNumber from '../components/StepNumber';
import InputModes from '../components/InputModes';
import ScrollTest from "../components/ScrollTest";
import { Helmet } from "react-helmet"
import StepCode from '../components/StepCode';
import StepNames from "../components/StepNames";
import StepAddress from "../components/StepAddress";
import StepMother from '../components/StepMother';
import StepEmail from "../components/StepEmail";
import StepMoney from '../components/StepMoney';
import StepAgreements from '../components/StepAgreements';
import StepTest from '../components/StepTest';


function setPlatformInfo() {
  var ua = navigator.userAgent.toLowerCase(); 
  if (ua.indexOf('safari') != -1) { 
    if (ua.indexOf('chrome') > -1) {
      document.body.classList.add('chrome');
    } else {
      document.body.classList.add('safari');
    }
  }
}

const Index = () => {

  useEffect(() => {
    document.addEventListener('DOMContentLoaded', () => {
      setPlatformInfo();
      var inputBox = document.querySelector('.safari');
      if(inputBox) {
        inputBox.addEventListener('focus', function(e) {
          document.body.classList.add('keyboard');
          setTimeout(function() {
              window.scrollTo(0, 0);
          }, 200);
        });
        
        inputBox.addEventListener('blur', function(e) {
          document.body.classList.remove('keyboard');
        });
      }
    });
  }, [])
  

  return(
    <>
      <Helmet>
            <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover' />
      </Helmet>
      <Layout>
        {/* <InputModes />  */}
    
           <StepNumber />
        
          <StepCode />
          <StepNames />
          <StepAddress />
          <StepMother />
          <StepEmail />
          <StepMoney />
          <StepAgreements /> 



      </Layout>
    </>
  )
}


export default Index
