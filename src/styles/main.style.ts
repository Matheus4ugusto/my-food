import styled from "styled-components/native";
import {FlexStyle} from "react-native";

export const Container = styled.View`
  padding: 10px;
`

export const Flex = styled.View<FlexStyle>`
  flex-direction: ${({direction}) => direction ? direction : "row"};
  justify-content: ${({justifyContent}) =>
          justifyContent ? justifyContent : "start"};
  align-items: ${({alignItems}) => (alignItems ? alignItems : "start")};
`;
