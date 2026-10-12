# OOPS Concepts

Object-oriented programming is a programming paradigm where we model a system as interacting objects that encapsulate state and behavior. The four fundamental concepts are encapsulation, abstraction, inheritance and polymorphism. In real-world application development, I use these concepts together with principles such as SOLID, dependency injection and composition to create maintainable and extensible systems.

## Encapsulation

- Create a class with some functionalities and expose minimal functionality to the outside world without exposing all the logic.
- It is a way to hide the internal implementation details of a class from the outside world.
- It is also a way to protect the data from being accessed or modified by unauthorized users.

## Abstraction

- Abstraction means exposing only the essential functionality to the user while hiding the unnecessary complexity of how it works.
- It is a way to provide a simple interface to the user, so that they can use the class without knowing its internal implementation details.

## Inheritance

- Inheritance means creating a new class based on an existing class, so the new class can reuse its properties and methods and also add or modify its own behavior.

## 4. Polymorphism

- Polymorphism means one interface or method can have different implementations or behaviors.

`
class Animal {
sound() {
console.log("Sound");
}
}

class Dog extends Animal {
sound() {
console.log("Bark");
}
}

class Cat extends Animal {
sound() {
console.log("Meow");
}
}
`
