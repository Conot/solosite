//function used for the stop loss calculator.
//uses the values from inputs to calculate the stop loss and output the result.

function calculator()
{
    var cryptoP = document.getElementById('currentprice').value 
    var cryptoB = document.getElementById('totalamount').value
    var cryptoStop = cryptoP-cryptoP*0.15
    var cryptoLoss = cryptoB-cryptoB*0.15
    
    document.getElementById("stoptotal").value = "$"+cryptoStop +" or "+ cryptoLoss+"btc"
    console.log(cryptoStop) 
}

