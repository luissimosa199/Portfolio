import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <header>
            <nav>
                <ul className="nav-links">
                    <li className="nav-link"><a href="#sobre-mi">Sobre mi</a></li>
                    <li className="nav-link"><a href="#proyectos">Proyectos</a></li>
                    <li className="nav-link"><a href="#contactame">Contáctame</a></li>
                </ul>
            </nav>
        </header>
    );
  }
  