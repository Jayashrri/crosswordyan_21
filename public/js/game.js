var buildMatrix = (parentID, cell, n, m) => { 
   document.getElementById("start-btn").style.display = "none";
   console.log("BUILDING MATRIX");
   console.log(cell);
   var width = window.innerWidth;
   var height;
   if(width <= 768){
      width = width*0.8;
      $("#game-board1").css("text-align", "center");
      $("#game-board1").css("display", "inline-block");
   }
   else{
      width = width*0.5; 
      $("#game-board1").css("padding-left", "10px");
   }
   height = width;
   width = width/m;
   height = height/n;
   height = height > width ? height : width;
   width = height;
   var parent = document.getElementById(parentID);
   var table = document.createElement("table");
   var tableBody = document.createElement("tbody");
   for (let r = 1; r <= n; r++) {
      var row = document.createElement('tr');
      for (let c = 1; c <= m; c++) {
       var divId = "item"+r+"-"+c;
       var td = document.createElement('td');
       if(cell[r-1][c-1].state == -1){
         td.insertAdjacentHTML('beforeend', '<div class="crossword-board__item--blank" id="'+divId+'" style="width: '+width+'px; height: '+height+'px;"></div>');
       }
       else{
         if(cell[r-1][c-1].start==0)
           td.insertAdjacentHTML('beforeend', '<div class="floatContainer"><input id="'+divId+'" class="crossword-board__item" type="text" minlength="1" maxlength="1" required="required" value="" style="width: '+width+'px; height: '+height+'px;"/></div>');
         else if(cell[r-1][c-1].state==1)
           td.insertAdjacentHTML('beforeend', '<div class="floatContainer"><label for="'+divId+'">'+cell[r-1][c-1].Aqno+'</label><input id="'+divId+'" class="crossword-board__item" type="text" minlength="1" maxlength="1" required="required" value="" style="width: '+width+'px; height: '+height+'px;"></div>');
         else if(cell[r-1][c-1].state==2)
           td.insertAdjacentHTML('beforeend', '<div class="floatContainer"><label for="'+divId+'">'+cell[r-1][c-1].Dqno+'</label><input id="'+divId+'" class="crossword-board__item" type="text" minlength="1" maxlength="1" required="required" value="" style="width: '+width+'px; height: '+height+'px;"></div>');
         else 
           td.insertAdjacentHTML('beforeend', '<div class="floatContainer"><label for="'+divId+'">'+cell[r-1][c-1].Aqno+'</label><input id="'+divId+'" class="crossword-board__item" type="text" minlength="1" maxlength="1" required="required" value="" style="width: '+width+'px; height: '+height+'px;"></div>');
       }
       row.appendChild(td);
      }
      tableBody.appendChild(row);
   }
   table.appendChild(tableBody);
   parent.appendChild(table);
}
