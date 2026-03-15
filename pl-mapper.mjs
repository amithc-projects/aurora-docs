import { readFileSync, writeFileSync } from 'fs';

async function run() {
  const meta = JSON.parse(readFileSync('/tmp/pl_meta.json', 'utf8'));
  const stadiums = JSON.parse(readFileSync('./static/data/pl_stadiums.json', 'utf8'));

  // Create a fast lookup map formatting team names to match our JSON
  // PL API names sometimes have "AFC" or "FC"
  const plClubs = meta;

  for (let i = 0; i < stadiums.length; i++) {
    let name = stadiums[i].name;
    
    // Find matching club in PL API
    let match = plClubs.find(c => 
      c.name === name || 
      c.name.includes(name) || 
      name.includes(c.name) ||
      (name === "Newcastle United" && c.name === "Newcastle") ||
      (name === "Manchester United" && c.name === "Man Utd") ||
      (name === "Manchester City" && c.name === "Man City") ||
      (name === "Tottenham Hotspur" && c.name === "Spurs") ||
      (name === "Brighton & Hove Albion" && c.name.includes("Brighton")) ||
      (name === "Wolverhampton Wanderers" && c.name === "Wolves") ||
      (name === "Nottingham Forest" && c.name === "Nott'm Forest")
    );

    if (match) {
       // The PL standard badge URLs use the team ID
       // e.g. club with ID 1 -> t1.png
       // badge versions vary (badge/50/ or badge/100/)
       const badgeId = `t${match.id}`;
       stadiums[i].logo = `https://resources.premierleague.com/premierleague/badges/50/${badgeId}.png`;
       console.log(`Matched: ${name} -> ${badgeId}`);
    } else {
       console.log(`NO MATCH: ${name}`);
    }
  }

  writeFileSync('./static/data/pl_stadiums.json', JSON.stringify(stadiums, null, 2));
  console.log("Updated pl_stadiums.json!");
}

run();
