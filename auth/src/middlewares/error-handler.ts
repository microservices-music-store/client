import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../errors/custom-error';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    console.log('custom error')
    return res.status(err.statusCode).send({ errors: err.serializeErrors() })
  }

  res.status(400).send({ errors: [{ message: 'something went wrong' }] })
}
