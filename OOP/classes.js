//-----[CLASSES]---------------------------------------------------------------------------------------

class House {
    constructor(colour) {
    this.colour = colour
    }

    getFurniture() {
        return "bed" //Functions would be shared between all objects of the class
    }
}

const houseObject = new House("yellow")

console.log(houseObject.getFurniture());




