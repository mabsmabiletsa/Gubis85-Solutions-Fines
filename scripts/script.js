const employees = [
    {
        name: "Zakhele Khumalo",
        fines: [
            { amount: 0, reason: "NO FINES" },             

        ]
    },
    {
        name: "Andrew Kgwadi",
        fines: [
            { amount: 0, reason: "NO FINES" },
        ]
    },
    {
        name: "William Moshupye",
        fines: [
                
            { amount: 1000, reason: "Poor work performance", date: "2-12-2024" },             
                

        ]
    },
    {
        name: "Priscilla Masanabo",
        fines: [
            { amount: 0, reason: "NO FINES" },             
        ]
    },
    {
        name: "Precious Skosana",
        fines: [
            { amount: 2000, reason: "For not reporting her absenteeism", date: "18-11-2024" },             

        ]
    },
    {
        name: "Maud Weideman",
        fines: [
            { amount: 0, reason: "NO FINES" },             
        ]
    },
    {
        name: "Lesego Moatshe",
        fines: [
            { amount: 0, reason: "NO FINES" },

        ]
    },
    {
        name: "Lesego Matea",
        fines: [
            { amount: 0, reason: "NO FINES" },             
        ]
    },
    {
        name: "Ishmael Ngcobo",
        fines: [
            { amount: 0, reason: "NO FINES" },

        ]
    },
    {
        name: "Katlego Moagi",
        fines: [         
            { amount: 250, reason: "Leaving vehicle unlocked", date: "15-11-2024" },   
            { amount: 500, reason: "Late coming", date: "28-11-2024" },          
            { amount: 1000, reason: "Late coming", date: "9-12-2024" },                     
  
        ]
    },
    {
        name: "Hope Monakwe",
        fines: [ 
            { amount: 1000, reason: "Not reporting through proper channels", date: "19-11-2024" },  
            { amount: 2000, reason: "Poor work performance", date: "6-12-2024" },   
            { amount: 1000, reason: "Late coming", date: "9-12-2024" },                     
            { amount: 1000, reason: "Not reporting to the office", date: "11-12-2024" },             
   
        ]
    },
    {
        name: "Surprise Motha",
        fines: [
            { amount: 500, reason: "Late coming", date: "28-11-2024" },    
            { amount: 500, reason: "Late coming", date: "9-12-2024" },            
        
        ]
    },
    {
        name: "Kamogelo Methlape",
        fines: [
            { amount: 1000, reason: "Not reporting through proper channels", date: "19-11-2024" },         
            { amount: 1000, reason: "Not reporting to the office", date: "11-12-2024" },             
    
        ]
    },
    {
        name: "Kamogelo Monakwe",
        fines: [
            { amount: 0, reason: "NO FINES" },
        ]
    },
    {
        name: "Luzuko Komani",
        fines: [
            { amount: 250, reason: "Carelessness", date: "23-11-2024" },             
        ]
    },
    {
        name: "Mzwandile Mabiletsa",
        fines: [
            { amount: 1000, reason: "Poor work performance", date: "2-12-2024" },             

        ]
    },
    {
        name: "Fhedzani Malivha",
        fines: [
            { amount: 500, reason: "Poor work performance", date: "22-11-2024" },             

        ]
    },
    {
        name: "Oscar Mgiba",
        fines: [
            { amount: 0, reason: "NO FINES" },
        ]
    },
    {
        name: "Matimba Chauke",
        fines: [
            { amount: 0, reason: "NO FINES" },             
        ]
    },
    {
        name: "Beauty Simelane",
        fines: [
            { amount: 0, reason: "NO FINES" },
        ]
    },
    {
        name: "Mpho Maluleka",
        fines: [
            { amount: 500, reason: "Lack of concentration and poor inspection of vehicle", date: "12-12-2024" },             

         ]
    },
    {
        name: "Lindokuhle Masanabo",
        fines: [
            { amount: 0, reason: "NO FINES" },        ]
    },
    {
        name: "Thokozani Mahlangu",
        fines: [
            { amount: 0, reason: "NO FINES" },
        ]
    },
    {
        name: "Tshwarelo Ndala",
        fines: [
            { amount: 500, reason: "Late coming", date: "10-12-2024" },            
        ]
    },
    {
        name: "Oriel Sefoloko",
        fines: [
            { amount: 2500, reason: "Late coming", date: "17-11-2024" },        
            { amount: 500, reason: "Late coming", date: "10-12-2024" },                 

        ]
    },
    {
        name: "Silas Ramphisa",
        fines: [
            { amount: 500, reason: "Late coming", date: "10-12-2024" },                 

        ]
    },
    {
        name: "Malebogo Sere",
        fines: [
            { amount: 0, reason: "NO FINES" },
        ]
    },
    {
        name: "Tshegofatso Tau",
        fines: [
            { amount: 0, reason: "NO FINES" },             
        ]
    },
    {
        name: "Mathews Gaubose",
        fines: [
            { amount: 0, reason: "NO FINES" },

        ]
    },
    {
        name: "Nathi Khumalo",
        fines: [
            { amount: 500, reason: "Late coming", date: "9-12-2024" },            

        ]
    },
    {
        name: "Thabang Mathaba",
        fines: [
            { amount: 0, reason: "NO FINES" },

        ]
    },
    {
        name: "Kate Lebese",
        fines: [
            { amount: 1000, reason: "Poor work performacne", date: "9-12-2024" },            
        ]
    },
    {
        name: "Busi Mahlangu",
        fines: [
            { amount: 0, reason: "NO FINES" },             
        ]
    },
    {
        name: "Ntshuxeko Makwakwa",
        fines: [
            { amount: 0, reason: "NO FINES" },
        ]
    },
    {
        name: "Christopher Gumbi",
        fines: [
            { amount: 0, reason: "NO FINES" },             
          
        ]
    },
    {
        name: "Azaria Khambani",
        fines: [
            { amount: 0, reason: "NO FINES" },             
         
        ]
    },
    {
        name: "Nepthalie Antaya",
        fines: [
            { amount: 0, reason: "NO FINES" },             
        ]
    },
    {
        name: "Raymond Mnisi",
        fines: [
            { amount: 0, reason: "NO FINES" },             
            
  
        ]
    },
    {
        name: "Zweli Mavuso",
        fines: [
            { amount: 500, reason: "For late coming", date: "20-11-2024" },     
            { amount: 500, reason: "Late coming", date: "9-12-2024" },            
        
            
  
        ]
    },
    {
        name: "Lindokhuhle Thabede",
        fines: [
            { amount: 500, reason: "Late coming", date: "9-12-2024" },            
        
            
  
        ]
    },

    {
        name: "Thabiso Rammutla",
        fines: [
            { amount: 500, reason: "For late coming", date: "20-11-2024" },   
            { amount: 500, reason: "Late coming", date: "9-12-2024" }, 
            { amount: 500, reason: "Questioning a fine", date: "9-12-2024" }, 

        ]
    },
    {
        name: "S Mabena",
        fines: [
            { amount: 500, reason: "For late coming", date: "20-11-2024" },             
            { amount: 500, reason: "Late coming", date: "28-11-2024" },            
        ]
    },
    {
        name: "Johnny ",
        fines: [
            { amount: 1000, reason: "For late coming", date: "30-11-2024" },             
        ]
    },
    {
        name: "Sibayoni",
        fines: [
            { amount: 1000, reason: "For late coming", date: "30-11-2024" },             
        ]
    },
    {
        name: "Dludlu",
        fines: [
            { amount: 1000, reason: "For late coming", date: "30-11-2024" },             
        ]
    },

    // Add more employees and fines here
];

