// 스크롤을 최상단으로 이동
document.querySelector('.fixed-button').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});




document.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.scrollY + window.innerHeight;

            sections.forEach(section => {
                if (section.offsetTop < scrollPosition) {
                    section.classList.add('visible'); // 스크롤 시 섹션이 보이면 visible 클래스 추가
                }
            });
        });
        function setSelectedImage(slideContainer, index) {
            const thumbnails = slideContainer.querySelectorAll('.thumbnail');
            const descriptions = slideContainer.querySelectorAll('.description');

            thumbnails.forEach((img, idx) => {
                img.classList.remove('selected');
                img.classList.add('faded');

                const description = descriptions[idx];
                if (idx === index) {
                    img.classList.add('selected');
                    img.classList.remove('faded');

                    // 설명 위치 설정
                    if (description.dataset.position === 'left') {
                        description.style.top = '-120px';
                        description.style.left = '-70%';
                        description.style.transform = 'translateX(-100%)';
                    } else if (description.dataset.position === 'right') {
                        description.style.top = '-120px';
                        description.style.left = '170%';
                        description.style.transform = 'translateX(-10%)';
                    }
                }
            });

            const totalMargin = 200;
            const baseImageWidth = thumbnails[0].clientWidth;
            const selectedImageWidth = baseImageWidth * 1.8;
            const offset = index * (baseImageWidth + totalMargin) - ((selectedImageWidth - baseImageWidth) / 2) + 100;
            slideContainer.style.transform = `translateX(-${offset}px)`;
        }

        window.onload = () => {
            const initialSelectedIndices = [0, 0, 4, 3]; // 각 슬라이더 섹션의 초기 선택 인덱스 설정
            document.querySelectorAll('.slide').forEach((slideContainer, index) => {
                setSelectedImage(slideContainer, initialSelectedIndices[index]);
            });
        };

        document.querySelectorAll('.slider').forEach(slider => {
            const thumbnails = slider.querySelectorAll('.thumbnail');
            thumbnails.forEach((thumbnail, index) => {
                thumbnail.addEventListener('click', () => {
                    const slideContainer = slider.querySelector('.slide');
                    if (thumbnails[index].classList.contains('selected')) {
                        setSelectedImage(slideContainer, 0); // 클릭 시 선택된 이미지가 같으면 초기화
                    } else {
                        setSelectedImage(slideContainer, index); // 클릭한 이미지로 설정
                    }
                });
            });
        });