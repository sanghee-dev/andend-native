/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: seeFeed
// ====================================================

export interface seeFeed_seeFeed_user {
  __typename: "User";
  id: number;
  username: string;
  avatar: string | null;
  isFollowing: boolean;
  isMe: boolean;
}

export interface seeFeed_seeFeed_comments_user {
  __typename: "User";
  username: string;
  avatar: string | null;
}

export interface seeFeed_seeFeed_comments {
  __typename: "Comment";
  id: number;
  createdAt: string;
  updatedAt: string;
  user: seeFeed_seeFeed_comments_user;
  payload: string;
  isMine: boolean;
}

export interface seeFeed_seeFeed {
  __typename: "Photo";
  id: number;
  createdAt: string;
  updatedAt: string;
  file: string;
  caption: string | null;
  user: seeFeed_seeFeed_user;
  isLiked: boolean;
  likeNumber: number;
  commentNumber: number;
  comments: (seeFeed_seeFeed_comments | null)[] | null;
}

export interface seeFeed {
  seeFeed: (seeFeed_seeFeed | null)[] | null;
}

export interface seeFeedVariables {
  offset: number;
}
