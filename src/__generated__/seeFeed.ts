/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: seeFeed
// ====================================================

export interface seeFeed_seeFeed_photos_user {
  __typename: "User";
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
  user: seeFeed_seeFeed_photos_comments_user;
  payload: string;
  isMine: boolean;
}

export interface seeFeed_seeFeed_photos {
  __typename: "Photo";
  id: number;
  file: string;
  likes: number;
  commentNumber: number;
  isLiked: boolean;
  user: seeFeed_seeFeed_photos_user;
  caption: string | null;
  comments: (seeFeed_seeFeed_photos_comments | null)[] | null;
  createdAt: string;
  isMine: boolean;
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
  page: number;
}
