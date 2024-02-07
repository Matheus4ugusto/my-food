import styled from "styled-components/native";
import {Link} from "expo-router";

export const AuthContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: blue;
`

export const AuthTitle = styled.Text`
  font-size: 20px;
  text-align: center;
`;

export const AuthSubtitle = styled.Text`
  font-size: 12px;
  text-align: center;
  padding-top: 10px;
`

export const AuthTextInput = styled.TextInput<{ ref: any }>`
  background-color: #f2f2f2;
  border-radius: 5px;
  padding: 5px;
  margin-top: 5px;
`;

export const AuthTextInputLabel = styled.Text`
  padding-top: 10px;
`;

export const AuthButton = styled.TouchableOpacity`
  background-color: #E7562AFF;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
`;

export const AuthFormDivider = styled.View`
  background-color: #d8d8d8;
  height: 2px;
  margin: 10px 0;
`

export const FormBox = styled.View`
  background-color: #fefefe;
  padding: 20px;
  width: 80%;
  margin: auto;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px;
`;

export const AuthLink = styled(Link)`
  color: #E7562AFF;
`;