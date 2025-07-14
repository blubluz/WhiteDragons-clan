// Script to download Lineage 2 class icons from multiple sources
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Multiple sources for Lineage 2 icons
const ICON_SOURCES = [
    {
        name: 'L2Wiki',
        baseUrl: 'https://l2wiki.com/images/',
        suffix: '.png'
    },
    {
        name: 'L2Central',
        baseUrl: 'https://l2central.info/class/',
        suffix: '.png'
    },
    {
        name: 'L2Database',
        baseUrl: 'https://l2database.com/class/',
        suffix: '.png'
    }
];

const ICONS_DIR = './assets/icons/';

// Ensure icons directory exists
if (!fs.existsSync(ICONS_DIR)) {
    fs.mkdirSync(ICONS_DIR, { recursive: true });
}

// List of class icons to download with alternative names
const classIcons = [
    { filename: 'warrior.png', alternatives: ['warrior', 'human-warrior', 'fighter'] },
    { filename: 'human-knight.png', alternatives: ['human-knight', 'knight', 'human-fighter'] },
    { filename: 'rogue.png', alternatives: ['rogue', 'human-rogue'] },
    { filename: 'warlord.png', alternatives: ['warlord', 'human-warlord'] },
    { filename: 'paladin.png', alternatives: ['paladin', 'human-paladin'] },
    { filename: 'dark-avenger.png', alternatives: ['dark-avenger', 'human-dark-avenger'] },
    { filename: 'treasure-hunter.png', alternatives: ['treasure-hunter', 'human-treasure-hunter', 'th'] },
    { filename: 'hawkeye.png', alternatives: ['hawkeye', 'human-hawkeye'] },
    { filename: 'plains-walker.png', alternatives: ['plains-walker', 'human-plains-walker'] },
    { filename: 'cleric.png', alternatives: ['cleric', 'human-cleric'] },
    { filename: 'bishop.png', alternatives: ['bishop', 'human-bishop'] },
    { filename: 'prophet.png', alternatives: ['prophet', 'human-prophet'] },
    { filename: 'human-wizard.png', alternatives: ['human-wizard', 'wizard', 'human-mystic'] },
    { filename: 'sorcerer.png', alternatives: ['sorcerer', 'human-sorcerer'] },
    { filename: 'necromancer.png', alternatives: ['necromancer', 'human-necromancer'] },
    { filename: 'warlock.png', alternatives: ['warlock', 'human-warlock'] },
    { filename: 'elven-knight.png', alternatives: ['elven-knight', 'elf-knight'] },
    { filename: 'temple-knight.png', alternatives: ['temple-knight', 'elf-temple-knight'] },
    { filename: 'swordsinger.png', alternatives: ['swordsinger', 'elf-swordsinger'] },
    { filename: 'bladedancer.png', alternatives: ['bladedancer', 'elf-bladedancer'] },
    { filename: 'elven-scout.png', alternatives: ['elven-scout', 'elf-scout'] },
    { filename: 'silver-ranger.png', alternatives: ['silver-ranger', 'elf-silver-ranger'] },
    { filename: 'elven-wizard.png', alternatives: ['elven-wizard', 'elf-wizard'] },
    { filename: 'spellsinger.png', alternatives: ['spellsinger', 'elf-spellsinger'] },
    { filename: 'elemental-summoner.png', alternatives: ['elemental-summoner', 'elf-elemental-summoner'] },
    { filename: 'elven-oracle.png', alternatives: ['elven-oracle', 'elf-oracle'] },
    { filename: 'palus-knight.png', alternatives: ['palus-knight', 'dark-elf-palus-knight'] },
    { filename: 'shillien-knight.png', alternatives: ['shillien-knight', 'dark-elf-shillien-knight', 'sk'] },
    { filename: 'assassin.png', alternatives: ['assassin', 'dark-elf-assassin'] },
    { filename: 'abyss-walker.png', alternatives: ['abyss-walker', 'dark-elf-abyss-walker'] },
    { filename: 'phantom-ranger.png', alternatives: ['phantom-ranger', 'dark-elf-phantom-ranger'] },
    { filename: 'spellhowler.png', alternatives: ['spellhowler', 'dark-elf-spellhowler'] },
    { filename: 'phantom-summoner.png', alternatives: ['phantom-summoner', 'dark-elf-phantom-summoner'] },
    { filename: 'shillien-elder.png', alternatives: ['shillien-elder', 'dark-elf-shillien-elder'] },
    { filename: 'shilien-oracle.png', alternatives: ['shilien-oracle', 'dark-elf-shilien-oracle'] },
    { filename: 'orc-raider.png', alternatives: ['orc-raider', 'orc-fighter'] },
    { filename: 'destroyer.png', alternatives: ['destroyer', 'orc-destroyer'] },
    { filename: 'monk.png', alternatives: ['monk', 'orc-monk'] },
    { filename: 'tyrant.png', alternatives: ['tyrant', 'orc-tyrant'] },
    { filename: 'overlord.png', alternatives: ['overlord', 'orc-overlord'] },
    { filename: 'warcryer.png', alternatives: ['warcryer', 'orc-warcryer'] },
    { filename: 'orc-shaman.png', alternatives: ['orc-shaman', 'shaman'] },
    { filename: 'dwarf-scavenger.png', alternatives: ['dwarf-scavenger', 'scavenger'] },
    { filename: 'bounty-hunter.png', alternatives: ['bounty-hunter', 'bh'] },
    { filename: 'warsmith.png', alternatives: ['warsmith', 'ws'] },
    { filename: 'human-fighter.png', alternatives: ['human-fighter', 'fighter'] },
    { filename: 'human-mystic.png', alternatives: ['human-mystic', 'mystic'] },
    { filename: 'elven-fighter.png', alternatives: ['elven-fighter', 'elf-fighter'] },
    { filename: 'elven-mystic.png', alternatives: ['elven-mystic', 'elf-mystic'] },
    { filename: 'dark-elf-fighter.png', alternatives: ['dark-elf-fighter', 'dark-fighter'] },
    { filename: 'dark-elf-mystic.png', alternatives: ['dark-elf-mystic', 'dark-mystic'] },
    { filename: 'orc-fighter.png', alternatives: ['orc-fighter', 'orc-warrior'] },
    { filename: 'orc-mystic.png', alternatives: ['orc-mystic', 'orc-shaman'] },
    { filename: 'dwarf-fighter.png', alternatives: ['dwarf-fighter', 'dwarf-warrior'] }
];

