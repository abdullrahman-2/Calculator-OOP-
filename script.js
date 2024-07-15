const Calculator ={
    
     equalBar : document.getElementById("txtInput"),
     FirstValue:null,
    Operator:0,
    NewOperation:true,
    CurrentValues:[],

     // Methods

    WriteText:function(button){
      if( Calculator.equalBar.value !=="" && Calculator.NewOperation === false){
       Calculator.equalBar.value = button.value
       Calculator.NewOperation = false
    return
      }else{
        Calculator.equalBar.value += button.value
      } 
    },


    OperatorClick:function(CurrentOperator)
    {
        Calculator.equalBar.value==="" ?  alert("Please enter first value"):
        Calculator.FirstValue=parseFloat(Calculator.equalBar.value);
        Calculator.equalBar.value="";
        Calculator.Operator=CurrentOperator;
      
    },
    Calculation:function()
    {
        if(Calculator.FirstValue===null)
        {
            alert("please enter first value");
            return;
        }

        if(Calculator.equalBar.value==="")
        {
            alert("Please enter second value");
            return;
        }
        let newValue=parseFloat(Calculator.equalBar.value);
        let result=0;
        switch(Calculator.Operator)
        {
            case '1':
                result=Calculator.FirstValue+newValue;

                break;
            case '2':
                result=Calculator.FirstValue-newValue;
                break;
            case '3':
                result=Calculator.FirstValue*newValue;
                break;
            case '4':
                result=Calculator.FirstValue/newValue;
                 break;
        }
        Calculator.equalBar.value=result

        Calculator.CurrentValues.push(result)
        
        this.FirstValue=null;
        this.Operator=0;
        this.NewOperation=false;
       
    },
    ClearData:function()
    {
        Calculator.equalBar.value="";
        Calculator.FirstValue=null;
        Calculator.Operator=0;
        Calculator.NewOperation=true;
    }

   
}