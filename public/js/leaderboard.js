function buildLeaderboard(parentID, listPeople, n, m, pageNumber, itemsPerPage) {

    var screenWidth = window.innerWidth;
    var parent = document.getElementById(parentID);
    var table = document.createElement("table");
    var tableBody = document.createElement("tbody");

    // set parent inner HTML empty to prevent appending of parent instead of replacing.
    parent.innerHTML = '';

    // numberOfItems to be displayed is itemsPerPage or if it's the last page then all the left overs.
    // so minimum of the leftovers and itemsPerPage value.
    var numberOfItems = (n-((pageNumber)*itemsPerPage))<itemsPerPage?(n-((pageNumber)*itemsPerPage)):itemsPerPage;

    // to handle different width sizes.
    if(screenWidth <= 768){
        screenWidth = screenWidth*0.9;
    }
    else{
        screenWidth = screenWidth*0.4; 
    }

    table.style.width=screenWidth+'px';
    var radiusCorner=20;
    var heightPercentage=400;

    table.className="leaderboardTable";
    var row = document.createElement('tr');
    row.style.borderRadius=radiusCorner+'px';
    var td = document.createElement('td');
    tableBody.appendChild(row);

    for(let i=pageNumber*itemsPerPage; i<pageNumber*itemsPerPage+numberOfItems; i++) {
        row = document.createElement('tr');
        for(let j=0; j<m; j++) {
            
            td.insertAdjacentHTML('beforeend', ''+listPeople[i][j])+'';
            td = document.createElement('td');

            // for rounding the corners.
            if(j==0) {
                td.style.borderTopLeftRadius=radiusCorner+'px';
                td.style.borderBottomLeftRadius=radiusCorner+'px';
            }
            
            // for rounding the corners.
            if(j==m-1) {
                td.style.borderTopRightRadius=radiusCorner+'px';
                td.style.borderBottomRightRadius=radiusCorner+'px';
            }

            // append the item to the row.
            row.appendChild(td);      
        }

        row.style.lineHeight=heightPercentage+'%';

        // append the row to the tableBody.
        tableBody.appendChild(row);
    }    
    
    // append tableBody to the table and table to the parent.
    table.appendChild(tableBody);
    parent.appendChild(table);

}

function buildPages(parentID, n, m, tableID, listPeople) {

    var screenWidth = window.innerWidth;
    // number of items in a single page.
    var itemsPerPage=10;
    // number of boxes for pagination
    var numberOfBoxes=Math.ceil(n/itemsPerPage);

    // load page 1 for the first time.
    buildLeaderboard(tableID,listPeople,n,m,0,itemsPerPage);

    var parent = document.getElementById(parentID);
    parent.style.display='inline-flex';
    parent.style.height='30px';
    parent.style.textAlign='center';
    parent.style.paddingLeft=((screenWidth/2-20*numberOfBoxes)+'px');
    parent.style.marginTop=('3%');
    parent.style.marginBottom=('2%');

    // depending upon the size of data, add boxes and set on click on them with the the box number.
    for(var i=1; i<=numberOfBoxes; i++) {
        parent.innerHTML+='<div style="width: 30px; height: 30px; background-color: #000000; color: #FFFFFF; vertical-align: middle; text-align: center; margin-left: 10px; line-height: 30px; cursor: pointer;" onclick=buildLeaderboard("'+tableID+'",listPeople,'+n+','+m+','+(i-1)+','+itemsPerPage+');>'+i+'</div>';
    }

}
