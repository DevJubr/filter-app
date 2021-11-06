
const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "https://images.pexels.com/photos/1309593/pexels-photo-1309593.jpeg?cs=srgb&dl=pexels-lukas-1309593.jpg&fm=jpg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "https://images.pexels.com/photos/3192367/pexels-photo-3192367.jpeg?cs=srgb&dl=pexels-karina-shilongo-3192367.jpg&fm=jpg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "https://images.pexels.com/photos/3915855/pexels-photo-3915855.jpeg?cs=srgb&dl=pexels-horizon-content-3915855.jpg&fm=jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?cs=srgb&dl=pexels-jonathan-borba-2983101.jpg&fm=jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?cs=srgb&dl=pexels-nastyasensei-821365.jpg&fm=jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?cs=srgb&dl=pexels-malidate-van-769289.jpg&fm=jpg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "https://images.pexels.com/photos/3493579/pexels-photo-3493579.jpeg?cs=srgb&dl=pexels-votsis-panagiotis-3493579.jpg&fm=jpg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "https://images.pexels.com/photos/1391505/pexels-photo-1391505.jpeg?cs=srgb&dl=pexels-monicore-1391505.jpg&fm=jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

  let main = document.querySelector('main');
  let button = document.querySelectorAll('.filter-btn');

  window.addEventListener('DOMContentLoaded', function(){
    displyMenuItem(menu)
  });

  function displyMenuItem(menuitem){
    let displayContent = menuitem.map(function(item){
        return `<div class="singelI">
        <img id="food" src="${item.img}">
        <div class="tetxDiv">
         <div class="topTaitel">
           <p class="name">${item.title}</p>
           <p class="price">$${item.price}</p>
         </div>
          <p class="discip">${item.desc}</p>
        </div>
      </div>`
      });
      displayContent = displayContent.join('');
      main.innerHTML = displayContent;
  }


  button.forEach(function(btn){
   btn.addEventListener('click', function(e){
    let dataTargrt = e.currentTarget.dataset.id;
    let menuCetogore = menu.filter(function(menuItem){
        if(menuItem.category === dataTargrt){
            return menuItem;
        }
   });
    if(dataTargrt === 'all'){
        displyMenuItem(menu);
    }
    else{
        displyMenuItem(menuCetogore);
    }
    })
  })
