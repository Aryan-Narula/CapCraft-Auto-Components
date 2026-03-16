const BUSINESS_PHONE_E164 = "+919000000000";
const CONTACT_EMAIL = "capcraftautocomponents@gmail.com";

document.getElementById("yr").textContent = new Date().getFullYear();
document.getElementById("waGeneral").href = "https://wa.me/" + BUSINESS_PHONE_E164.replace("+","");
document.getElementById("mailGeneral").href = "mailto:" + CONTACT_EMAIL;

const PRODUCTS = [
  {id:"brass-rustproof",category:"Radiator Caps",name:"Rust Proof Brass Radiator Tank Cap",price:"₹ 63 / Piece",moq:"50 Piece",img:"0-5mm-brass-radiator-cap-500x500.webp",specs:["Vehicle Type: Car","Origin: OEM","Material: Brass","Safety Lock: Yes","Features: Rust Proof"],blurb:"Reliable brass radiator cap for passenger vehicles with rust-proof surface and safety lock."},
  {id:"ms-bus-fuel",category:"Fuel Tank Caps",name:"Powder Coated Mild Steel Bus Fuel Tank Cap",price:"₹ 18 / Piece",moq:"50 Piece",img:"Powder Coated Mild Steel Bus Fuel Tank Cap.webp",specs:["Vehicle Type: Bus","Usage: Bus Fuel Tank Cap","Material: Mild Steel","Surface: Powder Coated"],blurb:"Durable MS cap for bus fuel tanks with protective powder coat for corrosion resistance."},
  {id:"ms-rad",category:"Radiator Caps",name:"Powder Coated Mild Steel Radiator Tank Cap",price:"₹ 15 / Piece",moq:"10 Piece",img:"Powder Coated Mild Steel Radiator Tank Cap.webp",specs:["Vehicle Type: Car","Material: Mild Steel","Surface: Powder Coated"],blurb:"Economical OE-grade radiator cap in mild steel with powder-coated finish."},
  {id:"ss304-bus-rad",category:"Radiator Caps",name:"304 Stainless Steel Bus Radiator Fuel Tank Cap",price:"₹ 38 / Piece",moq:"50 Piece",img:"304 Stainless Steel Bus Radiator Fuel Tank Cap.webp",specs:["Vehicle Type: Bus","Material: Stainless Steel","Material Grade: SS304","Surface: Polished"],blurb:"Polished SS304 cap for bus radiator/fuel applications — strong, heat & corrosion resistant."},
  {id:"brass-polished",category:"Radiator Caps",name:"Polished Brass Car Radiator Tank Cap",price:"₹ 25 / Piece",moq:"50 Piece",img:"Polished Brass Car Radiator Tank Cap.webp",specs:["Vehicle Type: Car","Material: Brass","Surface: Polished"],blurb:"Classic polished brass cap for cars with rust-proof protection."},
  {id:"ss302-fuel",category:"Fuel Tank Caps",name:"Four Wheeler Diesel Fuel Tank Cap",price:"₹ 17 / Piece",moq:"50 Piece",img:"Four Wheeler Diesel Fuel Tank Cap.webp",specs:["Vehicle Type: Four Wheeler","Cap Material: Stainless Steel","Material Grade: SS302","Surface: Polished"],blurb:"Stainless steel diesel fuel cap for four-wheelers with lockable design and polished surface."},
  {id:"ss304-rad",category:"Radiator Caps",name:"304 Stainless Steel Radiator Tank Cap",price:"₹ 39 / Piece",moq:"50 Piece",img:"304 Stainless Steel Radiator Tank Cap.webp",specs:["Vehicle Type: Car","Material: Stainless Steel","Material Grade: 304","Surface: Polished"],blurb:"OEM-grade SS304 radiator cap with polished finish; robust and long-lasting."},
  {id:"ss302-fuel-plain",category:"Fuel Tank Caps",name:"302 Stainless Steel Fuel Tank Cap",price:"₹ 14 / Piece",moq:"50 Piece",img:"302 Stainless Steel Fuel Tank Cap.webp",specs:["Vehicle Type: Four Wheeler","Cap Material: Stainless Steel","Material Grade: SS302"],blurb:"Cost-effective SS302 fuel tank cap for four-wheelers; dependable daily-use part."}
];

const categories = [...new Set(PRODUCTS.map(p=>p.category))];
const categoryChips = document.getElementById("categoryChips");
const activeCats = new Set();

function chip(label){
  const el=document.createElement("button");
  el.className="chip";
  el.textContent=label;
  el.onclick=()=>{
    activeCats.has(label)?activeCats.delete(label):activeCats.add(label);
    el.classList.toggle("active");
    render();
  };
  return el;
}
categories.forEach(c=>categoryChips.appendChild(chip(c)));

const qInput=document.getElementById("searchInput");
qInput.oninput=render;
const cards=document.getElementById("cards");

function card(p){
  const el=document.createElement("article");
  el.className="card";
  el.innerHTML=`
    <div class="thumb"><span class="badge">${p.category}</span><img loading="lazy" src="${p.img}" alt="${p.name}"></div>
    <div class="content">
      <div class="title">${p.name}</div>
      <div><span class="price">${p.price}</span> <span class="muted">• MOQ: ${p.moq}</span></div>
      <div class="specs">${p.specs.map(s=>"• "+s).join("<br>")}</div>
      <p class="muted" style="margin:6px 0 0">${p.blurb}</p>
      <div class="cta">
        <a class="btn-sm btn-wa" href="https://wa.me/${BUSINESS_PHONE_E164.replace('+','')}?text=${encodeURIComponent('Enquiry: '+p.name)}" target="_blank">WhatsApp</a>
        <a class="btn-sm" href="mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Enquiry: '+p.name)}">Email</a>
      </div>
    </div>`;
  return el;
}

function render(){
  const q=qInput.value.toLowerCase();
  let list=PRODUCTS.filter(p=>(!activeCats.size||activeCats.has(p.category))&&(!q||p.name.toLowerCase().includes(q)));
  cards.innerHTML="";
  list.forEach(p=>cards.appendChild(card(p)));
}
render();
