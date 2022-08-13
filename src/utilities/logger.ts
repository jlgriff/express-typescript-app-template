const gray = '\x1b[30m%s\x1b[0m';
const red = '\x1b[31m%s\x1b[0m';
const yellow = '\x1b[33m%s\x1b[0m';
const blue = '\x1b[34m%s\x1b[0m';
const cyan = '\x1b[36m%s\x1b[0m';

/**
 * Determines which color corresponds to a log's level
 */
const getLogger = (level: string): { logger: (...args: any[]) => void, color: string; } => {
  switch (level) {
    case 'trace':
      return { logger: console.trace, color: cyan };
    case 'debug':
      return { logger: console.debug, color: blue };
    case 'info':
      return { logger: console.info, color: gray };
    case 'warn':
      return { logger: console.warn, color: yellow };
    case 'error':
      return { logger: console.error, color: red };
    default:
      return { logger: console.info, color: gray };
  }
};

/**
 * Determines the calling function at a given parent level
 *
 * e.g. This function itself is at parentLevel 1, the function that called it is at parentLevel 2,
 * and the function that called that one is at parentLevel 3.
 */
const getCallingFunction = (parentLevel: number): string => {
  const e = new Error();
  if (e.stack) {
    const frame = e.stack.split('\n')[parentLevel];
    const lineNumber = frame.split(':').reverse()[1];
    const functionName = frame.split(' ')[5];
    return `${functionName}:${lineNumber}`;
  }
  return '';
};

/**
 * Generates a standardized formatted log using the given level's corresponding logger
 */
const log = (level: 'trace' | 'debug' | 'info' | 'warn' | 'error', message: string, showCallingFunction: boolean = false) => {
  const { logger, color } = getLogger(level);
  logger(color, `${level.padEnd(5, ' ')} | ${showCallingFunction ? `${getCallingFunction(3)} | ` : ''}${message}`);
};

export default log;
