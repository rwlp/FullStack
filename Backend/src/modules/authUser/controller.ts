import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import AppError from '../../common/utils/AppError';

class AuthUserController {
  async getUserBasicData(req: Request, res: Response) {
    const tokenJwt = req.cookies.auth_token;

    if (!tokenJwt) {
      res.status(404).send('Not Permited here');
      return;
    }

    try {
      const {agent, ip} = jwt.verify(tokenJwt, process.env.JWT_SECRET_KEY!) as {ip: string, agent: string};
      console.log(agent, ip);

      if (ip !== req.ip || agent !== req.headers['user-agent']) {
        return res.status(401).send('This will be reported to security Team!');
      }

      res.send()

    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        throw new AppError('Invalid Token!', 401);
      } else {
        throw error;
      }
    }
  }
}

export default new AuthUserController();
