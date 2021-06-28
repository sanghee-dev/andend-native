import React, { useEffect, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";

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
color:${colors.grayDark}
  font-size: ${fonts.title};
`;

export default function SelectPhoto() {
  const [isOk, setIsOk] = useState<boolean>(false);
  const [photos, setPhotos] = useState([]);
  const getPermissions = async () => {
    const { accessPrivileges, canAskAgain } =
      await MediaLibrary.getPermissionsAsync();
    if (accessPrivileges === "none" && canAskAgain) {
      const { accessPrivileges } = await MediaLibrary.requestPermissionsAsync();
      if (accessPrivileges !== "none") setIsOk(true);
    }
    if (accessPrivileges !== "none") setIsOk(true);
  };
  const getPhotos = async () => {
    if (isOk) {
      const { assets: photos } = await MediaLibrary.getAssetsAsync();
      setPhotos(photos);
    }
  };

  useEffect(() => {
    getPermissions();
    getPhotos();
  }, []);

  return (
    <Container>
      <Top>
        {isOk ? <></> : <RequestText>Plz grant permissions :(</RequestText>}
      </Top>
      <Bottom></Bottom>
    </Container>
  );
}
