// Import Lineage 2 classes configuration
// Note: In a browser environment, this will be loaded via script tag

// Current clan members data with class IDs instead of class names
const currentMembers = [
    { id: 1, name: "Apophis", level1: 37, level2: 40, classId: 244 }, // Warsmith
    { id: 2, name: "ExtraLong", level1: 40, level2: 45, classId: 19 }, // Hawkeye
    { id: 3, name: "oom", level1: 36, level2: 38, classId: 206 }, // Elven scout
    { id: 4, name: "Firefly", level1: 42, level2: 44, classId: 243 }, // Bounty Hunter
    { id: 5, name: "Aurora", level1: 38, level2: 41, classId: 228 }, // Elven Wizard
    { id: 6, name: "ClameliaDoll", level1: 44, level2: 47, classId: 69 }, // Shillien Elder
    { id: 7, name: "Dailily", level1: 45, level2: 47, classId: 67 }, // Spellhowler
    { id: 8, name: "RedSky", level1: 37, level2: 41, classId: 21 }, // Cleric
    { id: 9, name: "ieP", level1: 36, level2: 36, classId: 70 }, // Shilien Oracle
    { id: 10, name: "dissonance", level1: 44, level2: 44, classId: 22 }, // Bishop
    { id: 11, name: "Yonko", level1: 22, level2: 27, classId: 21 }, // Cleric
    { id: 12, name: "Dyrky", level1: 45, level2: 45, classId: 17 }, // Dark Avenger
    { id: 13, name: "Blu", level1: 46, level2: 48, classId: 65 }, // Abyss Walker
    { id: 14, name: "Dune", level1: 42, level2: 45, classId: 200 }, // Destro
    { id: 15, name: "crematE", level1: 35, level2: 41, classId: 210 }, // Human Knight
    { id: 16, name: "F4sh10n", level1: 34, level2: 35, classId: 21 }, // Cleric
    { id: 17, name: "Mihaela", level1: 38, level2: 40, classId: 67 }, // Spellhowler
    { id: 18, name: "TrueBlood", level1: 43, level2: 46, classId: 67 }, // Spellhowler
    { id: 19, name: "EdgeA", level1: 41, level2: 44, classId: 48 }, // Spellsinger
    { id: 20, name: "dbz", level1: 40, level2: 42, classId: 69 }, // Shillien Elder
    { id: 21, name: "Jimador", level1: 39, level2: 41, classId: 243 }, // Bounty Hunter
    { id: 24, name: "Kyra", level1: 26, level2: 27, classId: 70 }, // Shilien Oracle
    { id: 25, name: "Nivvy", level1: 24, level2: 24, classId: 231 }, // Elven Oracle
    { id: 26, name: "Jalmy", level1: 35, level2: 39, classId: 242 }, // Orc Shaman
    { id: 27, name: "ErisMorn", level1: 41, level2: 41, classId: 203 }, // Shilien elder
    { id: 28, name: "EbonyMaw", level1: 42, level2: 41, classId: 26 }, // Necromancer
    { id: 29, name: "D1nko", level1: 44, level2: 46, classId: 18 }, // Treasure Hunter
    { id: 31, name: "En1gma", level1: 38, level2: 40, classId: 204 }, // Shillen Elder
    { id: 32, name: "Lami", level1: 31, level2: 35, classId: 220 }, // Human Wizard
    { id: 33, name: "EliseWin", level1: 33, level2: 41, classId: 208 }, // Destroyer
    { id: 34, name: "Esc0baR", level1: 35, level2: 37, classId: 11 }, // Warrior
    { id: 35, name: "Silppuri", level1: 31, level2: 34, classId: 210 }, // Human Knight
    { id: 36, name: "Keira", level1: 38, level2: 40, classId: 44 }, // Bladedancer
    { id: 37, name: "CaptainHog", level1: 28, level2: 30, classId: 245 }, // Dwarf Scavenger
    { id: 38, name: "AlinCretu4kk", level1: 43, level2: 47, classId: 43 }, // Swordsinger
    { id: 39, name: "UscatulTau", level1: 41, level2: 44, classId: 86 }, // Warcryer
    { id: 40, name: "Greven", level1: 40, level2: 42, classId: 208 }, // Destroyer
    { id: 42, name: "Cut", level1: 43, level2: 45, classId: 18 }, // Treasure Hunter
    { id: 43, name: "Lukosaur", level1: 33, level2: 33, classId: 13 }, // Rogue
    { id: 44, name: "d0ne", level1: 26, level2: 26, classId: 13 }, // Rogue
    { id: 45, name: "Sizla", level1: 38, level2: 43, classId: 67 }, // Spellhowler
    { id: 46, name: "SuppM8", level1: 36, level2: 42, classId: 23 }, // Prophet
    { id: 48, name: "TheCurseD", level1: 38, level2: 38, classId: 220 }, // Human Wizard
    { id: 49, name: "DrMajk", level1: 36, level2: 36, classId: 11 }, // Warrior
    { id: 50, name: "Darei", level1: 45, level2: 47, classId: 240 }, // Overlord
    { id: 51, name: "Rowena", level1: 26, level2: 33, classId: 242 }, // Orc Shaman
    { id: 52, name: "Nefertari", level1: 29, level2: 33, classId: 245 }, // Dwarf Scavenger
    { id: 53, name: "GlizzyMaxxin", level1: 45, level2: 45, classId: 208 }, // Destroyer
    { id: 54, name: "Cartethyia", level1: 46, level2: 48, classId: 43 }, // Swordsinger
    { id: 55, name: "MrIqaros", level1: 30, level2: 35, classId: 13 }, // Rogue
    { id: 56, name: "Freydis", level1: 26, level2: 30, classId: 220 }, // Human Wizard
    { id: 57, name: "Hubba", level1: 40, level2: 43, classId: 22 }, // Bishop
    { id: 58, name: "Falco", level1: 45, level2: 47, classId: 44 }, // Bladedancer
    { id: 59, name: "idiapwnz", level1: 44, level2: 47, classId: 18 }, // Treasure Hunter
    { id: 61, name: "ManaRefill", level1: 29, level2: 31, classId: 205 }, // Shilien oracle
    { id: 63, name: "lovehate", level1: 46, level2: 48, classId: 84 }, // Tyrant
    { id: 64, name: "Loyd", level1: 28, level2: 34, classId: 52 }, // Dark Elf Wizard
    { id: 65, name: "BackBlaze", level1: 20, level2: 24, classId: 220 }, // Human Wizard
    { id: 66, name: "DarKeiju", level1: 23, level2: 25, classId: 70 }, // Shilien Oracle
    { id: 67, name: "SilverRanger", level1: 42, level2: 45, classId: 227 }, // Silver Ranger
    { id: 68, name: "Juontaja", level1: 30, level2: 33, classId: 11 }, // Warrior
    { id: 69, name: "Juusto", level1: 35, level2: 38, classId: 207 }, // Palus Knight
    { id: 70, name: "Vektra", level1: 34, level2: 41, classId: 14 }, // Warlord
    { id: 71, name: "ELLE", level1: 25, level2: 32, classId: 64 }, // Assassin
    { id: 72, name: "iInBound", level1: 22, level2: 29, classId: 206 }, // Elven Scout
    { id: 73, name: "PaPaRouNa", level1: 23, level2: 25, classId: 21 }, // Cleric
    { id: 74, name: "Drac", level1: 32, level2: 37, classId: 13 }, // Rogue
    { id: 75, name: "DaughterDater", level1: 35, level2: 36, classId: 207 }, // Palus Knight
    { id: 76, name: "Ryoshin", level1: 12, level2: 18, classId: 52 }, // Dark Elf Mystic
    { id: 77, name: "Haquim", level1: 22, level2: 32, classId: 242 }, // Orc Shaman
    { id: 78, name: "Teemo", level1: 0, level2: 31, classId: 237 }, // Orc Raider
    { id: 79, name: "YellowRanger", level1: 0, level2: 36, classId: 13 }, // Rogue
    { id: 80, name: "GoldRanger", level1: 0, level2: 27, classId: 64 }, // Assassin
    { id: 81, name: "MrFister", level1: 0, level2: 26, classId: 238 }, // Orc Monk
    { id: 82, name: "Avelia", level1: 0, level2: 41, classId: 243 }, // Bounty Hunter
    { id: 83, name: "Moj1too", level1: 0, level2: 33, classId: 44 }, // Bladedancer
    { id: 84, name: "PuffPaff", level1: 0, level2: 35, classId: 206 }, // Elven Scout
    { id: 85, name: "RedRanger", level1: 0, level2: 39, classId: 13 }, // Rogue
    { id: 86, name: "Kaljakone", level1: 0, level2: 41, classId: 27 } // Warlock
];

