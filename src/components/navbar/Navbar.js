import React from 'react'
import styles from './navbar.module.scss'
import { GiHamburgerMenu } from 'react-icons/gi';
import { Col, Row } from 'reactstrap';


const Navbar = () => {
    return (
        <div className={styles.nav}>
            <Row className=' justify-content-between '>
                <Col className=' align-self-center'>
                    <GiHamburgerMenu/>
                </Col>
                <Col className=' text-center align-self-center '>
                    <img className={styles.navImg} src={require('../../assets/img/logo.jpg')}/>
                </Col>
                <Col className=' text-end align-self-center'>
                    <button className='custome-btn bg-blue text-blue'>Login</button>
                </Col>
            </Row>
        </div>
    )
}

export default Navbar