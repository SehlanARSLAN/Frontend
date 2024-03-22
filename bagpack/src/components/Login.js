import { useState } from 'react';
import '../styles/login.css';
import { Checkbox } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from 'react-router-dom';  // useNavigate ekledim

function Login() {
  const [isButtonClicked, setButtonClicked] = useState(1);
  const [showRegistrationForm, setShowRegistrationForm] = useState(true);
  const [checkboxError, setCheckboxError] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    privacyChecked: false,
    discountsChecked: false,
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (buttonIndex) => {
    setButtonClicked(buttonIndex);
    setShowRegistrationForm(buttonIndex === 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!termsAccepted) {
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
            username: formData.username,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (data.jwt) {
        navigate("/login");
      } else {
        console.log(formData);
        alert("Kayıt sırasında bir hata oluştu. Lütfen bilgilerinizi kontrol edin.");
      }
    } catch (error) {
      console.error("Kayıt işlemi sırasında bir hata oluştu", error);

      alert("Kayıt işlemi sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'privacyChecked') {
      setTermsAccepted(checked);
    }
  
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: inputValue }));
  };
  

  return (
    <div className="loginContain">
      <div className="loginContainTwo">
        <div className="buttonGroup">
          <button
            onClick={() => handleButtonClick(1)}
            className={isButtonClicked === 1 ? 'activeButton' : ''}
          >
            Giriş Yap
          </button>
          <button
            onClick={() => handleButtonClick(2)}
            className={isButtonClicked === 2 ? 'activeButton' : ''}
          >
            Kayıt Ol
          </button>
        </div>
        <div className="contain-Form">
          <form onSubmit={handleSubmit}>
            {showRegistrationForm ? (
              <div className="formContain">
                <label>E-posta</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label>Şifre</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <div className="formBttn">
                  <button type="submit">Giriş Yap</button>
                </div>
              </div>
            ) : (
              <div className="formContain">
                <label>Kullanıcı Adı</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
                <label>E-posta</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label>Şifre</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <div className="checkBox">
                  <div>
                    <Checkbox
                      size="small"
                      name="privacyChecked"
                      checked={formData.privacyChecked}
                      onChange={handleChange}
                    />
                    <label>Gizlilik Sözleşmesini kabul ediyorum</label>
                  </div>
                  <div>
                    <Checkbox
                      size="small"
                      name="discountsChecked"
                      checked={formData.discountsChecked}
                      onChange={handleChange}
                    />
                    <label>İndirimlerden Haberdar olmak istiyorum</label>
                  </div>
                </div>
                {checkboxError && (
                  <p style={{ color: 'red' }}>Lütfen zorunlu checkbox'ları işaretleyin.</p>
                )}
                <div className="signup">
                  <button className="signupButton">
                    <FacebookIcon /> ile Kaydol
                  </button>
                  <button className="signupButton">
                    <GoogleIcon /> ile kaydol
                  </button>
                </div>
                <div className="formBttn">
                  <button type="submit">Kayıt Ol</button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
