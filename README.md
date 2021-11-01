# Octet_stabilizer
Play [here](https://yu-huanwu.github.io/Octet_stabilizer/)!

## Background
A JavaScript Game involvling Atoms bonding that demonstrate how octet rule works in Chemistry. Bond to the atom that has the correct amount of valence electrons, be sure to avoid atoms that don't have the right number of electrons!

## Functionality & MVPs
In Octet Stabilizer, users will be able to:
- Move an atom around.
- Atoms will bounce around the canvas. 
```javascript
collisionDetect() {
        for (let j = 0; j < this.game.atoms.length; j++) {
            if (!(this === this.game.atoms[j])) {
                const dx = this.pos[0] - this.game.atoms[j].pos[0];
                const dy = this.pos[1] - this.game.atoms[j].pos[1];
                const distance = Math.sqrt(dx * dx + dy * dy);

                
                if (distance < (this.radius) + this.game.atoms[j].radius) {
                    this.vel[0] = -(this.vel[0]);
                    this.game.atoms[j].vel[1] = -(this.vel[1]);
                    this.pos[0] += this.vel[0];
                    this.game.atoms[j].pos[0] += this.game.atoms[j].vel[0];
                }
            }
        }
    }
```
- Bond with another atom that match according to the octet rule.
- Time reduction if player bonds poisonous molecules.
- See which molecules were created from the bonding.

![preview of the game](https://github.com/Yu-HuanWu/Yu-HuanWu/blob/main/images/octetgif.gif?raw=true)

In addition, this project will include:
- Instruction on how to play the game.

![instruction](https://github.com/Yu-HuanWu/Octet_stabilizer/blob/main/src/assets/InstructionMenu.gif?raw=true)

- Handy Dandy README.md

## Wireframes
![webframe](https://raw.githubusercontent.com/Yu-HuanWu/Octet_stabilizer/main/webframe.png)

## Technologies
- Canvas
- Webpack
- npm

## Implementation Timeline
### Day 1 Sept 2: 
Research physics of particles on canvas, setup project.
### Day 2 Sept 3: 
Getting webpack up and running, set up canvas. Create UserAtom and Atom classes.
### Day 3-4 Sept 4-5: 
Implement logics of collision detection, bonuncing physics, and ensure correct render on the canvas.
### Day 5 Sept 6: 
Implement BindKeyHandler for user controls and assign graphics to instances.
### Day 6 Sept 7: 
Deploy GitHub pages, double check to ensure correct references and links on GitHub pages.

## Bonus
- Vary atoms' sizes based on their actual relative sizes.
- Rotating electrons.