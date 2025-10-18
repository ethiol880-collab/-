// የJavaScript ፋይል ስም: script.js

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. "የበለጠ ይወቁ" የሚለውን ቁልፍ ተግባራዊ ማድረግ
    const learnMoreButton = document.querySelector('.btn');
    
    if (learnMoreButton) {
        learnMoreButton.addEventListener('click', (event) => {
            // ለጊዜው የማንቂያ መልዕክት ያሳያል
            alert("ስለ ምርኩዝ የበለጠ መረጃ ለማግኘት ወደ ታች ይሸብልሉ!");
            
            // የሊንኩን ነባሪ ተግባር (Default behavior) እንዳይሰራ ያቆማል
            // (በ #services ላይ ክፍል ስላልተፈጠረ ወደላይ እንዳይወረውር)
            event.preventDefault(); 
            
            // ወደ ቀጣዩ ክፍል (ስለ እኛ) በቀስታ ለመሄድ
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        });
    }


    // 2. በምናሌው ላይ ተጠቃሚው የት እንዳለ ለማሳየት (Active Highlighting)
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    function highlightMenu() {
        // የገጹን አጠቃላይ ርዝመት (ከላይ ወደታች ያለውን ርቀት) ማወቅ
        let scrollPosition = window.scrollY + 150; // 150 ፒክሰል አርቆ መቁጠር (Offset)

        sections.forEach(section => {
            // የክፍሉን የላይኛው እና የታችኛው ጫፍ መወሰን
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            // የScroll ቦታው በክፍሉ ውስጥ ከሆነ
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // ሁሉንም 'active' የሚለውን class ማጥፋት
                navLinks.forEach(link => {
                    link.classList.remove('active-nav');
                });
                
                // አሁን ያለንበትን ክፍል የሚያሳይ ሊንክ ላይ 'active-nav' የሚለውን class መጨመር
                const correspondingLink = document.querySelector(`nav ul li a[href="#${sectionId}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active-nav');
                }
            }
        });
    }

    // Scroll ሲደረግ ወይም ገጹ ሲጫን ተግባሩን መጥራት
    window.addEventListener('scroll', highlightMenu);
    highlightMenu(); // ገጹ ሲጫን በመጀመሪያው ቦታ ያለውን ክፍል ለማሳየት
});