export interface InitialState {
  videos: [];
  currentPlaying: null | currrentPlaying;
  searchTerm: string;
  searchResults: [];
  nextPageToken: string | null;
  recommendedVideos: RecommendedVideos[];
}
export interface HomePageVideo {}
export interface currrentPlaying {}
export interface RecommendedVideos {}
