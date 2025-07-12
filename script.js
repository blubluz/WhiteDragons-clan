

function populateTable() {
    const tbody = document.getElementById('membersTableBody');
    
    currentMembers.forEach((member, index) => {
        const row = document.createElement('tr');
        
        // Check if member is new (level1 was 0)
        const isNewMember = member.level1 === 0;
        if (isNewMember) {
            row.classList.add('new-member');
        }
        
        // Calculate level change
        const levelChange = member.level2 - member.level1;
        const levelChangeClass = levelChange > 0 ? 'level-increase' : levelChange === 0 ? 'level-same' : 'level-decrease';
        
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${member.name}</td>
            <td>${member.level1 || '-'}</td>
            <td class="level-change ${levelChangeClass}">${member.level2 || '-'}</td>
            <td>${member.class}</td>
        `;
        
        tbody.appendChild(row);
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

// Initialize the table when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    populateTable();
    
    // Add theme toggle event listener
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}); 