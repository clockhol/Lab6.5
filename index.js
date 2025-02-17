// Add JavaScript below
window.onload = function() {
    ScrollReveal().reveal('.blue', { 
        delay: 1000,
        rotate: {
            x: 100,
            y: 0,
            z: 0,
        },
        distance: '150%',
        origin: 'top',
    });
    ScrollReveal().reveal('.hobbit', { 
        delay: 2000,
        rotate: {
            x: 0,
            y: 100,
            z: 0,
        },
        distance: '150%',
        origin: 'right',
    });
    ScrollReveal().reveal('.falls', { 
        delay: 1000,
        rotate: {
            x: 0,
            y: 0,
            z: 100,
        }, 
        distance: '150%',
    });
    ScrollReveal().reveal('.mount', { 
        delay: 1000,
        rotate: {
            x: 100,
            y: 0,
            z: 0,
        }, 
        distance: '150%',
        origin: 'left',
    });
    ScrollReveal().reveal('.kuiti', { 
        delay: 1000,
        rotate: {
            x: 0,
            y: 100,
            z: 0,
        },
        distance: '150%',
        origin: 'top',
    });
}

