declare namespace Express {
  export interface Request {
    user: {
      sub: string
      username: string
      iat: number
      exp: number
    }
  }
}
