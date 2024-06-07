document.addEventListener('mousemove', function(event) {
    const cursor = document.getElementById('custom-cursor');
    const screenWidth = window.innerWidth;
    const cursorImageLeft = 'assets/cursor1.png'; // Bild für linke Bildschirmhälfte
    const cursorImageRight = 'assets/cursor2.png'; // Bild für rechte Bildschirmhälfte

    // Positioniere das Bild an der Cursor-Position
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';

    // Wechsle das Bild je nach Position des Cursors
    if (event.clientX < screenWidth / 2) {
        cursor.src = cursorImageLeft;
    } else {
        cursor.src = cursorImageRight;
    }
});
