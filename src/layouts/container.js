import { Component } from "react";
import OwlCarousel from 'react-owl-carousel2';
import ModalVideo from 'react-modal-video';
import groupCard from '../assests/img/group_cards.png'
import groupCardSmall from '../assests/img/groupCard_small.png'
export default class Container extends Component {
    
    constructor () {
        super()
        this.state = {
          isOpen: false,
          videoLink: ''
        }
        this.openModal = this.openModal.bind(this)
      }
     
      openModal (videoLink) {
        this.setState({isOpen: true, videoLink: videoLink})
      }
    
    render() { 
        // slider option
        const options = {
            items: 3,
            margin: 16,
            nav: false,
            rewind: true,
            autoplay: true,
            // navContainer: true,
		    // navContainerClass: 'slider-control-wrapper',
            // navContainer: 'slider-control-wrapper',
            responsive: { 
                0:{
                    items:1,
                    nav:false,
                    // navContainer: 'slider-control-wrapper',
                },
                600:{
                    items:3,
                    nav: false,
                    // navContainer: 'slider-control-wrapper',
                },
                1000:{
                    items:3,
                    nav:false,
                    // navContainer: true,
		            // navContainerClass: 'slider-control-wrapper',
                } 
            }
        };

        //video data
        const videoData = [
            {videoLink : 'xbSv27qZNCY', videoImg: 'assests/Thumbnail video/Эльдар.png', name: 'Эльдар', subText: 'Студент курса “JavaScript”'},
            {videoLink : 'U_EIQNSkzuo', videoImg: 'assests/Thumbnail video/Айзат.png', name: 'Айзат', subText: 'Студентка курса “HTML/CSS”'},
            {videoLink : 'oAT5wLZ1stE', videoImg: 'assests/Thumbnail video/Алина.png', name: 'Алина', subText: 'Студентка курса “Python”'},
            {videoLink : 'e-ds-A5_ZCk', videoImg: 'assests/Thumbnail video/Гулина.png', name: 'Гулина', subText: 'Студентка курса “JavaScript”'},
            {videoLink : 'KBi2hRwo4do', videoImg: 'assests/Thumbnail video/Данил.png', name: 'Данил', subText: 'Студент курса “Python”'},
            {videoLink : 'KxeeuUoMeMw', videoImg: 'assests/Thumbnail video/Жантай.png', name: 'Жантай', subText: 'Студент курса “JavaScript”'},
            {videoLink : 'vPYPT6gkNeY', videoImg: 'assests/Thumbnail video/Катя.png', name: 'Екатерина', subText: 'Студентка курса “UX/UI”'},
            {videoLink : '9JaeFeWDpp8', videoImg: 'assests/Thumbnail video/Максим и Богдан.png', name: 'Максим и Богдан', subText: 'Студенты курса “JavaScript”'},
            {videoLink : 'rkEi5EAYroM', videoImg: 'assests/Thumbnail video/Расул.png', name: 'Расул', subText: 'Студент курса “Python”'},
            {videoLink : '79xM0qVwF6k', videoImg: 'assests/Thumbnail video/Сейтек.png', name: 'Сейтек', subText: 'Студент курса “JavaScript”'},
            {videoLink : '4MVf-qXHE9M', videoImg: 'assests/Thumbnail video/Тим.png', name: 'Тим', subText: 'Студент курса “UX/UI”'},
            {videoLink : 'YYv2LlsCR-A', videoImg: 'assests/Thumbnail video/Улушка.png', name: 'Улукбек', subText: 'Студент курса “JavaScript”'},
            {videoLink : 'OQCmXNlPp3U', videoImg: 'assests/Thumbnail video/Хатам.png', name: 'Хатам', subText: 'Студент курса “JavaScript”'},
            {videoLink : 'Y5ozWzgyh_0', videoImg: 'assests/Thumbnail video/Айдай.png', name: 'Айдай', subText: 'Студентка курса “JavaScript”'},
            {videoLink : 'Aue7oPglEss', videoImg: 'assests/Thumbnail video/Эмир.png', name: 'Эмир', subText: 'Студент курса “Python”'},
            {videoLink : 'DvIW0ahP9Do', videoImg: 'assests/Thumbnail video/Эмир22.png', name: 'Эмир', subText: 'Студент курса “JavaScript”'},
        ]

        return (
            <div>
                {/* <!--Hero Section--> */}
                <section className="ogogo-hero-section" id="about" style={{ "backgroundImage": "url(assests/img/Ж†≠в†©0.png)", "backgroundSize": "cover", "backgroundRepeat": "no-repeat", "backgroundPosition": "center" }}>
                    <div className="container">
                        <div className="ogogo-hero-content">
                            <h1 className="title" data-aos="fade-up">OGOGO Academy</h1>
                            <p className="subtitle" data-aos="fade-up">самая большая IT академия программирования в Кыргызстане</p>
                            <button className="btn orange-btn"  data-bs-toggle="modal" data-bs-target="#appFormModal">Оставить заявку</button>
                        </div>
                    </div>
                </section>

                {/* <!--Courses section--> */}
                <section className="ogogo-courses-section" id="courses">
                    <div className="container">
                        <div className="row" data-aos="fade-up">
                            <div className="col-lg-12">
                                <h2 className="title">О курсах <br /> OGOGO Academy </h2>
                                    <p className="subtitle">Выбери одно из наших направлений <br /> и обучайся по удобной тебе системе </p>
                            </div>
                        </div>
                        <div className="row special-row">
                            <div className="col-lg-3">
                                <div className="card" data-aos="fade-right">
                                    <img src="assests/img/python.png" className="card-img-top" alt="python" />
                                        <div className="card-body">
                                                    <h3 className="card-title">Python</h3>
                                                    <p className="card-text">Курс базового знания языка и обработки анализа данных </p>
                                        </div>
                                        <div className="card-footer">
                                                    <a href="#" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#appFormModal">записаться</a>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card" data-aos="fade-right" data-aos-delay="100">
                                    <img src="assests/img/javascript.png" className="card-img-top" alt="javascript" />
                                        <div className="card-body">
                                                        <h3 className="card-title">Javascript</h3>
                                                        <p className="card-text">Курс визуальной и практической верстки сайта </p>
                                        </div>
                                        <div className="card-footer">
                                                        <a href="#" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#appFormModal">записаться</a>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card" data-aos="fade-right" data-aos-delay="200">
                                    <img src="assests/img/ui_ux.png" className="card-img-top" alt="ui ux" />
                                        <div className="card-body">
                                            <h3 className="card-title">UI/UX</h3>
                                            <p className="card-text">Курс создания графических проектов и пользовательского интерфейса</p>
                                        </div>
                                        <div className="card-footer">
                                            <a href="#" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#appFormModal">записаться</a>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card" data-aos="fade-right" data-aos-delay="300">
                                    <img src="assests/img/html_css.png" className="card-img-top" alt="html css" />
                                        <div className="card-body">
                                            <h3 className="card-title">HTML/CSS</h3>
                                            <p className="card-text">Вводный курс по созданию (верстке сайтов)</p>
                                        </div>
                                        <div className="card-footer">
                                            <a href="#" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#appFormModal">записаться</a>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!--WHY section--> */}
                <section className="ogogo-why-section" id="why">
                    <div className="container">
                        <h2 className="title" data-aos="fade-up">Почему <br /> OGOGO Academy </h2>
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="row">
                                    <div className="col-lg-3 mb-3 mb-lg-0 text-lg-center">
                                        <img src="assests/img/icon_1.png" alt="" className="img-fluid why-icon" data-aos="zoom-in"/>
                                        <h3 className="why-title">500 кв. м</h3>
                                    </div>
                                    <div className="col-lg-3 mb-3 mb-lg-0 text-lg-center">
                                        <img src="assests/img/icon_2.png" alt="" className="img-fluid why-icon" data-aos="zoom-in" data-aos-delay="100"/>
                                        <h3 className="why-title">Доступ к бесплатному коворкингу</h3>
                                    </div>
                                    <div className="col-lg-3 mb-3 mb-lg-0 text-lg-center">
                                        <img src="assests/img/icon_3.png" alt="" className="img-fluid why-icon" data-aos="zoom-in" data-aos-delay="200"/>
                                        <h3 className="why-title">Помощь менторов 24/7</h3>
                                    </div>
                                    <div className="col-lg-3 text-lg-center">
                                        <img src="assests/img/icon_4.png" alt="" className="img-fluid why-icon" data-aos="zoom-in" data-aos-delay="300"/>
                                        <h3 className="why-title">Уютная и добрая атмосфера</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!--online section--> */}
                <section className="ogogo-online-section" id="online">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 align-self-lg-center" data-aos="fade-up">
                                <h2 className="title">OGOGO и даже <br />
                                    Онлайн?</h2>
                                <p className="subtitle">Думаешь, что программирование 
                                    не твое? Тогда пройди наш онлайн интенсив по двум основным направлениям и выбери, что тебе ближе</p>
                            </div>
                            <div className="col-lg-6">
                                <div className="row special-row">
                                    <div className="col-lg-6">
                                        <div className="card python text-white" data-aos="fade-left">
                                            <img src="assests/img/python_verticle.png" className="card-img" alt="python" />
                                            <div className="card-img-overlay">
                                            <h5 className="card-title">Python</h5>
                                            {/* <!-- <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text">Last updated 3 mins ago</p> --> */}
                                                <div className="card-footer">
                                                <button className="btn white-btn" data-bs-toggle="modal" data-bs-target="#loginModal">купить курс</button>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="card javascript text-white" data-aos="fade-left" data-aos-delay="200">
                                            <img src="assests/img/js_verticle.png" className="card-img" alt="javascript" />
                                            <div className="card-img-overlay">
                                            <h5 className="card-title">JS</h5> 
                                            <div className="card-footer">
                                                <button className="btn white-btn" data-bs-toggle="modal" data-bs-target="#loginModal">купить курс</button>
                                            </div>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Testimonial section--> */}
                <section className="ogogo-testimonial-section" id="testimonial">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 data-aos="fade-up">
                                    ОТЗЫВЫ
                                    <span className="slider-control-wrapper">
                                        <a href="javascript:void(0)" onClick={() => this.refs.gallery.prev()}><i className="bi bi-arrow-left"></i></a>
                                        <a href="javascript:void(0)" onClick={() => this.refs.gallery.next()}><i className="bi bi-arrow-right"></i></a>
                                    </span>
                                </h2>
                            </div>
                        </div>
                        
