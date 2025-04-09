let chance = true;

const Root_div = document.getElementById('Root');


const Square = function(color , id , piece){
    return {
        color , id , piece
    };
};

const SquareRow = function(rowId){
const Row = [];

const SquareRow = document.createElement("div");

SquareRow.classList.add("row");

const abcd = ['a' , 'b' , 'c' ,'d' , 'e' ,'f' ,'g' ,'h'];
let ele;
abcd.forEach(function(el,idx){
    const SquareCell = document.createElement("div");

    if(rowId%2==0){
        if (idx % 2 === 0) {
            ele = Square("Black", el + rowId, null);
            SquareCell.classList.add('Square', 'Black');
        } else {
            ele = Square("White", el + rowId, null);
            SquareCell.classList.add('Square', 'White');
        }
    } else {
        if (idx % 2 === 0) {
            ele = Square("White", el + rowId, null);
            SquareCell.classList.add('Square', 'White');
        } else {
            ele = Square("Black", el + rowId, null);
            SquareCell.classList.add('Square', 'Black');
        }
    }

    Row.push(ele);
    SquareCell.id = ele.id;
    SquareRow.appendChild(SquareCell);

});

Root_div.appendChild(SquareRow);
return Row;
}

const initGame = function(){
    return [SquareRow(8),SquareRow(7),SquareRow(6),SquareRow(5),SquareRow(4),SquareRow(3),SquareRow(2),SquareRow(1)];
}


const globalState = initGame();
const flatData = globalState.flat();

flatData.forEach(function(el){
   if(el.id[1]=='7'){
   const squareDiv =  document.getElementById(el.id); 
   
   const span = document.createElement('span');
   span.classList.add('piece');

  const img = document.createElement('img');
  img.src = "pieces/black/pawn.png"; 
  img.alt = "Black Pawn";
  img.classList.add("piece-img");

  span.appendChild(img);
  squareDiv.appendChild(span);

   }

    if(el.id[1] == '2'){
        const squareDiv =  document.getElementById(el.id); 
   
        const span = document.createElement('span');
        span.classList.add('piece');
     
        const img = document.createElement('img');
       img.src = "pieces/white/pawn.png"; 
       img.alt = "White Pawn";
       img.classList.add("piece-img");
     
       span.appendChild(img);
       squareDiv.appendChild(span);
    }

    if(el.id == 'b8' || el.id == 'g8'){
        const squareDiv =  document.getElementById(el.id); 
   
        const span = document.createElement('span');
        span.classList.add('piece');
     
        const img = document.createElement('img');
       img.src = "pieces/black/knight.png"; 
       img.alt = "Black Knight";
       img.classList.add("piece-img");
     
       span.appendChild(img);
       squareDiv.appendChild(span);
    }

    if(el.id == 'b1' || el.id == 'g1'){
        const squareDiv =  document.getElementById(el.id); 
   
        const span = document.createElement('span');
        span.classList.add('piece');
     
        const img = document.createElement('img');
       img.src = "pieces/white/knight.png"; 
       img.alt = "White Knight";
       img.classList.add("piece-img");
     
       span.appendChild(img);
       squareDiv.appendChild(span);
    }

    if(el.id == 'a1' || el.id == 'h1'){
        const squareDiv =  document.getElementById(el.id); 
   
        const span = document.createElement('span');
        span.classList.add('piece');
     
        const img = document.createElement('img');
       img.src = "pieces/white/rook.png"; 
       img.alt = "White Rook";
       img.classList.add("piece-img");
     
       span.appendChild(img);
       squareDiv.appendChild(span);
    }

    if(el.id == 'a8' || el.id == 'h8'){
        const squareDiv =  document.getElementById(el.id); 
   
        const span = document.createElement('span');
        span.classList.add('piece');
     
        const img = document.createElement('img');
       img.src = "pieces/black/rook.png"; 
       img.alt = "Black Rook";
       img.classList.add("piece-img");
     
       span.appendChild(img);
       squareDiv.appendChild(span);
    }

    if(el.id == 'c8' || el.id == 'f8'){
        const squareDiv =  document.getElementById(el.id); 
   
        const span = document.createElement('span');
        span.classList.add('piece');
     
        const img = document.createElement('img');
       img.src = "pieces/black/bishop.png"; 
       img.alt = "Black Bishop";
       img.classList.add("piece-img");
     
       span.appendChild(img);
       squareDiv.appendChild(span);
    }

    if(el.id == 'c1' || el.id == 'f1'){
        const squareDiv =  document.getElementById(el.id); 
   
        const span = document.createElement('span');
        span.classList.add('piece');
     
        const img = document.createElement('img');
       img.src = "pieces/white/bishop.png"; 
       img.alt = "White Bishop";
       img.classList.add("piece-img");
     
       span.appendChild(img);
       squareDiv.appendChild(span);
    }

    if(el.id == 'd1'){
        const squareDiv =  document.getElementById(el.id); 
   
        const span = document.createElement('span');
        span.classList.add('piece');
     
        const img = document.createElement('img');
       img.src = "pieces/white/king.png"; 
       img.alt = "White King";
       img.classList.add("piece-img");
     
       span.appendChild(img);
       squareDiv.appendChild(span);
    }

    if(el.id == 'e1'){
        const squareDiv =  document.getElementById(el.id); 
   
        const span = document.createElement('span');
        span.classList.add('piece');
     
        const img = document.createElement('img');
       img.src = "pieces/white/queen.png"; 
       img.alt = "White Queen";
       img.classList.add("piece-img");
     
       span.appendChild(img);
       squareDiv.appendChild(span);
    }

    if(el.id == 'e8'){
        const squareDiv =  document.getElementById(el.id); 
   
        const span = document.createElement('span');
        span.classList.add('piece');
     
        const img = document.createElement('img');
       img.src = "pieces/black/queen.png"; 
       img.alt = "Black Queen";
       img.classList.add("piece-img");
     
       span.appendChild(img);
       squareDiv.appendChild(span);
    }

    if(el.id == 'd8'){
        const squareDiv =  document.getElementById(el.id); 
   
        const span = document.createElement('span');
        span.classList.add('piece');
     
        const img = document.createElement('img');
       img.src = "pieces/black/king.png"; 
       img.alt = "Black King";
       img.classList.add("piece-img");
     
       span.appendChild(img);
       squareDiv.appendChild(span);
    }
});

