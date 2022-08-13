export interface CurrentUser {
  id: number;
  email: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  bio?: string;
  image?: string;
  token: string;
}
