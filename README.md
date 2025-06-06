# 課程：網頁設計 -- 筆記、習題與報告

欄位 | 內容
-----|--------
學期 | 113 學年下學期
學生 |  羅詩喬
學號末兩碼 | 01
教師 | [陳鍾誠](https://www.nqu.edu.tw/educsie/index.php?act=blog&code=list&ids=4)
學校科系 | [金門大學資訊工程系](https://www.nqu.edu.tw/educsie/index.php)
課程教材 | https://github.com/ccc113b/html2server <br/> https://www.w3schools.com/


## **HW1：請寫一個個人網頁（自我介紹）**

> 作業： [HW1](https://github.com/Luo051227/_wp/blob/main/homework/personal)  
### 說明：  
**看以前自學內容自己寫的**  
主要用到的是html跟一些簡單的css，先把html做好，再做css

#**HW2：請設計一個註冊表單**

> 作業： [HW2](https://github.com/Luo051227/_wp/blob/main/homework/form)  
### 說明：  
**看以前自學內容自己寫的**  
之前我只有寫一個非常簡單的表單，但是這次我在那個表單上又增加了一個功能，就是增加一個國家的選單
```html
<label for="country">國家：</label>
<br/>
<select id="country" name="country">
  <option value="tw">台灣</option>
  <option value="us">美國</option>
  <option value="ca">加拿大</option>
  <option value="uk">英國</option>
  <option value="jp">日本</option>
  <option value="kr">韓國</option>
</select>
<br/>
```
select是html的表單元素之一，它是用來建立下拉式選單的，像是如果選單選擇台灣，則繳交表單的值會是tw

## **HW3：JavaScript 練習 （十題）**

> 作業： [HW3](https://github.com/Luo051227/_wp/tree/main/homework/javascript%E7%B7%B4%E7%BF%92)  
### 說明： 
**參考網路&Chatgpt**  
先參考網上的範例，再參考Chatgpt，兩個都參考完以後，才將作業寫出來  

## **HW4：請完成下列 JavaScript 進階習題**

> 作業： [HW4](https://github.com/Luo051227/_wp/tree/main/homework/JavaScript%20%E9%80%B2%E9%9A%8E%E7%BF%92%E9%A1%8C)  
### 說明：  
**全部都參考Chatgpt**  
第二題
```JavaScript
return [...new Set(arr)].sort((a, b) => a - b);
```
第三題
```JavaScript
return arr.reduce((sum, num) => sum + num, 0);
```
第四題
```JavaScript
function deepMerge(obj1, obj2){
    let result = { ...obj1 }; 
    for (let key in obj2) {
        if (obj2[key] instanceof Object && key in obj1) {
            result[key] = deepMerge(obj1[key], obj2[key]); 
        } else {
            result[key] = obj2[key]; 
        }
    }
    return result;
}

const obj1 = { a: 1, b: { x: 2, y: 3 } };
const obj2 = { b: { y: 5, z: 6 }, c: 7 };
console.log(deepMerge(obj1, obj2));
```
第五題
```JavaScript
class Animal {
    constructor(name) {
      this.name = name;
    }
    speak() {
      return `I am ${this.name}`;
    }
  }

  class Dog extends Animal {
    speak() {
      return `Woof! I am ${this.name}`;
    }
  }
  
  const dog = new Dog("Buddy");
  console.log(dog.speak());
```
第六題
```JavaScript
const result = [];
  for (const item of arr) {
    if (predicate(item)) {
      result.push(item);
```
第七題：利用向量加法、向量減法和向量內積  
```JavaScript
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
```

## **HW5：請設計一個個人網站，要能根據路徑做不同的回應**

> 作業： [HW5](https://github.com/Luo051227/_wp/blob/main/homework/web%E6%A0%B9%E6%93%9A%E8%B7%AF%E5%BE%91%E5%81%9A%E4%B8%8D%E5%90%8C%E7%9A%84%E5%9B%9E%E6%87%89)  
### 說明：  
**自己寫的，參考以前自學內容**  
看著以前的東西，邊參考邊改，慢慢寫出來，用html&css

## **HW6：請寫一個程式可以新增三筆貼文**

> 作業： [HW6](https://github.com/Luo051227/_wp/blob/main/homework/%E4%B8%80%E5%80%8B%E7%A8%8B%E5%BC%8F%E5%8F%AF%E4%BB%A5%E6%96%B0%E5%A2%9E%E4%B8%89%E7%AD%86%E8%B2%BC%E6%96%87)  
### 說明：  
**看老師範例**
看[老師範例](https://github.com/ccc113b/html2server/blob/master/02-%E5%BE%8C%E7%AB%AFserver/js/deno/04-sqlite/01-sqliteHello/sqlite2blog.js)
自己修改
```JavaScript
for (const [id, title, body] of db.query("SELECT id, title, body FROM posts")) {
    console.log('ID: '+id + ', ' + 'Title: ' + title + ', ' + 'Body: ' + body);
}
```

## **HW7：請為 sqlite blog 系統加上貼文時間（要顯示出來）**

> 作業： [HW7](https://github.com/Luo051227/_wp/tree/main/homework/%E8%AB%8B%E7%82%BA%20sqlite%20blog%20%E7%B3%BB%E7%B5%B1%E5%8A%A0%E4%B8%8A%E8%B2%BC%E6%96%87%E6%99%82%E9%96%93%EF%BC%88%E8%A6%81%E9%A1%AF%E7%A4%BA%E5%87%BA%E4%BE%86%EF%BC%89)  
### 說明：  
**看老師範例**  
直接複製[老師範例](https://github.com/ccc113b/html2server/blob/master/02-%E5%BE%8C%E7%AB%AFserver/js/deno/04-sqlite/04-blog/app.js)
修改
```Javascript
console.log(`Server run at http://127.0.0.1:8000`)
await app.listen({ port: 8000 });
```

## **HW8：Python 基礎練習**

> 作業： [HW8](https://github.com/Luo051227/_wp/tree/main/homework/Python%20%E5%9F%BA%E7%A4%8E%E7%B7%B4%E7%BF%92)  
### 說明：  
**網上資料參考&Chatgpt輔助**  
這次作業主要是定義一個函數
```python
def a(data):
  #寫入函式內的程式碼
```


## **HW9：請為 blogSignup 加上可以刪除貼文的功能**

> 作業： [HW9](https://github.com/Luo051227/_wp/tree/main/homework/%E8%AB%8B%E7%82%BA%20blogSignup%20%E5%8A%A0%E4%B8%8A%E5%8F%AF%E4%BB%A5%E5%88%AA%E9%99%A4%E8%B2%BC%E6%96%87%E7%9A%84%E5%8A%9F%E8%83%BD)  
### 說明：  
**看老師範例**  
直接複製老師範例

## **期中：聊天機器人**

> 作業： [期中](https://683ef1ac98300a9abb7404e1--bucolic-lollipop-ef58cf.netlify.app/) [程式碼](https://github.com/Luo051227/_wp/tree/main/homework/%E6%9C%9F%E4%B8%AD)  
### 說明：  
利用了在線上課程 生成式AI：文字與圖像生成的原理與實務 中所學到的製作對話機器人以及金鑰產生，加上這學期所學的html、css、javascript，製作一個可用的聊天機器人，當中有請Chatgpt修改程式碼以及畫面的編排，增加了點擊按鍵後，可使畫面黑白轉換，javascript主要由Chatgpt做的

以下是畫面黑白轉換的程式碼：  
**html**  
```html
<button id="theme-toggle" style="position: absolute; top: 10px; right: 10px;">🌙</button>
```
**css**
```css
/* ===== 淺色主題樣式 ===== */
body.light {
  background-color: #f4f4f4;
  color: #111111;
}
/* 深色主題下容器背景也要調整 */
body:not(.light) .chat-container {
  background-color: #2c2c2c;
}
/* 深色主題輸入區 */
body:not(.light) .chat-form input {
  background-color: #3a3a3a;
  color: white;
}

body:not(.light) .chat-form {
  border-top: 1px solid #555;
}
/* ===== 主題切換按鈕 ===== */
#theme-toggle {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 8px 12px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: inherit;
}
```
**javascript**
```Javascript
const themeToggle = document.getElementById('theme-toggle'); // 主題切換按鈕

// 初始主題
let theme = localStorage.getItem('theme') || 'dark';
applyTheme();

// 主題切換按鈕事件
themeToggle.addEventListener('click', () => {
  theme = (theme === 'dark') ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
  applyTheme();
});

// 套用主題樣式
function applyTheme() {
  if (theme === 'light') {
    document.body.classList.add('light');
    themeToggle.textContent = '🌞';
  } else {
    document.body.classList.remove('light');
    themeToggle.textContent = '🌙';
  }
}
```



