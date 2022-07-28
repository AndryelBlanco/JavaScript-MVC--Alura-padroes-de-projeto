class DateHelper{

  constructor(){
    throw new Error('DateHelper não deve ser instanciado.')
  }

  static stringToDate(text){
    
    if(!/\d{4}-\d{2}-\d{2}/.test(text)){
      throw new Error('DATA DEVE ESTAR NO FORMATO yyyy/mm/dd');
    }
      return new Date(...text.split('-').map((item, index) => item - index % 2));
  }

  static dateToString(date){

    return `${date.getDate()}/${(date.getMonth()+1)}/${date.getFullYear()}`;
  }
}