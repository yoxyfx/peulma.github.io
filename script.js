// 스크롤을 최상단으로 이동
document.querySelector('.fixed-button').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('.header-text a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const offset = parseInt(this.getAttribute('data-offset')) || 0; // 데이터 속성에서 오프셋 값 가져오기

        window.scrollTo({
            top: targetElement.offsetTop + offset, // 각 링크마다 다르게 조정된 오프셋 적용
            behavior: 'smooth'
        });
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const backgroundSection = document.querySelector("#background");

    function handleScroll() {
        const sectionPosition = backgroundSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            backgroundSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", handleScroll);
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
    const images = document.querySelectorAll(".image-container2 img"); // 수정된 부분

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

            const totalMargin = 60;
            const baseImageWidth = thumbnails[0].clientWidth;
            const selectedImageWidth = baseImageWidth * 1.0;//이동정도
            const offset = index * (baseImageWidth + totalMargin) - ((selectedImageWidth - baseImageWidth) / 2) + 100;
            slideContainer.style.transform = `translateX(-${offset}px)`;
        }

        window.onload = () => {
            const initialSelectedIndices = [0, 0, 4, 4]; // 각 슬라이더 섹션의 초기 선택 인덱스 설정
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
        document.addEventListener('DOMContentLoaded', function () {
            const teamSection = document.getElementById('team');
        
            function checkVisibility() {
                const sectionTop = teamSection.getBoundingClientRect().top; // 섹션의 위치
                const windowHeight = window.innerHeight; // 현재 창의 높이
        
                // 섹션이 화면에 보이는 경우
                if (sectionTop < windowHeight * 0.9) { // 창 높이의 75% 이상 보이면
                    teamSection.classList.remove('hidden'); // hidden 클래스 제거
                    teamSection.classList.add('visible'); // visible 클래스 추가
                }
            }
        
            window.addEventListener('scroll', checkVisibility); // 스크롤 시 checkVisibility 함수 호출
            checkVisibility(); // 초기 로드 시 체크
        });
        

        document.addEventListener('DOMContentLoaded', () => {
            const fadeElements = document.querySelectorAll('.fade-in');

            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.8 // 10%가 보일 때
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible'); // visible 클래스 추가
                        observer.unobserve(entry.target); // 관찰 중지
                    }
                });
            }, options);

            fadeElements.forEach(element => {
                observer.observe(element); // 모든 fade-in 요소를 관찰
            });
        });

        
        document.addEventListener('DOMContentLoaded', () => {
            const characterSection = document.getElementById('character');
        
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        characterSection.classList.add('visible');
                    }
                });
            });
        
            observer.observe(characterSection);
        });
        document.addEventListener('DOMContentLoaded', () => {
            const teamSection = document.getElementById('team');
            const elementsToAnimate = teamSection.querySelectorAll('.teamtitle, .profileimg, .circle-container, .circle-text');
        
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        elementsToAnimate.forEach(element => {
                            element.classList.add('slide-up');
                        });
                    }
                });
            });
        
            observer.observe(teamSection);
        });
        document.addEventListener("DOMContentLoaded", () => {
            const elementsToAnimate = document.querySelectorAll('#main .slide-up');
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.05 // 5%가 보일 때 트리거
            };
        
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible'); // visible 클래스 추가
                        observer.unobserve(entry.target); // 관찰 중지
                    }
                });
            }, observerOptions);
        
            elementsToAnimate.forEach(element => {
                observer.observe(element); // 각 요소를 관찰
            });
        });
        function debounce(func, wait) {
            let timeout;
            return function(...args) {
                const context = this;
                clearTimeout(timeout);
                timeout = setTimeout(() => func.apply(context, args), wait);
            };
        }
        
        const optimizedScrollHandler = debounce(() => {
            // 스크롤 관련 작업 수행
        }, 100); // 100ms 대기 후 실행
        
        window.addEventListener('scroll', optimizedScrollHandler);
        
        document.addEventListener("DOMContentLoaded", () => {
            const teamSection = document.querySelector("#team");
        
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            teamSection.classList.add("show"); // 보일 때 "show" 클래스 추가
                        }
                    });
                },
                {
                    threshold: 0.5, // 50%가 화면에 나타날 때 트리거
                }
            );
        
            observer.observe(teamSection);
        });
        