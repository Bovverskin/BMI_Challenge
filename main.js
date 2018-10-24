class person {
    constructor(weight,height){
        this.weight = weight;
        this.height = height;
    }

    static calculateBMI (weight,height) {
        return weight/(height*height);
    }

    static evaluateBMI (BMI) {
        let text = "";
        if (BMI < 18.5){
            text = "Eat a cookie!" ;

        } else if(BMI > 18.5 && BMI <= 24.9 ){
            text = "Congradulations.  You're a perfect person." ;

        } else if (BMI > 24.9 && BMI < 29.9){
            text = "How about a veggie?"

        } else {
            text = "You're the one for me fatty - Morrissey"
        }
        return "<div><p>" + text + "</p></div>";
    }
    
    static setBMIValue(BMI,text){
        let answer = "<div><h1>Your BMI is " + BMI.toFixed(1) +"</h1><div>" ;
        document.getElementById('answer').innerHTML = answer + text ;
    }

    getValues(){
        let height_category = document.querySelector('input[name = height]:checked').value;
        let weight_category = document.querySelector('input[name = weight]:checked').value;
        this.height = document.getElementById('height-input').value;
        this.weight = document.getElementById('weight-input').value;
        this.height =  height_category === 'inches' ? (this.height*2.54)/100 : this.height/100 ;
        this.weight = weight_category === 'lbs' ? this.weight*0.453592 : this.weight ;
        let BMI =  person.calculateBMI(this.weight,this.height);
        person.setBMIValue(BMI,person.evaluateBMI(BMI));
    }
}



const person1 = new person() ;

let BMI = document.getElementById('calculate-button').addEventListener("click",person1.getValues);
