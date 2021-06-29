import React, { useEffect, useState } from "react";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";
import SolidBtn from "../../components/buttons/TextBtn";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Container = styled.View`
  flex: 1;
  background-color: ${colors.black};
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
const Actions = styled.View`
  flex: 0.3;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const TakePhotoBtn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 70px;
  background-color: ${colors.white};
  opacity: 0.8;
`;
const TakePhotoCircle = styled.View``;
const TakePhotoBtnLine = styled.View`
  width: 58px;
  height: 58px;
  border-radius: 58px;
  border: 2px solid ${colors.black};
  position: absolute;
`;
const TouchableOpacity = styled.TouchableOpacity`
  opacity: 0.5;
`;

export default function TakePhoto() {
  const [isOk, setIsOk] = useState<boolean>(false);
  const [cameraType, setCameraType] = useState<string>(
    Camera.Constants.Type.front
  );

  const getPermissions = async () => {
    const { canAskAgain, granted } = await Camera.getPermissionsAsync();
    if (granted) setIsOk(true);
    if (!granted && canAskAgain) {
      const { granted } = await Camera.requestPermissionsAsync();
      if (granted) setIsOk(true);
    }
  };
  const requestPermissions = async () => await Camera.requestPermissionsAsync();
  const onCameraType = () => {
    if (cameraType === Camera.Constants.Type.front) {
      setCameraType(Camera.Constants.Type.back);
    } else setCameraType(Camera.Constants.Type.front);
  };

  useEffect(() => {
    getPermissions();
  }, []);

  return (
    <Container>
      {!isOk ? (
        <RequestContainer>
          <RequestText>Plz grant permissions :(</RequestText>
          <SolidBtn onPress={() => requestPermissions()} text="Access camera" />
        </RequestContainer>
      ) : (
        <>
          <Camera
            type={cameraType}
            flashMode="auto"
            autoFocus="on"
            zoom={0}
            whiteBalance="auto"
            ratio="4:3"
            style={{
              flex: 1,
            }}
          />
          <Actions>
            <TakePhotoBtn>
              <TakePhotoCircle></TakePhotoCircle>
              <TakePhotoBtnLine></TakePhotoBtnLine>
            </TakePhotoBtn>
            <TouchableOpacity onPress={onCameraType}>
              <Ionicons
                name="camera-reverse-outline"
                size={40}
                style={{ color: colors.white }}
              />
            </TouchableOpacity>
          </Actions>
        </>
      )}
    </Container>
  );
}