const clearHighlight = function(){
    flatData.forEach(function(el){
        document.getElementById(el.id).classList.remove('highlight');
    });
};

const clearRedAlert = function(){
    flatData.forEach(function(el){
       document.getElementById( el.id).classList.remove('RedAlert');
    })
}

const selfHighlight = function(id){
document.getElementById(id).classList.add('SelfHighlight');
}

const clearSelfHighlight = function(){
flatData.forEach(function(el){
    document.getElementById(el.id).classList.remove('SelfHighlight');
})
}

const renderHighlight = function(id){
const squareDiv = document.getElementById(id);
squareDiv.classList.add('highlight');
}

let CurrPosition ;
let KillingIds = [];


const alertForEnemy = function(color ,...array ) {
    const enemy = (color==="Black")? "White" : "Black"; 

    array.forEach(function(el){ 
      const elem = document.getElementById(el);

      const img = elem?.querySelector("img");
      if (img && img.alt.includes(enemy)){
        const id = elem.id;
        KillingIds.push(id);
        document.getElementById(id).classList.add("RedAlert");  
      }
       
    });

};

const WhitePawnClick = function(id){
    clearRedAlert();
if(!id) return;
clearRedAlert();
KillingIds = [];
CurrPosition = id;
const char = id[0];
        
    const prevChar = String.fromCharCode(char.charCodeAt(0) - 1);

    const nextChar = String.fromCharCode(char.charCodeAt(0) + 1);

    let CaptureIds = [];
    if(char == 'a'){
      CaptureIds =[`${nextChar}${+id[1]+1}`];
    }

    else if(char == 'h'){
    CaptureIds =[`${prevChar}${+id[1]+1}`]; 
    }
    else{
     CaptureIds = [`${prevChar}${+id[1]+1}`,`${nextChar}${+id[1]+1}`];
    }

    alertForEnemy("White" ,...CaptureIds);

clearSelfHighlight();
selfHighlight(CurrentStateId);

if(id[1]=='2'){

clearHighlight();

const highlightIds = [`${id[0]}${+id[1]+1}`,`${id[0]}${+id[1]+2}`];

let spaceOccupied = false;
highlightIds.forEach(function(el){   
flatData.forEach(function(arg){
    if(arg.id===el && !spaceOccupied){

       if(document.getElementById(el).innerHTML){
        spaceOccupied = true;
       }

       else renderHighlight(el);
    }
    
});
});

} else{
    clearHighlight();

    const highlightIds = [`${id[0]}${+id[1]+1}`];
    let spaceOccupied = false;
    highlightIds.forEach(function(el){   
        flatData.forEach(function(arg){
            if(arg.id===el && !spaceOccupied){
               if(document.getElementById(el).innerHTML){
                spaceOccupied = true;
               } 
               else renderHighlight(el);
            }
            
        });
        });
 }

}

