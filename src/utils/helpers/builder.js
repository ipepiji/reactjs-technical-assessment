function logBuilder(obj) {
  return {
    ...obj,
    timestamp: new Date(),
  };
}

export { logBuilder };
