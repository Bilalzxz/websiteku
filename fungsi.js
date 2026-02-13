const roomSelect = document.getElementById("roomSelect");
const rooms = document.querySelectorAll(".room");
const cards = document.querySelectorAll(".room-card");
const backBtns = document.querySelectorAll(".back-btn");

cards.forEach(card=>{
  card.addEventListener("click",()=>{
    const target = card.dataset.room;

    roomSelect.classList.remove("active");

    rooms.forEach(room=>{
      room.classList.remove("active");
    });

    document.getElementById(target).classList.add("active");
  });
});

backBtns.forEach(btn=>{
  btn.addEventListener("click",()=>{
    rooms.forEach(room=>{
      room.classList.remove("active");
    });
    roomSelect.classList.add("active");
  });
});

function sendWA(isp){
  let msg="", phone="";

  if(isp==="indihome"){
    msg=document.getElementById("msgIndi").value;
    phone="628111111111";
  }
  if(isp==="biznet"){
    msg=document.getElementById("msgBiznet").value;
    phone="628222222222";
  }

  if(msg.trim()===""){
    alert("Keluhan tidak boleh kosong!");
    return;
  }

  const text=`Halo Customer Service ${isp.toUpperCase()}

${msg}

Terima kasih.`;

  window.open(
    https://wa.me/${phone}?text=${encodeURIComponent(text)},
    "_blank"
  );
}