export class test {
    name:string;
    id: number;
 constructor(name:string,id:number){
    this.name = name;
    this.id = id ;
 }
 set setNAame(name:string){
   this.name =name;
 }
 get getName(){
  return this.name;

 }
}


