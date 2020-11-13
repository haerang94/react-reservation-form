import React from "react";
import styled from "styled-components";
import TravelerContainer from "containers/TravelerContainer";
import TimeContainer from "containers/TimeContainer";
import ContactInfoContainer from "containers/ContactInfoContainer";
import OtherInfoContainer from "containers/OtherInfoContainer";
import TermsContainer from "containers/TermsContainer";

// 각각의 페이지에 해당하는 컴포넌트를 모은 최종 컴포넌트이다
const ReservationWrapper = styled.section`
  width: 370px;
  min-height: 300px;
  border: 1px solid #ddd;
`;
//  페이지 컴포넌트는 컨테이셔널 컴포넌트로 이루어져있다.
// 컨테이셔널 컴포넌트는 프레젠테이셔널 컴포넌트로 이루어져있다.
const Reservation = React.memo(() => {
  return (
    <ReservationWrapper>
      <TravelerContainer />
      <TimeContainer />
      <ContactInfoContainer />
      <OtherInfoContainer />
      <TermsContainer />
    </ReservationWrapper>
  );
});

export default Reservation;
