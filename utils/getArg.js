const args = process.argv.slice(2);

const getArg = (arg, isBoolean = false) => {
  const argString = arg.length === 1 ? `-${arg}` : `--${arg}`;
  const index = args.indexOf(argString);

  if (isBoolean || index < 0) {
    return index >= 0;
  }

  return args[index + 1];
};

module.exports = getArg;
