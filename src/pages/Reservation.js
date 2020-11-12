import React from "react";
import styled from "styled-components";
import Traveler from "components/Traveler";
import TravelerContainer from "containers/TravelerContainer";
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
    </ReservationWrapper>
  );
};

export default Reservation;
