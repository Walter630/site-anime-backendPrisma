import User from "../domain/User";

export interface LoginResult {
    user: User,
    gerarToken: string;
  gerarRefreshToken: string;
}