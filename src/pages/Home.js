import Navbar from "../components/Navbar/Navbar";
import logo from "../images/logo.png";
import "./Home.css";
import Cards from "../components/Cards";
import manufacturer from "../images/factory.png";
import distributer from "../images/truck.png";
import retailer from "../images/retailer.png";
import vision from "../images/project-vision.jpg";
import problem from "../images/problem-statement.jpg";
import objective from "../images/objectives.jpeg";
import Footer from "../components/Footer";

const Home = () => {
  const ManufacturerData = {
    title: "Sign Up As Manufacturer",
    text: "Add Products you have manufactured to the supply chain",
    url: manufacturer,
    link: "/register-as-manufacturer",
  };
  const DistributerData = {
    title: "Sign Up As Distributer",
    text: "Distribute goods verified in the blockchain as authentic",
    url: distributer,
    link: "/register-as-distributer",
  };
  const RetailerData = {
    title: "Sign Up As A Retailer",
    text: "Distribute goods verified in the blockchain as authentic",
    url: retailer,
    link: "/register-as-retailer",
  };

  return (
    <div id="start">
      <Navbar />
      <img className="img-center" src={logo} alt="Logo" />
      <p>
        ColdX is a blockchain-based web application that provides a solution to
        cold chain systems. ColdX provides security of the data and transparency
        to the stakeholders so that they can use the resources at their end more
        efficiently. ColdX aims to increase the shelf life of a product with
        constant temperature monitoring of the products.
      </p>
      <div className="grid-display" id="sign-up">
        <Cards
          title={ManufacturerData.title}
          text={ManufacturerData.text}
          url={ManufacturerData.url}
          link={ManufacturerData.link}
        />
        <Cards
          title={DistributerData.title}
          text={DistributerData.text}
          url={DistributerData.url}
          link={DistributerData.link}
        />
        <Cards
          title={RetailerData.title}
          text={RetailerData.text}
          url={RetailerData.url}
          link={RetailerData.link}
        />
      </div>
      <div className="project-vision">
        <p>
          <h3>Project Vision</h3>
          Pharmaceutical products and vaccines are very important for the
          patients and doctors, they can save the life of a person. So, it is
          important to manage and maintain these products efficiently. The
          vision of ColdX is to maintain the entire cold chain of pharmaceutical
          products and vaccines and provide transparency to the users and
          stakeholders, with these features ColdX allows its stakeholders to
          efficiently utilize their resources and trace a product to its point
          of origin and check its authenticity
        </p>
        <img className="vision-img" src={vision} alt="placeholder" />
      </div>
      <div className="problem-statement">
        <img className="problem-img" src={problem} alt="placeholder" />
        <p>
          <h3>Problem Statement</h3>
          Supply chain is the most crucial part in any business organizations.
          Any hole in the supply chain will affect the whole chain in the supply
          network. Therefore, the issue of safety of the pharmaceutical supply
          chain has become a serious concern for public health. To solve this
          problem, we have proposed a blockchain based cold chain system to
          cater this issue.
        </p>
      </div>
      <div className="objectives">
        <p>
          <h3>Objectives</h3>
          <ul>
            <li>
              To make an interactive web application for users to view the whole
              supply chain.
            </li>
            <li>
              To create an IoT based system that will monitor the temperature
              and send it to the remote server and notify the consumer about the
              temperature variations if found.
            </li>
            <li>To increase the product shelf life and maintaining quality.</li>
            <li>To prevent the forging and tempering of products.</li>
            <li>To provide transparency to the whole chain.</li>
          </ul>
        </p>
        <img className="objectives-img" src={objective} alt="placeholder" />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
