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

    //Active Link For Menu
    state = { active : '#about' };

    componentDidMount(){
      /** you might as well check if location.pathname includes what you are looking 
        for before just setting it to state, assuming that there wont be anything 
        extra; skipping that for simplicity*/
      this.setState({active: window.location.hash || '#about'});
    }
    
    //When Link Menu clicked
    handleClick = (activeLink) => {
      this.setState({active: activeLink});
    }

    render(){  

      //View 
        return (
        <nav className="navbar navbar-expand-lg navbar-light ogogo-nav fixed-top">
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
                <a aria-current="page" href="#about" onClick={()=>this.handleClick('#about')} className={`nav-link first ${this.state.active == '#about' ? "active" : ""}`}>О нас</a>
              </li>
              <li className="nav-item">
                <a href="#courses" onClick={()=>this.handleClick('#courses')} className={`nav-link ${this.state.active == '#courses'? 'active': ''}`}>Курсы</a>
              </li>
              <li className="nav-item">
                <a href="#why" onClick={()=>this.handleClick('#why')} className={`nav-link ${this.state.active == '#why'? 'active': ''}`}>Почему</a>
              </li> 
              {/* <li className="nav-item">
                <a href="#online" onClick={()=>this.handleClick('#online')} className={`nav-link ${this.state.active == '#online'? 'active': ''}`}>Онлайн</a>
              </li>  */}
              <li className="nav-item">
                <a href="#testimonial" onClick={()=>this.handleClick('#testimonial')} className={`nav-link ${this.state.active == '#testimonial'? 'active': ''}`}>Отзывы</a>
              </li> 
              <li className="nav-item">
                <a href="#contact" onClick={()=>this.handleClick('#contact')} className={`nav-link ${this.state.active == '#contact'? 'active': ''}`}>Контакты</a>
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