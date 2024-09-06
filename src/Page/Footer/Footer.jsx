import { Link } from "react-router-dom";
import logo1 from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0E0E0E] text-white mt-20">
      <div className="footer pt-24 pb-16 max-w-screen-xl mx-auto">
        <aside className="">
          <Link to="/">
            <div className="btn btn-ghost text-xl">
              <img src={logo1} alt="logo" />
              <h2>
                Furni<span className="text-[#1E99F5]">Flex</span>
              </h2>
            </div>
          </Link>
        </aside>
        <nav>
          <h6 className="text-white font-semibold text-[18px]">About Us</h6>
          <a className="link link-hover text-[#81859F]">Branding</a>
          <a className="link link-hover text-[#81859F]">Design</a>
          <a className="link link-hover text-[#81859F]">Marketing</a>
          <a className="link link-hover text-[#81859F]">Advertisement</a>
        </nav>
        <nav>
          <h6 className="text-white font-semibold text-[18px]">Explore EEVE</h6>
          <a className="link link-hover text-[#81859F]">
            Unlock my Robot Power
          </a>
          <a className="link link-hover text-[#81859F]">Starlight</a>
          <a className="link link-hover text-[#81859F]">Robot Platform</a>
          <a className="link link-hover text-[#81859F]">EEVE Roadmap</a>
        </nav>
        <nav>
          <h6 className="text-white font-semibold text-[18px]">
            Community & Support
          </h6>
          <a className="link link-hover text-[#81859F]">Willow X Community</a>
          <a className="link link-hover text-[#81859F]">
            Developer & Maker Access
          </a>
          <a className="link link-hover text-[#81859F]">Special Cases</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
