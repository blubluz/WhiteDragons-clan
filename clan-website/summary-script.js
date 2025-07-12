

function createSummaryCard(member, levelChange, cardType = '') {
    const levelChangeClass = levelChange > 0 ? 'level-increase' : levelChange === 0 ? 'level-same' : 'level-decrease';
    const levelChangeText = levelChange > 0 ? `+${levelChange}` : levelChange === 0 ? '0' : levelChange;
    
    return `
        <div class="summary-card ${cardType}">
            <div class="member-name">${member.name}</div>
            <div class="member-class">${member.class}</div>
            <div class="level-info">
                <span>${member.level1 || '-'} → ${member.level2 || '-'}</span>
                <span class="level-change ${levelChangeClass}">${levelChangeText}</span>
            </div>
        </div>
    `;
}

function updateStats() {
    const totalMembers = currentMembers.length;
    const activeMembers = currentMembers.filter(m => (m.level2 || 0) > 0).length;
    const newMembers = currentMembers.filter(m => (m.level1 || 0) === 0).length;
    
    document.getElementById('totalMembers').textContent = totalMembers;
    document.getElementById('activeMembers').textContent = activeMembers;
    document.getElementById('newMembers').textContent = newMembers;
}

function populateSummary() {
    // Calculate level changes for all members
    const membersWithChanges = currentMembers.map(member => ({
        ...member,
        levelChange: (member.level2 || 0) - (member.level1 || 0)
    }));
    
    // Top 5 level increases (excluding members who started at level 0)
    const topIncreases = membersWithChanges
        .filter(m => m.levelChange > 0 && (m.level1 || 0) > 0)
        .sort((a, b) => b.levelChange - a.levelChange)
        .slice(0, 5);
    
    // Members above 40 with no increase
    const above40NoProgress = membersWithChanges
        .filter(m => (m.level1 || 0) > 40 && m.levelChange <= 0);
    
    // Members 30-40 with no increase
    const level30to40NoProgress = membersWithChanges
        .filter(m => (m.level1 || 0) >= 30 && (m.level1 || 0) <= 40 && m.levelChange <= 0);
    
    // Members under 30
    const under30Members = membersWithChanges
        .filter(m => (m.level2 || 0) < 30);
    
    // Populate summary sections
    document.getElementById('topLevelIncreases').innerHTML = 
        topIncreases.map(m => createSummaryCard(m, m.levelChange, 'top-increase')).join('');
    
    document.getElementById('above40NoProgress').innerHTML = 
        above40NoProgress.map(m => createSummaryCard(m, m.levelChange, 'no-progress')).join('');
    
    document.getElementById('level30to40NoProgress').innerHTML = 
        level30to40NoProgress.map(m => createSummaryCard(m, m.levelChange, 'no-progress')).join('');
    
    document.getElementById('under30Members').innerHTML = 
        under30Members.map(m => createSummaryCard(m, m.levelChange, 'under-30')).join('');
}

function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button and corresponding pane
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// Theme management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    updateStats();
    populateSummary();
    initTabs();
    
    // Add theme toggle event listener
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}); 