//your JS code here. If required.

const button = document.getElementById('submit');
document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form input values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Find the table body
    const table = document.getElementsByClassName('table')[0].getElementsByTagName('tbody')[0];
    
    // Insert a new row at the end of the table
    const newRow = table.insertRow();

    // Insert cells for the new row
    const titleCell = newRow.insertCell(0);
    const authorCell = newRow.insertCell(1);
    const isbnCell = newRow.insertCell(2);
	const deleteCell = newRow.insertCell(3);

    // Set the text content for each cell
    titleCell.textContent = title;
    authorCell.textContent = author;
    isbnCell.textContent = isbn;


	const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Clear';
    deleteButton.className = 'delete';
    deleteCell.appendChild(deleteButton);
    deleteButton.addEventListener('click', function() {
        table.deleteRow(newRow.rowIndex - 1);
    });
	

    // Reset the form after submission
    document.getElementById('dataForm').reset();
});