const BlackPawnClick = function(id){
    clearRedAlert();
    if(!id ) return;
    clearRedAlert();
    KillingIds =[];
    CurrPosition = id;
    clearSelfHighlight();
    selfHighlight(id);

    const char = id[0];
        
    const prevChar = String.fromCharCode(char.charCodeAt(0) - 1);

    const nextChar = String.fromCharCode(char.charCodeAt(0) + 1);
    
    let CaptureIds = [];
    if(char == 'a'){
      CaptureIds =[`${nextChar}${+id[1]-1}`];
    }

    else if(char == 'h'){
    CaptureIds =[`${prevChar}${+id[1]-1}`]; 
    }
    else{
     CaptureIds = [`${prevChar}${+id[1]-1}`,`${nextChar}${+id[1]-1}`];
    }

    alertForEnemy("Black" ,...CaptureIds);
   
    if(id[1]=='7'){
        clearHighlight();

        const highlightIds = [`${id[0]}${+id[1]-1}`,`${id[0]}${+id[1]-2}`];
        
        let spaceOccupied = false;
        highlightIds.forEach(function(el){   
        flatData.forEach(function(arg){
            if(arg.id===el && !spaceOccupied){
               if(document.getElementById(el).innerHTML){
                spaceOccupied = true;
               } 
               else renderHighlight(el);
            }
            
        });
        });
        
        } else{
        clearHighlight();
        const highlightIds = [`${id[0]}${+id[1]-1}`];
        let spaceOccupied = false;    
        highlightIds.forEach(function(el){   
            flatData.forEach(function(arg){
                if(arg.id===el && !spaceOccupied){
                   if(document.getElementById(el).innerHTML){
                    spaceOccupied = true;
                   } 
                   else renderHighlight(el);
                }
                
            });
            });
         }   
}

const WhiteKnigtClick = function(id) {
    clearRedAlert();
    CurrPosition = id;
    clearSelfHighlight();
    selfHighlight(id);
  
    let highlightIds = [];
    let CaptureIds = [];
  
    const file = id[0];
    const rank = +id[1];
  
    const knightMoves = [
      [-2, -1], [-2, 1],
      [-1, -2], [-1, 2],
      [1, -2], [1, 2],
      [2, -1], [2, 1]
    ];
  
    for (let [df, dr] of knightMoves) {
      const newFile = String.fromCharCode(file.charCodeAt(0) + df);
      const newRank = rank + dr;
  
      if (newFile >= 'a' && newFile <= 'h' && newRank >= 1 && newRank <= 8) {
        const occupied = `${newFile}${newRank}`;
        const element = document.getElementById(occupied);
  
        if (!element) continue;
  
        const img = element.querySelector("img");
  
        if (img && img.alt.includes("Black")) {
          CaptureIds.push(occupied);
        } else if (!element.innerHTML.trim()) {
          highlightIds.push(occupied);
        }
      }
    }
  
    console.log(CaptureIds);
    clearHighlight();
  
    console.log(highlightIds);
    highlightIds.forEach(function(el) {
      document.getElementById(el).classList.add('highlight');
    });
  
    alertForEnemy("White", ...CaptureIds);
};

const BlackKnigtClick = function(id) {
    CurrPosition = id;
    clearSelfHighlight();
    selfHighlight(id);
  
    let highlightIds = [];
    let CaptureIds = [];
  
    const file = id[0];
    const rank = +id[1];
  
    const knightMoves = [
      [-2, -1], [-2, 1],
      [-1, -2], [-1, 2],
      [1, -2], [1, 2],
      [2, -1], [2, 1]
    ];
  
    for (let [df, dr] of knightMoves) {
      const newFile = String.fromCharCode(file.charCodeAt(0) + df);
      const newRank = rank + dr;
  
      if (newFile >= 'a' && newFile <= 'h' && newRank >= 1 && newRank <= 8) {
        const occupied = `${newFile}${newRank}`;
        const element = document.getElementById(occupied);
  
        if (!element) continue;
  
        const img = element.querySelector("img");
  
        if (img && img.alt.includes("White")) {
          CaptureIds.push(occupied);
        } else if (!element.innerHTML.trim()) {
          highlightIds.push(occupied);
        }
      }
    }
  
    console.log(CaptureIds);
    clearHighlight();
  
    console.log(highlightIds);
    highlightIds.forEach(function(el) {
      document.getElementById(el).classList.add('highlight');
    });
  
    alertForEnemy("Black", ...CaptureIds);
};

