import { locationList } from './locationList.js'

const parentHTMLElement = document.querySelector("#locations__list")

parentHTMLElement.innerHTML = locationList()