function downloadIcon(iconConfig, source) {
    return new Promise((resolve, reject) => {
        const filePath = path.join(ICONS_DIR, iconConfig.filename);
        
        // Check if file already exists and is valid
        if (fs.existsSync(filePath)) {
            const stats = fs.statSync(filePath);
            if (stats.size > 1000) { // If file is larger than 1KB, assume it's valid
                console.log(`Icon ${iconConfig.filename} already exists and appears valid, skipping...`);
                resolve();
                return;
            }
        }
        
        // Try different alternative names for this class
        for (const altName of iconConfig.alternatives) {
            const url = `${source.baseUrl}${altName}${source.suffix}`;
            const file = fs.createWriteStream(filePath);
            
            const protocol = url.startsWith('https:') ? https : http;
            
            protocol.get(url, (response) => {
                if (response.statusCode === 200) {
                    response.pipe(file);
                    file.on('finish', () => {
                        file.close();
                        const stats = fs.statSync(filePath);
                        if (stats.size > 1000) {
                            console.log(`Downloaded: ${iconConfig.filename} from ${source.name} (${altName})`);
                            resolve();
                        } else {
                            // File is too small, probably not a valid image
                            fs.unlinkSync(filePath);
                            resolve(); // Try next alternative
                        }
                    });
                } else {
                    resolve(); // Try next alternative
                }
            }).on('error', (err) => {
                resolve(); // Try next alternative
            });
            
            // If we successfully downloaded, break out of the alternatives loop
            if (fs.existsSync(filePath) && fs.statSync(filePath).size > 1000) {
                break;
            }
        }
        
        // If no alternatives worked, create a placeholder
        if (!fs.existsSync(filePath)) {
            createPlaceholderIcon(iconConfig.filename);
            resolve();
        }
    });
}

function createPlaceholderIcon(iconName) {
    // Create a simple SVG placeholder icon with class name
    const className = iconName.replace('.png', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4a5568;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2d3748;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="32" height="32" fill="url(#grad)" rx="6"/>
  <text x="16" y="22" font-family="Arial, sans-serif" font-size="6" fill="white" text-anchor="middle" font-weight="bold">${className}</text>
</svg>`;
    
    const filePath = path.join(ICONS_DIR, iconName.replace('.png', '.svg'));
    fs.writeFileSync(filePath, svgContent);
    console.log(`Created placeholder: ${iconName.replace('.png', '.svg')}`);
}

async function downloadAllIcons() {
    console.log('Starting icon download from multiple sources...');
    
    for (const iconConfig of classIcons) {
        let downloaded = false;
        
        // Try each source
        for (const source of ICON_SOURCES) {
            if (!downloaded) {
                await downloadIcon(iconConfig, source);
                
                // Check if download was successful
                const filePath = path.join(ICONS_DIR, iconConfig.filename);
                if (fs.existsSync(filePath) && fs.statSync(filePath).size > 1000) {
                    downloaded = true;
                }
            }
        }
        
        // Small delay to avoid overwhelming servers
        await new Promise(resolve => setTimeout(resolve, 200));
    }
    
    console.log('Icon download completed!');
}

// Run the download
downloadAllIcons().catch(console.error); 