const WhiteRookClick = function(id) {
    clearRedAlert();
    CurrPosition = id;
    clearSelfHighlight();
    selfHighlight(id);
    clearHighlight();
  
    let highlightIds = [];
    let CaptureIds = [];
  
    const char1 = id[0];
    const char2 = +id[1];
    let travelId;
  
    for (let i = char2 + 1; i <= 8; i++) {
      travelId = `${char1}${i}`;
      const element = document.getElementById(travelId);
      const img = element.querySelector("img");
  
      if (img && img.alt) {
        if (img.alt.includes("Black")) {
          CaptureIds.push(travelId);
          break;
        } else break;
      } else {
        highlightIds.push(travelId);
      }
    }
  
    for (let i = char2 - 1; i >= 1; i--) {
      travelId = `${char1}${i}`;
      const element = document.getElementById(travelId);
      const img = element.querySelector("img");
  
      if (img && img.alt) {
        if (img.alt.includes("Black")) {
          CaptureIds.push(travelId);
          break;
        } else break;
      } else {
        highlightIds.push(travelId);
      }
    }
  
    for (let i = char1.charCodeAt(0) - 1; i >= 'a'.charCodeAt(0); i--) {
      const ch = String.fromCharCode(i);
      travelId = `${ch}${char2}`;
      const element = document.getElementById(travelId);
      const img = element.querySelector("img");
  
      if (img && img.alt) {
        if (img.alt.includes("Black")) {
          CaptureIds.push(travelId);
          break;
        } else break;
      } else {
        highlightIds.push(travelId);
      }
    }
  
    for (let i = char1.charCodeAt(0) + 1; i <= 'h'.charCodeAt(0); i++) {
      const ch = String.fromCharCode(i);
      travelId = `${ch}${char2}`;
      const element = document.getElementById(travelId);
      const img = element?.querySelector("img");
  
      if (img && img.alt) {
        if (img.alt.includes("Black")) {
          CaptureIds.push(travelId);
          break;
        } else break;
      } else {
        highlightIds.push(travelId);
      }
    }
  
    highlightIds.forEach(function(el) {
      document.getElementById(el).classList.add("highlight");
    });
  
    alertForEnemy("White", ...CaptureIds);
};

const BlackRookClick = function(id){
    clearRedAlert();
    CurrPosition = id;
    clearSelfHighlight();
    selfHighlight(id);
    clearHighlight();
  
    let highlightIds = [];
    let CaptureIds = [];
  
    const char1 = id[0];
    const char2 = +id[1];
    let travelId;
  
    for (let i = char2 + 1; i <= 8; i++) {
      travelId = `${char1}${i}`;
      const element = document.getElementById(travelId);
      const img = element.querySelector("img");
  
      if (img && img.alt) {
        if (img.alt.includes("White")) {
          CaptureIds.push(travelId);
          break;
        } else break;
      } else {
        highlightIds.push(travelId);
      }
    }
  
    for (let i = char2 - 1; i >= 1; i--) {
      travelId = `${char1}${i}`;
      const element = document.getElementById(travelId);
      const img = element.querySelector("img");
  
      if (img && img.alt) {
        if (img.alt.includes("White")) {
          CaptureIds.push(travelId);
          break;
        } else break;
      } else {
        highlightIds.push(travelId);
      }
    }
  
    for (let i = char1.charCodeAt(0) - 1; i >= 'a'.charCodeAt(0); i--) {
      const ch = String.fromCharCode(i);
      travelId = `${ch}${char2}`;
      const element = document.getElementById(travelId);
      const img = element.querySelector("img");
  
      if (img && img.alt) {
        if (img.alt.includes("White")) {
          CaptureIds.push(travelId);
          break;
        } else break;
      } else {
        highlightIds.push(travelId);
      }
    }
  
    for (let i = char1.charCodeAt(0) + 1; i <= 'h'.charCodeAt(0); i++) {
      const ch = String.fromCharCode(i);
      travelId = `${ch}${char2}`;
      const element = document.getElementById(travelId);
      const img = element?.querySelector("img");
  
      if (img && img.alt) {
        if (img.alt.includes("White")) {
          CaptureIds.push(travelId);
          break;
        } else break;
      } else {
        highlightIds.push(travelId);
      }
    }
  
    highlightIds.forEach(function(el) {
      document.getElementById(el).classList.add("highlight");
    });
  
    alertForEnemy("Black", ...CaptureIds);    
};

