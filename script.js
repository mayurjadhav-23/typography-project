/**
 * TYPELAB - Core Logic
 * Handles Navigation and Real-time DOM Manipulation
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. NAVIGATION LOGIC ---
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.view-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');

            // Update UI Active States
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Switch Visible Section
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });
        });
    });

    // --- 2. EDITOR LOGIC ---
    
    // Select input elements
    const textInput = document.getElementById('textInput');
    const fontFamily = document.getElementById('fontFamily');
    const fontSize = document.getElementById('fontSize');
    const textColor = document.getElementById('textColor');
    const letterSpacing = document.getElementById('letterSpacing');
    const lineHeight = document.getElementById('lineHeight');
    
    // Select display elements
    const textPreview = document.getElementById('textPreview');
    const sizeValLabel = document.getElementById('sizeVal');
    const spaceValLabel = document.getElementById('spaceVal');
    
    // Select buttons
    const resetBtn = document.getElementById('resetBtn');
    const downloadBtn = document.getElementById('downloadBtn');

    /**
     * Updates the preview box in real-time based on input values
     */
    const updatePreview = () => {
        // Text Content
        textPreview.textContent = textInput.value;
        
        // Font Family
        textPreview.style.fontFamily = fontFamily.value;
        
        // Font Size
        const size = fontSize.value;
        textPreview.style.fontSize = ${size}px;
        sizeValLabel.textContent = size;
        
        // Color
        textPreview.style.color = textColor.value;
        
        // Spacing
        const spacing = letterSpacing.value;
        textPreview.style.letterSpacing = ${spacing}px;
        spaceValLabel.textContent = spacing;
        
        // Line Height
        textPreview.style.lineHeight = lineHeight.value;
    };

    // Add Event Listeners for "input" (fires immediately on change)
    [textInput, fontFamily, fontSize, textColor, letterSpacing, lineHeight].forEach(el => {
        el.addEventListener('input', updatePreview);
    });

    /**
     * Resets the editor to default values
     */
    resetBtn.addEventListener('click', () => {
        textInput.value = "Typography is the craft of endowing human language with a durable visual form.";
        fontFamily.value = "'Inter', sans-serif";
        fontSize.value = 40;
        textColor.value = "#2d3436";
        letterSpacing.value = 0;
        lineHeight.value = 1.2;
        
        updatePreview();
    });

    /**
     * Simple "Print" functionality for the design
     */
    downloadBtn.addEventListener('click', () => {
        window.print();
    });

    // Run once on load to initialize preview
    updatePreview();
});

/**
 * Global Helper for button navigation (used in Home hero)
 */
function navigateTo(targetId) {
    const targetLink = document.querySelector(.nav-link[data-target="${targetId}"]);
    if (targetLink) targetLink.click();
}