// Left clan members data with class IDs
const leftMembers = [
    { id: 23, name: "Goonezstra", level1: 41, level2: null, classId: 300 }, // SK
    { id: 22, name: "Cro", level1: 26, level2: null, classId: 242 }, // Orc Shaman
    { id: 30, name: "Gorilla", level1: 27, level2: null, classId: 237 }, // Orc Raider
    { id: 41, name: "halFcreaM", level1: 23, level2: null, classId: 228 }, // Elven Wizard
    { id: 47, name: "Ferwen", level1: 44, level2: null, classId: 16 }, // Paladin
    { id: 60, name: "calipwnz", level1: 44, level2: null, classId: 301 }, // TH
    { id: 62, name: "DarkHolt", level1: 42, level2: null, classId: 16 } // Paladin
];

// Helper function to get class name by ID
function getClassNameById(classId) {
    if (typeof LINEAGE2_CLASSES !== 'undefined' && LINEAGE2_CLASSES[classId]) {
        return LINEAGE2_CLASSES[classId].name;
    }
    return "Unknown Class";
}

// Helper function to get class icon by ID
function getClassIconById(classId) {
    if (typeof LINEAGE2_CLASSES !== 'undefined' && LINEAGE2_CLASSES[classId]) {
        return `assets/icons/${LINEAGE2_CLASSES[classId].icon}`;
    }
    return "assets/icons/unknown-class.png";
} 