const WhiteBishopClick = function(id) {
    clearRedAlert();
    clearHighlight();
    clearSelfHighlight();
    selfHighlight(id);
    CurrPosition = id;

    let highlightIds = [];
    let CaptureIds = [];

    let file = id[0].charCodeAt(0);  // e.g., 'd' -> 100
    let rank = +id[1];

    // Top-left
    let f = file, r = rank;
    while (f - 1 >= 'a'.charCodeAt(0) && r - 1 >= 1) {
        f--; r--;
        let travelId = `${String.fromCharCode(f)}${r}`;
        const element = document.getElementById(travelId);
        const img = element?.querySelector("img");
        if (img && img.alt) {
            if (img.alt.includes("Black")) CaptureIds.push(travelId);
            break;
        } else {
            highlightIds.push(travelId);
        }
    }

    // Bottom-left
    f = file, r = rank;
    while (f - 1 >= 'a'.charCodeAt(0) && r + 1 <= 8) {
        f--; r++;
        let travelId = `${String.fromCharCode(f)}${r}`;
        const element = document.getElementById(travelId);
        const img = element?.querySelector("img");
        if (img && img.alt) {
            if (img.alt.includes("Black")) CaptureIds.push(travelId);
            break;
        } else {
            highlightIds.push(travelId);
        }
    }

    // Bottom-right
    f = file, r = rank;
    while (f + 1 <= 'h'.charCodeAt(0) && r + 1 <= 8) {
        f++; r++;
        let travelId = `${String.fromCharCode(f)}${r}`;
        const element = document.getElementById(travelId);
        const img = element?.querySelector("img");
        if (img && img.alt) {
            if (img.alt.includes("Black")) CaptureIds.push(travelId);
            break;
        } else {
            highlightIds.push(travelId);
        }
    }

    // Top-right
    f = file, r = rank;
    while (f + 1 <= 'h'.charCodeAt(0) && r - 1 >= 1) {
        f++; r--;
        let travelId = `${String.fromCharCode(f)}${r}`;
        const element = document.getElementById(travelId);
        const img = element?.querySelector("img");
        if (img && img.alt) {
            if (img.alt.includes("Black")) CaptureIds.push(travelId);
            break;
        } else {
            highlightIds.push(travelId);
        }
    }

    highlightIds.forEach(function(el) {
        document.getElementById(el).classList.add('highlight');
    });

    alertForEnemy("White", ...CaptureIds);
}

const BlackBishopClick = function(id) {
    clearHighlight();
    clearSelfHighlight();
    selfHighlight(id);
    CurrPosition = id;

    let highlightIds = [];
    let CaptureIds = [];

    let file = id[0].charCodeAt(0);  // e.g., 'e' -> 101
    let rank = +id[1];

    // Top-left
    let f = file, r = rank;
    while (f - 1 >= 'a'.charCodeAt(0) && r - 1 >= 1) {
        f--; r--;
        let travelId = `${String.fromCharCode(f)}${r}`;
        const element = document.getElementById(travelId);
        const img = element?.querySelector("img");
        if (img && img.alt) {
            if (img.alt.includes("White")) CaptureIds.push(travelId);
            break;
        } else {
            highlightIds.push(travelId);
        }
    }

    // Bottom-left
    f = file, r = rank;
    while (f - 1 >= 'a'.charCodeAt(0) && r + 1 <= 8) {
        f--; r++;
        let travelId = `${String.fromCharCode(f)}${r}`;
        const element = document.getElementById(travelId);
        const img = element?.querySelector("img");
        if (img && img.alt) {
            if (img.alt.includes("White")) CaptureIds.push(travelId);
            break;
        } else {
            highlightIds.push(travelId);
        }
    }

    // Bottom-right
    f = file, r = rank;
    while (f + 1 <= 'h'.charCodeAt(0) && r + 1 <= 8) {
        f++; r++;
        let travelId = `${String.fromCharCode(f)}${r}`;
        const element = document.getElementById(travelId);
        const img = element?.querySelector("img");
        if (img && img.alt) {
            if (img.alt.includes("White")) CaptureIds.push(travelId);
            break;
        } else {
            highlightIds.push(travelId);
        }
    }

    // Top-right
    f = file, r = rank;
    while (f + 1 <= 'h'.charCodeAt(0) && r - 1 >= 1) {
        f++; r--;
        let travelId = `${String.fromCharCode(f)}${r}`;
        const element = document.getElementById(travelId);
        const img = element?.querySelector("img");
        if (img && img.alt) {
            if (img.alt.includes("White")) CaptureIds.push(travelId);
            break;
        } else {
            highlightIds.push(travelId);
        }
    }

    highlightIds.forEach(function(el) {
        document.getElementById(el).classList.add('highlight');
    });

    alertForEnemy("Black", ...CaptureIds);
}

