import { LightningElement } from "lwc";

export default class App extends LightningElement {
  handleClick(e){
    e.preventDefault();
    var btn = this.template.querySelector('button')
    var originalText = btn.innerText
    var originalWidth = btn.Width
    console.log('originalText::', originalText,'::', originalWidth)
    btn.classList.add('button--saving')
    btn.innerText = 'Saving...'
    setTimeout(function(){
      btn.classList.add('button--saved');
      btn.innerText = 'Saved!'
    }, 3000);
  }
}
