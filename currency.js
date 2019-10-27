let CadToUsd = 1.5;
let UsdToCad = 0.5;


const currency = {
    CadToUsd: function(amount){
        return amount * CadToUsd;
    },
    UsdToCad: function(amount){
        return amount * UsdToCad;
    },
    setRate: function(rateName, rateValue){
        if(rateName === "CadToUsd"){
            CadToUsd = rateValue;
            return true;
        }else if(rateName === "UsdToCad"){
            UsdToCad = rateValue;
            return true;
        }else{
            return false;
        }
    },
    getRate: function(rateName){
        if(rateName === "CadToUsd"){
            return CadToUsd;
        }else if(rateName === "UsdToCad"){
            return UsdToCad;
        }else{
            return false;
        }
    }
}

module.exports = currency;