const WhiteQueenClick = function(id) {
    clearHighlight();
    clearSelfHighlight();
    clearRedAlert();
    selfHighlight(id);
    CurrPosition = id;

    let highlightIds = [];
    let CaptureIds = [];

    let file = id[0].charCodeAt(0); // a-h => 97-104
    let rank = +id[1];

    // Bishop-like Moves (Diagonals)
    // Top-left
    let f = file, r = rank;
    while (f - 1 >= 'a'.charCodeAt(0) && r - 1 >= 1) {
        f--; r--;
        let travelId = `${String.fromCharCode(f)}${r}`;
        const element = document.getElementById(travelId);
        const img = element?.querySelector("img");
        if (img && img.alt) {
            if (img.alt.includes("Black")) CaptureIds.push(travelId);
            break;
        } else {
            highlightIds.push(travelId);
        }
    }

    // Bottom-left
    f = file, r = rank;
    while (f - 1 >= 'a'.charCodeAt(0) && r + 1 <= 8) {
        f--; r++;
        let travelId = `${String.fromCharCode(f)}${r}`;
        const element = document.getElementById(travelId);
        const img = element?.querySelector("img");
        if (img && img.alt) {
            if (img.alt.includes("Black")) CaptureIds.push(travelId);
            break;
        } else {
            highlightIds.push(travelId);
        }
    }

    // Bottom-right
    f = file, r = rank;
    while (f + 1 <= 'h'.charCodeAt(0) && r + 1 <= 8) {
        f++; r++;
        let travelId = `${String.fromCharCode(f)}${r}`;
        const element = document.getElementById(travelId);
        const img = element?.querySelector("img");
        if (img && img.alt) {
            if (img.alt.includes("Black")) CaptureIds.push(travelId);
            break;
        } else {
            highlightIds.push(travelId);
        }
    }

    // Top-right
    f = file, r = rank;
    while (f + 1 <= 'h'.charCodeAt(0) && r - 1 >= 1) {
        f++; r--;
        let travelId = `${String.fromCharCode(f)}${r}`;
        const element = document.getElementById(travelId);
        const img = element?.querySelector("img");
        if (img && img.alt) {
            if (img.alt.includes("Black")) CaptureIds.push(travelId);
            break;
        } else {
            highlightIds.push(travelId);
        }
    }

    // Rook-like Moves (Straight)
    // Up
    let char1 = id[0];
    let char2 = +id[1];
    for (let i = char2 + 1; i <= 8; i++) {
        let travelId = `${char1}${i}`;
        const element = document.getElementById(travelId);
        const img = element?.querySelector("img");

        if (img && img.alt) {
            if (img.alt.includes("Black")) CaptureIds.push(travelId);
            break;
        } else {
            highlightIds.push(travelId);
        }
    }

    // Down
    for (let i = char2 - 1; i >= 1; i--) {
        let travelId = `${char1}${i}`;
        const element = document.getElementById(travelId);
        const img = element?.querySelector("img");

        if (img && img.alt) {
            if (img.alt.includes("Black")) CaptureIds.push(travelId);
            break;
        } else {
            highlightIds.push(travelId);
        }
    }

    // Left
    for (let i = char1.charCodeAt(0) - 1; i >= 'a'.charCodeAt(0); i--) {
        let travelId = `${String.fromCharCode(i)}${char2}`;
        const element = document.getElementById(travelId);
        const img = element?.querySelector("img");

        if (img && img.alt) {
            if (img.alt.includes("Black")) CaptureIds.push(travelId);
            break;
        } else {
            highlightIds.push(travelId);
        }
    }

    // Right
    for (let i = char1.charCodeAt(0) + 1; i <= 'h'.charCodeAt(0); i++) {
        let travelId = `${String.fromCharCode(i)}${char2}`;
        const element = document.getElementById(travelId);
        const img = element?.querySelector("img");

        if (img && img.alt) {
            if (img.alt.includes("Black")) CaptureIds.push(travelId);
            break;
        } else {
            highlightIds.push(travelId);
        }
    }

    // Final Display
    highlightIds.forEach(el => {
        document.getElementById(el).classList.add("highlight");
    });

    alertForEnemy("White", ...CaptureIds);
};

