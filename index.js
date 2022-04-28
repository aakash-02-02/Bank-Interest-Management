// this will not be applicable if our user is increasing.to make it applicable we use 2-method


// function calculateInterest(){
//     let bankBalance1 = Number(document.getElementById('bank-balance-1').value)
//     let bankBalance2 = Number(document.getElementById('bank-balance-2').value)
//     let bankBalance3 = Number(document.getElementById('bank-balance-3').value)


//     let updatedBankBalance1 = document.getElementById('updated-bank-balance-1')
//     let updatedBankBalance2 = document.getElementById('updated-bank-balance-2')
//     let updatedBankBalance3 = document.getElementById('updated-bank-balance-3')

//     let updatedBalanceAccount = [bankBalance1, bankBalance2, bankBalance3];


//     for (let i = 0; i < updatedBalanceAccount.length; i++) {

//         updatedBalanceAccount[i] = Number(updatedBalanceAccount[i]);

//         if (updatedBalanceAccount[i] > 200000) {
//             updatedBalanceAccount[i] = ((updatedBalanceAccount[i]) + (updatedBalanceAccount[i] * 0.1)) - (updatedBalanceAccount[i] * 0.002);
//         }

//         else if (updatedBalanceAccount[i] > 100000) {
//             updatedBalanceAccount[i] = ((updatedBalanceAccount[i] + updatedBalanceAccount[i] * 0.05) - (updatedBalanceAccount[i] * 0.0005));
//         }

//         else {
//             updatedBalanceAccount[i] = (updatedBalanceAccount[i] + (updatedBalanceAccount[i] * 0.03));

//         }

//     }
//     updatedBankBalance1.value = updatedBalanceAccount[0];
//     updatedBankBalance2.value = updatedBalanceAccount[1];
//     updatedBankBalance3.value = updatedBalanceAccount[2];
// }

// 2nd-method

function calculateInterest() {

    let inputBankBalance = document.getElementsByClassName("input-balance");

    let updatedBankBalance = document.getElementsByClassName('updated-display-balance');

    let temp;

    for (let i = 0; i < inputBankBalance.length; i++) {

        temp = Number(inputBankBalance[i].value);

        if (temp > 200000) {
            temp = ((temp) + (temp * 0.1)) - (temp * 0.002);
        }
        else if (temp > 100000) {
            temp = ((temp + temp * 0.05) - (temp * 0.0005));
        }
        else {
            temp = (temp + (temp * 0.03));
        }
        updatedBankBalance[i].value = temp;
    }
}
function addRow() {

}
