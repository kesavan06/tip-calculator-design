document.addEventListener('DOMContentLoaded',function(){
    const billAmount=document.getElementById('txt_bill');
    const tipPercentage=document.querySelectorAll('tip_btn');
    const customTipPercentage=document.getElementById('custom_tip');
    const numPeople=document.getElementById('txt_people')

    billAmount.addEventListener("input",calculateTip);

    customTipPercentage.addEventListener("input",calculateTip);

    numPeople.addEventListener("input",calculateTip);

    tipPercentage.forEach(button =>{
        button.addEventListener("click",function(){
            customTipPercentage.value=this.dataset.tipPercentage;
            calculateTip();
        });
    });
});
function calculateTip(){
    const bill=parseFloat(document.getElementById('txt_bill').value);
    let tipPtg;
    const custom_tip=parseFloat(document.getElementById("custom_tip").value);

    if(custom_tip){
        tipPtg=custom_tip;
    }
    else{
        tipPtg=parseFloat(document.querySelector('tip_btn.active').dataset.tipPtg);
    }

    const no_of_people=parseFloat(document.getElementById('txt_people').value);

    const tipAmount=(billAmount*(tipPercentage/100))/no_of_people;
    const totalAmount=(bill+(bill*(tipPtg/100)))/no_of_people;

    document.getElementById('tip_amount').innerText=tipAmount;
    document.getElementById('total_amount').innerText=totalAmount;
}


