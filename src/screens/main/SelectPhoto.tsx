import React, { useEffect, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import { FlatList, Image, useWindowDimensions } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;
const Top = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Bottom = styled.View`
  flex: 1;
  background-color: ${colors.grayLight};
`;
const RequestText = styled.Text`
  color: ${colors.grayDark};
  font-size: ${fonts.title};
`;
const ImageContainer = styled.TouchableOpacity``;
const IconContainer = styled.View`
  position: absolute;
  right: 0;
`;

export default function SelectPhoto() {
  const [isOk, setIsOk] = useState<boolean>(false);
  const [photos, setPhotos] = useState([]);
  const [chosenPhotoUri, setChosenPhotoUri] = useState<string>("");

  const getPermissions = async () => {
    const { accessPrivileges, canAskAgain } =
      await MediaLibrary.getPermissionsAsync();
    if (accessPrivileges === "none" && canAskAgain) {
      const { accessPrivileges } = await MediaLibrary.requestPermissionsAsync();
      if (accessPrivileges !== "none") {
        setIsOk(true);
        getPhotos();
      }
    }
    if (accessPrivileges !== "none") {
      setIsOk(true);
      getPhotos();
    }
  };
  const getPhotos = async () => {
    const { assets: photos } = await MediaLibrary.getAssetsAsync();
    setPhotos(photos);
    setChosenPhotoUri(photos[0]?.uri);
  };
  const choosePhoto = (uri): string => setChosenPhotoUri(uri);

  useEffect(() => {
    getPermissions();
  }, []);

  const numColumns = 3;
  const borderWidth = 3;
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const renderItem = ({ item: photo }) => (
    <ImageContainer
      onPress={() => choosePhoto(photo.uri)}
      style={{
        borderColor: photo.uri === chosenPhotoUri ? colors.main : colors.white,
        borderWidth: borderWidth,
      }}
    >
      <Image
        source={{ uri: photo.uri }}
        style={{
          width: windowWidth / numColumns - borderWidth * (numColumns - 1),
          height: windowWidth / numColumns - borderWidth * (numColumns - 1),
        }}
      />
      <IconContainer>
        <Ionicons
          name="checkmark-circle"
          size={28}
          color={photo.uri === chosenPhotoUri ? colors.main : colors.gray}
          style={{
            opacity: 0.6,
          }}
        />
      </IconContainer>
    </ImageContainer>
  );

  return (
    <Container>
      <Top>
        {!isOk && <RequestText>Plz grant permissions :(</RequestText>}
        {isOk && chosenPhotoUri !== "" ? (
          <Image
            source={{ uri: chosenPhotoUri }}
            style={{ width: windowWidth, height: "100%" }}
          />
        ) : (
          <RequestText>Choose photo</RequestText>
        )}
      </Top>
      <Bottom>
        <FlatList
          data={photos}
          renderItem={renderItem}
          keyExtractor={(item: any) => "" + item.id}
          numColumns={numColumns}
        />
      </Bottom>
    </Container>
  );
}
