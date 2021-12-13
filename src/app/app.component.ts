import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';
  // navbar = ["Home", "About", "Service", "Contact Us"]
  
  student:any
  constructor(private router: Router){

    this.student = [
      {name:"aniket",age:55,id:1},
      {name:"john",age:43,id:2},
      {name:"kavita",age:32,id:3},
      {name:"raju",age:12,id:4},
    ]

  }

    // @HostListener('click',['$event'])
    // onhostclick(event:Event){
    //   alert("ugfuhfi")
    // }

    condition!:boolean
    
    value(x:boolean){
      this.condition = x
    }
    
    choice:any
    setvalue(v:any){
      this.choice = v.target.value
    }


    names = ["aniket","sam","john"]

    names1 = [
      {name:"aniket"},
      {name:"john"},
      {name:"kavita"},
      {name:"raju"},
    ]

    getmore(){
      this.student = [
        {name:"aniket",age:55,id:1},
        {name:"john",age:43,id:2},
        {name:"kavita",age:32,id:3},
        {name:"raju",age:12,id:4},
        {name:"raju",age:12,id:5},
        {name:"raju",age:12,id:6},
        {name:"raju",age:12,id:7},
        {name:"raju",age:12,id:8},
        {name:"raju",age:12,id:9},
      ]
    }


    trackbyid(index:number,student:any):string{  //return string
      return student.id
    }


    Countrydata:any[] = [
      {"country": "india",
      "people":[
        {"name":"samudra"},
        {"name":"kid"},
        {"name":"rudra"},
        {"name":"ram"},
        ]
      },
      {"country": "pakistan",
      "people":[
        {"name":"rahim"},
        {"name":"khan"},
        {"name":"ali"},
        {"name":"zupi"},
        ]
      }

    ]

    mycolor:string="red"

    data:string = "aniket"
    data1:string = "sam"

    myinput(ev:any){
      this.data = ev.target.value
    }

    // Pipes -------------
    myjson = [{
        "name":"sam","age":44
      },
      {
        "name":"anu","age":24
      }
    ]

    mydate = new Date()


    emp = [
      {name:"Aniket", age:22, gender:"male"},
      {name:"kavita", age:24, gender:"female"},
      {name:"sam", age:21, gender:"male"},
      {name:"john", age:22, gender:"male"},
      {name:"rani", age:28, gender:"female"},
    ]



    student1(){
      this.router.navigate(['/student'])
    }

    

}
