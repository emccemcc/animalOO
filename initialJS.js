window.alert("Hi!");

class Animal{
  constructor(species){
    this.species = species;
    this.legs = 4;
    this.head = 1;
    this.creature = true;
  }
    eat(){
      console.log("Nom Nom Nom!");
    }
    speak(){
      console.log(this.species+" makes a sound")
    }
  }
//end of Animal class


//Start of dog sub class
//idea that we have extends then super

class Dog extends Animal{
  constructor(name,species,legs,head,creature){
    super(species,legs,head,creature);
    this.species = "Dog";
    this.name = name;
  }
    speak(){
      console.log(this.name+" says hello!");
    }
  }




/*
  1. Create a class called Animal that has a constructor that

takes a species argument and assigns it to the species

property of the object.

  2. Define a method called eat() that console logs "Nom

Nom Nom!".

  3. Define a method called speak() that console logs

<Animal.species> makes a sound .

  4. Design a subclass that extends Animal called Dog . In the

dog, constructor accept a name argument and sets it to a

name property on the object. The constructor should

also set the species to "Dog".

5. Override the speak() for the Dog class so that it logs

<Dog.name> says hello!
*/
