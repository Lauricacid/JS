/**
 * 화투 패를 정의 한다.
 */
export enum MonthType{
  JAN=1,FEB,MAR,APR,MAY,JUN,JUL,AUG,SEP,OCT,NOV,DEC
}

export enum CardType{
  SHELL = "피",
  DOUBLE_SHELL = "쌍피",
  ANIMAL = "열끗",
  PLANT = "띠",
  HIKARI = "광"
}

export class Month{
  private type:MonthType;
  private name: string;
  private alias: string;
  constructor(type, name, alias){
    this.type = type;
    this.name = name;
    this.alias = alias;
  }
}

export class Card{
  private id: number
  private month: Month;
  private type: CardType;
  private isOpened: boolean;
  constructor(id, month, type){
    this.id = id;
    this.month = month;
    this.type = type;
  }

  public setOpened(opened:boolean){
    this.isOpened = opened;
  }
}

