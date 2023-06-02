const tileContainer=document.querySelector('.tile-container');
const tileCount=10000;

for(i=0;i<tileCount;i++){
    const tile=document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('draggable','false');
    tileContainer.append(tile);

}
tileContainer.addEventListener('click',()=>{

        const tiles=document.querySelectorAll('.tile');
        tiles.forEach((tile)=>{
            tile.classList.add('tileClick');
            tile.classList.remove('tile');

            setTimeout(() => {
                tile.classList.remove('tileClick');
                tile.classList.add('tile');
            }, 1);
        })
 
});