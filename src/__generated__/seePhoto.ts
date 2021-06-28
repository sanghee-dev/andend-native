/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: seePhoto
// ====================================================

export interface seePhoto_seePhoto_photo_user {
  __typename: "User";
  id: number;
  username: string;
  avatar: string | null;
  isFollowing: boolean;
  isMe: boolean;
}

export interface seePhoto_seePhoto_photo {
  __typename: "Photo";
  id: number;
  createdAt: string;
  updatedAt: string;
  file: string;
  caption: string | null;
  user: seePhoto_seePhoto_photo_user;
}

export interface seePhoto_seePhoto {
  __typename: "SeePhotoResult";
  ok: boolean;
  error: string | null;
  photo: seePhoto_seePhoto_photo | null;
}

export interface seePhoto {
  seePhoto: seePhoto_seePhoto;
}

export interface seePhotoVariables {
  id: number;
}
