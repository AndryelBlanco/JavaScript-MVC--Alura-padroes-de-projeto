class View {

  constructor(element){
    this._elemento = element;
  }

  _template(){
    throw new Error('O método template deve ser implementado');
  }

  update(model){
    this._elemento.innerHTML = this._template(model);
  }
}