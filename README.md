# Clan Members Website

A modern, responsive website to display clan member information with separate pages for current and left members.

## Features

- **Current Members Page**: Shows all active clan members
- **Left Members Page**: Shows members who have left the clan
- **New Member Highlighting**: Members who had level 0 on 09.07 are highlighted in green
- **Level Change Indicators**: Visual indicators for level increases/decreases
- **Status Display**: Shows online/offline status
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, professional design with gradient backgrounds

## How to Use

1. Open `index.html` in your web browser to view the current members
2. Click on "Left Members" in the navigation to view members who left the clan
3. New members (those with level 0 on 09.07) are automatically highlighted in green
4. Level changes are color-coded:
   - Green: Level increased
   - Gray: No change
   - Red: Level decreased

## File Structure

- `index.html` - Main page with current members
- `left-members.html` - Page showing left members
- `styles.css` - CSS styling for the entire website
- `script.js` - JavaScript for current members page
- `left-script.js` - JavaScript for left members page
- `README.md` - This file

## Data Structure

The member data is stored in JavaScript arrays with the following structure:

```javascript
{
    id: number,
    name: string,
    level1: number, // Level on 09.07
    level2: number, // Level on 12.07
    class: string,
    status: string  // "ON" for online, empty for offline
}
```

## Customization

To add or modify members:
1. Edit the `currentMembers` array in `script.js` for current members
2. Edit the `leftMembers` array in `left-script.js` for left members
3. Refresh the page to see changes

## Browser Compatibility

This website works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge 