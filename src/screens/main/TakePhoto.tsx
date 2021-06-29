import React, { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";
import SolidBtn from "../../components/buttons/TextBtn";

const Container = styled.View`
  flex: 1;
`;
const RequestContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const RequestText = styled.Text`
  color: ${colors.grayDark};
  font-size: ${fonts.title};
`;

export default function TakePhoto() {
  const [isOk, setIsOk] = useState<boolean>(false);
  const getPermissions = async () => {
    const { canAskAgain, granted } = await Camera.getPermissionsAsync();
    if (granted) setIsOk(true);
    if (!granted && canAskAgain) {
      const { granted } = await Camera.requestPermissionsAsync();
      if (granted) setIsOk(true);
    }
  };
  const requestPermissions = async () => await Camera.requestPermissionsAsync();

  useEffect(() => {
    getPermissions();
  }, []);

  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  return (
    <Container>
      {!isOk && (
        <RequestContainer>
          <RequestText>Plz grant permissions :(</RequestText>
          <SolidBtn onPress={() => requestPermissions()} text="Access camera" />
        </RequestContainer>
      )}
      <Camera
        type="front"
        flashMode="auto"
        autoFocus="on"
        zoom={0}
        whiteBalance="auto"
        ratio="4:3"
        style={{ width: windowWidth, height: windowHeight }}
      />
    </Container>
  );
}
