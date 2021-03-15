import { Component } from "react";
import '../assests/css/ogogo.css';

export default class Footer extends Component{
    render(){
        return(
            <div>
                <footer className="ogogo-footer" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <img src="assests/img/logo.svg" alt="ogogo logo" className="img-fluid" data-aos="zoom-in" />
                            </div> 
                            <div className="col-lg-6 text-end ogogo-policy"> 
                                <a href="javascript:void(0)">Policy</a>
                                <a href="javascript:void(0)">Terms</a> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 offset-lg-2" data-aos="fade-up">
                                <p className="text mt-4">
                                    г. Бишкек,<br />
                                    ул. Ибраимова 115/1
                                </p>
                                <p className="subtext">Пользовательское соглашение</p>
                            </div>
                            <div className="col-lg-3" data-aos="fade-up">
                                <p className="text mt-4">
                                    +996 (550) 312312 <br />
                                    ogogo@gmail.com
                                </p>
                                <p className="subtext">
                                    Лицензия на образовательную деятельность <br /> № LS200001652 от 03 декабрь 2021
                                </p>
                            </div>
                            <div className="col-lg-3" data-aos="fade-up">
                                <ul className="social mt-4">
                                    <li className="text ">
                                        <a href="https://wa.me/996550312312">
                                            <i className="bi bi-whatsapp me-2"></i>
                                            WhatsApp
                                        </a>
                                    </li>
                                    <li className="text">
                                        <a href="http://instagram.com/ogogo_academy">
                                            <i className="bi bi-instagram me-2"></i>
                                            Instagram
                                        </a> 
                                    </li>
                                    <li className="text">
                                        <a href="http://t.me/ogogo_academy">
                                            <i className="bi bi-telegram me-2"></i>
                                            Telegram
                                        </a> 
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row mt-3">
                            
                        </div>
                    </div>
                </footer>

                {/* <!-- Login modal --> */}
                <div className="modal ogogo-login-modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="loginModalLabel">
                            Личный <br />
                            кабинет
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <label>Логин</label>
                                <input type="email" className="form-control" />
                                <label>Пароль</label>
                                <input type="password" className="form-control" />
                            </form>
                        </div>
                        <div className="modal-body d-none">
                            <h2 className="ogogo-login-success">
                                Заявка <br /> подана
                            </h2>    
                            <p className="ogogo-login-success-text">
                                В ближайшее время с<br />  вами свяжется наш<br />  менеджер.
                            </p>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn w-100 btn-secondary green-btn" data-bs-dismiss="modal">Войти</button> 
                        </div>
                    </div> 
                    </div>
                </div>

                {/* <!-- Application form modal --> */}
                <div className="modal ogogo-appForm-modal appForm fade" id="appFormModal" tabindex="-1" aria-labelledby="appFormModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="appFormModalLabel">
                        Заполните <br /> заявку
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <label>Выбранная услуга</label>
                            <select className="form-select mb-3">
                                <option>Select Course</option>
                                <option>Записаться на курс “Python”</option>
                                <option>Записаться на курс “Javascript”</option>
                                <option>Записаться на курс “UI/UX”</option>
                                <option>Записаться на курс “HTML/CSS”</option>
                                <option>Купить онлайн курс “Python”</option>
                                <option>Купить онлайн курс “Javascript”</option>
                                <option>Получить консультацию</option>
                            </select>
                            <label>Ваше имя</label>
                            <input type="email" className="form-control" placeholder="Как вас зовут?" />
                            <label>Ваш номер телефона</label>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                    <select className="form-select special">
                                        <option>+996</option>
                                        <option>+1</option>
                                        <option>+91</option>
                                    </select>
                                </span>
                                <input type="text" className="form-control" placeholder="Enter number" aria-label="" aria-describedby="basic-addon1" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn w-100 btn-secondary orange-btn" data-bs-dismiss="modal">Оставить заявку</button> 
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}