import styled from "styled-components/native";
import {FlexStyle} from "react-native";

interface FlexProps extends FlexStyle {
    backgroundColor?: string;
}

export const Container = styled.View`
  padding: 10px;
`

export const Flex = styled.View<FlexProps>`
  justify-content: ${({justifyContent}) =>
          justifyContent ? justifyContent : "start"};
  align-items: ${({alignItems}) => (alignItems ? alignItems : "start")};
  flex-wrap: ${({flexWrap}) => flexWrap};
  padding-top: ${({paddingTop}) => (paddingTop ? `${paddingTop}px` : 0)};
  padding-right: ${({paddingRight}) => (paddingRight ? `${paddingRight}px` : 0)};
  padding-bottom: ${({paddingBottom}) => (paddingBottom ? `${paddingBottom}px` : 0)};
  padding-left: ${({paddingLeft}) => (paddingLeft ? `${paddingLeft}px` : 0)};
  background-color: ${({backgroundColor}) => backgroundColor ?? "transparent"};
`;

export const Title = styled.Text<{
    titleLevel: 1 | 2 | 3 | 4;
    textAlign?: string;
}>`
  font-size: ${({titleLevel}) => {
    switch (titleLevel) {
      case 1:
        return "38px";
      case 2:
        return "24px";
      case 3:
        return "18px";
      case 4:
        return "16px";
      default:
        return "18px";
    }
  }};
  font-weight: bold;
  color: #000;
  text-align: ${({textAlign}) => textAlign ?? "left"};
`;