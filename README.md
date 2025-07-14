# WhiteDragons Clan Management System

A web-based clan management system for tracking member levels and progress in Lineage 2.

## Features

- **Current Members Tracking**: View all active clan members with their levels and classes
- **Left Members**: Track members who have left or rerolled
- **Progress Summary**: Analyze level progress with various filters and statistics
- **Class Icons**: Visual representation of Lineage 2 classes with official icons
- **Dark/Light Theme**: Toggle between dark and light themes
- **Responsive Design**: Works on desktop and mobile devices

## Class System

The application now uses a comprehensive Lineage 2 class system with:

- **Class IDs**: Each class has a unique ID for easy management
- **Class Icons**: Visual icons for all Lineage 2 classes (1st and 2nd classes)
- **Race Classification**: Classes are organized by race (Human, Elf, Dark Elf, Orc, Dwarf)
- **Base Class Types**: Fighter and Mystic classifications

### Supported Classes

#### Human Classes
- **Fighters**: Warrior, Human Knight, Rogue, Warlord, Paladin, Dark Avenger, Treasure Hunter, Hawkeye, Plains Walker
- **Mystics**: Cleric, Bishop, Prophet, Human Wizard, Sorcerer, Necromancer, Warlock

#### Elf Classes
- **Fighters**: Elven Knight, Temple Knight, Swordsinger, Bladedancer, Elven Scout, Silver Ranger
- **Mystics**: Elven Wizard, Spellsinger, Elemental Summoner, Elven Oracle

#### Dark Elf Classes
- **Fighters**: Palus Knight, Shillien Knight, Bladedancer, Assassin, Abyss Walker, Phantom Ranger
- **Mystics**: Spellhowler, Phantom Summoner, Shillien Elder, Shilien Oracle

#### Orc Classes
- **Fighters**: Orc Raider, Destroyer, Monk, Tyrant, Overlord, Warcryer
- **Mystics**: Orc Shaman

#### Dwarf Classes
- **Fighters**: Dwarf Scavenger, Bounty Hunter, Warsmith

## File Structure

```
WhiteDragons-clan/
├── index.html              # Main members page
├── left-members.html       # Left members page
├── summary.html           # Progress summary page
├── data.js               # Member data with class IDs
├── classes.js            # Lineage 2 class definitions
├── script.js             # Main page JavaScript
├── left-script.js        # Left members page JavaScript
├── summary-script.js     # Summary page JavaScript
├── styles.css            # Styling and themes
├── assets/
│   └── icons/            # Lineage 2 class icons
└── README.md             # This file
```

## Usage

1. Open `index.html` in a web browser
2. Navigate between pages using the navigation menu
3. Toggle between dark and light themes using the theme button
4. View member progress and statistics in the summary page

## Data Management

### Adding New Members

To add a new member, edit `data.js` and add an entry to the `currentMembers` array:

```javascript
{ id: 87, name: "NewMember", level1: 25, level2: 30, classId: 21 } // Cleric
```

### Updating Member Data

To update member levels or class, modify the corresponding entry in `data.js`.

### Class IDs

Use the class IDs defined in `classes.js` when setting member classes. The system includes helper functions:

- `getClassNameById(classId)`: Get class name from ID
- `getClassIconById(classId)`: Get class icon path from ID

## Technical Details

- **Pure HTML/CSS/JavaScript**: No external dependencies
- **Local Storage**: Theme preference is saved locally
- **Responsive Design**: Mobile-friendly layout
- **Progressive Enhancement**: Works without JavaScript (basic functionality)

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

This project is for internal clan use only. 