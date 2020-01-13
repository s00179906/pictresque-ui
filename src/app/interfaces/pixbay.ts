// export interface Pixbay {
//   hits: IHits[];
// }

export interface Pixbay {
  webformatURL: string;
  likes: string;
  views: number;
  downloads: number;
  favorites: number;
  user: string;
  // prob dont need most of these
  pageUrl: string;
  type: string;
  tags: string;
  previewUrl: Int16Array;
  previewWidth: Int16Array;
  largeImageUrl: string;
}
