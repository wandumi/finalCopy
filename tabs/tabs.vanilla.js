
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.tabs-header li');
    const tabContent = document.querySelectorAll('.tab-content');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
      
            tabContent.forEach(content => {
                content.classList.remove('active');
            });

            tabContent[index].classList.add('active');

    
            tabs.forEach(t => {
                t.classList.remove('active');
            });


            tab.classList.add('active');
        });
    });
});
