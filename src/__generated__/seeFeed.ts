/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: seeFeed
// ====================================================

export interface seeFeed_seeFeed_photos_user {
  __typename: "User";
  id: number;
  username: string;
  avatar: string | null;
}

export interface seeFeed_seeFeed_photos_comments_user {
  __typename: "User";
  username: string;
  avatar: string | null;
}

export interface seeFeed_seeFeed_photos_comments {
  __typename: "Comment";
  id: number;
  createdAt: string;
  updatedAt: string;
  user: seeFeed_seeFeed_photos_comments_user;
  payload: string;
  isMine: boolean;
}

export interface seeFeed_seeFeed_photos {
  __typename: "Photo";
  id: number;
  createdAt: string;
  updatedAt: string;
  file: string;
  caption: string | null;
  user: seeFeed_seeFeed_photos_user;
  isLiked: boolean;
  likeNumber: number;
  commentNumber: number;
  comments: (seeFeed_seeFeed_photos_comments | null)[] | null;
}

export interface seeFeed_seeFeed {
  __typename: "SeeFeedResult";
  ok: boolean;
  error: string | null;
  photos: (seeFeed_seeFeed_photos | null)[] | null;
}

export interface seeFeed {
  seeFeed: seeFeed_seeFeed;
}

export interface seeFeedVariables {
  offset: number;
}
