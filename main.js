

// Hardcoded case data
const casesData = [
  {
    id: 'MC-2024-001',
    childName: 'Rahul Kumar',
    age: 12,
    gender: 'male',
    type: 'missing',
    status: 'open',
    priority: 'critical',
    location: 'Connaught Place, Delhi',
    lastSeenDate: '2024-01-15',
    dateReported: '2024-01-16',
    physicalDesc: 'Fair complexion, black hair, wearing blue school uniform',
    guardianName: 'Suresh Kumar',
    guardianPhone: '+91 98765 43210',
    guardianAddress: '45/2, Karol Bagh, New Delhi',
    suspectName: 'Unknown',
    suspectVehicle: 'White Maruti van (DL 3C AB 1234)',
    suspectDesc: 'Middle-aged male, approximately 40 years old',
    notes: 'Child was last seen near the school bus stop. CCTV footage from nearby shop shows possible suspect.',
    reportSource: 'citizen'
  },
  {
    id: 'TR-2024-002',
    childName: 'Priya Sharma',
    age: 14,
    gender: 'female',
    type: 'trafficking',
    status: 'investigating',
    priority: 'high',
    location: 'New Delhi Railway Station',
    lastSeenDate: '2024-01-10',
    dateReported: '2024-01-11',
    physicalDesc: 'Medium complexion, brown hair, wearing yellow kurta',
    guardianName: 'Amit Sharma',
    guardianPhone: '+91 87654 32109',
    guardianAddress: '78, Janakpuri, New Delhi',
    suspectName: 'Ravi Singh',
    suspectVehicle: 'Unknown',
    suspectDesc: 'Approximately 35 years old, thin build, speaks Hindi with Bihari accent',
    notes: 'NGO reported suspicious activity. Suspect known to lure children with job promises.',
    reportSource: 'ngo'
  },
  {
    id: 'MC-2024-003',
    childName: 'Arjun Singh',
    age: 10,
    gender: 'male',
    type: 'missing',
    status: 'found',
    priority: 'high',
    location: 'Chandni Chowk, Delhi',
    lastSeenDate: '2024-01-08',
    dateReported: '2024-01-08',
    physicalDesc: 'Dark complexion, short black hair, wearing red t-shirt',
    guardianName: 'Baldev Singh',
    guardianPhone: '+91 76543 21098',
    guardianAddress: '23, Chandni Chowk, Delhi',
    suspectName: 'Unknown',
    suspectVehicle: 'N/A',
    suspectDesc: 'N/A',
    notes: 'Child found at nearby shelter home. Reunited with family.',
    reportSource: 'police'
  },
  {
    id: 'CS-2024-004',
    childName: 'Unknown (Female)',
    age: 8,
    gender: 'female',
    type: 'sighting',
    status: 'investigating',
    priority: 'medium',
    location: 'ISBT Kashmere Gate',
    lastSeenDate: '2024-01-18',
    dateReported: '2024-01-18',
    physicalDesc: 'Light complexion, tied hair, wearing dirty clothes, appeared distressed',
    guardianName: 'Not Known',
    guardianPhone: 'N/A',
    guardianAddress: 'N/A',
    suspectName: 'Adult male accompanying her',
    suspectVehicle: 'Unknown',
    suspectDesc: 'Male, approximately 45 years, behaving suspiciously',
    notes: 'Citizen reported suspicious adult with child who did not appear to be his daughter.',
    reportSource: 'citizen'
  },
  {
    id: 'RO-2024-005',
    childName: 'Fatima Begum',
    age: 11,
    gender: 'female',
    type: 'rescue',
    status: 'closed',
    priority: 'critical',
    location: 'Garh Mukteshwar, UP Border',
    lastSeenDate: '2024-01-05',
    dateReported: '2024-01-06',
    physicalDesc: 'Fair complexion, black hair, wearing traditional attire',
    guardianName: 'Karim Begum',
    guardianPhone: '+91 65432 10987',
    guardianAddress: '56, Okhla, New Delhi',
    suspectName: 'Mohan Das',
    suspectVehicle: 'Tempo (UP 14 CD 5678)',
    suspectDesc: 'Known trafficker, multiple prior cases',
    notes: 'Successfully rescued in joint operation with Border Security. Child handed over to CWC.',
    reportSource: 'border'
  },
  {
    id: 'MC-2024-006',
    childName: 'Deepak Verma',
    age: 9,
    gender: 'male',
    type: 'missing',
    status: 'open',
    priority: 'high',
    location: 'Lajpat Nagar, Delhi',
    lastSeenDate: '2024-01-19',
    dateReported: '2024-01-19',
    physicalDesc: 'Fair complexion, short hair, wearing school bag',
    guardianName: 'Rajesh Verma',
    guardianPhone: '+91 54321 09876',
    guardianAddress: '12, Lajpat Nagar III, New Delhi',
    suspectName: 'Unknown',
    suspectVehicle: 'Auto rickshaw (green)',
    suspectDesc: 'Unknown auto driver',
    notes: 'Child did not return home from school. Last seen boarding an auto.',
    reportSource: 'police'
  },
  {
    id: 'TR-2024-007',
    childName: 'Lakshmi Devi',
    age: 15,
    gender: 'female',
    type: 'trafficking',
    status: 'investigating',
    priority: 'critical',
    location: 'Mahipalpur, Delhi',
    lastSeenDate: '2024-01-12',
    dateReported: '2024-01-13',
    physicalDesc: 'Medium complexion, long black hair, wearing salwar kameez',
    guardianName: 'Ram Lal',
    guardianPhone: '+91 43210 98765',
    guardianAddress: 'Village Kheda, Bihar',
    suspectName: 'Pinky (alias)',
    suspectVehicle: 'Toyota Innova (white)',
    suspectDesc: 'Female, approximately 30 years, pretends to be placement agent',
    notes: 'Girl brought from Bihar for domestic work. Trafficking ring suspected.',
    reportSource: 'ngo'
  },
  {
    id: 'MC-2024-008',
    childName: 'Aman Sheikh',
    age: 7,
    gender: 'male',
    type: 'missing',
    status: 'found',
    priority: 'medium',
    location: 'Jama Masjid Area, Delhi',
    lastSeenDate: '2024-01-14',
    dateReported: '2024-01-14',
    physicalDesc: 'Fair complexion, wearing blue jeans and white shirt',
    guardianName: 'Akbar Sheikh',
    guardianPhone: '+91 32109 87654',
    guardianAddress: '34, Jama Masjid, Old Delhi',
    suspectName: 'N/A',
    suspectVehicle: 'N/A',
    suspectDesc: 'N/A',
    notes: 'Child wandered away during Friday prayers. Found 2 hours later.',
    reportSource: 'citizen'
  },
  {
    id: 'CS-2024-009',
    childName: 'Unknown (Male)',
    age: 6,
    gender: 'male',
    type: 'sighting',
    status: 'open',
    priority: 'critical',
    location: 'Anand Vihar Bus Terminal',
    lastSeenDate: '2024-01-20',
    dateReported: '2024-01-20',
    physicalDesc: 'Dark complexion, messy hair, malnourished, barefoot',
    guardianName: 'Not Known',
    guardianPhone: 'N/A',
    guardianAddress: 'N/A',
    suspectName: 'Two adults',
    suspectVehicle: 'Private bus',
    suspectDesc: 'Male and female adult, appearing nervous, avoiding police checks',
    notes: 'Citizen reported child being forced onto bus by adults. Bus headed towards UP.',
    reportSource: 'border'
  },
  {
    id: 'RO-2024-010',
    childName: 'Rekha Kumari',
    age: 13,
    gender: 'female',
    type: 'rescue',
    status: 'investigating',
    priority: 'high',
    location: 'Gurgaon, Haryana',
    lastSeenDate: '2024-01-17',
    dateReported: '2024-01-17',
    physicalDesc: 'Medium complexion, brown hair, wearing simple dress',
    guardianName: 'Shanti Devi',
    guardianPhone: '+91 21098 76543',
    guardianAddress: '67, Gurgaon Sector 15, Haryana',
    suspectName: 'Placement Agency owner',
    suspectVehicle: 'Unknown',
    suspectDesc: 'Known placement agent under surveillance',
    notes: 'Rescued from illegal placement agency. Currently in shelter home. Investigating trafficking angle.',
    reportSource: 'ngo'
  }
];

