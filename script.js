

let currentPDF = "";

function search() {

    const id = document.getElementById("eid").value.trim().toUpperCase();

    if (id === "") {
        alert("Please enter Employee ID.");
        return;
    }

    // Your PDF naming format:
    // Example: C62920_SalarySlip.pdf
    currentPDF = id + "_SalarySlip.pdf";

    // Show viewer
    document.getElementById("viewer").style.display = "block";

    // Load PDF
    document.getElementById("pdfFrame").src = currentPDF;

}

// Download PDF
function downloadPDF() {

    if (currentPDF === "") {
        alert("Please search a salary slip first.");
        return;
    }

    const link = document.createElement("a");

    link.href = currentPDF;

    link.download = currentPDF;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

}
