

function populateLeftTable() {
    const tbody = document.getElementById('leftMembersTableBody');
    tbody.innerHTML = '';
    leftMembers.forEach((member, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>
                <span class="member-info">
                    <img src="${getClassIconById(member.classId)}" alt="class" class="class-icon" onerror="this.style.display='none'">
                    ${member.name}
                </span>
            </td>
            <td>${member.level1 || '-'}</td>
            <td>${member.level2 || '-'}</td>
            <td>
                <span class="class-info">
                    <img src="${getClassIconById(member.classId)}" alt="class" class="class-icon" onerror="this.style.display='none'">
                    ${getClassNameById(member.classId)}
                </span>
            </td>
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
    populateLeftTable();
    
    // Add theme toggle event listener
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}); 