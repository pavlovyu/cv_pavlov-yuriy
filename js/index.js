"use strict"

const ipUrl = 'https://api.ipify.org/?format=json';
const userUrl = 'http://ip-api.com/json/';
const btn = document.querySelector('.btnSearch');
const root = document.querySelector('.search-ip');
btn.addEventListener('click', (e) => {
   async function getIp() {
       const responseIp = await fetch(ipUrl, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            }
        })
       .then((request) => {
           return request.json()
       })
           .then((request) => {
                   fetch(userUrl + request.ip, {
                    method: "GET",
                    headers: {
                    "Content-Type": "application/json",
                    }
                })
                       .then((data) => {
                           return data.json();
                       })
                       .then((data) => {
                           root.insertAdjacentHTML("afterend",
                               `<div class="wrapper">
                                        <p class="page-text__user">Information about you:</p>
                                        <p class="page-text">Country code: ${data.countryCode}</p>
                                        <p class="page-text">Country: ${data.country}</p>
                                        <p class="page-text">City: ${data.city}</p>
                                        <p class="page-text">Region name: ${data.regionName}</p>
                                        <p class="page-text">Your IP: ${request.ip}</p>
                                    </div>`);
                           });
                       });
};
   getIp();
});

const itemTabs = document.querySelectorAll(".tabs-item"); 
const tabsButton = document.querySelectorAll(".tabs-title");

tabsButton.forEach(element => {
    element.addEventListener("click", function () {
        let activeButton = element;
        let tabData = activeButton.getAttribute("data");
        let selectedTab = document.querySelector(tabData);
        tabsButton.forEach(element => {
            element.classList.remove('active');
        });
        itemTabs.forEach(element => {
            element.classList.remove('active');
        })
        activeButton.classList.add('active');
        selectedTab.classList.add('active');
    })
});

// PreventDefault
const links = document.querySelectorAll('a');
links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
    })
});

// Our_Work
const items = document.querySelectorAll('.our-work-portfolio-item');
const list = document.querySelector('.our-work-menu');
const listItems = document.querySelectorAll('.our-work-menu-title');

function ejectItems(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}
function itemFilter () {
    list.addEventListener('click', event => {
        const target = event.target;
        const targetId = event.target.dataset.id;
        if(target.classList.contains('our-work-menu-title')) {
            listItems.forEach(listItem => listItem.classList.remove('active'))
            target.classList.add('active')
        }
        switch(targetId) {
            case 'all':
                ejectItems('our-work-portfolio-item')
                break
            case 'graphic-design':
                ejectItems(targetId)
                break
            case 'web-design':
                ejectItems(targetId)
                break
            case 'landing-pages':
                ejectItems(targetId)
                break
            case 'wordpress':
                ejectItems(targetId)
                break
        }
    })
}
itemFilter();
// Item_from_Server
const addItemSrv = document.querySelectorAll('.srv');
const ourWorkBtn = document.querySelector('.our-work-button');
ourWorkBtn.addEventListener('click', () => {
    ourWorkBtn.classList.add('hidden');
    addItemSrv.forEach(element => {
        element.classList.add('active')
    })
})