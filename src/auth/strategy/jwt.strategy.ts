import { Injectable, UnauthorizedException, } from '@nestjs/common';
import { PassportStrategy, } from '@nestjs/passport';
import { Strategy, } from 'passport-jwt';
import { JWT, } from '../../../config/config';
import { User, } from '../../user/entities/user.entity';

export interface JwtPayload{
   id:string
}

const cookieExtractor = function (req: any): null | string{
  return (req && req.cookies) ? (req.cookies?.jwt ?? null) : null;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: cookieExtractor,
      secretOrKey: JWT.SECRET,
    });
  }
   
  async validate(payload: JwtPayload, done: (err: any, user: any) => void) {
    if (!payload || !payload.id) {
      return done(new UnauthorizedException(), false);
    }

    const user = (await User.find({ where: { currentTokenId: payload.id, }, }))[ 0 ];
    
    if (!user) {
      return done(new UnauthorizedException(), false);
    }
     
    done(null, user);
  }
}
