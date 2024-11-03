import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { FiLogIn, FiUser } from "react-icons/fi";
import { useState } from "react";

export default function Header() {
  const [signed, setSigned] = useState<boolean>(false);
  const [loadingAuth, setLoadingAuth] = useState<boolean>(false);

  return (
    <div className="w-full h-16 flex items-center justify-center bg-white drop-shadow mb-4">
      <header className="w-full flex justify-between items-center max-w-7xl px-4 mx-auto">
        <Link to="/">
          <img src={logo} alt="Logo do site" />
        </Link>
        {!loadingAuth && signed ? (
          <Link to="/dashboard">
            <FiUser size={24} color="#000" />
          </Link>
        ) : (
          <Link to="/login">
            <FiLogIn size={24} color="#000" />
          </Link>
        )}
      </header>
    </div>
  );
}
