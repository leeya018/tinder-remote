import { makeAutoObservable, toJS } from "mobx"

class App {
  constructor() {
    makeAutoObservable(this)
  }
}
const appStore = new App()
export default appStore
