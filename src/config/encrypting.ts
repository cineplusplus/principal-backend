import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';

const key = randomBytes(16); // Generar una clave segura
const iv = randomBytes(16); // Vector de inicialización
const algorithm = 'aes-128-cbc';

export async function Hash(textToEncrypt: string): Promise<string> {
  const cipher = createCipheriv(algorithm, key, iv);

  let strEncrypting = cipher.update(textToEncrypt, 'utf8', 'hex');
  strEncrypting += cipher.final('hex');

  return strEncrypting;
}

// Función para desencriptar
export async function Decrypt(encryptedText: string): Promise<string> {
  const decipher = createDecipheriv(algorithm, key, iv);

  let strDecrypted = decipher.update(encryptedText, 'hex', 'utf8');
  strDecrypted += decipher.final('utf8');

  return strDecrypted;
}
