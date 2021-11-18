import React from "react";
import { Row, Col } from "antd";

import { MCard } from "../common";
import testPic from "../../assets/images/test.png";
import "./styles.css";
export const HomeCards = () => {
  return (
    <div>
      <Row>
        <Col span={8}>
          <MCard
            text="صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند."
            alt="smile"
            src={testPic}
          />
        </Col>
        <Col span={8}>
          <MCard
            text="صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند."
            alt="smile"
            src={testPic}
          />
        </Col>
        <Col span={8}>
          <MCard
            text="صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند."
            alt="smile"
            src={testPic}
          />
        </Col>
      </Row>
    </div>
  );
};
