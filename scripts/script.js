
// função para gerar o calendario
function generateCalendar() {
    const calendarBody = document.getElementById('calendar-body');
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    calendarBody.innerHTML = '';
    let row = document.createElement('tr');
    
    for (let i = 0; i < firstDay; i++) {
        let cell = document.createElement('td');
        row.appendChild(cell);
    }
    
    for (let day = 1; day <= lastDate; day++) {
        let cell = document.createElement('td');
        cell.textContent = day;
        
        if (day === today.getDate()) {
            cell.classList.add('today');
        }
        
        row.appendChild(cell);
        
        if ((firstDay + day) % 7 === 0) {
            calendarBody.appendChild(row);
            row = document.createElement('tr');
        }
    }
    
    if (row.children.length > 0) {
        calendarBody.appendChild(row);
    }
}
generateCalendar();
 // fim da função gerar o calendario

function showhideview(view) {
    document.getElementById(view).classList.toggle('d-none');
}