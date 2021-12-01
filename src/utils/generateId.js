export const generateId = () => {
  const num = Math.random().toString().substr(2)
  const date = Date.now().toString(36)
  return num + date
}
