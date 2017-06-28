
// ----------------------------  VARIABLES  ---------------------------//

var ship1 = {
    "name": "ship1",
    "healthPoints": 200,
    "attackPower": 2,
    "counterAttack": 15,
    "picture": "assets/img/ship15.png",
    "isActiveAttacker": false,
    "isActiveDefender": false
}

var ship2 = {
    "name": "ship1",
    "healthPoints": 175,
    "attackPower": 3,
    "counterAttack": 12,
    "picture": "assets/img/ship15.png",
    "isActiveAttacker": false,
    "isActiveDefender": false
}

var ship3 = {
    "name": "ship1",
    "healthPoints": 150,
    "attackPower": 4,
    "counterAttack": 9,
    "picture": "assets/img/ship15.png",
    "isActiveAttacker": false,
    "isActiveDefender": false
}

var ship4 = {
    "name": "ship1",
    "healthPoints": 125,
    "attackPower": 5,
    "counterAttack": 6,
    "picture": "assets/img/ship15.png",
    "isActiveAttacker": false,
    "isActiveDefender": false
}


var attacker = 0;
var defender = 0;

var attackerAssigned = false;
var defenderAssigned = false;

var attackerLosses = 0;
var defenderLosses = 0;

var attackerHitPoints,
    attackerAttackPower,
    attackerCounterAttack = 0;

var defenderHitPoints,
    defenderAttackPower,
    defenderCounterAttack = 0;

var attackerBasePower = 0;







// ----------------------------  FUNCTIONS  ---------------------------//

function startGame() {
    $(".ship-lineup").show();
    $("p#user-instructions").show();
    $(".overlay").show();
}

function stealShip1() {
    $("div#ship1").hide();
    $("img.ship-attack").attr("src", "assets/img/ship15.png");
    $(".ship-attack").show();
    $("p#user-instructions").text("PICK A FIGHT ===>");
    attackerBasePower = ship1.attackPower;
    attackerHitPoints = ship1.healthPoints;
    attackerAttackPower = ship1.attackPower;
    attackerCounterAttack = ship1.counterAttack;
    $("h3#attacker-hp").text(ship1.healthPoints);
    $("h3#attacker-attack").text(ship1.attackPower);
    $("h3#attacker-damage").text(ship1.counterAttack);
}

function stealShip2() {
    $("div#ship2").hide();
    $("img.ship-attack").attr("src", "assets/img/ship14.png");
    $(".ship-attack").show();
    $("p#user-instructions").text("PICK A FIGHT ===>");
    attackerBasePower = ship2.attackPower;
    attackerHitPoints = ship2.healthPoints;
    attackerAttackPower = ship2.attackPower;
    attackerCounterAttack = ship2.counterAttack;
    $("h3#attacker-hp").text(ship2.healthPoints);
    $("h3#attacker-attack").text(ship2.attackPower);
    $("h3#attacker-damage").text(ship2.counterAttack);
}

function stealShip3() {
    $("div#ship3").hide();
    $("img.ship-attack").attr("src", "assets/img/ship11.png");
    $(".ship-attack").show();
    $("p#user-instructions").text("PICK A FIGHT ===>");
    attackerBasePower = ship3.attackPower;
    attackerHitPoints = ship3.healthPoints;
    attackerAttackPower = ship3.attackPower;
    attackerCounterAttack = ship3.counterAttack;
    $("h3#attacker-hp").text(ship3.healthPoints);
    $("h3#attacker-attack").text(ship3.attackPower);
    $("h3#attacker-damage").text(ship3.counterAttack);
}

function stealShip4() {
    $("div#ship4").hide();
    $("img.ship-attack").attr("src", "assets/img/ship16.png");
    $(".ship-attack").show();
    $("p#user-instructions").text("PICK A FIGHT ===>");
    attackerBasePower = ship4.attackPower;
    attackerHitPoints = ship4.healthPoints;
    attackerAttackPower = ship4.attackPower;
    attackerCounterAttack = ship4.counterAttack;
    $("h3#attacker-hp").text(ship4.healthPoints);
    $("h3#attacker-attack").text(ship4.attackPower);
    $("h3#attacker-damage").text(ship4.counterAttack);
}

function pickFight1() {
    $("div#ship1").hide();
    $("img.ship-defend").attr("src", "assets/img/ship15.png");
    $(".ship-defend").show();
    $("p#attack-button").show();
    $(".guage").show();
    $("p#user-instructions").hide();
    defenderHitPoints = ship1.healthPoints;
    defenderAttackPower = ship1.attackPower;
    defenderCounterAttack = ship1.counterAttack;
    $("h3#defender-hp").text(ship1.healthPoints);
    $("h3#defender-attack").text(ship1.attackPower);
    $("h3#defender-damage").text(ship1.counterAttack);
}

function pickFight2() {
    $("div#ship2").hide();
    $("img.ship-defend").attr("src", "assets/img/ship14.png");
    $(".ship-defend").show();
    $("p#attack-button").show();
    $(".guage").show();
    $("p#user-instructions").hide();
    defenderHitPoints = ship2.healthPoints;
    defenderAttackPower = ship2.attackPower;
    defenderCounterAttack = ship2.counterAttack;
    $("h3#defender-hp").text(ship2.healthPoints);
    $("h3#defender-attack").text(ship2.attackPower);
    $("h3#defender-damage").text(ship2.counterAttack);
}