// State
let cases = [...casesData];
let currentCaseId = null;

// DOM Elements
const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');
const recentCasesBody = document.getElementById('recent-cases-body');
const casesTableBody = document.getElementById('cases-table-body');
const createCaseForm = document.getElementById('create-case-form');
const clearFormBtn = document.getElementById('clear-form-btn');
const searchInput = document.getElementById('search-cases');
const filterType = document.getElementById('filter-type');
const filterStatus = document.getElementById('filter-status');
const filterPriority = document.getElementById('filter-priority');
const modal = document.getElementById('case-modal');
const modalBody = document.getElementById('modal-body');
const closeModalBtn = document.getElementById('close-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const statusUpdate = document.getElementById('status-update');
const updateStatusBtn = document.getElementById('update-status-btn');
const toast = document.getElementById('toast');

// Navigation
navItems.forEach(item => {
  item.addEventListener('click', () => {
    const page = item.dataset.page;
    setActivePage(page);
  });
});

function setActivePage(pageName) {
  // Update nav items
  navItems.forEach(item => {
    item.classList.toggle('active', item.dataset.page === pageName);
  });

  // Update pages
  pages.forEach(page => {
    page.classList.toggle('active', page.id === pageName);
  });

  // Refresh data on certain pages
  if (pageName === 'dashboard') {
    renderRecentCases();
  } else if (pageName === 'case-management') {
    renderCasesTable();
  }
}

// Render Recent Cases on Dashboard
function renderRecentCases() {
  const recentCases = cases.slice(0, 5);
  recentCasesBody.innerHTML = recentCases.map(c => `
    <tr>
      <td><strong>${c.id}</strong></td>
      <td>${c.childName}</td>
      <td><span class="type-badge">${formatType(c.type)}</span></td>
      <td><span class="status-badge ${c.status}">${formatStatus(c.status)}</span></td>
      <td>${formatDate(c.dateReported)}</td>
      <td>
        <button class="btn btn-primary btn-small" onclick="viewCase('${c.id}')">View</button>
      </td>
    </tr>
  `).join('');
}

// Render Cases Table
function renderCasesTable(filteredCases = cases) {
  casesTableBody.innerHTML = filteredCases.map(c => `
    <tr>
      <td><strong>${c.id}</strong></td>
      <td>${c.childName}</td>
      <td><span class="type-badge">${formatType(c.type)}</span></td>
      <td><span class="status-badge ${c.status}">${formatStatus(c.status)}</span></td>
      <td><span class="priority-badge ${c.priority}">${formatPriority(c.priority)}</span></td>
      <td>${c.location}</td>
      <td>${formatDate(c.dateReported)}</td>
      <td>
        <div class="action-btns">
          <button class="btn btn-primary btn-small" onclick="viewCase('${c.id}')">View</button>
          <button class="btn btn-secondary btn-small" onclick="editCase('${c.id}')">Edit</button>
        </div>
      </td>
    </tr>
  `).join('');
}

// Formatting functions
function formatType(type) {
  const types = {
    missing: 'Missing Child',
    trafficking: 'Trafficking Report',
    sighting: 'Child Sighting',
    rescue: 'Rescue Operation'
  };
  return types[type] || type;
}

function formatStatus(status) {
  const statuses = {
    open: 'Open',
    investigating: 'Investigating',
    found: 'Found',
    closed: 'Closed'
  };
  return statuses[status] || status;
}

function formatPriority(priority) {
  return priority.charAt(0).toUpperCase() + priority.slice(1);
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

// View Case Details
window.viewCase = function(caseId) {
  const c = cases.find(c => c.id === caseId);
  if (!c) return;

  currentCaseId = caseId;
  statusUpdate.value = c.status;

  modalBody.innerHTML = `
    <div class="detail-section">
      <h4>Case Information</h4>
      <div class="detail-grid">
        <div class="detail-item"><span>Case ID</span><span>${c.id}</span></div>
        <div class="detail-item"><span>Case Type</span><span>${formatType(c.type)}</span></div>
        <div class="detail-item"><span>Status</span><span class="status-badge ${c.status}">${formatStatus(c.status)}</span></div>
        <div class="detail-item"><span>Priority</span><span class="priority-badge ${c.priority}">${formatPriority(c.priority)}</span></div>
        <div class="detail-item"><span>Date Reported</span><span>${formatDate(c.dateReported)}</span></div>
        <div class="detail-item"><span>Report Source</span><span>${formatSource(c.reportSource)}</span></div>
      </div>
    </div>
    <div class="detail-section">
      <h4>Child Information</h4>
      <div class="detail-grid">
        <div class="detail-item"><span>Name</span><span>${c.childName}</span></div>
        <div class="detail-item"><span>Age</span><span>${c.age} years</span></div>
        <div class="detail-item"><span>Gender</span><span>${c.gender.charAt(0).toUpperCase() + c.gender.slice(1)}</span></div>
        <div class="detail-item"><span>Last Seen Date</span><span>${formatDate(c.lastSeenDate)}</span></div>
        <div class="detail-item"><span>Last Seen Location</span><span>${c.location}</span></div>
        <div class="detail-item"><span>Physical Description</span><span>${c.physicalDesc}</span></div>
      </div>
    </div>
    <div class="detail-section">
      <h4>Guardian Information</h4>
      <div class="detail-grid">
        <div class="detail-item"><span>Name</span><span>${c.guardianName}</span></div>
        <div class="detail-item"><span>Contact</span><span>${c.guardianPhone}</span></div>
        <div class="detail-item"><span>Address</span><span>${c.guardianAddress}</span></div>
      </div>
    </div>
    <div class="detail-section">
      <h4>Suspect Information</h4>
      <div class="detail-grid">
        <div class="detail-item"><span>Suspect Name</span><span>${c.suspectName}</span></div>
        <div class="detail-item"><span>Vehicle</span><span>${c.suspectVehicle}</span></div>
        <div class="detail-item"><span>Description</span><span>${c.suspectDesc}</span></div>
      </div>
    </div>
    <div class="detail-section">
      <h4>Case Notes</h4>
      <p style="font-size: 0.9rem; color: var(--gray-700);">${c.notes}</p>
    </div>
  `;

  modal.classList.add('active');
};

function formatSource(source) {
  const sources = {
    citizen: 'Citizen Report',
    police: 'Police Investigation',
    ngo: 'NGO Referral',
    border: 'Border Security'
  };
  return sources[source] || source;
}

// Edit Case (placeholder for now)
window.editCase = function(caseId) {
  const c = cases.find(item => item.id === caseId);

  if (!c) return;

  // Navigate to Create Case page
  setActivePage('create-case');

  // Fill form fields
  document.getElementById('case-type').value = c.type;
  document.getElementById('priority').value = c.priority;
  document.getElementById('report-source').value = c.reportSource;

  document.getElementById('child-name').value = c.childName;
  document.getElementById('child-age').value = c.age;
  document.getElementById('child-gender').value = c.gender;
  document.getElementById('last-seen-date').value = c.lastSeenDate;
  document.getElementById('last-seen-location').value = c.location;
  document.getElementById('physical-description').value = c.physicalDesc;

  document.getElementById('guardian-name').value = c.guardianName;
  document.getElementById('guardian-phone').value = c.guardianPhone;
  document.getElementById('guardian-address').value = c.guardianAddress;

  document.getElementById('suspect-name').value = c.suspectName;
  document.getElementById('suspect-vehicle').value = c.suspectVehicle;
  document.getElementById('suspect-description').value = c.suspectDesc;

  document.getElementById('case-notes').value = c.notes;

  // Store currently edited case
  window.editingCaseId = caseId;

  showToast(`Editing case ${caseId}`);
};

// Close Modal
closeModalBtn.addEventListener('click', closeModal);
modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

function closeModal() {
  modal.classList.remove('active');
  currentCaseId = null;
}

// Update Case Status
updateStatusBtn.addEventListener('click', () => {
  if (!currentCaseId) return;

  const caseIndex = cases.findIndex(c => c.id === currentCaseId);
  if (caseIndex !== -1) {
    cases[caseIndex].status = statusUpdate.value;
    showToast('Case status updated successfully', 'success');
    closeModal();
    renderCasesTable();
    renderRecentCases();
  }
});

// Create Case Form
createCaseForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const caseType = document.getElementById('case-type').value;
  const priority = document.getElementById('priority').value;
  const childName = document.getElementById('child-name').value;
  const age = document.getElementById('child-age').value;
  const gender = document.getElementById('child-gender').value;
  const lastSeenDate = document.getElementById('last-seen-date').value;
  const location = document.getElementById('last-seen-location').value;
  const physicalDesc = document.getElementById('physical-description').value;
  const guardianName = document.getElementById('guardian-name').value;
  const guardianPhone = document.getElementById('guardian-phone').value;
  const guardianAddress = document.getElementById('guardian-address').value;
  const suspectName = document.getElementById('suspect-name').value || 'Unknown';
  const suspectVehicle = document.getElementById('suspect-vehicle').value || 'N/A';
  const suspectDesc = document.getElementById('suspect-description').value || 'N/A';
  const notes = document.getElementById('case-notes').value || '';
  const reportSource = document.getElementById('report-source').value;

  if (window.editingCaseId) {

  const caseIndex = cases.findIndex(
    item => item.id === window.editingCaseId
  );

  if (caseIndex !== -1) {

    cases[caseIndex].type = caseType;
    cases[caseIndex].priority = priority;
    cases[caseIndex].childName = childName;
    cases[caseIndex].age = parseInt(age);
    cases[caseIndex].gender = gender;
    cases[caseIndex].lastSeenDate = lastSeenDate;
    cases[caseIndex].location = location;
    cases[caseIndex].physicalDesc = physicalDesc;
    cases[caseIndex].guardianName = guardianName;
    cases[caseIndex].guardianPhone = guardianPhone;
    cases[caseIndex].guardianAddress = guardianAddress;
    cases[caseIndex].suspectName = suspectName;
    cases[caseIndex].suspectVehicle = suspectVehicle;
    cases[caseIndex].suspectDesc = suspectDesc;
    cases[caseIndex].notes = notes;
    cases[caseIndex].reportSource = reportSource;

    showToast("Case updated successfully", "success");

    window.editingCaseId = null;

    createCaseForm.reset();

    renderCasesTable();
    renderRecentCases();

    setActivePage('case-management');

    return;
  }
}

  // Generate case ID
  const prefixMap = {
    missing: 'MC',
    trafficking: 'TR',
    sighting: 'CS',
    rescue: 'RO'
  };
  const prefix = prefixMap[caseType] || 'CA';
  const year = new Date().getFullYear();
  const caseNum = String(cases.length + 1).padStart(3, '0');
  const caseId = `${prefix}-${year}-${caseNum}`;

  const newCase = {
    id: caseId,
    childName,
    age: parseInt(age),
    gender,
    type: caseType,
    status: 'open',
    priority,
    location,
    lastSeenDate,
    dateReported: new Date().toISOString().split('T')[0],
    physicalDesc: physicalDesc || 'No description provided',
    guardianName,
    guardianPhone,
    guardianAddress,
    suspectName,
    suspectVehicle,
    suspectDesc,
    notes,
    reportSource
  };

  cases.unshift(newCase);
  showToast(`Case ${caseId} created successfully`, 'success');
  createCaseForm.reset();
  setActivePage('dashboard');
});

