import passport from 'passport';
import passportJwt from 'passport-jwt';
import { User } from '../entity/User';
import { JWT_SECRET } from '../utils/secrets';
import { getManager } from 'typeorm';

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;
const entityManager = getManager();

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_SECRET,
    },
    async function (jwtToken, done) {
      try {
        const user = await entityManager.findOne(User, { email: jwtToken.email });
        if (!user) {
          return done(undefined, false);
        }
        return done(undefined, user, jwtToken);
      } catch (error) {
        return done(error, false);
      }
    }
  )
);
