const gray = '\x1b[30m%s\x1b[0m';
const red = '\x1b[31m%s\x1b[0m';
const yellow = '\x1b[33m%s\x1b[0m';
const blue = '\x1b[34m%s\x1b[0m';
const cyan = '\x1b[36m%s\x1b[0m';

/**
 * Determines which console logger and color correspond to each log level
 *
 * @param level - logging level/severity
 * @returns the appropriate console logger and a preset console color to print it in
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
 *
 * @param parentLevel - number of parent functions in the stack to look back at
 * @returns a calling function at the given number of steps back in the stack
 */
const getCallingFunction = (parentLevel: number): string => {
  const e = new Error();
  if (e.stack) {
    const frame: string = e.stack.split('\n')[parentLevel];
    const lineNumber: string = frame.split(':').reverse()[1];

    // Extract the named file near the end of stack trace line
    let functionName: string = 'unparsable';
    if (frame.indexOf('/') !== -1) {
      const [lastFileInFilepath] = frame.split('/').reverse();
      [functionName] = lastFileInFilepath.split(':');
    } else if (frame.indexOf('\\') !== -1) {
      const [lastFileInFilepath] = frame.split('\\').reverse();
      [functionName] = lastFileInFilepath.split(':');
    }
    return `${functionName}:${lineNumber}`;
  }
  return '';
};

/**
 * Generates a standardized formatted log using the given log-level's corresponding logger
 *
 * @param level - logging level/severity
 * @param message - text to be logged
 * @param showCallingFunction - whether the calling function higher in the stack should be included
 */
const log = (level: 'trace' | 'debug' | 'info' | 'warn' | 'error', message: string, showCallingFunction: boolean = false) => {
  const { logger, color } = getLogger(level);
  logger(color, `${level.padEnd(5, ' ')} | ${showCallingFunction ? `${getCallingFunction(3)} | ` : ''}${message}`);
};

export default log;
