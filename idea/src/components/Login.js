import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import "../styles/login.css";
import { Checkbox } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useState } from "react";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://192.168.56.128:1337/api/auth/local",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            identifier: email,
            password: password,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Giriş işlemi başarısız. Sunucu tarafında bir hata oluştu."
        );
      }
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new TypeError("Sunucu yanıtı JSON formatında değil.");
      }

      const data = await response.json();
      if (data.jwt) {
        localStorage.setItem("jwt", data.jwt);
        alert("Giriş başarılı!");
        navigate("/");

        // Giriş başarılıysa, kullanıcıyı yönlendir

        // history.push("/dashboard");
      } else {
        alert("Giriş başarısız. Lütfen bilgilerinizi kontrol edin.");
      }
    } catch (error) {
      console.error("Giriş işlemi sırasında bir hata oluştu", error);
      alert(
        "Giriş işlemi sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin."
      );
    }
  };
  return (
    <div className="login">
      <div className="loginContain">
        <div className="loginContainTwo">
          <NavLink to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>
        <form className="loginForm" onSubmit={handleSubmit}>
          <h2>Giriş Yap</h2>
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Şifre"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="check">
            <div className="remember-me">
              <Checkbox
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="rememberMe">Beni Hatırla</label>
            </div>
            <div className="forgot-password">
              <NavLink to="/forgot-password">Şifremi Unuttum</NavLink>
            </div>
          </div>
          <div className="girisButton">
            <button type="submit">Giriş Yap</button>
          </div>
        </form>
        <div className="signup">
          <h1>Henüz Üye Değilmisiniz?</h1>
          <NavLink to="/signup">
            <button className="signupButtonLink">Hemen Üye Ol</button>
          </NavLink>
          <div className="baglanIcon">
            <button className="iconButton">
              <GoogleIcon /> Google İle Bağlan
            </button>
            <button className="iconButton">
              <FacebookIcon /> Facebook İle Bağlan
            </button>
          </div>
        </div>
      </div>
      <div className="footerThree">
        <NavLink to="https://www.google.com.tr/" target="_blank">
          IdeaSoft® | E-Ticaret
        </NavLink>
        &nbsp; paketleri ile hazırlanmıştır.
      </div>
    </div>
  );
}

export default Login;
