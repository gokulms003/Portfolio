// show menu

const showMenu = (ToggleId, navId) => {
    const toggle = document.getElementById(ToggleId,navId),
        nav = document.getElementById(navId);

    if(ToggleId && nav){
        toggle.addEventListener('click' , () =>{
            nav.classList.toggle('show')
        });
    }
}

showMenu('navtoggle' , 'navmenu');

//once active and remove others navigation
const navlink = document.querySelectorAll('.navlink');

function linkAction(){
    navlink.forEach(n => n.classList.remove('active'))
    this.classList.add('active');

    const navmenu = document.getElementById('navmenu')
    navmenu.classList.remove('show');
}

navlink.forEach(n => n.addEventListener('click',linkAction))

// show more projects
document.addEventListener('DOMContentLoaded', function() 
{
    const showMoreBtn = document.getElementById('show-more-btn');
        const hiddenProjects = document.querySelectorAll('.project.hidden');

            showMoreBtn.addEventListener('click', function()
             {
                hiddenProjects.forEach(function(project) {
                    project.classList.toggle('hidden');
                });

                if (showMoreBtn.textContent === 'Show More') 
                    {
                    showMoreBtn.textContent = 'Show Less';
                } 
                else 
                    {
                       showMoreBtn.textContent = 'Show More';
                    }
            });
});

