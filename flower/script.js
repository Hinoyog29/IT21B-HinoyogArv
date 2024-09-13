class Flower {
    constructor(name, color, bloomSeason, isFragrant) {
      this.name = name;
      this.color = color;
      this.bloomSeason = bloomSeason;
      this.isFragrant = isFragrant;
    }
  
    bloom() {
      return `The ${this.name} blooms in ${this.bloomSeason}.`;
    }
  
    fragrance() {
 
      return this.isFragrant ? `The ${this.name} is fragrant.` : `The ${this.name} is not fragrant.`;
    }
  
    colorDisplay() {
      return `The ${this.name} has a beautiful ${this.color} color.`;
    }
  }
  
  const flower1 = new Flower("Lily", "white", "summer", true);
  
  console.log(flower1.bloom()); 
  console.log(flower1.fragrance()); 
  console.log(flower1.colorDisplay()); 
  

  document.getElementById("flower-bloom").innerText = flower1.bloom();
  document.getElementById("flower-fragrance").innerText = flower1.fragrance();
  document.getElementById("flower-color").innerText = flower1.colorDisplay();