//Dependencies
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 3</a>
                        </li>
                    </ul>
                    <form className="form-inline" action="/action_page.php">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-success" type="submit">Search</button>
                    </form>

                </nav>

            </div>
        );
    }
}

export default Header;