                        <div className="" data-aos="fade-up" data-aos-delay="100">
                            <OwlCarousel ref="gallery" options={options}>
                            {videoData.map(item => 
                            <div>
                                    <div className="testi-item-wrapper">
                                        <div className="testi-item">
                                            <img src={item.videoImg} className="img-fluid" />
                                            <a href="javascript:void(0)" className="overlay" onClick={() => this.openModal(item.videoLink)}>
                                                <i className="bi bi-play-circle"></i>
                                            </a>
                                        </div>
                                        <h3 className="title">{item.name}</h3>
                                        <p className="subtitle">{item.subText}</p>
                                    </div>
                                </div>
                            )} 
                                
                            </OwlCarousel>
                        </div>
                        
                    </div>
                </section>

                {/* <!-- You-are-here section--> */}
                <section className="ogogo-youHere-section">
                    <div className="container">
                        <div className="row orange-bg">
                            <div className="col-lg-6 p-0 right-part smallDevice">
                                <div className="row">
                                    <div className="col-12">
                                        {/* <marquee className="mt-4 mt-lg-0"> <img src={groupCardSmall} alt="card group" />  </marquee> */}
                                        <img src={groupCardSmall} alt="card group" className="mt-4 img-fluid"/>  
                                    </div> 
                                </div>
                            </div>
                            <div className="col-lg-6 align-self-lg-center">
                                <div className="content-wrapper" data-aos="fade-up">
                                    <h2 className="title">OGOGO ты уже  дошел до сюда? </h2>
                                    <p className="subtitle">Тогда самое время записаться к нам!</p>
                                    <button className="btn white-btn" data-bs-toggle="modal" data-bs-target="#appFormModal">Оставить заявку</button>
                                </div>
                            </div>
                            <div className="col-lg-6 right-part bigDevice">
                                <div className="row">
                                    <div className="col-12">
                                    <img src={groupCard} alt="card group" className="img-fluid" /> 
                                    <img src={groupCard} alt="card group" className="img-fluid" />  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Get-certified section--> */}
                <section className="ogogo-getCertified-section" id="certified">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 align-self-lg-center" data-aos="fade-up">
                                <h2 className="title">Стань дипломированным <br /> специалистом</h2>
                                <p className="subtitle">
                                    Мы проводим обучение на основании государственной лицензии.
                                    Вы получите сертификат о прохождении курса, 
                                    который можно добавить 
                                    в портфолио и показать работодателю.
                                </p>
                            </div>
                            <div className="col-lg-5">
                                <img src="assests/img/certificate.png" alt="certificate" className="img-fluid shadow" data-aos="fade-left"/>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Video Model */}
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.state.isOpen ? this.state.videoLink : ''} onClose={() => this.setState({isOpen: false, videoLink : ''})} />
            </div>
        )
    }
}