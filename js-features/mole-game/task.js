const deadMoleCount = document.getElementById('dead'),
        missedCount = document.getElementById('lost');

const holesArray = [];

(function addHoles (holesArray) {
    const holes = document.getElementById('hole-game');

    for ( let i = 1; i <= holes.childElementCount; i++ ) {

        const hole = document.getElementById(getHole(i));
        
        holesArray.push(hole.addEventListener('click', () => {

            hole.className.includes( 'hole_has-mole' ) ? 
            deadMoleCount.textContent++ : 
            missedCount.textContent++;

        }));
    };
})(holesArray);

let id = setInterval(() => {
    isWinner( deadMoleCount, missedCount );
}, 100);

function isWinner( deadMoleCount, missedCount ) {
    const winnerCase = 10,
            loserCase = 5;

    if(Number(deadMoleCount.textContent) === winnerCase) {
        
        window.alert('Победа!');
        deadMoleCount.textContent = 0;
        missedCount.textContent = 0;
        
    } else if(Number(missedCount.textContent) === loserCase) {
        
        window.alert('Вы проиграли');
        missedCount.textContent = 0;
        deadMoleCount.textContent = 0;
        
    };
};

function getHole( index ) {
    return `hole${index}`;
};