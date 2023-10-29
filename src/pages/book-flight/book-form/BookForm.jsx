import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const BookForm = () => {
  const navigate = useNavigate();
  const onSendClick = (e) => {
    e.preventDefault();
    const getValue = e.currentTarget.elements;

    const params = {
      departFrom: getValue.departForm.value,
      arriveTo: getValue.arriveTo.value,
      departureDate: getValue.departureDate.value,
      passengerName: getValue.passengerName.value,
    };

    axios.post(
      "http://hyper-runtime-dev.techberry.co.th/apis/oneclick-bookflight-00b62",
      params
    );
  };
  return (
    <div style={{ backgroundImage: "url('%PUBLIC_URL%/plane.png')" }}>
      <div
        className="container p-5 bg-light rounded shadow"
        style={{ marginTop: "150px" }}
      >
        <button className="btn btn-primary" onClick={() => navigate("/page2")}>
          Go Page 2
        </button>
        <form onSubmit={onSendClick}>
          <fieldset className="row">
            <h1 className="d-flex justify-content-start mb-5">Book Flight </h1>
            <i className="bi bi-send" />

            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="disabledTextInput" className="form-label">
                  Depart From
                </label>
                <input
                  type="text"
                  id="departForm"
                  name="departForm"
                  className="form-control"
                  placeholder="Depart From"
                />
              </div>
            </div>

            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="disabledSelect" className="form-label">
                  Arrive To
                </label>
                <input
                  type="text"
                  id="arriveTo"
                  name="arriveTo"
                  className="form-control"
                  placeholder="Arrive To"
                />
              </div>
            </div>

            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="disabledSelect" className="form-label">
                  Departure Date
                </label>
                <input
                  type="text"
                  id="departureDate"
                  name="departureDate"
                  className="form-control"
                  placeholder="Departure Date"
                />
              </div>
            </div>

            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="disabledSelect" className="form-label">
                  Passenger Name
                </label>
                <input
                  type="text"
                  id="passengerName"
                  name="passengerName"
                  className="form-control"
                  placeholder="Passenger Name"
                />
              </div>
            </div>

            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="disabledSelect" className="form-label">
                  LINE Token
                </label>
                <input
                  type="text"
                  id="lineToken"
                  name="lineToken"
                  className="form-control"
                  placeholder="LINE Token"
                />
              </div>
            </div>

            <div className="col-12 mt-3">
              <button type="submit" className="btn btn-primary w-100">
                Send
              </button>
            </div>
          </fieldset>
        </form>
        <div className="d-flex justify-content-center mt-5">
          Copyright © TechBerry Co., Ltd. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};
