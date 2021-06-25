/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: searchPhotos
// ====================================================

export interface searchPhotos_searchPhotos_photos {
  __typename: "Photo";
  id: number;
  createdAt: string;
  updatedAt: string;
  file: string;
  caption: string | null;
}

export interface searchPhotos_searchPhotos {
  __typename: "SearchPhotosResult";
  ok: boolean;
  error: string | null;
  photos: (searchPhotos_searchPhotos_photos | null)[] | null;
}

export interface searchPhotos {
  searchPhotos: searchPhotos_searchPhotos;
}

export interface searchPhotosVariables {
  keyword: string;
  offset: number;
}
