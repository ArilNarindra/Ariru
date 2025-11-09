document.addEventListener('DOMContentLoaded', () => {
    // Initialize any global functionality
    
    // Animate elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate-float-up');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
    
    // Simulate live question stream
    const questionStream = document.querySelector('.question-stream');
    if (questionStream) {
        setInterval(() => {
            const questions = [
                {
                    user: 'HoloSensei',
                    color: 'cyberpurple',
                    text: 'How to say "neon lights" in Japanese?'
                },
                {
                    user: 'CyberShogun',
                    color: 'cyberblue',
                    text: 'Looking for JLPT N3 practice partners...'
                },
                {
                    user: 'NeonKitsune',
                    color: 'cyberpink',
                    text: 'Best apps for learning kanji radicals?'
                },
                {
                    user: 'DataDaimyo',
                    color: 'cybergreen',
                    text: 'Explain て form conjugation please'
                }
            ];
            
            const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
            const questionElement = document.createElement('div');
            questionElement.className = `question-item text-sm mb-3 p-3 bg-cyberdark rounded border-l-4 border-${randomQuestion.color} animate-float-up`;
            questionElement.innerHTML = `
                <div class="flex items-center mb-1">
                    <div class="w-6 h-6 rounded-full bg-${randomQuestion.color}/20 mr-2 flex items-center justify-center">
                        <i data-feather="user" class="w-3 h-3 text-${randomQuestion.color}"></i>
                    </div>
                    <span class="text-${randomQuestion.color}">${randomQuestion.user}</span>
                </div>
                <p>${randomQuestion.text}</p>
            `;
            
            questionStream.prepend(questionElement);
            feather.replace();
            
            // Remove oldest question if there are too many
            if (questionStream.children.length > 6) {
                questionStream.removeChild(questionStream.lastChild);
            }
        }, 5000);
    }
    
    // Add hover effects to all interactive elements
    const interactiveElements = document.querySelector
