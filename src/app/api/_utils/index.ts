import bcrypt  from 'bcrypt';

/**
 * hashPassword function is used to convert plain password into hased password
 *
 * @param {string} plainPassword Normal password entered by user
 * @returns {Promise<string>} a hased string password which gone be store in database
 *
 */

export const hashPassword = async (plainPassword: string): Promise<string> => {
  const salt = bcrypt.genSaltSync(10);
  return await bcrypt.hash(plainPassword, salt);
};