const BlackQueenClick = function(id) {
    clearHighlight();
    clearSelfHighlight();
    clearRedAlert();
    selfHighlight(id);
    CurrPosition = id;

    let highlightIds = [];
    let CaptureIds = [];

    let file = id[0].charCodeAt(0); // 'a'-'h' => 97-104
    let rank = +id[1];

    // Bishop-like Moves (Diagonals)
    // Top-left
    let f = file, r = rank;
    while (f - 1 >= 'a'.charCodeAt(0) && r - 1 >= 1) {
        f--; r--;
        let travelId = `${String.fromCharCode(f)}${r}`;
        const element = document.getElementById(travelId);
        const img = element?.querySelector("img");
        if (img && img.alt) {
            if (img.alt.includes("White")) CaptureIds.push(travelId);
            break;
        } else {
            highlightIds.push(travelId);
        }
    }

    // Bottom-left
    f = file, r = rank;
    while (f - 1 >= 'a'.charCodeAt(0) && r + 1 <= 8) {
        f--; r++;
        let travelId = `${String.fromCharCode(f)}${r}`;
        const element = document.getElementById(travelId);
        const img = element?.querySelector("img");
        if (img && img.alt) {
            if (img.alt.includes("White")) CaptureIds.push(travelId);
            break;
        } else {
            highlightIds.push(travelId);
        }
    }

    // Bottom-right
    f = file, r = rank;
    while (f + 1 <= 'h'.charCodeAt(0) && r + 1 <= 8) {
        f++; r++;
        let travelId = `${String.fromCharCode(f)}${r}`;
        const element = document.getElementById(travelId);
        const img = element?.querySelector("img");
        if (img && img.alt) {
            if (img.alt.includes("White")) CaptureIds.push(travelId);
            break;
        } else {
            highlightIds.push(travelId);
        }
    }

    // Top-right
    f = file, r = rank;
    while (f + 1 <= 'h'.charCodeAt(0) && r - 1 >= 1) {
        f++; r--;
        let travelId = `${String.fromCharCode(f)}${r}`;
        const element = document.getElementById(travelId);
        const img = element?.querySelector("img");
        if (img && img.alt) {
            if (img.alt.includes("White")) CaptureIds.push(travelId);
            break;
        } else {
            highlightIds.push(travelId);
        }
    }

    // Rook-like Moves (Straight)
    let char1 = id[0];
    let char2 = +id[1];

    // Up
    for (let i = char2 + 1; i <= 8; i++) {
        let travelId = `${char1}${i}`;
        const element = document.getElementById(travelId);
        const img = element?.querySelector("img");

        if (img && img.alt) {
            if (img.alt.includes("White")) CaptureIds.push(travelId);
            break;
        } else {
            highlightIds.push(travelId);
        }
    }

    // Down
    for (let i = char2 - 1; i >= 1; i--) {
        let travelId = `${char1}${i}`;
        const element = document.getElementById(travelId);
        const img = element?.querySelector("img");

        if (img && img.alt) {
            if (img.alt.includes("White")) CaptureIds.push(travelId);
            break;
        } else {
            highlightIds.push(travelId);
        }
    }

    // Left
    for (let i = char1.charCodeAt(0) - 1; i >= 'a'.charCodeAt(0); i--) {
        let travelId = `${String.fromCharCode(i)}${char2}`;
        const element = document.getElementById(travelId);
        const img = element?.querySelector("img");

        if (img && img.alt) {
            if (img.alt.includes("White")) CaptureIds.push(travelId);
            break;
        } else {
            highlightIds.push(travelId);
        }
    }

    // Right
    for (let i = char1.charCodeAt(0) + 1; i <= 'h'.charCodeAt(0); i++) {
        let travelId = `${String.fromCharCode(i)}${char2}`;
        const element = document.getElementById(travelId);
        const img = element?.querySelector("img");

        if (img && img.alt) {
            if (img.alt.includes("White")) CaptureIds.push(travelId);
            break;
        } else {
            highlightIds.push(travelId);
        }
    }

    highlightIds.forEach(el => {
        document.getElementById(el).classList.add("highlight");
    });

    alertForEnemy("Black", ...CaptureIds);
};

