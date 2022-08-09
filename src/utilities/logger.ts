const red = '\x1b[31m%s\x1b[0m';
const yellow = '\x1b[33m%s\x1b[0m';
const blue = '\x1b[34m%s\x1b[0m';
const white = '\x1b[37m%s\x1b[0m';

/**
 * Determines which color corresponds to a log's level
 */
const getLogger = (level: string): { logger: (...args: any[]) => void, color: string; } => {
  switch (level) {
    case 'debug':
      return { logger: console.debug, color: blue };
    case 'info':
      return { logger: console.info, color: white };
    case 'warn':
      return { logger: console.warn, color: yellow };
    case 'error':
      return { logger: console.error, color: red };
    default:
      return { logger: console.info, color: white };
  }
};

/**
 * Generates a standardized log in a color corresponding to the log's level
 */
const log = (level: 'debug' | 'info' | 'warn' | 'error', message: string) => {
  const { logger, color } = getLogger(level);
  logger(color, `${level.padEnd(5, ' ')} | ${message}`);
};

export default log;
