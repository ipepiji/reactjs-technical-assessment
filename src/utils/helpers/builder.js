function logBuilder(input) {
  return {
    timestamp: new Date(),
    input,
  };
}

export { logBuilder };
