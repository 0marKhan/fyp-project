import Navbar from "../components/Navbar/Navbar";
import "./RegisterAsManufacturer.css";

const RegisterAsManufacturer = () => {
  return (
    <div>
      <Navbar />
      <h1 className="manufacturer-heading">Register As Manufacturer</h1>
      <div className="form">
        <div className="form-body">
          <div className="username">
            <label className="form__label" for="ManufacturerName">
              Manufacturer Name{" "}
            </label>
            <input
              className="form__input"
              type="text"
              id="ManufacturerName"
              placeholder="Manufacturer Name"
            />
          </div>
          <div className="email">
            <label className="form__label" for="email">
              Email{" "}
            </label>
            <input
              type="email"
              id="email"
              className="form__input"
              placeholder="Email"
            />
          </div>
          <div className="password">
            <label className="form__label" for="password">
              Password{" "}
            </label>
            <input
              className="form__input"
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="confirm-password">
            <label className="form__label" for="confirmPassword">
              Confirm Password{" "}
            </label>
            <input
              className="form__input"
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div class="footer">
          <button type="submit" class="register-btn">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterAsManufacturer;
