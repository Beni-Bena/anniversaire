// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Récupération des noms depuis les données Django
    const namesDataElement = document.getElementById('names-data');
    
    // Vérifier si l'élément existe et contient des données
    if (namesDataElement && namesDataElement.textContent) {
        const names = JSON.parse(namesDataElement.textContent);
        const nameEl = document.getElementById('current-name');
        const decorContainer = document.getElementById('decor-container');
        let index = 0;

        // Fonction pour afficher le nom suivant avec animation
        function showNextName() {
            // Si aucun nom n'est disponible, on arrête
            if (names.length === 0) return;
            
            const nextName = names[index];
            
            nameEl.classList.remove('fade-in');
            nameEl.classList.add('fade-out');

            setTimeout(() => {
                nameEl.textContent = nextName;
                nameEl.classList.remove('fade-out');
                nameEl.classList.add('fade-in');
                
                // Ajouter des confettis à chaque changement de nom
                createConfetti();
                
                index = (index + 1) % names.length;
            }, 600);
        }

        // Fonction pour créer des confettis
        function createConfetti() {
            for (let i = 0; i < 30; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.backgroundColor = getRandomColor();
                confetti.style.setProperty('--rotation', Math.random() * 360);
                confetti.style.animationDuration = (2 + Math.random() * 3) + 's';
                confetti.style.animationDelay = (Math.random() * 0.5) + 's';
                decorContainer.appendChild(confetti);
                
                // Supprimer après l'animation
                setTimeout(() => {
                    if (confetti.parentNode) {
                        confetti.remove();
                    }
                }, 6000);
            }
        }

        // Fonction pour créer des ballons
        function createBalloon() {
            const balloon = document.createElement('div');
            balloon.className = 'balloon';
            balloon.style.left = Math.random() * 100 + 'vw';
            balloon.style.backgroundColor = getRandomPastelColor();
            balloon.style.setProperty('--x-end', (Math.random() * 20 - 10));
            balloon.style.animationDuration = (15 + Math.random() * 10) + 's';
            decorContainer.appendChild(balloon);
            
            // Supprimer après l'animation
            setTimeout(() => {
                if (balloon.parentNode) {
                    balloon.remove();
                }
            }, 25000);
        }

        // Fonction pour créer des étoiles
        function createStar() {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + 'vw';
            star.style.top = Math.random() * 100 + 'vh';
            star.style.width = (5 + Math.random() * 15) + 'px';
            star.style.height = (5 + Math.random() * 15) + 'px';
            decorContainer.appendChild(star);
            
            // Supprimer après un moment
            setTimeout(() => {
                if (star.parentNode) {
                    star.remove();
                }
            }, 10000);
        }

        // Fonction pour créer des cœurs
        function createHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = Math.random() * 100 + 'vh';
            heart.style.width = (10 + Math.random() * 20) + 'px';
            heart.style.height = (10 + Math.random() * 20) + 'px';
            decorContainer.appendChild(heart);
            
            // Supprimer après un moment
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.remove();
                }
            }, 8000);
        }

        // Fonctions utilitaires pour les couleurs
        function getRandomColor() {
            const colors = ['#FF4081', '#536DFE', '#FFC107', '#4CAF50', '#9C27B0', '#00BCD4'];
            return colors[Math.floor(Math.random() * colors.length)];
        }

        function getRandomPastelColor() {
            const hue = Math.floor(Math.random() * 360);
            return `hsl(${hue}, 100%, 85%)`;
        }

        // Afficher le premier nom
        if (names.length > 0) {
            nameEl.textContent = names[0];
            nameEl.classList.add('fade-in');
            index = 1;
            
            // Démarrer l'affichage des noms
            setInterval(showNextName, 3000);
            
            // Créer des éléments décoratifs initiaux
            for (let i = 0; i < 20; i++) {
                createConfetti();
            }
            
            for (let i = 0; i < 10; i++) {
                createBalloon();
            }
            
            for (let i = 0; i < 15; i++) {
                createStar();
            }
            
            for (let i = 0; i < 12; i++) {
                createHeart();
            }
            
            // Continuer à ajouter des éléments décoratifs périodiquement
            setInterval(createBalloon, 3000);
            setInterval(createConfetti, 2000);
            setInterval(createStar, 2500);
            setInterval(createHeart, 3500);
        } else {
            // Si aucun nom n'est disponible
            nameEl.textContent = "Merci à tous !";
        }
    }
});