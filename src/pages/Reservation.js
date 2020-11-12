import React from "react";
import styled from "styled-components";
import TravelerContainer from "containers/TravelerContainer";
import TimeContainer from "containers/TimeContainer";
import ContactInfoContainer from "containers/ContactInfoContainer";
import OtherInfoContainer from "containers/OtherInfoContainer";
import TermsContainer from "containers/TermsContainer";

const ReservationWrapper = styled.section`
  width: 370px;
  min-height: 300px;
  border: 1px solid #ddd;
`;

const Reservation = () => {
  return (
    <>
      <ReservationWrapper>
        <TravelerContainer />
        <TimeContainer />
        <ContactInfoContainer />
        <OtherInfoContainer />
        <TermsContainer />
      </ReservationWrapper>
    </>
  );
};

export default Reservation;
