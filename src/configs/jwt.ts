import jwt, { JwtPayload } from "jsonwebtoken";

/**
 * Generates a JSON Web Token (JWT) for a given user ID.
 *
 * @param {any} data - The user ID to be encoded in the JWT.
 * @param {string} [duration="1d"] - The token expiration duration (default is 1 day).
 * @returns {string} The generated JWT.
 */
export const createJwtToken = (data: any, duration: string = "1d"): string => {
  return jwt.sign(data, process.env.JWT_SECRET!, { expiresIn: duration });
};

/**
 * Verifies a given JSON Web Token (JWT).
 *
 * @param {string} token - The JWT to be verified.
 * @returns {JwtPayload} The decoded token payload if verification is successful.
 * @throws {Error} If the token is invalid or verification fails.
 */
export const verifyJwtToken = (token: string): JwtPayload => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as unknown as JwtPayload;
    return decoded;
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
};
