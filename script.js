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


document.addEventListener("DOMContentLoaded", () => {
    const circleImages = document.querySelectorAll(".circlebg");
    const textItems = document.querySelectorAll(".subtext-container p");

    function animateOnScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // 이미 나타난 요소는 더 이상 관찰하지 않음
            }
        });
    }

    const observerOptions = {
        threshold: 0.5 // 요소의 절반이 화면에 들어왔을 때 애니메이션 시작
    };

    const observer = new IntersectionObserver(animateOnScroll, observerOptions);

    // 원형 이미지 순차적으로 나타나게 설정
    circleImages.forEach((circle, index) => {
        observer.observe(circle);
        circle.style.transitionDelay = `${index * 0.3}s`; // 각 이미지에 지연 시간 적용
    });

    // 텍스트 순차적으로 나타나게 설정
    textItems.forEach((text, index) => {
        observer.observe(text);
        text.style.transitionDelay = `${index * 0.3 + 0.9}s`; // 텍스트에 추가 지연 시간 적용
    });
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
    const images = document.querySelectorAll(".image-container2 img");

    function revealImages() {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight) {
            images.forEach((img, index) => {
                setTimeout(() => {
                    img.classList.add("show");
                }, index * 300); // 각 이미지가 300ms 간격으로 나타나도록 설정
            });
            window.removeEventListener("scroll", revealImages); // 애니메이션 후 이벤트 제거
        }
    }

    window.addEventListener("scroll", revealImages);
});

const visibilityObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // 화면에 보이면 'visible' 클래스 추가
        }
    });
});

// 애니메이션 대상 요소 선택
const elementsToAnimate = document.querySelectorAll('.animate');
elementsToAnimate.forEach(element => {
    visibilityObserver.observe(element); // 각 요소를 Observer에 등록
});





// 애니메이션 대상 요소 선택
const animatedElements = document.querySelectorAll('.animate');
animatedElements.forEach(element => {
    observer.observe(element); // 각 요소를 Observer에 등록
});

function toggleImage(clickedImage) {
    const images = document.querySelectorAll('.images-containers img');
    const captions = document.querySelectorAll('.images-captions');

    images.forEach(image => {
        image.classList.remove('active');
        image.classList.add('inactive');
        image.style.transform = ""; // transform 초기화
    });

    captions.forEach(caption => {
        caption.classList.remove('active');
    });

    // 클릭된 이미지 활성화
    clickedImage.classList.add('active');
    clickedImage.classList.remove('inactive');

    // 클릭된 이미지의 부모 래퍼 찾기
    const parentWrapper = clickedImage.closest('.images-wrappers');
    const caption = parentWrapper.querySelector('.images-captions');
    caption.classList.add('active');
}

// 이미지들이 화면에 나타날 때 'visible' 클래스를 추가하기 위한 IntersectionObserver 사용
document.addEventListener('DOMContentLoaded', function () {
    // 이미지들을 선택
    const images = document.querySelectorAll('.collect-1 img, .collect-2 img, .collect-3 img');
    
    // IntersectionObserver의 콜백 함수
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 화면에 보이면 'visible' 클래스를 추가
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // 더 이상 관찰할 필요 없음
            }
        });
    }, { threshold: 0.5 }); // 50% 이상 화면에 나타날 때 트리거

    // 각 이미지를 observer에 등록
    images.forEach(image => {
        observer.observe(image);
    });

    // 초기 활성화: 기본 선택될 이미지 및 캡션 설정
    const defaultImage = document.querySelector('.images-containers img'); // 기본 이미지를 선택
    if (defaultImage) {
        toggleImage(defaultImage);
    }
});



function onScroll() {
    const growthElements = [
        document.querySelector('.growth1'),
        document.querySelector('.growth2')
    ];
    
    const habitElements = [
        document.querySelector('.habit1'),
        document.querySelector('.habit2')
    ];
    
    const growthImages = document.querySelectorAll('.growth-image-plant-1, .growth-image-plant-2, .growth-image-plant-3');
    const habitImages = document.querySelectorAll('.habit-image-plant-1, .habit-image-plant-2, .habit-image-plant-3, .habit-image-plant-4');
    
    const growthOverlays = document.querySelectorAll('.growth-overlay, .growth-overlay1, .growth-overlay2');
    const habitOverlay = document.querySelector('.habit-overlay');
    
    const screenPosition = window.innerHeight / 1.3;

    // growth 및 habit 이미지의 위치 확인 후 appear 클래스 추가
    [...growthImages, ...habitImages].forEach(image => {
        const imagePosition = image.getBoundingClientRect().top;
        if (imagePosition < screenPosition) {
            image.classList.add('appear'); 
        }
    });

    // growth 및 habit overlay 요소의 위치 확인 후 appear 클래스 추가
    [...growthOverlays, habitOverlay].forEach(overlay => {
        if (overlay) {
            const overlayPosition = overlay.getBoundingClientRect().top;
            if (overlayPosition < screenPosition) {
                overlay.classList.add('appear');
            }
        }
    });

    // growth 및 habit 요소의 위치 확인 후 appear 클래스 추가
    [...growthElements, ...habitElements].forEach(element => {
        if (element) {
            const elementPosition = element.getBoundingClientRect().top;
            if (elementPosition < screenPosition) {
                element.classList.add('appear');
            }
        }
    });
}

window.addEventListener('scroll', onScroll);



const images = document.querySelectorAll('.help-img');
        
function handleScroll() {
    images.forEach(img => {
        const rect = img.getBoundingClientRect();
        // 이미지가 화면에 나타날 때 .show 클래스 추가
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            img.classList.add('show');
        } else {
            img.classList.remove('show'); // 화면에서 벗어나면 숨김
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);







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
                threshold: 1.0 // 10%가 보일 때
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
                threshold: 0.1 
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
        