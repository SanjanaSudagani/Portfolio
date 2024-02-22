// Function to download the file when the button is clicked
function downloadFile() {
    // Replace 'path/to/your/file.pdf' with the actual path to your file
    const fileUrl = 'https://drive.google.com/file/d/1OeUvqzZTlj2FkqpC4uY2I8g_eqv2qQod/view?usp=sharing';
    const fileName = 'Sanjana_Sudagani_Resume.pdf'; // Change this to the desired file name

    // Create an anchor element
    const downloadLink = document.createElement('a');
    
    // Set the file URL and file name
    downloadLink.href = fileUrl;
    downloadLink.download = fileName;

    // Append the anchor element to the document body
    document.body.appendChild(downloadLink);

    // Trigger the click event on the anchor element to start the download
    downloadLink.click();

    // Clean up by removing the anchor element from the document body
    document.body.removeChild(downloadLink);
}

// Attach the downloadFile function to the click event of the button
const downloadButton = document.getElementById('downloadButton');
downloadButton.addEventListener('click', downloadFile);
