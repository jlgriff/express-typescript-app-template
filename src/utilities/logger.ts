const log = (level: 'debug' | 'info' | 'warn' | 'error', message: string) => {
  console.log(level, '|', message);
};

export default log;
