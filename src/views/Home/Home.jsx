import "./Home.css"
import I18n from "../../utills/i18n.jsx"
import { useState } from "react"

function Home() {

    const usersCount = 20;

    return (
        <>
           <h1 className="title">INTERNATIONALIZATION</h1>
            <div className="card">
                <h1 >{I18n("welcomeMessage")}</h1>


                <p className="font6">{I18n("normalMessage")}</p>


                <p className="font6" >{I18n("greetingMessage")}</p>

                <p className="font6" >{I18n("endMassage")}</p>

                <p className="font6">
                    {I18n("useStatMassage", "<studentcount>", usersCount)}
                </p>
                <p className="change-lang">{I18n("language")} </p>

                <select
                    className="select-box"
                    defaultValue={localStorage.getItem("lang")}
                    onChange={(e) => {
                        localStorage.setItem("lang", e.target.value)
                        window.location.reload();
                    }}>
                    <option value="mr">मराठी </option>
                    <option value="hi">हिंदी </option>
                    <option value="en">English</option>
                </select>

            </div>

        </>
    )
}
export default Home  