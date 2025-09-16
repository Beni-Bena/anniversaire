// script.js
document.addEventListener('DOMContentLoaded', function() {
    const heartsContainer = document.getElementById('hearts');
    const confettiContainer = document.getElementById('confetti');
    const photosScroller = document.getElementById('photos-scroller');
    
    // Liste des personnes avec leurs noms + liens d'images définis manuellement
    const people = [
        { name: "Keren Siki", image: "keren.jpg" },
        { name: "Thomas", image: "images/thomas.jpg" },
        { name: "Sophie", image: "images/sophie.jpg" },
        { name: "Jean", image: "images/jean.jpg" },
        { name: "Claire", image: "images/claire.jpg" },
        { name: "Pierre", image: "images/pierre.jpg" },
        { name: "Nathalie", image: "images/nathalie.jpg" },
        { name: "Luc", image: "images/luc.jpg" },
        { name: "Émilie", image: "images/emilie.jpg" },
        { name: "Antoine", image: "images/antoine.jpg" }
        // 👉 ajoute autant de personnes que tu veux
    ];
    
    // Ajouter les photos et noms au scroller
    people.forEach(person => {
        // Créer l'élément photo
        const photoItem = document.createElement('div');
        photoItem.className = 'photo-item';
        
        // Créer le cadre photo
        const photoFrame = document.createElement('div');
        photoFrame.className = 'photo-frame';
        
        // Créer l'image
        const img = document.createElement('img');
        img.src = person.image;   // <--- utilisation de ton lien
        img.alt = person.name;
        img.loading = "lazy";
        
        // Créer le label du nom
        const nameLabel = document.createElement('div');
        nameLabel.className = 'name-label';
        nameLabel.textContent = person.name;
        
        // Assembler
        photoFrame.appendChild(img);
        photoItem.appendChild(photoFrame);
        photoItem.appendChild(nameLabel);
        photosScroller.appendChild(photoItem);
    });
    
    // Créer des cœurs
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        
        // Position aléatoire
        const randomX = Math.random() * 100;
        heart.style.left = `${randomX}%`;
        
        // Taille aléatoire
        const randomSize = 0.8 + Math.random() * 1.5;
        heart.style.fontSize = `${randomSize}rem`;
        
        // Durée d'animation
        const randomDuration = 10; // secondes
        heart.style.animationDuration = `${randomDuration}s`;
        
        heartsContainer.appendChild(heart);
        
        // Supprimer après animation
        setTimeout(() => {
            heart.remove();
        }, randomDuration * 1000);
    }
    
    // Créer des confettis
    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Position aléatoire
        const randomX = Math.random() * 100;
        confetti.style.left = `${randomX}%`;
        
        // Couleur aléatoire
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff', '#5f27cd'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.backgroundColor = randomColor;
        
        // Forme aléatoire
        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        } else {
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        }
        
        // Taille aléatoire
        const randomSize = 5 + Math.random() * 15;
        confetti.style.width = `${randomSize}px`;
        confetti.style.height = `${randomSize}px`;
        
        // Durée d'animation
        const randomDuration = 2 + Math.random() * 3;
        confetti.style.animationDuration = `${randomDuration}s`;
        
        confettiContainer.appendChild(confetti);
        
        // Supprimer après animation
        setTimeout(() => {
            confetti.remove();
        }, randomDuration * 1000);
    }
    
    // Démarrer les animations
    setInterval(createHeart, 300);
    setInterval(createConfetti, 100);
    
    // Créer un lot initial
    for (let i = 0; i < 20; i++) {
        setTimeout(createHeart, i * 150);
    }
    
    for (let i = 0; i < 50; i++) {
        setTimeout(createConfetti, i * 50);
    }
});
