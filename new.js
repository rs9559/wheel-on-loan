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
    var f1=0,f2=0,f3=0;
    //LOAN AMOUNT
    if(loanamount==""){
    loanvalidate.style.color="red";
    loanvalidate.textContent="Enter Amount";
    }
    else if(loanamount<300000 || loanamount>1000000 ){
    loanvalidate.style.color="red";
    loanvalidate.textContent=" Range Between 3Lakhs and 10Lakhs";
    }
    else if(isNaN(loanamount))
    {
    loanvalidate.style.color="red";
    loanvalidate.textContent="NUMBERS ONLY";
    }
    else {
    loanvalidate.style.color="green";
    loanvalidate.textContent="VALID";
    f1=1;
    }
    
    
    //ROI
    if(rateofinterest==""){
    roivalidate.style.color="red";
    roivalidate.textContent="Enter Amount";
    }
    else if(isNaN(rateofinterest))
    {
    roivalidate.style.color="red";
    roivalidate.textContent="NUMBERS ONLY";
    }
    else if(rateofinterest>12){
    roivalidate.style.color="red";
    roivalidate.textContent="Please choose below 12%";
    }
    else if((rateofinterest%0.5)!==0){
    roivalidate.style.color="red";
    roivalidate.textContent="Please insert in Multiples of 0.5";
    }
    else {
    roivalidate.style.color="green";
    roivalidate.textContent="VALID";
    f2=1;
    }
    
    //TENURE AMOUNT
    if(tenure==""){
    tenurevalidate.style.color="red";
    tenurevalidate.textContent="Enter Amount";
    }else if(tenure==0){
    tenurevalidate.style.color="red";
    tenurevalidate.textContent="Tenure cannot be zero";
    }
    else if(isNaN(tenure))
    {
    tenurevalidate.style.color="red";
    tenurevalidate.textContent="NUMBERS ONLY";
    }
    else if((tenure%(Math.floor(tenure)))!=0){
    tenurevalidate.style.color="red";
    tenurevalidate.textContent="Tenure cannot be in decimal";
    }
    else if(tenure>60){
    tenurevalidate.style.color="red";
    tenurevalidate.textContent="Tenure should be less than 60 months (5 years)";
    }
    else {
    tenurevalidate.style.color="green";
    tenurevalidate.textContent="VALID";
    f3=1;
    }
    if(f1==1 && f2==1 && f3==1)
    {
    var E=(P * r * Math.pow((1+r),n))/(Math.pow((1+r),n)-1);
    totalemi.textContent=( E.toFixed(2));
    }
    else
    {
    totalemi.textContent=("-----");
    
    }
    }
    /////LOGIN PAGE
    function loginvalidate()
    {
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var loginvalidate=document.getElementById("loginvalidate");
    var passvalidate=document.getElementById("passvalidate");
    
    
    //LOGIN PAGE EMAIL VALIDATION
    if(!email.match( /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/))
    {
    loginvalidate.style.color="red";
    loginvalidate.textContent="Email format invalid";
    }
    else{
    loginvalidate.textContent="";
    
    }
    
    //LOGIN PAGE PASSWORD VALIDATION
    if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,20}$/))
    {
    passvalidate.style.color="red";
    passvalidate.textContent="Password format invalid";
    return false;
    }
    else{
    passvalidate.textContent="";
    return true;
    }
    return true;
    }
    
    
    
    
    
    
    //ELIGIBILITY FOR LOAN
    function eligibility(){
    alert("heee");
    var eligage=document.getElementById("eligage").value;
    var validateage=document.getElementById("validateage");
    
    var elisalary=document.getElementById("elisalary").value;
    var validatesal=document.getElementById("validatesal");
    
    
    var eliemptyp=document.getElementsByName("eliemptyp").value;
    
    
    var loanamount=document.getElementById("loanamount").value;
    var amountvalidate=document.getElementById("amountvalidate").value;
    
    
    var rateofinterest=document.getElementById("rateofinterest").value;
    var roivalidate=document.getElementById("roivalidate");
    
    
    var tenure=document.getElementById("tenure").value;
    var tenurevalidate=document.getElementById("tenurevalidate");
    
    var totalemi=document.getElementById("totalemi");
    var finalCheck=document.getElementById("finalCheck");
    var tenureage=document.getElementById("tenureage");
    
    var P=loanamount;
    var r=rateofinterest/(12*100);
    var n=tenure;
    var f1=0,f2=0,f3=0,f4=0,f5=0,f6=0;
    
    //AGE
    if(eligage>21 && eligage<70 )
    {
    alert("heee1");
    eligage.style.color="green";
    eligage.textContent="VALID AGE";
    f1=1;
    }
    else
    {
    alert("heee2");
    eligage.style.color="red";
    eligage.textContent="INVALID AGE";
    f1=0;
    }
    
    //LOANAMOUNT
    if(loanamount >= 100000 && loanamount<=1000000 && loanamount!="")
    {
    alert("heee3");
    loanvalidate.style.color="green";
    loanvalidate.textContent="Valid amount";
    f2=1;
    }
    else
    {
    alert("heee4");
    loanamount.style.color="red";
    loanvalidate.textContent="Invalid amount";
    f2=0;
    }
    
    if(((loanamount*2)<(elisalary)))
    { alert("heee5");
    loanvalidate.style.color="green";
    loanvalidate.textContent="LOAN AMOUNT ACCEPTED";
    f3=1;
    }
    else
    { alert("heee6");
    loanamount.style.color="red";
    loanvalidate.textContent="LOAN AMOUNT ";
    f3=0;
    }
    ///tenure
    if(tenure=="")
    { alert("heee7");
    tenurevalidate.style.color="red";
    tenurevalidate.textContent="Enter Amount";
    f4=0;
    }
    else if(tenure==0)
    {
    tenurevalidate.style.color="red";
    tenurevalidate.textContent="Tenure cannot be zero";
    f4=0;
    }
    else if(isNaN(tenure))
    {
    tenurevalidate.style.color="red";
    tenurevalidate.textContent="NUMBERS ONLY";
    f4=0;
    }
    else if((tenure%(Math.floor(tenure)))!=0)
    {
    tenurevalidate.style.color="red";
    tenurevalidate.textContent="Tenure cannot be in decimal";
    f4=0;
    }
    else
    {
    tenurevalidate.style.color="green";
    tenurevalidate.textContent="VALID";
    f4=1;
    }
    
    
    
    ////RATE OF INTEREST
    if(rateofinterest=="")
    {
    roivalidate.style.color="red";
    roivalidate.textContent="Enter Amount";
    f5=0;
    }
    else if(isNaN(rateofinterest))
    {
    roivalidate.style.color="red";
    roivalidate.textContent="NUMBERS ONLY";
    f5=0;
    }
    else if(rateofinterest>12)
    {
    roivalidate.style.color="red";
    roivalidate.textContent="Please choose below 12%";
    f5=0;
    }
    else if((rateofinterest%0.5)!==0)
    {
    roivalidate.style.color="red";
    roivalidate.textContent="Please insert in Multiples of 0.5";
    f5=0;
    }
    else
    {
    roivalidate.style.color="green";
    roivalidate.textContent="VALID";
    f5=1;
    }
    if((tenure/12)>(70-eligage)){
    tenureage.style.color="red";
    tenureage.textContent="TENURE LIMIT EXCEEDED";
    f6=0;
    }
    else
    {
    tenureage.textContent="";
    f6=1;
    }
    
    
    
    
    //////
    if(f1==1 && f2==1 && f3==1 &&f4==1&&f5==1&&f6==1)
    {
    finalCheck.style.color="green";
    finalCheck.textContent="You are Eligible ";
    var E=(P * r * Math.pow((1+r),n))/(Math.pow((1+r),n)-1);
    totalemi.textContent=("Estimated Rs: "+ E+ "/month");
    
    return true;
    }
    else
    {
    finalCheck.style.color="red";
    finalCheck.textContent="You are not Eligible,Sorry! ";
    totalemi.textContent=("");
    return false;
    
    }
    
    
    
    
    }
    