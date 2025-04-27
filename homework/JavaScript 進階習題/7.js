//7
class Vector {
  constructor(components) {
    this.components = components;
  }

  add(other) {
    if (this.components.length !== other.components.length) {
      throw new Error("向量長度必須相同才能相加");
    }
    const result = this.components.map((component, index) => component + other.components[index]);
    return new Vector(result);
  }

  sub(other) {
    if (this.components.length !== other.components.length) {
      throw new Error("向量長度必須相同才能相減");
    }
    const result = this.components.map((component, index) => component - other.components[index]);
    return new Vector(result);
  }

  dot(other) {
    if (this.components.length !== other.components.length) {
      throw new Error("向量長度必須相同才能計算內積");
    }
    const result = this.components.reduce((sum, component, index) => sum + component * other.components[index], 0);
    return result;
  }
}

let a = new Vector([1, 2, 3]);
let b = new Vector([4, 5, 6]);
console.log(a.add(b).sub(b).dot(b));
//gemini
