export default function save (string, todos) {
  window.localStorage.setItem(string, JSON.stringify(todos))
}
