import app from './app';
import { env } from './config/env';
import { logger } from './utils/logger';

const PORT = env.PORT || 5000;

const server = app.listen(PORT, () => {
    logger.info(`🚀 Server running in ${env.NODE_ENV} mode on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err: Error) => {
    logger.error(`[UNHANDLED REJECTION] 💥 Shutting down...`);
    logger.error(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});

// Handle uncaught exceptions
process.on('uncaughtException', (err: Error) => {
    logger.error(`[UNCAUGHT EXCEPTION] 💥 Shutting down...`);
    logger.error(err.name, err.message);
    process.exit(1);
});
