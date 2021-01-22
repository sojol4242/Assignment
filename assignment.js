// github link : 


// kilometer to meter problem:
function kilometerToMeter(lenght) {
    //when lenght is greater then 0 or equal this code execute;
    if (lenght >= 0) {
        var result = lenght * 1000;
        return result;
    } else {
        return `You can't put  a negative input.\nYour input ${lenght}.\nPlease Enter a Valid length`;
        //when lenght is less then 0 this code execute;
    }
}
console.log(kilometerToMeter(1));




// budget calculator problem:
function budgetCalculator(watch, phone, laptop) {
    //when input value is greater then 0 or equal this code execute;
    if (watch >= 0 && phone >= 0 && laptop >= 0) {
        var watchTotal = watch * 50;
        var phoneTotal = phone * 100;
        var laptopTotal = laptop * 500;
        var grandTotal = watchTotal + phoneTotal + laptopTotal;
        return grandTotal;
    }
    //when input value is less then 0  this code execute;
    else {
        return `You can't put a negative input.\nYour input ${watch} ${phone} ${laptop}.\nPlease Enter a Valid input`;
    }
}
console.log(budgetCalculator(1, 1, 1))





// hotelcost problem :
function hotelCost(day) {
    var costFirst = 10 * 100;
    var costSecond = 10 * 80;
    var costThird = (day - 20) * 50;
    var total1 = costFirst + costSecond + costThird;
    var total2 = costFirst + (day - 10) * 80;
    var total3 = day * 100;
    //when day is greater then 0  this code execute;
    if (day > 0 && day != 0) {
        if (day > 20) {
            return total1;
        } else if (day <= 20 && day > 10) {
            return total2;
        } else if (day > 0 && day <= 10) {
            return total3;
        }
    }
    //when day is  0 or negative this code execute;
    else {
        return `You can't put Zero input and a negative input.\nYour input ${day}.\nPlease Enter a Valid day`;
    }
}
console.log(hotelCost(21));




// megaFriend problem :


var myFriends = ["Sojol", "Adnan", "Shohi", "Moniruzzaman", "Moniruzzaman", "Jhankar Mahbub", "Programming Hero(web development)"];

function megaFriend(arr) {
    var result = [];
    for (let i = 0; i < arr.length; i++) {
        let currentItem = arr[i];
        if (currentItem.length > result.length) {
            result = arr[i];
        }

    }
    return result;
}
console.log(megaFriend(myFriends));