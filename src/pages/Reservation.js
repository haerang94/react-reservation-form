import React from "react";
import styled from "styled-components";
import TravelerContainer from "containers/TravelerContainer";
import TimeContainer from "containers/TimeContainer";
import ContactInfoContainer from "containers/ContactInfoContainer";
const ReservationWrapper = styled.section`
  width: 370px;
  min-height: 300px;
  border: 1px solid #ddd;
  padding: 15px;
`;

const Reservation = () => {
  return (
    <ReservationWrapper>
      <TravelerContainer />
      <TimeContainer />
      <ContactInfoContainer />
    </ReservationWrapper>
  );
};

export default Reservation;
