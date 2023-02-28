class person{
    constructor(name, age, profession){
        this.name=name;
        this.age=age;
        this.profession=profession;        
    }
    doubleAge(){
        return this.age*2;
    }
}
const alice =new person("alice",25,"QA");
console.log(alice.name);
console.log(alice.doubleAge());