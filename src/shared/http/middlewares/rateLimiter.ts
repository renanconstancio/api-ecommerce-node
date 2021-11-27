import { Request, Response } from 'express';
import rateLimit from 'express-rate-limit';

const apiRequestLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100, // limit each IP to 2 requests per windowMs
  handler: function (req: Request, res: Response /*next*/) {
    return res.status(429).json({
      error: 'You sent too many requests. Please wait a while then try again',
    });
  },
});

export default apiRequestLimiter;
