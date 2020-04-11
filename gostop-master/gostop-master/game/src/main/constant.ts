import {Card, Month, MonthType, CardType} from './card';

export const Months:Month[] = [
  new Month(MonthType.JAN, "송학", null)
  , new Month(MonthType.FEB, "매조", null)
  , new Month(MonthType.MAR, "벗꽃", "사쿠라")
  , new Month(MonthType.APR, "등나무", "흑싸리")
  , new Month(MonthType.MAR, "창포", "난초")
  , new Month(MonthType.JUN, "목단", null)
  , new Month(MonthType.JUL, "싸리", "홍싸리")
  , new Month(MonthType.AUG, "억새", "공산")
  , new Month(MonthType.SEP, "국진", null)
  , new Month(MonthType.OCT, "단풍", null)
  , new Month(MonthType.NOV, "오동", "똥")
  , new Month(MonthType.DEC, "버드나무", "비")
];

export const BaseCard:Card[] = [
  new Card(1, Months[0], CardType.SHELL)
  , new Card(2, Months[0], CardType.SHELL)
  , new Card(3, Months[0], CardType.PLANT)
  , new Card(4, Months[0], CardType.HIKARI)

  , new Card(5, Months[1], CardType.SHELL)
  , new Card(6, Months[1], CardType.SHELL)
  , new Card(7, Months[1], CardType.PLANT)
  , new Card(8, Months[1], CardType.ANIMAL)

  , new Card(9, Months[2], CardType.SHELL)
  , new Card(10, Months[2], CardType.SHELL)
  , new Card(11, Months[2], CardType.PLANT)
  , new Card(12, Months[2], CardType.HIKARI)

  , new Card(13, Months[3], CardType.SHELL)
  , new Card(14, Months[3], CardType.SHELL)
  , new Card(15, Months[3], CardType.PLANT)
  , new Card(16, Months[3], CardType.ANIMAL)

  , new Card(17, Months[4], CardType.SHELL)
  , new Card(18, Months[4], CardType.SHELL)
  , new Card(19, Months[4], CardType.PLANT)
  , new Card(20, Months[4], CardType.ANIMAL)

  , new Card(21, Months[5], CardType.SHELL)
  , new Card(22, Months[5], CardType.SHELL)
  , new Card(23, Months[5], CardType.PLANT)
  , new Card(24, Months[5], CardType.ANIMAL)

  , new Card(25, Months[6], CardType.SHELL)
  , new Card(26, Months[6], CardType.SHELL)
  , new Card(27, Months[6], CardType.PLANT)
  , new Card(28, Months[6], CardType.ANIMAL)

  , new Card(29, Months[7], CardType.SHELL)
  , new Card(30, Months[7], CardType.SHELL)
  , new Card(31, Months[7], CardType.ANIMAL)
  , new Card(32, Months[7], CardType.HIKARI)

  , new Card(33, Months[8], CardType.SHELL)
  , new Card(34, Months[8], CardType.SHELL)
  , new Card(35, Months[8], CardType.PLANT)
  , new Card(36, Months[8], CardType.ANIMAL)

  , new Card(37, Months[9], CardType.SHELL)
  , new Card(38, Months[9], CardType.SHELL)
  , new Card(39, Months[9], CardType.PLANT)
  , new Card(40, Months[9], CardType.ANIMAL)

  , new Card(41, Months[10], CardType.SHELL)
  , new Card(42, Months[10], CardType.SHELL)
  , new Card(43, Months[10], CardType.DOUBLE_SHELL)
  , new Card(44, Months[10], CardType.HIKARI)

  , new Card(45, Months[11], CardType.DOUBLE_SHELL)
  , new Card(46, Months[11], CardType.PLANT)
  , new Card(47, Months[11], CardType.ANIMAL)
  , new Card(48, Months[11], CardType.HIKARI)
];

export const FirstCard:Card[] = [
  BaseCard[0],
  BaseCard[5],
  BaseCard[9],
  BaseCard[13],
  BaseCard[17],
  BaseCard[21],
  BaseCard[25],
  BaseCard[29],
  BaseCard[33],
  BaseCard[37],
  BaseCard[41],
  BaseCard[45],
];
