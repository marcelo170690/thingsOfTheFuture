import React from "react";
import { Link } from 'react-router-dom';

import './css/Navbar.css'

class Navbar extends React.Component{

    render() {
        return (
            <div className="father fixed-top">
                <Link className="btn son" to="/">
                    Home
                </Link>
                <Link className="btn son" to="/play">
                    Play
                </Link>
                <Link className="btn son" to="/popu">
                    Populares
                </Link>
                <Link className="btn son" to="/tres">
                    tres
                </Link>
            </div>
        );
    }
}
export default Navbar;