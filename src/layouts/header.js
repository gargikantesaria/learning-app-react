import { Component } from "react";
import logo from '../assests/img/logo.svg';
import '../assests/css/ogogo.css';

export default class Header extends Component{
    render(){
        return (<nav className="navbar navbar-expand-lg navbar-light ogogo-nav fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
              <img src={logo} alt="ogogo logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#about">О нас</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#courses">Курсы</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#why">Почему</a>
              </li> 
              <li className="nav-item">
                <a className="nav-link" href="#online">Онлайн</a>
              </li> 
              <li className="nav-item">
                <a className="nav-link" href="#testimonial">Отзывы</a>
              </li> 
              <li className="nav-item">
                <a className="nav-link" href="#contact">Контакты</a>
              </li> 
              <li className="nav-item">
                <button className="btn green-btn" data-bs-toggle="modal" data-bs-target="#loginModal">Войти</button>
            </li>
            </ul> 
          </div>
        </div>
      </nav> )
    }
}