const WhitekingClick = function(id) {
    clearHighlight();
    clearSelfHighlight();
    clearRedAlert();
    selfHighlight(id);
    CurrPosition = id;

    let highlightIds = [];
    let CaptureIds = [];

    let file = id[0].charCodeAt(0); // 'a' to 'h'
    let rank = +id[1];              // 1 to 8

    for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
            if (dx === 0 && dy === 0) continue;
            let newFile = file + dx;
            let newRank = rank + dy;

            if (newFile >= 'a'.charCodeAt(0) && newFile <= 'h'.charCodeAt(0) && newRank >= 1 && newRank <= 8) {
                let travelId = `${String.fromCharCode(newFile)}${newRank}`;
                const element = document.getElementById(travelId);
                const img = element?.querySelector("img");

                if (img && img.alt) {
                    if (img.alt.includes("Black")) {
                        CaptureIds.push(travelId);
                    }
                } else {
                    highlightIds.push(travelId);
                }
            }
        }
    }

    highlightIds.forEach(el => {
        document.getElementById(el).classList.add("highlight");
    });

    alertForEnemy("White", ...CaptureIds);
};

const BlackkingClick = function(id) {
    clearHighlight();
    clearSelfHighlight();
    clearRedAlert();
    selfHighlight(id);
    CurrPosition = id;

    let highlightIds = [];
    let CaptureIds = [];

    let file = id[0].charCodeAt(0); // 'a' to 'h'
    let rank = +id[1];              // 1 to 8

    for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
            if (dx === 0 && dy === 0) continue;
            let newFile = file + dx;
            let newRank = rank + dy;

            if (newFile >= 'a'.charCodeAt(0) && newFile <= 'h'.charCodeAt(0) && newRank >= 1 && newRank <= 8) {
                let travelId = `${String.fromCharCode(newFile)}${newRank}`;
                const element = document.getElementById(travelId);
                const img = element?.querySelector("img");

                if (img && img.alt) {
                    if (img.alt.includes("White")) {
                        CaptureIds.push(travelId);
                    }
                } else {
                    highlightIds.push(travelId);
                }
            }
        }
    }

    highlightIds.forEach(el => {
        document.getElementById(el).classList.add("highlight");
    });

    alertForEnemy("Black", ...CaptureIds);
};



let CurrentStateId;

Root_div.addEventListener('click' , function(event){

if(event.target.childNodes.length===1){
const clickedId = event.target.parentNode.id;
CurrentStateId = clickedId;
const Clicked = event.target.querySelector('img').alt;

let found = KillingIds.includes(clickedId);

if(found){
chance = !chance;
document.getElementById(clickedId).innerHTML = document.getElementById(CurrPosition).innerHTML;   

document.getElementById(CurrPosition).innerHTML = "";
found = false;
KillingIds = [];

clearSelfHighlight();
clearRedAlert();
clearHighlight();
}

else if(Clicked == "White Pawn" && chance){
    WhitePawnClick(clickedId);
}
  
else if(Clicked == "Black Pawn" && !chance){
    BlackPawnClick(clickedId);
}

else if(Clicked == "White Knight" && chance){
    WhiteKnigtClick(clickedId);
}

else if(Clicked == "Black Knight" && !chance){
    BlackKnigtClick(clickedId);
}

else if(Clicked == "White Rook" && chance){
    WhiteRookClick(clickedId);
}

else if(Clicked == "Black Rook" && !chance){
    BlackRookClick(clickedId);
}

else if(Clicked == "White Bishop" && chance){
    WhiteBishopClick(clickedId);
}

else if(Clicked == "Black Bishop"&& !chance){
    BlackBishopClick(clickedId);
}

else if(Clicked == "White Queen" && chance){
   WhiteQueenClick(clickedId);
}

else if(Clicked == "Black Queen" && !chance){
    BlackQueenClick(clickedId);
 }


else if(Clicked == "White King" && chance){
    WhitekingClick(clickedId);
}

else if(Clicked == "Black King" && !chance){
    BlackkingClick(clickedId);
}


}
else{
    if(event.target.classList.contains('highlight')){
        chance = !chance;
        KillingIds = [];
        clearRedAlert();
        clearSelfHighlight();
        clearHighlight();
        const clickedId = event.target.id;
        const currentId = document.getElementById(clickedId);
        const prevId = document.getElementById(CurrentStateId);
        
        currentId.innerHTML = prevId.innerHTML;
        prevId.innerHTML = "";
    }

    else{
        KillingIds = [];
        clearRedAlert();
        flatData.forEach(function(el){
        document.getElementById(el.id).classList.remove('highlight');
        })
    }
}
})