export default function generateId(prefix?: string): string {
  const randomId = crypto.randomUUID();
  return prefix ? `${prefix}-${randomId}` : randomId;
}
