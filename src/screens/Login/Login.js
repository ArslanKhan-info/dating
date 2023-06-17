import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import style from './Login.module.scss'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CarouselComponent from './CrouselComponent'
import PhoneInput from 'react-phone-number-input'
import JodiCrousel from './JodiCrousel'



const Login = () => {
    const [value,setValue] =useState()

    return (
        <>
            <Navbar/>
            <Row className={style.container + ' bg-red-blue-gradient'}>
                <Col md={6} className=' align-self-center'>
                    <CarouselComponent/>
                </Col>
                <Col md={6} className=' align-self-center '>
                    <Card  id={style.cardBody}>
                        <CardBody className='p-4 m-2'>
                            <label className=' text-md font-weight-600 mb-3 '>Mobile</label>
                            <PhoneInput
                                placeholder=""
                                value={value}
                                onChange={setValue}
                                className={style.numberContainer}
                                numberInputProps={{className:style.numberInput}}
                                countrySelectProps={{className:style.country}}
                                phone
                                />
                                <button  className='custome-btn submit-btn text-md'>Continue</button>
                                <p className=' text-blue text-center my-3'>Continue with Google</p>
                                <p className='text-12 my-3 font-weight-600'>If you had previously registered using email id, please login <span className='text-blue pointer'>here</span></p>
                                <p  className='text-12 my-3 font-weight-600'>By continuing you agree to our <span className='text-blue pointer'>Terms</span>  & <span className='text-blue pointer'>Privacy Policy</span></p>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <section className={style.downlaodSection + '  pb-4 pt-0 pt-md-5'}>
                <Row>
                    <Col md={6}>
                        <p className='text-big'> India's Most Trusted Free Online Dating & Matchmaking App To Find True Love </p>
                    </Col>
                    <Col md={6} className='text-center'>
                        <img className={style.downloadImg} width={'100%'} src={require('../../assets/img/download.png')} />
                    </Col>
                </Row>
            </section>
            <section className={style.imageSection + '  pb-4 pt-0 pt-md-5'}>
                <Row>
                    <Col xs={3}>
                        <div className={style.imgContainer}>
                            <img width={'100%'} src={require('../../assets/img/app1.webp')}/>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <div className={style.imgContainer}>
                            <img width={'100%'} src={require('../../assets/img/app2.webp')}/>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <div className={style.imgContainer}>
                            <img width={'100%'} src={require('../../assets/img/app3.webp')}/>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <div className={style.imgContainer}>
                            <img width={'100%'} height={"100%"} src={require('../../assets/img/app4.webp')}/>
                        </div>
                    </Col>
                </Row>
            </section>

            <section className={style.imageSection + '  pb-4 pt-0 pt-md-5'}>
                <Row >
                    <Col md={6} className='py-3 align-self-center'>
                        <img width={'100%'} height={"100%"} src={require('../../assets/img/feature1.webp')}/>
                    </Col>
                    <Col md={6} className='py-3 align-self-center' >
                        <p className='text-pink'>Quality</p>
                        <p className='text-big'>No Fake Profiles</p>
                        <p className=' font-weight-600'>We are committed to protecting our users against fake profiles. To add an extra layer of security, we manually moderate all profiles after they've passed the ChowkAIdar1.0 check.</p>
                    </Col>
                    <Col md={6} className='py-3 align-self-center' >
                    <p className='text-pink'>SECURITY</p>
                        <p className='text-big'>Safety For Women</p>
                        <p className=' font-weight-600'>We keep the security of our women at core. Hence, we do not allow users to take screenshots or download pictures from the app.</p>
                    </Col>
                    <Col md={6} className='py-3 align-self-center'>
                        <img width={'100%'} height={"100%"} src={require('../../assets/img/feature2.webp')}/>
                    </Col>
                    <Col md={6} className='py-3 align-self-center'>
                        <img width={'100%'} height={"100%"} src={require('../../assets/img/feature3.webp')}/>
                    </Col>
                    <Col md={6} className='py-3 align-self-center'>
                        <p className='text-pink'>PERFECT MATCHMAKING</p>
                        <p className='text-big'>Compatibility Quiz</p>
                        <p className=' font-weight-600'>Get a clear picture regarding your compatibility! Take a fun compatibility quiz & answer questions to understand the other person better!</p>
                    </Col>
                </Row>
            </section>
            <section className={style.jodiSection + '  py-5'}>
                <div className={style.jodiWrp}>
                    <Row>
                        <JodiCrousel/>
                    </Row>
                </div>
            </section>
            <section className={style.linkSection + '  py-5'}>
                <Row>
                    <Col md={6} className='mx-auto'>
                        <p className='text-tagline text-center'>Fall in love with #ForeverStories</p>
                        <p className='text-center'>I had never imagined that I’d meet someone on a dating app, let alone marry them, but thanks to TrulyMadly for making it possible.</p>
                        <Row className='my-3'>
                            <Col sm={4} >
                                <div className={style.shareImg + ' pointer'}>
                                    <img width={'100%'} height={"100%"} src={require('../../assets/img/indus.png')}/>
                                </div>
                            </Col>
                            <Col sm={4} >
                                <div className={style.shareImg + ' pointer'}>
                                    <img width={'100%'} height={"100%"} src={require('../../assets/img/apple.png')}/>
                                </div>
                            </Col>
                            <Col sm={4} >
                                <div className={style.shareImg + ' pointer'}>
                                    <img width={'100%'} height={"100%"} src={require('../../assets/img/apple.png')}/>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section>
            <section className={style.linkSection + ' bg-blue  py-5'}>
                
            </section>
        </>
    )
}

export default Login