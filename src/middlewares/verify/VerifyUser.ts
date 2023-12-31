import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { VerifyIDUser } from 'src/config/utils/functions';

@Injectable()
export class VerifyAdminMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params; // Obtener el ID de la solicitud desde los parámetros de ruta
    VerifyIDUser(id)
      .then((userVery) => {
        if (userVery.is) {
          if (userVery.user !== null) {
            next();
          } else {
            res.status(400).json({ error: 'Invalid User, Not Admin' });
          }
        } else {
          // Si el ID de la solicitud no es válido, enviar una respuesta de error
          res.status(400).json({ error: 'Invalid request ID' });
        }
      })
      .catch((error) => {
        res.status(400).json({
          error: `Error VerifyRequestIDUser: ${JSON.stringify(error)}`,
        });
      });
  }
}
