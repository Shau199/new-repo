//10. Стратегия 50-30-20 - это простой способ составления бюджета, который включает в себя расходование 50% дохода после уплаты налогов на нужды, 30% дохода после уплаты налогов на потребности и 20% дохода после уплаты налогов на сбережения или погашение долга.
// Учитывая доход после уплаты налогов как ati, вы должны вернут объект, показывающий, сколько человеку нужно потратить на нужды, желания и сбережения.

// fiftyThirtyTwenty(10000) ➞ { "Needs": , "Wants": , "Savings": }

// fiftyThirtyTwenty(50000) ➞ { "Needs": , "Wants": , "Savings": }

// fiftyThirtyTwenty(13450) ➞ { "Needs": , "Wants": , "Savings":  }


let total = 10000
let first ={
    Needs:  total * 0.5 ,
    Wants: total * 0.3 ,
    Savings: total * 0.2 ,
}

console.log(total , first);

let total2 = 50000
let second ={
    Needs: total2 * 0.5 ,
    Wants: total2 * 0.3 ,
    Savings: total2 * 0.2 ,
}

console.log(total2 , second);

let total3 = 13450
let third ={
    Needs:  total3 * 0.5 ,
    Wants: total3 * 0.3 ,
    Savings: total3 * 0.2 ,
}

console.log(total3 , third);