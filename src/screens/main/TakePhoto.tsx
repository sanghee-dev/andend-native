import React, { useEffect, useState } from "react";
import { useWindowDimensions, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";
import SolidBtn from "../../components/buttons/TextBtn";
import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

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
const CloseBtn = styled.TouchableOpacity`
  position: absolute;
  top: 24px;
  left: 12px;
`;
const Actions = styled.View`
  flex: 0.25;
  padding-bottom: 20px;
`;
const TakePhotoBtn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 70px;
  background-color: ${colors.white};
  opacity: 0.8;
  margin: 0 80px;
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
  opacity: 0.8;
`;
const SliderContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const ButtonsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default function TakePhoto() {
  const navigation = useNavigation();
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const [isOk, setIsOk] = useState<boolean>(false);
  const [cameraType, setCameraType] = useState<string>(
    Camera.Constants.Type.front
  );
  const [zoom, setZoom] = useState<number>(0);
  const [flashMode, setFlashMode] = useState<string>(
    Camera.Constants.FlashMode.auto
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
  const onZoomValueChange = (e): number => setZoom(e / 100);
  const onFlashModeChange = () => {
    if (flashMode === Camera.Constants.FlashMode.auto) {
      setFlashMode(Camera.Constants.FlashMode.on);
    } else if (flashMode === Camera.Constants.FlashMode.on) {
      setFlashMode(Camera.Constants.FlashMode.off);
    } else {
      setFlashMode(Camera.Constants.FlashMode.auto);
    }
  };
  const onClose = () => navigation.navigate("Tabs");
  useEffect(() => {
    getPermissions();
  }, []);

  return (
    <Container>
      <StatusBar hidden={true} />
      {!isOk ? (
        <RequestContainer>
          <RequestText>Plz grant permissions :(</RequestText>
          <SolidBtn onPress={() => requestPermissions()} text="Access camera" />
        </RequestContainer>
      ) : (
        <>
          <Camera
            type={cameraType}
            flashMode={flashMode}
            autoFocus="on"
            zoom={zoom}
            whiteBalance="auto"
            style={{
              flex: 1,
            }}
          />
          <Actions>
            <SliderContainer>
              <Slider
                style={{ width: windowWidth - 120 }}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor={colors.white}
                maximumTrackTintColor="rgba(255,255,255,0.5)"
                thumbTintColor={colors.white}
                onValueChange={onZoomValueChange}
              />
            </SliderContainer>
            <ButtonsContainer>
              <TouchableOpacity onPress={onFlashModeChange}>
                <Ionicons
                  name={
                    flashMode === Camera.Constants.FlashMode.auto
                      ? "flash-outline"
                      : flashMode === Camera.Constants.FlashMode.on
                      ? "flash"
                      : "flash-off"
                  }
                  size={30}
                  style={{ color: colors.white }}
                />
              </TouchableOpacity>
              <TakePhotoBtn>
                <TakePhotoCircle />
                <TakePhotoBtnLine />
              </TakePhotoBtn>
              <TouchableOpacity onPress={onCameraType}>
                <Ionicons
                  name="camera-reverse"
                  size={30}
                  style={{ color: colors.white }}
                />
              </TouchableOpacity>
            </ButtonsContainer>
          </Actions>
        </>
      )}
      <CloseBtn onPress={onClose}>
        <Ionicons name="close" size={30} color={colors.black} />
      </CloseBtn>
    </Container>
  );
}