// Clear Form
clearFormBtn.addEventListener('click', () => {
  createCaseForm.reset();
});

// Filter and Search
function applyFilters() {
  const searchTerm = searchInput.value.toLowerCase();
  const typeFilter = filterType.value;
  const statusFilter = filterStatus.value;
  const priorityFilter = filterPriority.value;

  let filtered = cases.filter(c => {
    const matchesSearch = searchTerm === '' ||
      c.id.toLowerCase().includes(searchTerm) ||
      c.childName.toLowerCase().includes(searchTerm) ||
      c.location.toLowerCase().includes(searchTerm);
    const matchesType = typeFilter === '' || c.type === typeFilter;
    const matchesStatus = statusFilter === '' || c.status === statusFilter;
    const matchesPriority = priorityFilter === '' || c.priority === priorityFilter;

    return matchesSearch && matchesType && matchesStatus && matchesPriority;
  });

  renderCasesTable(filtered);
}

searchInput.addEventListener('input', applyFilters);
filterType.addEventListener('change', applyFilters);
filterStatus.addEventListener('change', applyFilters);
filterPriority.addEventListener('change', applyFilters);

// Toast Notification
function showToast(message, type = 'info') {
  toast.textContent = message;
  toast.className = 'toast active';
  if (type === 'success') {
    toast.classList.add('success');
  } else if (type === 'error') {
    toast.classList.add('error');
  }

  setTimeout(() => {
    toast.classList.remove('active', 'success', 'error');
  }, 3000);
}

// Initialize
renderRecentCases();
renderCasesTable();
