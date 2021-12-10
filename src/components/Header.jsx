import { Link } from "react-router-dom";
export const Header = () =>{
    return(
        <div style={{ position: "sticky", top: "0px", zIndex: "100" }}>
          <nav className="navigation">
            <h1 className="header" style={{ textAlign: "center" }}>Daily FResh</h1>
              <ul>
                <li>
                  <Link to="/" className="header-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="header-link">
                    Cart
                  </Link>
                </li>
              </ul>
          </nav>
        </div>
    )
}