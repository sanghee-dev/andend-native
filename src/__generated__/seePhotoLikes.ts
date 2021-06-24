/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: seePhotoLikes
// ====================================================

export interface seePhotoLikes_seePhotoLikes_users {
  __typename: "User";
  id: number;
  username: string;
  avatar: string | null;
  isFollowing: boolean;
  isMe: boolean;
}

export interface seePhotoLikes_seePhotoLikes {
  __typename: "SeePhotoLikesResult";
  ok: boolean;
  error: string | null;
  users: (seePhotoLikes_seePhotoLikes_users | null)[] | null;
}

export interface seePhotoLikes {
  seePhotoLikes: seePhotoLikes_seePhotoLikes;
}

export interface seePhotoLikesVariables {
  id: number;
  offset: number;
}
