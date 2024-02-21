import { useContext, useState } from "react";
import { UserContext } from "../../contexts/user";
import { Button } from "../button/component";

export const AuthorizationForm = ({onLogin}) => {
    const [userName, setUserName] = useState('')
    const {setUser} = useContext(UserContext)
  return (
    <div>
    <input 
    value={userName}
    onChange={(event) => setUserName(event.target.value)}
    type="text" />
        <Button onClick={() => {
            setUser(userName);
            onLogin();
        }}>Login
        </Button>    
  </div>
  )
};
