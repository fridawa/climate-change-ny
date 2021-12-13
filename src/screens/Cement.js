import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Col } from "react-bootstrap";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import bakgrund1 from "../Images/back-co2.png";

const Cement = (props) => {
  // Applikationens innehåll med förklarande text samt en line chart
  return (
    <>
      <Container
        fluid
        className="data-container"
        style={{ backgroundImage: `url(${bakgrund1})` }}
      >
        <Col
          xs={{ span: 6, offset: 1 }}
          className="pe-5  mt-4 pt-5 overlay-text "
        >
          <h1>Cement</h1>
          <p>Cementproduktion är processen som sker när cement tillverkas. </p>
          <p>
            Cementindustrin har en stor negativ klimatpåverkan. Cement- och
            betongproduktion står för åtta procent av världens samlade
            koldioxidutsläpp.
          </p>
          <p>
            Cement återvinns ur kalksten. Sprickor i kalkstenen kan leda till
            effekter på grundvattnets rörelser och saltvattenläckor. Detta kan
            förstöra både dricksvattnet i området och vattenbalansen för växter
            och natur.
          </p>
          <p>
            Brytning av kalksten till cementproduktionen är också den dålig för
            klimatet, eftersom en kalkrik berggrund ofta leder till värdefulla
            naturmiljöer och djurliv.
          </p>
        </Col>
        <div className="wrapper overlay-graf pt-5">
          <ResponsiveContainer width="100%" height="80%">
            <LineChart
              data={props.fetchedData}
              margin={{
                top: 20,
                right: 30,
                left: 5,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Year" />
              <YAxis unit=" unit" />
              <Tooltip />
              <Legend />

              <Line
                dataKey="Cement"
                stackId="a"
                fill="#6D4B47"
                type="monotone"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Container>
    </>
  );
};
export default Cement;
