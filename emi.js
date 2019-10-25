function emicalculator(){ 

    var loanamount=document.getElementById("loanamount").value;
    var rateofinterest=document.getElementById("rateofinterest").value;
    var tenure=document.getElementById("tenure").value;
    var loanvalidate=document.getElementById("loanvalidate");
    var roivalidate=document.getElementById("roivalidate");
    var tenurevalidate=document.getElementById("tenurevalidate");
    var totalemi=document.getElementById("totalemi");
    
    var P=loanamount;
    var r=rateofinterest/(12*100);
    var n=tenure;
    var E=(P * r * Math.pow((1+r),n))/(Math.pow((1+r),n)-1);    
    totalemi.textContent=( E.toFixed(2));

   //LOAN AMOUNT 
    if(loanamount==""){
        loanvalidate.style.color="red";
        loanvalidate.textContent="Enter Amount";
    }
     else if(loanamount.match(/^[A-Za-z_@./#&+^*$-]+$/))
    {
        loanvalidate.style.color="red";
        loanvalidate.textContent="Enter only numbers";
        
    }
    else {
        
        loanvalidate.style.color="green";
        loanvalidate.textContent="valid amount";
    }
    
    //ROI
    if(rateofinterest==""){
        roivalidate.style.color="red";
        roivalidate.textContent="Enter Amount";
    }
     else if(roivalidate.match(/^[A-Za-z_@./#&+^*$-]+$/))
    {
        roivalidate.style.color="red";
        roivalidate.textContent="Enter only numbers";
        
    }
     
    //TENURE AMOUNT
    if(tenure==""){
        tenurevalidate.style.color="red";
        tenurevalidate.textContent="Enter Amount";
    }
   if(tenurevalidate.match(/^[A-Za-z_@./#&+^*$-]+$/))
    {
        tenurevalidate.style.color="red";
        tenurevalidate.textContent="Enter only numbers";
    }
   
   
   

    
}