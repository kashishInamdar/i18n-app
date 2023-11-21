import "./Home.css"
import I18n from "../../utills/i18n.jsx"
import { useState } from "react"

function Home(){

     const usersCount = 20 ;


    
    return(
        <>
        <h1>{ I18n("welcomeMessage")}</h1>


        <p>{I18n("normalMessage")}</p>


        <h3>{I18n("greetingMessage")}</h3>

        <p>{I18n("endMassage")}</p>

          <p>
            {I18n("useStatMassage" , "<studentcount>" , usersCount)}
        </p> 

        <select
        defaultValue={localStorage.getItem("lang")}
        onChange={(e)=>{
            localStorage.setItem("lang", e.target.value)
            window.location.reload();
        }}>
            <option value="mr">Marathi</option>
            <option value="hi">Hindi</option>
            <option value="en">English</option>
        </select>
            
        </>
    )
}
export default Home