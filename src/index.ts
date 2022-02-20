import { Plugin } from "vite"

export default function sql(): Plugin {
  return {
    name: "sql",
    transform(code, id) {
      if (/[.]sql/i.test(id)) {
        return `export default ${JSON.stringify(code)}`
      }
      return {
        code,
        map: null,
      }
    },
  }
}
