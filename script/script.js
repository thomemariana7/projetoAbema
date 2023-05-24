const carousel = document.querySelector('.carousel');
        const carouselInner = carousel.querySelector('.carousel-inner');
        const carouselItems = Array.from(carouselInner.querySelectorAll('.carousel-item'));
        const indicators = Array.from(document.querySelectorAll('.carousel-indicator'));
        let currentIndex = 0;
        const totalItems = carouselItems.length;
        
        function goToItem(index) {
            // if (index < 0 || index >= totalItems) return;
            
            carouselInner.style.transform = `translateX(-${index * 100}%)`;
            indicators[currentIndex].classList.remove('active');
            indicators[index].classList.add('active');
            
            currentIndex = index;
        }
        
        // indicators.forEach((indicator, index) => {
        //     indicator.addEventListener('click', () => {
        //         // goToItem();
        //     });
        // });
        
        setInterval(() => {
            let nextIndex = (currentIndex + 1) % totalItems;
            goToItem(nextIndex);
        }, 4000);