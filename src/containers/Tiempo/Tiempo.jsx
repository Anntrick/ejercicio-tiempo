import { useEffect } from "react";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux"

import { Card, Container, Row, Col, Button } from 'react-bootstrap'

import { selectWeather, addWeatherData, removeCard } from "./tiempoSlice";

import WeatherCard from '../../components/WeatherCard/WeatherCard'

//import './Tiempo.scss'

const Tiempo = props => {
    const dispatch = useDispatch()
    const arWeather = useSelector(selectWeather)

    //let [weather, setWeather] = useState([])

    useEffect(()=> {
        axios.get('https://www.el-tiempo.net/api/json/v2/home')
        .then(resp => {
            dispatch(addWeatherData(resp.data.ciudades))
            //setWeather(resp.data.ciudades)
        })
    }, [])

    /*const remCard = (id) => {
        dispatch(removeCard(id))
        console.log(id)
    }
    <button className="cardBtn" onClick={remCard(city.id)}>X</button>
    */

    return (
        <Container className="Tiempo">
            <Row>
                {
                    arWeather.map((city, index)=> (
                        <Col key={index} xs={12} md={6} xl={3}>
                            <Card>
                                <Card.Img variant="top" src="https://saposyprincesas.elmundo.es/wp-content/uploads/2016/07/jumanji2.jpg" />
                                <Card.Body>
                                    <Card.Title>{city.name}</Card.Title>
                                    <Card.Text>
                                        {city.stateSky.description}
                                        <h4>Temperatura</h4>
                                        max {city.temperatures.max}
                                        min {city.temperatures.min}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Tiempo 