export function validate(value) {
  const name = value.trim();
  if (!name) return "Please enter a username";
  if (name.length > 39) return "Username is too long";
  if (!/^[a-z\d](?:[a-z\d]|-(?=[a-z\d]))*$/i.test(name))
    return "Invalid username format";
  return null;
}