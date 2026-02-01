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

            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });
        });
    });

    // --- 2. EDITOR LOGIC ---
    const textInput = document.getElementById('textInput');
    const fontFamily = document.getElementById('fontFamily');
    const fontSize = document.getElementById('fontSize');
    const textColor = document.getElementById('textColor');
    const letterSpacing = document.getElementById('letterSpacing');
    const lineHeight = document.getElementById('lineHeight');

    const textPreview = document.getElementById('textPreview');
    const sizeValLabel = document.getElementById('sizeVal');
    const spaceValLabel = document.getElementById('spaceVal');

    const resetBtn = document.getElementById('resetBtn');
    const downloadBtn = document.getElementById('downloadBtn');

    if (!textPreview || !textInput) return;

    const updatePreview = () => {
        textPreview.innerText = textInput.value;
        textPreview.style.fontFamily = fontFamily.value;

        const size = fontSize.value;
        textPreview.style.fontSize = `${size}px`;
        sizeValLabel.textContent = size;

        textPreview.style.color = textColor.value;

        const spacing = letterSpacing.value;
        textPreview.style.letterSpacing = `${spacing}px`;
        spaceValLabel.textContent = spacing;

        textPreview.style.lineHeight = lineHeight.value;
    };

    [textInput, fontFamily, fontSize, textColor, letterSpacing, lineHeight]
        .forEach(el => el.addEventListener('input', updatePreview));

    resetBtn.addEventListener('click', () => {
        textInput.value = "Typography is the craft of endowing human language with a durable visual form.";
        fontFamily.value = "'Inter', sans-serif";
        fontSize.value = 40;
        textColor.value = "#2d3436";
        letterSpacing.value = 0;
        lineHeight.value = 1.2;

        updatePreview();
    });

    downloadBtn.addEventListener('click', () => {
        window.print();
    });

    updatePreview();
});

/**
 * Global Helper for button navigation
 */
function navigateTo(targetId) {
    const targetLink = document.querySelector(`.nav-link[data-target="${targetId}"]`);
    if (targetLink) targetLink.click();
}
