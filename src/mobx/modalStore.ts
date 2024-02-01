import { makeAutoObservable } from "mobx"

class Modal {
  modalName = ""

  constructor() {
    makeAutoObservable(this)
  }
  closeModal = () => {
    this.modalName = ""
  }
  openModal = (name: string) => {
    this.modalName = name
  }
}
export const ModalStore = new Modal()