import { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div>
      <form>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email.."
          value={email}
        />
        <input
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="Password..."
          value={pass}
        />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default Auth;
