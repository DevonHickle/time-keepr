import React, {useState, useContext} from "react";
import {RecoveryContext} from "../../components/App/App"
import axios from "axios";

export default function ForgotPassword() {
  const [password, setPassword] = useState("");
  const { setPage, email } = useContext(RecoveryContext);

  function changePassword() {
    if (password) {
      try {
        axios.put("http://localhost:5000/update-password", {
          email:email,
          newPassword: password,
        }).then(() => setPage("login"));

        return alert("Password changed successfully, please login!");
      } catch (error) {console.log(error);}}
    return alert("Please enter your new Password");
 }

  return (
    <div>
      <h2> Change Password </h2>
        <form>
          <label /> New Password: 
          <input 
            type="password"
            placeholder="........"
            required=""
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <button onClick={() => changePassword()}>Reset passwod </button>
        </form>
    </div>
  );
}