import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid width-100">
                    <div className="row d-flex align-items-center">
                        {/*Logo Wrapper */}
                        <div className="col-xs-3">
                            <Link to={'/'} className="d-flex align-items-center logo">
                                <img src={logo} className="logo"/>
                                <span className="ml-2">UTIFY</span>
                            </Link>
                        </div>
                        <div className="col-xs-3">
                            
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;