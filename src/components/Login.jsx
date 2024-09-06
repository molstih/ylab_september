import { auth } from "../scripts/api";
import { useState } from "react";

function Login(){
    const [accessToken, setValue] = useState('')
    const [userName, setName] = useState('')
    const [password, setPassword] = useState('')
    const [refresh, setRefresh] = useState('')

    const handleKey = (e)=>{
        if(e.key==="Enter"){
            handleSubmit()
        }
    }

    const handleSubmit =  () => {
        auth(userName, password).then(
            (data) => {
                if(data["accessToken"]!=null) {
                    setValue(data["accessToken"])
                    setRefresh(data["refreshToken"])
                    alert("successfull")
                } else {
                    alert("error")
                }
            }
        )

    }
    return (
        <div className="loginForm">
            <form >
                <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="username"
                    onChange={(e)=>setName(e.target.value)}
                />
                <br/>
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={(e)=>setPassword(e.target.value)}
                /><br/>
                <button
                    type="button"
                    id="btnLogin"
                    onClick={handleSubmit}
                    >
                    Авторизоваться
                </button>
            </form>
        </div>
    )
}

export default Login