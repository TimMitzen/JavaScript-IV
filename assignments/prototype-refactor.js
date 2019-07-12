/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
// function GameObject(gameAttrs) {
//   this.createdAt = gameAttrs.createdAt;
//   this.name = gameAttrs.name;
//   this.dimensions = gameAttrs.dimensions;
//   }
// GameObject.prototype.destroy = function() {
// return `${this.name} was removed from the game.`;
// };
class GameObject{
    constructor(gameAttrs){
    this.createdAt = gameAttrs.createdAt;
    this.name = gameAttrs.name;
    this.dimensions = gameAttrs.dimensions;
    }
    destroy(){
      return `${this.name} was removed from the game.`;
    }
  }
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
  
  // // function CharacterStats(charAttrs) {
  // //   GameObject.call(this, charAttrs);
  // //   this.healthPoints = charAttrs.healthPoints;
  // }
  // CharacterStats.prototype = Object.create(GameObject.prototype);
  // CharacterStats.prototype.takeDamage = function() {
  //   return `${this.name} took damage.`;
  // };
  
  class CharacterStats extends GameObject {
    constructor(charAttrs){
      super(charAttrs)
      this.healthPoints= charAttrs.healthPoints;
  }
    takeDamage(){
      return `${this.name} took damage.`;
    }
  }
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  // Humanoid.prototype = Object.create(CharacterStats.prototype);
  
  // function Humanoid(humAttrs) {
  //   GameObject.call(this, humAttrs)
  //   CharacterStats.call(this, humAttrs);
  //   this.team = humAttrs.team;
  //   this.weapons = humAttrs.weapons;
  //   this.language = humAttrs.language;
  // }
  
  class Humanoid extends CharacterStats{
    constructor(humAttrs) {
      super(humAttrs)
      this.team = humAttrs.team;
      this.weapons = humAttrs.weapons;
      this.language = humAttrs.language;
    }
    greet() {
      return `${this.name} offers a greeting in ${this.language}.`
    }
  }
  
  // Humanoid.prototype.greet = function () {
  //   return `${this.name} offers a greeting in ${this.language}.`
  // };
   // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
  // Villain.prototype = Object.create(Humanoid.prototype);
  
  // function Villain(vilAttrs) { 
  //   GameObject.call(this,vilAttrs);
  //   CharacterStats.call(this, vilAttrs);
  //   Humanoid.call(this, vilAttrs);
  //   this.badGuy = vilAttrs.badGuy;
    
  // }
  class Villain extends Humanoid{
    constructor(vilAttrs){
      super(vilAttrs)
      this.badGuy = vilAttrs.badGuy;
    }
    removeHealth1() {
      return this.healthPoints - 15;
    }
    destruction1(){
      if(this.removeHealth1() <= 0){
        return `Death to ${this.name} has occurred.`
      } else { 
          return `${this.name} is still alive.`
      }
    }
  }
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // Villain.prototype.removeHealth1 = function() {//still working ok this part
  //   return this.healthPoints - 15;
  // };
  // Villain.prototype.destruction1 = function(){
  //   if(this.removeHealth1() <= 0){
  //     return `Death to ${this.name} has occurred.`
  //   } else { 
  //       return `${this.name} is still alive.`
  //   }
  // };
  
  // Hero.prototype = Object.create(Humanoid.prototype);
  // Hero.prototype = Object.create(Villain.prototype);
  
  // function Hero(herAttrs){
  //   GameObject.call(this, herAttrs);
  //   CharacterStats.call(this, herAttrs);
  //   Humanoid.call(this,herAttrs);
  //   Villain.call(this,herAttrs);
  //   this.goodGuy = herAttrs.goodGuy;
  //   }
  
    class Hero extends Villain {
      constructor(herAttrs){
        super(herAttrs);
        this.goodGuy = herAttrs.goodGuy;
      }
    }
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    const battleMage = new Villain ({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Troy',
      team: 'Bad Guys',
      weapons: [
        'Bow',
        'Spear',
      ],
      language: 'Elvish',
      badGuy: 'Yes',
      goodGuy: "No"
    });
  
    const blackMage = new Hero ({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 20,
      name: 'Jason',
      team: 'Good Guys',
      weapons: [
        'Wand'
      ],
      language: 'Elvish',
      badGuy: 'No',
      goodGuy: 'Yes'
    });
    console.log(battleMage.removeHealth1());
    console.log(battleMage.destruction1());
    console.log(blackMage.destroy());
    console.log(blackMage.removeHealth1());
    console.log(blackMage.destruction1());
  
    
  
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!