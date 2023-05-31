// Sample statistics data
const statisticsData = {
    totalStudents: 500,
    totalCourses: 20,
    totalTeachers: 50
  };
  
  // Function to display statistics
  function displayStatistics() {
    const statisticsDiv = document.getElementById("statistics");
    statisticsDiv.innerHTML = `
      
      <p>Total Students: ${statisticsData.totalStudents}</p>
      <p>Total Courses: ${statisticsData.totalCourses}</p>
      <p>Total Teachers: ${statisticsData.totalTeachers}</p>
    `;
  }
  
  // Display statistics when the page loads
  displayStatistics();