class NegociacaoController{

  constructor(){
    let $ = document.querySelector.bind(document); //bind() Mantem a associação com document
    this._inputData = $('#data');
    this._inputValor = $('#valor');
    this._inputQuantidade = $('#quantidade');
    this._listaNegociacoes = new ListaNegociacoes();

    this._negociacoesView = new NegociacoesView($('#negociacoesView'));
    this._negociacoesView.update(this._listaNegociacoes);

    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView($('#msgView'));
    this._mensagemView.update(this._mensagem);
  }

  adiciona(event){
    event.preventDefault();

    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._negociacoesView.update(this._listaNegociacoes);
    
    this._mensagem.texto = 'Negociação adicionada com sucesso!'
    this._mensagemView.update(this._mensagem);
    
    this._lidaComForm();

    console.log(this._listaNegociacoes.Negociacoes)
  }

  _criaNegociacao(){
    return new Negociacao(
      DateHelper.stringToDate(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }

  _lidaComForm(){
    this._inputData.value = '';
    this._inputQuantidade.value = '';
    this._inputValor.value = '';

    this._inputData.focus();
  }
}