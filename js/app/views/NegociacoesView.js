class NegociacoesView extends View{

  constructor(elemento){
    super(elemento);
  }

  _template(model){


    return `
      <table class="table table-hover table-bordered">
        <thead>
            <tr>
              <th>DATA</th>
              <th>QUANTIDADE</th>
              <th>VALOR</th>
              <th>VOLUME</th>
            </tr>
        </thead>
        <tbody>
          ${model.Negociacoes.map((element, index) =>{
            return `
              <tr>
                <td>
                  ${DateHelper.dateToString(element.Data)}
                </td>
                <td>
                  ${element.Quantidade}
                </td>
                <td>
                  ${element.Valor}
                </td>
                <td>
                  ${element.Volume}
                </td>
              </tr>
            `
          }).join('')}
        </tbody>
        <tfoot>
            <td colspan='3'>
            
            </td>
            <td>
              ${
                model.Negociacoes.reduce((total, element) =>{
                  return total + element.Volume;
                }, 0.0)
              }
            </td>
        </tfoot>
      </table>
    `;
  }


}
