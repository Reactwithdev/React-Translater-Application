import React, { useEffect } from "react";
import countries from "../Data";

export default function Translater() {

    useEffect(()=>{
        const fromtext= document.querySelector(".from-text")
        const totext= document.querySelector(".to-text")
        const exchangeIcon= document.querySelector(".exchange")
        const selectTag= document.querySelectorAll("select")
        const icons= document.querySelectorAll(".row i")
        const translateBtn= document.querySelectorAll(".button")

        selectTag.forEach((tag,id)=>{
            console.log("dataaaaaaaaaaaaaaaaaaaaaaaaa",id)
            for(let Country_code in countries){
                // console.log("dataaaaaaaaaaaaaaaaaaaaaaaaa",Country_code)
                let selected = id == 0 ? Country_code == "en-GB" ? "selected" : "" : Country_code == "hi-IN" ? "selected" : "" ;
                let Option = ` <option ${selected} value="${Country_code}">${countries[Country_code]}</option>`
                tag.insertAdjacentHTML("beforeend",Option)
            }
        })

        exchangeIcon.addEventListener("click",()=>{
           let  tempText= fromtext.value;
          console.log("tempTextTTTTTTTTTTTTT",tempText)
           let tempLang=selectTag[0].value;
           console.log("tempTextTTTTTTTTTTTTT",tempLang)
          fromtext.value = totext.value;
          totext.value = tempText;

          selectTag[0].value = selectTag[1].value;
          selectTag[1].value = tempLang;
        })

        // fromtext.addEventListener("keyup",()=>{
        //   if(!fromtext.value){
        //     totext.value="";
        //   }
        // })
    },[])

  return (
    <>
    <div className="container">
      <div className="wrapper">
        <div className="text-input">
          <textarea
            spellcheck="false"
            className="from-text"
            placeholder="Enter text"
          ></textarea>
          <textarea
            spellcheck="false"
            readonly
            disabled
            className="to-text"
            placeholder="Translation"
          ></textarea>
        </div>
        <ul className="controls">
          <li className="row from">
            <div className="icons">
              <i id="from" className="fas fa-volume-up"></i>
              <i id="from" className="fas fa-copy"></i>
            </div>
            <select></select>
          </li>
          <li className="exchange">
            <i className="fas fa-exchange-alt"></i>
          </li>
          <li className="row to">
            <select></select>
            <div className="icons">
              <i id="to" className="fas fa-volume-up"></i>
              <i id="to" className="fas fa-copy"></i>
            </div>
          </li>
        </ul>
      </div>
      <button>Translate Text</button>
    </div>
  </>
  );
}
