import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../core/errors';
import { logger } from '../../utils/logger';
import { ZodError } from 'zod';

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof AppError) {
        logger.warn(`[AppError] ${err.statusCode} - ${err.message}`);
        return res.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }

    if (err instanceof ZodError) {
        logger.warn(`[ValidationError] ${err.message}`);
        return res.status(400).json({
            status: 'fail',
            message: 'Validation Error',
            errors: err.issues,
        });
    }

    // Unhandled errors
    logger.error(`[UnhandledError] ${err.message}\n${err.stack}`);
    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
    });
};
