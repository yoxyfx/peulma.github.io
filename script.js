// 스크롤을 최상단으로 이동
document.querySelector('.fixed-button').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// 모든 talk 이미지를 선택합니다.
const talkImages = document.querySelectorAll('.talk-img');

// Intersection Observer를 사용하여 섹션이 보일 때 이미지 애니메이션을 트리거합니다.
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            talkImages.forEach((img, index) => {
                setTimeout(() => {
                    img.classList.add('show'); // 이미지를 나타나게 함
                }, index * 300); // 각 이미지의 나타나는 시간 간격을 둡니다.
            });
            observer.unobserve(entry.target); // 한 번만 실행하도록 옵저버에서 제거
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const section = document.getElementById("problemsolution");
    const images = document.querySelectorAll(".imagea-container img");

    function revealImages() {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight) {
            images.forEach((img, index) => {
                setTimeout(() => {
                    img.classList.add("show");
                }, index * 300); // Delay each image by 300ms
            });
            // Remove event listener after animation
            window.removeEventListener("scroll", revealImages);
        }
    }

    window.addEventListener("scroll", revealImages);
});


// bg 섹션을 옵저버에 추가합니다.
const bgSection = document.getElementById('bg');
observer.observe(bgSection);


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

        document.addEventListener('DOMContentLoaded', function() {
            const imgSection = document.getElementById('img');
    
            window.addEventListener('scroll', function() {
                const sectionPosition = imgSection.getBoundingClientRect();
    
                // img 섹션이 뷰포트에 들어올 때 배경 이미지 변경
                if (sectionPosition.top <= window.innerHeight && sectionPosition.bottom >= 0) {
                    imgSection.style.backgroundImage = "url('img/bg2.png')"; // 새로운 배경 이미지
                } else {
                    imgSection.style.backgroundImage = "url('img/bg1.png')"; // 원래 배경 이미지
                }
            });
        });  