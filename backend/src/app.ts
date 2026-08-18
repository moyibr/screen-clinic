import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { env } from './config/env';
import { errorHandler } from './api/middlewares/errorHandler';
import { NotFoundError } from './core/errors';

const app: Application = express();

// Security Middlewares
app.use(helmet());

// CORS_ORIGIN supports a comma-separated list, e.g.
// "http://localhost:5173,https://screen-clinic.vercel.app"
const allowedOrigins = env.CORS_ORIGIN.split(',').map((origin) => origin.trim());

app.use(
    cors({
        origin: (origin, callback) => {
            // Allow non-browser requests (curl, server-to-server, health checks) with no Origin header
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error(`CORS: Origin '${origin}' is not allowed`));
            }
        },
        credentials: true,
    })
);

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    message: 'Too many requests from this IP, please try again after 15 minutes',
});
app.use('/api', limiter);

// Body Parsing
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Routes (To be added)
app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({ status: 'success', message: 'Server is healthy' });
});

// Handle undefined routes
app.use((req: Request, res: Response, next) => {
    next(new NotFoundError(`Can't find ${req.originalUrl} on this server!`));
});

// Global Error Handler
app.use(errorHandler);

export default app;
