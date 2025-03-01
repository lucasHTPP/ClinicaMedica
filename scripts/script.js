
function showHomeScreen() {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('home-screen').style.display = 'block';
    document.getElementById('agenda-screen').style.display = 'none';
    document.getElementById('schedule-screen').style.display = 'none';
    document.getElementById('appointments-screen').style.display = 'none';
     document.getElementById('patient-consultation-screen').style.display = 'none';
    document.getElementById('patient-evaluation-screen').style.display = 'none';
    document.getElementById('patient-evaluation-list-screen').style.display = 'none';
}

function showAgendaScreen() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('agenda-screen').style.display = 'block';
    document.getElementById('schedule-screen').style.display = 'none';
     document.getElementById('appointments-screen').style.display = 'none';
      document.getElementById('patient-consultation-screen').style.display = 'none';
    document.getElementById('patient-evaluation-screen').style.display = 'none';
    document.getElementById('patient-evaluation-list-screen').style.display = 'none';
}

function showScheduleScreen() {
    document.getElementById('agenda-screen').style.display = 'none';
    document.getElementById('schedule-screen').style.display = 'block';
    document.getElementById('appointments-screen').style.display = 'none';
     document.getElementById('patient-consultation-screen').style.display = 'none';
    document.getElementById('patient-evaluation-screen').style.display = 'none';
    document.getElementById('patient-evaluation-list-screen').style.display = 'none';
}

 function showAppointmentsScreen() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('agenda-screen').style.display = 'none';
    document.getElementById('schedule-screen').style.display = 'none';
    document.getElementById('appointments-screen').style.display = 'block';
    document.getElementById('patient-consultation-screen').style.display = 'block';
    document.getElementById('patient-evaluation-screen').style.display = 'none';
    document.getElementById('patient-evaluation-list-screen').style.display = 'none';
}

  function showPatientEvaluationList() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('agenda-screen').style.display = 'none';
    document.getElementById('schedule-screen').style.display = 'none';
    document.getElementById('appointments-screen').style.display = 'none';
     document.getElementById('patient-consultation-screen').style.display = 'none';
    document.getElementById('patient-evaluation-screen').style.display = 'block';
    document.getElementById('patient-evaluation-list-screen').style.display = 'block';
}