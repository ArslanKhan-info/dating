import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../home/home'
import { Col, Row } from 'reactstrap'
import styles from './MainScreen.module.scss'
const MainScreen = () => {
    return (
        <>
            <Row>
                <Col xl={4} xxl={4.5}>
                <div  className={styles.card}>
                </div>
                </Col>
                <Col xl={8} xxl={8.5} >
                    <Routes>
                        <Route path='/home' element={<Home/>}/>
                    </Routes>
                </Col>
            </Row>
        </>
    )
}

export default MainScreen