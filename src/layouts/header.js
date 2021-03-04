import { Component } from "react";
import logo from '../assests/img/logo.svg';
import close from '../assests/img/close_icon.png'
import '../assests/css/ogogo.css';

export default class Header extends Component{
  addShowClass() {  
    document.getElementById('navbarNav').classList.add('show');
  }
  removeShowClass() {  
    document.getElementById('navbarNav').classList.remove('show');
  }
    render(){  
        return (<nav className="navbar navbar-expand-lg navbar-light ogogo-nav fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
              <img src={logo} alt="ogogo logo" />
          </a>
          <button className="navbar-toggler" type="button" onClick={this.addShowClass}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <a href="javascript:void(0)" className="close-icon" onClick={this.removeShowClass}>
              <img src={close} alt="close" />
            </a>
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <a className="nav-link first active" aria-current="page" href="#about">О нас</a>
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
        </nav> );
    }
}