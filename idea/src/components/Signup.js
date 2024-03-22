import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import '../styles/signup.css'
import { Checkbox, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';

function Signup() {
    const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [acceptEmails, setAcceptEmails] = useState(false);

  const navigate = useNavigate();
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!acceptEmails) {
      alert("Üyelik sözleşmesini kabul etmelisiniz.");
      return;
    }

    try {
      const response = await fetch(
        "http://192.168.56.128:1337/api/auth/local/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: name,
            lastname: surname,
            email: email,
            password: password,
            phonenumber:phone,
            acceptemails:acceptEmails,
          }),
        }
      );

      const data = await response.json();

      if (data.user) {
        navigate("/login");
      } else {
        alert("Kayıt sırasında bir hata oluştu. Lütfen bilgilerinizi kontrol edin.");
      }
    } catch (error) {
      console.error("Kayıt işlemi sırasında bir hata oluştu", error);
      alert("Kayıt işlemi sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
    }
  };

    return (
      <div className="signup">
        <div className="formSignup">
          <div className="signupLogo">
            <NavLink to="/">
              <img src={Logo} alt="logo" />
            </NavLink>
          </div>
          <div className="form">
            <h1>Yeni Üyelik</h1>
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label>Adı</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label>Soyadı</label>
                <input
                  type="text"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Şifre</label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="visible" onClick={togglePasswordVisibility}>
                  <VisibilityIcon />
                </button>
                <label>Cinsiyet</label>
                <div className="radioLabel">
                  <RadioGroup>
                    <label className="genderLabel">
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Erkek"
                      />
                    </label>
                    <label className="genderLabel">
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Kadın"
                      />
                    </label>
                    <label className="genderLabel">
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Belirtmek İstemiyorum"
                      />
                    </label>
                  </RadioGroup>
                </div>
                <label>Cep Telefonu</label>
                <input
                  type="number"
                  placeholder="(5XX) XXX XX XX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="checkBoxContain">
                <div className="checkBox">
                  <Checkbox
                    checked={acceptEmails}
                    onChange={(e) => setAcceptEmails(e.target.checked)}
                  />
                  <label>
                    Aydınlatma Metninde belirtilen ilkeler nezdinde Elektronik
                    Ticaret İletisi almak istiyorum.
                  </label>
                </div>
                <div className="checkBox">
                  <Checkbox checked={true} />
                  <label>
                    <NavLink>Üyelik sözleşmesini kabul ediyorum.</NavLink>
                  </label>
                </div>
                <div className="checkBox">
                  <Checkbox checked={true} />
                  <label>
                    <NavLink>
                      Kişisel verilerin işlenmesine ilişkin Aydınlatma Metnini
                      okudum.
                    </NavLink>
                  </label>
                </div>
              </div>
              <div className="signupButton">
                <NavLink to="/">
                  <button className="signupIptal">İptal</button>
                </NavLink>
                <button type="submit">Kaydet</button>
              </div>
            </form>
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

export default Signup;