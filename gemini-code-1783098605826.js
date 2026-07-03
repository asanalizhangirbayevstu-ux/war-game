// Simple Text-Based Battle Game

const player = {
    name: "Player 1",
    health: 100,
    attackPower: 15
};

const enemy = {
    name: "AI Opponent",
    health: 100,
    attackPower: 12
};

function startGame() {
    console.log("--- The Battle Begins! ---");
    console.log(`${player.name} (HP: ${player.health}) vs ${enemy.name} (HP: ${enemy.health})\n`);

    while (player.health > 0 && enemy.health > 0) {
        // Player turns
        let playerDamage = Math.floor(Math.random() * player.attackPower) + 5;
        enemy.health -= playerDamage;
        console.log(`${player.name} attacks and deals ${playerDamage} damage!`);
        console.log(`${enemy.name} has ${Math.max(0, enemy.health)} HP left.`);

        if (enemy.health <= 0) {
            console.log(`\n🎉 Victory! ${player.name} wins the battle!`);
            break;
        }

        console.log("-----------------------");

        // Enemy turns
        let enemyDamage = Math.floor(Math.random() * enemy.attackPower) + 5;
        player.health -= enemyDamage;
        console.log(`${enemy.name} counters and deals ${enemyDamage} damage!`);
        console.log(`${player.name} has ${Math.max(0, player.health)} HP left.`);

        if (player.health <= 0) {
            console.log(`\n💀 Defeat! ${enemy.name} has won the battle.`);
            break;
        }
        
        console.log("-----------------------");
    }
}

// Run the game
startGame();