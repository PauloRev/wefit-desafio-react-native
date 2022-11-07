export default interface Repository {
  id: string;
  user: string;
  name: string;
  description: string;
  avatarUrl: string;
  starsCount: string;
  language: string;
  htmlUrl: string;
  isFavorite: boolean;
}