let currentEmployee = '';

function displayEmployees() {
    const employeeList = document.getElementById('employee-list');
    employeeList.innerHTML = ''; // Clear the list before displaying sorted items
    
    // Get selected sorting criteria
    const sortCriteria = document.getElementById('sortCriteria').value;

    // Clone and sort employees array based on the selected criteria
    const sortedEmployees = [...employees].sort((a, b) => {
        if (sortCriteria === 'amount') {
            const totalA = a.fines.reduce((sum, fine) => sum + fine.amount, 0);
            const totalB = b.fines.reduce((sum, fine) => sum + fine.amount, 0);
            return totalB - totalA; // Sort by total fine amount, descending
        } else if (sortCriteria === 'date') {
            // Get latest fine date for each employee (if exists)
            const latestDateA = Math.max(...a.fines.map(fine => new Date(fine.date || '1970-01-01')));
            const latestDateB = Math.max(...b.fines.map(fine => new Date(fine.date || '1970-01-01')));
            return latestDateB - latestDateA; // Sort by latest date, descending
        } else if (sortCriteria === 'name') {
            return a.name.localeCompare(b.name); // Sort alphabetically by name
        }
    });

    // Display the sorted employee list
    sortedEmployees.forEach(employee => {
        const total = employee.fines.reduce((sum, fine) => sum + fine.amount, 0);
        const li = document.createElement('li');
        li.textContent = `${employee.name} - R${total}`;
        li.addEventListener('click', () => showDetails(employees.indexOf(employee)));
        employeeList.appendChild(li);
    });
}

// Call the function to calculate and display the total on page load

function calculateGrandTotal() {
    let grandTotal = 0;
    employees.forEach(employee => {
        grandTotal += employee.fines.reduce((sum, fine) => sum + fine.amount, 0);
    });
    document.getElementById('total-fines').textContent = `R${grandTotal.toLocaleString()}`;
}

// Call the function to calculate and display the total on page load


function showDetails(index) {
    const employee = employees[index];
    document.getElementById('employee-name').textContent = employee.name;
    
    const finesList = document.getElementById('fines-list');
    finesList.innerHTML = '';

    employee.fines.forEach(fine => {
        const li = document.createElement('li');
        li.textContent = `R${fine.amount} - ${fine.reason} (Date: ${fine.date})`;
        finesList.appendChild(li);
    });

    document.getElementById('employee-list').classList.add('hidden');
    document.getElementById('fine-details').classList.remove('hidden');
}

function goBack() {
    document.getElementById('employee-list').classList.remove('hidden');
    document.getElementById('fine-details').classList.add('hidden');
}

function showDisputeForm() {
    document.getElementById('fine-details').classList.add('hidden');
    document.getElementById('dispute-form').classList.remove('hidden');
}
function cancelDispute() {
    document.getElementById('dispute-form').classList.add('hidden');
    document.getElementById('fine-details').classList.remove('hidden');
}

function submitDispute(event) {
    event.preventDefault();
    
    const email = document.getElementById('employee-email').value;
    const reason = document.getElementById('fine-reason').value;

    const mailtoLink = `mailto:logistics@gubis85.co.za?subject=Fine Dispute by ${currentEmployee}&body=Employee Email: ${email}%0D%0AReason for Dispute: ${reason}`;
    window.location.href = mailtoLink;

    cancelDispute();
}

calculateGrandTotal();

displayEmployees();