function pickFight3() {
    $("div#ship3").hide();
    $("img.ship-defend").attr("src", "assets/img/ship11.png");
    $(".ship-defend").show();
    $("p#attack-button").show();
    $(".guage").show();
    $("p#user-instructions").hide();
    defenderHitPoints = ship3.healthPoints;
    defenderAttackPower = ship3.attackPower;
    defenderCounterAttack = ship3.counterAttack;
    $("h3#defender-hp").text(ship3.healthPoints);
    $("h3#defender-attack").text(ship3.attackPower);
    $("h3#defender-damage").text(ship3.counterAttack);
}

function pickFight4() {
    $("div#ship4").hide();
    $("img.ship-defend").attr("src", "assets/img/ship16.png");
    $(".ship-defend").show();
    $("p#attack-button").show();
    $(".guage").show();
    $("p#user-instructions").hide();
    defenderHitPoints = ship4.healthPoints;
    defenderAttackPower = ship4.attackPower;
    defenderCounterAttack = ship4.counterAttack;
    $("h3#defender-hp").text(ship4.healthPoints);
    $("h3#defender-attack").text(ship4.attackPower);
    $("h3#defender-damage").text(ship4.counterAttack);
}

function attack() {
    defenderHitPoints = defenderHitPoints - attackerAttackPower;
    attackerAttackPower = attackerAttackPower + attackerBasePower;
    
    attackerHitPoints = attackerHitPoints - defenderCounterAttack;
    
    $("h3#attacker-hp").text(attackerHitPoints);
    $("h3#defender-hp").text(defenderHitPoints);
    $("h3#attacker-attack").text(attackerAttackPower);
    
    
    if(attackerHitPoints < 1) {
        $("img.ship-attack").hide();
        $("h3#attacker-hp").text(0);
        $("h3#attacker-attack").text(0);
        $("h3#attacker-damage").text(0);
        $("p#attack-button").hide();
        attackerLosses++;
    }
    
    if(defenderHitPoints < 1) {
        $("img.ship-defend").hide();
        $("h3#defender-hp").text(0);
        $("h3#defender-attack").text(0);
        $("h3#defender-damage").text(0);
        $("p#attack-button").hide();
        defenderAssigned = false;
        defenderLosses++;
       }
    
    if(defenderLosses === 3) {
        console.log("you win");
        $("p#play-again").show();
       }
    
    if(attackerLosses === 1) {
        console.log("you lose");
        $("p#play-again").show();
    }
}

function playAgain() {
    attacker = 0;
    defender = 0;

    attackerAssigned = false;
    defenderAssigned = false;

    attackerLosses = 0;
    defenderLosses = 0;

    attackerHitPoints,
    attackerAttackPower,
    attackerCounterAttack = 0;

    defenderHitPoints,
    defenderAttackPower,
    defenderCounterAttack = 0;

    attackerBasePower = 0;
    
    $(".ship-lineup").hide();
    $("p#user-instructions").hide();
    $(".overlay").hide();
    $(".guage").hide();
    
    $("h3#attacker-hp").text(0);
    $("h3#attacker-attack").text(0);
    $("h3#attacker-damage").text(0);
    
    $("h3#defender-hp").text(0);
    $("h3#defender-attack").text(0);
    $("h3#defender-damage").text(0);
    
    $("div#ship1").show();
    $("div#ship2").show();
    $("div#ship3").show();
    $("div#ship4").show();
    $("p#user-instructions").text("STEAL A SHIP ===>");
    $("img.ship-attack").hide();
    $("img.ship-defend").hide();
    
    startGame();
   
}










// ----------------------------  MAIN  ---------------------------//

$(document).ready(function() {
    
    
    function startGame() {
        $(".ship-lineup").show();
        $("p#user-instructions").show();
        $(".overlay").show();
        $("p#play").hide();
    }
    
    
    $("div#ship1").on("click", function() {
        if(!attackerAssigned) {
            attackerAssigned = true;
            attacker = ship1;
            stealShip1();
        }
        else if (!defenderAssigned) {
            defenderAssigned = true;
            defender = ship1;
            pickFight1();
        }
    });
    
    $("div#ship2").on("click", function() {
        if(!attackerAssigned) {
            attackerAssigned = true;
            attacker = ship2;
            stealShip2();
        }
        else if (!defenderAssigned) {
            defenderAssigned = true;
            defender = ship2;
            pickFight2();
        }
    });
    
    $("div#ship3").on("click", function() {
        if(!attackerAssigned) {
            attackerAssigned = true;
            attacker = ship3;
            stealShip3();
        }
        else if (!defenderAssigned) {
            defenderAssigned = true;
            defender = ship3;
            pickFight3();
        }
    });
    
     $("div#ship4").on("click", function() {
        if(!attackerAssigned) {
            attackerAssigned = true;
            attacker = ship4;
            stealShip4();
        }
        else if (!defenderAssigned) {
            defenderAssigned = true;
            defender = ship4;
            pickFight4();
        }
    });
    
    
    $("p#play").on("click", startGame);
    
    $("p#attack-button").on("click", attack);
    
    $("p#play-again").on("click", playAgain);
    
    
    
    
    
});



















