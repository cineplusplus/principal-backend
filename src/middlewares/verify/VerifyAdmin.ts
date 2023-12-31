import { Injectable, NestMiddleware } from '@nestjs/common';
import { $Enums } from '@prisma/client';
import {
  Request as RequestExpress,
  Response as ResponseExpress,
  NextFunction,
} from 'express';
import Response from 'src/config/response/response';
import { VerifyIDUser } from 'src/config/utils/functions';

@Injectable()
export class VerifyAdminMiddleware implements NestMiddleware {
  response: Response<string> = new Response('error', 'Error Internal');
  use(req: RequestExpress, res: ResponseExpress, next: NextFunction) {
    const { id } = req.params; // Obtener el ID de la solicitud desde los parámetros de ruta
    VerifyIDUser(id)
      .then((userVery) => {
        if (userVery.is) {
          if (
            userVery.user !== null &&
            userVery.user.getRole() === $Enums.Role.ADMIN
          ) {
            next();
          } else {
            this.response.setMessage('Invalid User, Not Admin');
            res.status(400).json(this.response.send());
          }
        } else {
          // Si el ID de la solicitud no es válido, enviar una respuesta de error
          this.response.setMessage('Invalid User, Not Admin Or Not Active');
          res.status(400).json(this.response.send());
        }
      })
      .catch((error) => {
        this.response.setMessage(
          `Error VerifyRequestIDUser: ${JSON.stringify(error)}`,
        );
        res.status(400).json(this.response.send());
      });
  }
}
