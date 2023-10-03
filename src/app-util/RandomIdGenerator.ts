export default (prefix?: string): string => {
  const randomId = crypto.randomUUID();
  return prefix ? `${prefix}-${randomId}` : randomId;
};
