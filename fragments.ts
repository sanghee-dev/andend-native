import { gql } from "@apollo/client";

export const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    id
    username
    avatar
  }
`;

export const PHOTO_FRAGMENT = gql`
  fragment PhotoFragment on Photo {
    id
    createdAt
    updatedAt
    file
    caption
  }
`;

export const COMMENT_FRAGMENT = gql`
  fragment CommentFragment on Comment {
    id
    createdAt
    updatedAt
    user {
      username
      avatar
    }
    payload
    isMine
  }
`;

export const LIKE_FRAGMENT = gql`
  fragment LikeFragment on Like {
    id
    createdAt
    updatedAt
  }
`;

export const HASHTAG_FRAGMENT = gql`
  fragment HashtagFragment on Hashtag {
    id
    createdAt
    updatedAt
    hashtag
  }
`;
