import styled from "styled-components/native";

export const StoreCardBox = styled.Pressable`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  width: 50%;
`;

export const ProductCardBox = styled.Pressable`
  flex-direction: row;
  gap: 5px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding-right: 5px;
  width: 100%;
`
export const BuyButton = styled.TouchableOpacity`
  background-color: #e7562aff;
  padding-block: 20px;
  padding-top: 10px;
  width: 80%;
  padding-bottom: 10px;
  align-self: center;
  border-radius: 20px;
`;