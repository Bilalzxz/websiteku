let selectedPaket = "";

function openModal(paket, harga){
  selectedPaket = `${paket} - ${harga}`;
  document.getElementById("paketText").innerHTML =
    `<b>Paket Dipilih:</b><br>${selectedPaket}`;
  document.getElementById("modal").style.display = "block";
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
}

function sendPaket(){
  const nama = document.getElementById("nama").value;
  const alamat = document.getElementById("alamat").value;

  if(nama==="" || alamat===""){
    alert("Lengkapi data terlebih dahulu");
    return;
  }

  const phone = "628111111111";
  const text = `Halo CS Biznet

Saya ingin berlangganan:
${selectedPaket}

Nama: ${nama}
Alamat: ${alamat}

Mohon ditindaklanjuti. Terima kasih.`;

  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`,"_blank");
}
function checkArea(){
  const area = document.getElementById("areaSelect").value;
  const result = document.getElementById("resultArea");

  if(area === ""){
    result.innerHTML = "Silakan pilih wilayah terlebih dahulu.";
    return;
  }

  const statusList = [
    "Jaringan Normal ✅",
    "Sedang Maintenance 🔧",
    "Gangguan Sementara ⚠️"
  ];

  const randomStatus = statusList[Math.floor(Math.random()*statusList.length)];

  result.innerHTML = `<strong>Wilayah: ${area}</strong><br>Status: ${randomStatus}`;
}

