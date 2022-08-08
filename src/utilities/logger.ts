const red = '\x1b[31m%s\x1b[0m';
const yellow = '\x1b[33m%s\x1b[0m';
const blue = '\x1b[34m%s\x1b[0m';
const white = '\x1b[37m%s\x1b[0m';

const getLogColor = (level: string): string => {
  switch (level) {
    case 'debug':
      return blue;
    case 'info':
      return white;
    case 'warn':
      return yellow;
    case 'error':
      return red;
    default:
      return white;
  }
};

const log = (level: 'debug' | 'info' | 'warn' | 'error', message: string) => {
  console.log(getLogColor(level), `${level} | ${message}`);
};

export default log;
