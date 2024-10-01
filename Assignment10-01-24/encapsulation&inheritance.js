
class student{

    constructor(name,age,occupation){
        this.name=name;
        this.age=age;
        this.occupation=occupation;
      

    }
    studentinfo(){
   return `Name: ${this.name}\nAge: ${this.age}\nOccupation: ${this.occupation}`;
  
    }

}
class Student extends student {
constructor(name,age,occupation,course){
super(name,age,occupation);
this.course=course; 
}
studentinfo(){
   return `${super.studentinfo()},\nCourse: ${this.course} `;
   
}


}


const Student1 = new Student(`jin`, 23, `Student`, `BSIT`);
console.log(Student1.studentinfo());
document.getElementById("studentinfo");









