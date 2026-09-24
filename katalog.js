// ========================================
// DATA BARANG
// Setiap barang dipasangkan dengan toko nyata
// di Kendari. Koordinat diambil dari titik toko
// di Google Maps (nama toko ada di field lokasi).
// ========================================

const daftarData = [

    {
        id: 1,
        nama: "Kipas Angin Mini",
        kategori: "Elektronik",
        harga: 85000,
        lokasi: "TOP Elektronik, Jl. Ahmad Yani, Kadia",
        lat: -3.98809,
        lng: 122.50684,
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg0pOShuGILPBou7buEC-ncd6qd-ZoqumXSwcBU-1qmA&s"
    },
    {
        id: 2,
        nama: "Headset Bluetooth",
        kategori: "Elektronik",
        harga: 120000,
        lokasi: "Toko Bintang Aksesoris HP, Jl. MT. Haryono",
        lat: -3.98973,
        lng: 122.50694,
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZ9ROOykHNdO7EbcCeI345Dx5984YKWeFnpL_V3Rq7Q&s=10"
    },
    {
        id: 3,
        nama: "Sepatu Sneakers",
        kategori: "Fashion",
        harga: 135000,
        lokasi: "Toko Dunia Sepatu, Jl. Saranani, Mandonga",
        lat: -3.96830,
        lng: 122.52138,
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbeBVYrgOQBOLXPpPESOHpTZPe6JM32AlRk3X5BVVb2w&s=10"
    },
    {
        id: 4,
        nama: "Kemeja Batik",
        kategori: "Fashion",
        harga: 150000,
        lokasi: "Elevent Store, Jl. Sorumba, Kadia",
        lat: -3.99259,
        lng: 122.50721,
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvHeSs53dHE6W_rkYcPc_hD7M6AK6WedhDH-CGBxsUHA&s=10"
    },
    {
        id: 5,
        nama: "Kursi Kayu Jati",
        kategori: "Furnitur",
        harga: 1500000,
        lokasi: "UD Sinar TM Furniture, Wua-Wua",
        lat: -3.99871,
        lng: 122.50428,
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCXD6PpryxmbhFCVTTwJVWTj034CaWfce6RJRy259MjQ&s=10"
    },
    {
        id: 6,
        nama: "Meja Belajar Lipat",
        kategori: "Furnitur",
        harga: 370000,
        lokasi: "RM Furniture & Home Decor, Anduonohu",
        lat: -3.99990,
        lng: 122.54341,
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6d7QtsgaoyUqPu_vK87IxzRNw0oK_d1F1ejjarCb_Mg&s=10"
    },
    {
        id: 7,
        nama: "Sarung Tenun Khas Sultra",
        kategori: "Kerajinan",
        harga: 300000,
        lokasi: "Sultra Tenun & Tourism Center, Mandonga",
        lat: -3.96852,
        lng: 122.52298,
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXyEg6v_IAENMDc3zFIFfrchuERS45Fwl44vlbnX5Zg&s=10"
    },
    {
        id: 8,
        nama: "Kalung Mutiara Kendari",
        kategori: "Kerajinan",
        harga: 1200000,
        lokasi: "Toko Emas Mutiara, Kendari Barat",
        lat: -3.97112,
        lng: 122.57963,
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbS1UnWJucgCi7-HjcU8xrDn_--0vuFLlr4Lohwx7OFw&s"
    },
    {
        id: 9,
        nama: "Kacang Mete Kendari",
        kategori: "Kuliner",
        harga: 45000,
        lokasi: "Mete Mubaraq, Kendari Barat",
        lat: -3.96663,
        lng: 122.53597,
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwQQ6udGGvwrxhmZ_8mzALPIi2x1Bc8z5J-olWKSNPLQ&s=10"
    },
    {
        id: 10,
        nama: "Bakso Sapi",
        kategori: "Kuliner",
        harga: 25000,
        lokasi: "Bakso Sari Bumi, Kambu",
        lat: -3.99888,
        lng: 122.51808,
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREiZ0otFIdpoKo4BgXulrj55X62_0hc06Liajs6d4nRHEFO1vyHn1w45k&s=10"
    },
    {
        id: 11,
        nama: "Hoodie",
        kategori: "Fashion",
        harga: 250000,
        lokasi: "Jackcloth Store, Puuwatu",
        lat: -3.97237,
        lng: 122.50597,
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Dk6aOmgz905i16H6LL0jcowMhoCS_vbCJz28HhxRcA&s=10"
    },
    {
        id: 12,
        nama: "iPhone",
        kategori: "Elektronik",
        harga: 19500000,
        lokasi: "iBox AH Nasution, Kambu",
        lat: -4.00129,
        lng: 122.52842,
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1dnV4ngkCY1vc38IUz0mIYoO00jZyh7_LLTAiYo9N_Q&s=10"
    },
    {
        id: 13,
        nama: "Lemari",
        kategori: "Furnitur",
        harga: 1250000,
        lokasi: "Informa Furnishings Kendari, Jl. Jend. Ahmad Yani No.26, Kadia",
        lat: -3.9915,
        lng: 122.5078,
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNgTA02UJkGJADiyoQoWc4ZevFUwHgERGARu3LlhWu3g&s=10"
    },


];


// ========================================
// VARIABEL
// ========================================

let map;
let markerList = [];
let dataAktif = daftarData;
let kategoriAktif = "Semua";


// ========================================
// FORMAT HARGA
// ========================================

function formatHarga(harga) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(harga);
}


// ========================================
// INISIALISASI MAP
// ========================================

function initMap() {

    map = L.map("map", { zoomControl: true })
        .setView([-3.9985, 122.5250], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    daftarData.forEach(barang => buatMarker(barang));
}


// ========================================
// MEMBUAT MARKER
// ========================================

function buatMarker(barang) {

    const marker = L.marker([barang.lat, barang.lng]).addTo(map);

    marker.bindPopup(`
        <div class="popup-mini">
            <img src="${barang.gambar}" style="width:100%;height:110px;object-fit:cover;border-radius:8px;">
            <h3 style="margin:8px 0 4px;">${barang.nama}</h3>
            <p style="margin:4px 0;">📍 ${barang.lokasi}</p>
            <strong>${formatHarga(barang.harga)}</strong>
            <br><br>
            <button
                onclick="bukaPanel(${barang.id})"
                style="width:100%;padding:9px;border:none;border-radius:7px;background:#146B66;color:white;cursor:pointer;font-weight:600;"
            >Lihat detail</button>
        </div>
    `);

    marker.on("click", () => bukaPanel(barang.id));

    markerList.push({ marker, barang });
}


// ========================================
// PANEL DETAIL
// ========================================

function bukaPanel(id) {

    const barang = daftarData.find(item => item.id === id);
    if (!barang) return;

    document.getElementById("panelGambar").src = barang.gambar;
    document.getElementById("panelGambar").alt = barang.nama;
    document.getElementById("panelKategori").textContent = barang.kategori;
    document.getElementById("panelNama").textContent = barang.nama;
    document.getElementById("panelHarga").textContent = formatHarga(barang.harga);
    document.getElementById("panelLokasi").textContent = "📍 " + barang.lokasi;

    document.getElementById("btnRute").dataset.id = barang.id;
    document.getElementById("btnBeliPanel").dataset.id = barang.id;

    document.getElementById("panelInfo").classList.add("tampil");
    document.getElementById("overlay").classList.add("tampil");

    map.flyTo([barang.lat, barang.lng], 15, { duration: 1 });
}

function tutupPanelInfo() {
    document.getElementById("panelInfo").classList.remove("tampil");
    document.getElementById("overlay").classList.remove("tampil");
}

document.getElementById("tutupPanel").addEventListener("click", tutupPanelInfo);
document.getElementById("overlay").addEventListener("click", tutupPanelInfo);


// ========================================
// TOMBOL RUTE (buka Google Maps)
// ========================================

document.getElementById("btnRute").addEventListener("click", function () {
    const id = Number(this.dataset.id);
    const barang = daftarData.find(item => item.id === id);
    if (!barang) return;

    const url = `https://www.google.com/maps/dir/?api=1&destination=${barang.lat},${barang.lng}`;
    window.open(url, "_blank");
});


// ========================================
// BELI BARANG (dipakai kartu & panel)
// ========================================

function beliBarang(id) {

    const barang = daftarData.find(item => item.id === id);
    if (!barang) return;

    const konfirmasi = confirm(
        `Beli ${barang.nama} seharga ${formatHarga(barang.harga)} dari penjual di ${barang.lokasi}?`
    );

    if (konfirmasi) {
        alert(`Pesanan ${barang.nama} berhasil diproses! Penjual akan segera dihubungi.`);
        tutupPanelInfo();
    }
}

document.getElementById("btnBeliPanel").addEventListener("click", function () {
    beliBarang(Number(this.dataset.id));
});


// ========================================
// RENDER DAFTAR BARANG (grid katalog)
// ========================================

function tampilkanBarang(data) {

    const container = document.getElementById("daftarBarang");
    container.innerHTML = "";

    document.getElementById("infoHasil").textContent =
        `${data.length} barang ditemukan`;

    if (data.length === 0) {
        container.innerHTML = `
            <div class="kosong">
                <h3>Barang tidak ditemukan</h3>
                <p>Coba kata kunci lain, atau pilih kategori yang berbeda.</p>
            </div>
        `;
        return;
    }

    data.forEach(barang => {

        const card = document.createElement("div");
        card.className = "card";
        card.dataset.id = barang.id;

        card.innerHTML = `
            <img src="${barang.gambar}" alt="${barang.nama}">
            <div class="card-content">
                <span class="card-kategori">${barang.kategori}</span>
                <h3>${barang.nama}</h3>
                <p class="card-harga">${formatHarga(barang.harga)}</p>
                <p class="card-lokasi">
                    <svg width="13" height="13"><use href="#icon-pin"/></svg>
                    ${barang.lokasi}
                </p>
                <div class="card-buttons">
                    <button class="btn btn-outline" onclick="fokusKeBarang(${barang.id})">
                        <svg width="14" height="14"><use href="#icon-pin"/></svg> Peta
                    </button>
                    <button class="btn btn-primary" onclick="beliBarang(${barang.id})">
                        <svg width="14" height="14"><use href="#icon-cart"/></svg> Beli
                    </button>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}


// ========================================
// FOKUS KE BARANG DARI KARTU
// ========================================

function fokusKeBarang(id) {

    const barang = daftarData.find(item => item.id === id);
    if (!barang) return;

    document.getElementById("peta").scrollIntoView({ behavior: "smooth", block: "start" });

    map.flyTo([barang.lat, barang.lng], 16, { duration: 1.2 });

    const dataMarker = markerList.find(item => item.barang.id === id);
    if (dataMarker) {
        setTimeout(() => dataMarker.marker.openPopup(), 800);
    }
}


// ========================================
// FILTER KATEGORI + PENCARIAN (gabungan)
// ========================================

function terapkanFilter() {

    const keyword = document.getElementById("pencarian").value.toLowerCase().trim();

    let hasil = daftarData;

    if (kategoriAktif !== "Semua") {
        hasil = hasil.filter(barang => barang.kategori === kategoriAktif);
    }

    if (keyword !== "") {
        hasil = hasil.filter(barang =>
            barang.nama.toLowerCase().includes(keyword) ||
            barang.kategori.toLowerCase().includes(keyword) ||
            barang.lokasi.toLowerCase().includes(keyword)
        );
    }

    dataAktif = hasil;
    tampilkanBarang(hasil);

    if (hasil.length > 0) {
        tampilkanLokasi(hasil);
    }
}

document.querySelectorAll(".kategori-btn").forEach(button => {
    button.addEventListener("click", function () {

        document.querySelectorAll(".kategori-btn").forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        kategoriAktif = this.dataset.kategori;
        terapkanFilter();
    });
});

document.getElementById("pencarian").addEventListener("input", terapkanFilter);

document.getElementById("formCari").addEventListener("submit", function (e) {
    e.preventDefault();
    terapkanFilter();
    document.getElementById("katalog").scrollIntoView({ behavior: "smooth", block: "start" });
});


// ========================================
// TAMPILKAN LOKASI HASIL FILTER DI PETA
// ========================================

function tampilkanLokasi(data) {
    if (data.length === 0) return;

    const bounds = L.latLngBounds(data.map(barang => [barang.lat, barang.lng]));
    map.fitBounds(bounds, { padding: [50, 50] });
}


// ========================================
// TOMBOL SEMUA LOKASI
// ========================================

document.getElementById("btnSemuaLokasi").addEventListener("click", function () {
    const bounds = L.latLngBounds(daftarData.map(barang => [barang.lat, barang.lng]));
    map.fitBounds(bounds, { padding: [50, 50] });
    tutupPanelInfo();
});


// ========================================
// TOMBOL LOKASI SAYA
// ========================================

document.getElementById("btnLokasiSaya").addEventListener("click", function () {

    if (!navigator.geolocation) {
        alert("Browser kamu tidak mendukung fitur lokasi.");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        function (position) {
            const { latitude, longitude } = position.coords;

            map.flyTo([latitude, longitude], 15, { duration: 1 });

            L.circleMarker([latitude, longitude], {
                radius: 9,
                color: "#146B66",
                fillColor: "#146B66",
                fillOpacity: 0.8
            })
            .addTo(map)
            .bindPopup("📍 Lokasi kamu")
            .openPopup();
        },
        function () {
            alert("Lokasi tidak dapat diakses. Pastikan izin lokasi di browser sudah diberikan.");
        }
    );
});


// ========================================
// MENU MOBILE
// ========================================

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => navLinks.classList.toggle("tampil"));

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("tampil"));
});


// ========================================
// FITUR JUAL BARANG
// Penjual mengisi form, memilih titik lokasi di peta
// (atau memakai lokasi saat ini), lalu barang langsung
// muncul di katalog dan peta. Data disimpan di browser
// (localStorage) supaya tidak hilang saat halaman di-refresh.
// ========================================

const KUNCI_SIMPAN = "barangDijual";
const DAFTAR_KATEGORI = ["Elektronik", "Fashion", "Furnitur", "Kerajinan", "Kuliner"];

const GAMBAR_DEFAULT = "data:image/svg+xml;utf8," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">' +
    '<rect width="400" height="300" fill="#e6f0ef"/>' +
    '<text x="200" y="160" font-family="Arial" font-size="22" fill="#146B66" text-anchor="middle">Belum ada foto</text>' +
    '</svg>'
);

let titikJual = null;
let pinJual = null;
let sedangMemilihTitik = false;


// ---------- Fungsi bantu ----------

// Buang karakter yang bisa merusak tampilan HTML
function bersihkanTeks(teks) {
    return String(teks).replace(/[<>"`]/g, "").replace(/\s+/g, " ").trim();
}

function idBerikutnya() {
    return Math.max(...daftarData.map(b => b.id)) + 1;
}

// Perkecil foto (maks 640px) supaya muat di penyimpanan browser
function bacaFoto(file) {
    return new Promise((resolve, reject) => {
        if (!file.type.startsWith("image/")) {
            reject(new Error("bukan gambar"));
            return;
        }

        const reader = new FileReader();
        reader.onerror = () => reject(new Error("gagal membaca file"));
        reader.onload = () => {
            const img = new Image();
            img.onerror = () => reject(new Error("gambar rusak"));
            img.onload = () => {
                const skala = Math.min(1, 640 / Math.max(img.width, img.height));
                const canvas = document.createElement("canvas");
                canvas.width = Math.round(img.width * skala);
                canvas.height = Math.round(img.height * skala);
                canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
                resolve(canvas.toDataURL("image/jpeg", 0.8));
            };
            img.src = reader.result;
        };
        reader.readAsDataURL(file);
    });
}


// ---------- Simpan & muat data penjual ----------

function simpanBarangJual() {
    try {
        const milikPenjual = daftarData.filter(b => b.dariPenjual);
        localStorage.setItem(KUNCI_SIMPAN, JSON.stringify(milikPenjual));
        return true;
    } catch (e) {
        return false;
    }
}

function muatBarangJual() {
    let tersimpan = [];

    try {
        tersimpan = JSON.parse(localStorage.getItem(KUNCI_SIMPAN) || "[]");
    } catch (e) {
        return;
    }

    if (!Array.isArray(tersimpan)) return;

    tersimpan.forEach(item => {
        if (!item) return;

        const nama = bersihkanTeks(item.nama || "");
        const lokasi = bersihkanTeks(item.lokasi || "");
        const harga = Number(item.harga);
        const lat = Number(item.lat);
        const lng = Number(item.lng);

        const sah = nama && lokasi
            && DAFTAR_KATEGORI.includes(item.kategori)
            && Number.isFinite(harga) && harga > 0
            && Number.isFinite(lat) && Number.isFinite(lng)
            && typeof item.gambar === "string"
            && /^(data:image\/|https?:\/\/)/.test(item.gambar);

        if (!sah) return;

        daftarData.push({
            id: idBerikutnya(),
            nama,
            kategori: item.kategori,
            harga,
            lokasi,
            lat,
            lng,
            gambar: item.gambar,
            dariPenjual: true
        });
    });
}


// ---------- Tampilan form (dibuat lewat JavaScript) ----------

function buatFormJual() {

    const gaya = document.createElement("style");
    gaya.textContent = `
        .jual-overlay { position: fixed; inset: 0; background: rgba(0,0,0,.55); display: none; align-items: center; justify-content: center; padding: 16px; z-index: 3000; }
        .jual-overlay.tampil { display: flex; }
        .jual-kotak { background: #fff; color: #1f2933; width: 100%; max-width: 480px; max-height: 92vh; overflow: auto; border-radius: 14px; padding: 22px; box-shadow: 0 20px 50px rgba(0,0,0,.3); box-sizing: border-box; }
        .jual-kotak h2 { margin: 0 0 4px; font-size: 20px; }
        .jual-sub { margin: 0 0 8px; font-size: 13px; color: #6b7280; }
        .jual-kotak label { display: block; font-size: 13px; font-weight: 600; margin: 12px 0 5px; }
        .jual-kotak input[type=text], .jual-kotak input[type=number], .jual-kotak select { width: 100%; padding: 10px 12px; border: 1px solid #cfd8d7; border-radius: 8px; font-size: 14px; font-family: inherit; box-sizing: border-box; background: #fff; color: #1f2933; }
        .jual-kotak input[type=file] { font-size: 13px; max-width: 100%; }
        .jual-kotak input:focus, .jual-kotak select:focus { outline: 2px solid #146B66; border-color: #146B66; }
        .jual-baris { display: flex; gap: 8px; flex-wrap: wrap; }
        .jual-tombol { padding: 10px 14px; border-radius: 8px; border: 1px solid #146B66; background: #fff; color: #146B66; font-weight: 600; font-size: 14px; cursor: pointer; font-family: inherit; }
        .jual-tombol.utama { background: #146B66; color: #fff; }
        .jual-koordinat { font-size: 13px; margin-top: 8px; color: #6b7280; }
        .jual-koordinat.terisi { color: #146B66; font-weight: 600; }
        .jual-error { color: #b42318; font-size: 13px; margin-top: 12px; min-height: 16px; }
        .jual-aksi { display: flex; gap: 8px; margin-top: 12px; justify-content: flex-end; }
        .jual-banner { position: fixed; left: 50%; top: 16px; transform: translateX(-50%); z-index: 3100; background: #146B66; color: #fff; padding: 10px 14px; border-radius: 10px; display: none; align-items: center; gap: 12px; font-size: 14px; box-shadow: 0 8px 24px rgba(0,0,0,.25); max-width: calc(100% - 24px); }
        .jual-banner.tampil { display: flex; }
        .jual-banner button { border: 1px solid #fff; background: transparent; color: #fff; border-radius: 6px; padding: 5px 10px; cursor: pointer; font-family: inherit; }
    `;
    document.head.appendChild(gaya);

    const opsiKategori = DAFTAR_KATEGORI
        .map(k => `<option value="${k}">${k}</option>`)
        .join("");

    const overlay = document.createElement("div");
    overlay.className = "jual-overlay";
    overlay.id = "jualOverlay";
    overlay.innerHTML = `
        <div class="jual-kotak" role="dialog" aria-modal="true" aria-labelledby="jualJudul">
            <h2 id="jualJudul">Jual barang</h2>
            <p class="jual-sub">Isi data barang, lalu tandai lokasi toko atau penjual di peta.</p>

            <form id="jualForm" novalidate>
                <label for="jualNama">Nama barang</label>
                <input type="text" id="jualNama" maxlength="60" placeholder="Contoh: Sepatu Lari">

                <label for="jualKategori">Kategori</label>
                <select id="jualKategori">${opsiKategori}</select>

                <label for="jualHarga">Harga (Rp)</label>
                <input type="number" id="jualHarga" min="1" step="1" inputmode="numeric" placeholder="Contoh: 150000">

                <label for="jualLokasi">Nama toko / area</label>
                <input type="text" id="jualLokasi" maxlength="80" placeholder="Contoh: Toko Maju Jaya, Kadia">

                <label>Titik lokasi di peta</label>
                <div class="jual-baris">
                    <button type="button" class="jual-tombol" id="jualBtnPeta">Pilih di peta</button>
                    <button type="button" class="jual-tombol" id="jualBtnLokasiSaya">Pakai lokasi saya</button>
                </div>
                <div class="jual-koordinat" id="jualKoordinat"></div>

                <label for="jualFoto">Foto barang (opsional)</label>
                <input type="file" id="jualFoto" accept="image/*">

                <div class="jual-error" id="jualError" role="alert"></div>

                <div class="jual-aksi">
                    <button type="button" class="jual-tombol" id="jualBatal">Batal</button>
                    <button type="submit" class="jual-tombol utama" id="jualKirim">Pasang barang</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(overlay);

    const banner = document.createElement("div");
    banner.className = "jual-banner";
    banner.id = "jualBanner";
    banner.innerHTML = `
        <span>📍 Klik lokasi toko atau penjual di peta</span>
        <button type="button" id="jualBannerBatal">Batal</button>
    `;
    document.body.appendChild(banner);

    perbaruiTeksKoordinat();

    // Event
    overlay.addEventListener("click", function (e) {
        if (e.target === overlay) tutupFormJual();
    });
    document.getElementById("jualBatal").addEventListener("click", tutupFormJual);
    document.getElementById("jualBtnPeta").addEventListener("click", mulaiPilihDiPeta);
    document.getElementById("jualBtnLokasiSaya").addEventListener("click", pakaiLokasiSaya);
    document.getElementById("jualBannerBatal").addEventListener("click", batalPilihDiPeta);
    document.getElementById("jualForm").addEventListener("submit", function (e) {
        e.preventDefault();
        kirimFormJual();
    });

    document.addEventListener("keydown", function (e) {
        if (e.key !== "Escape") return;
        if (sedangMemilihTitik) batalPilihDiPeta();
        else tutupFormJual();
    });
}


// ---------- Buka / tutup / reset form ----------

function bukaFormJual() {
    document.getElementById("jualOverlay").classList.add("tampil");
    document.getElementById("jualNama").focus();
}

function tutupFormJual() {
    document.getElementById("jualOverlay").classList.remove("tampil");
}

function tampilkanErrorJual(pesan) {
    document.getElementById("jualError").textContent = pesan;
}

function perbaruiTeksKoordinat() {
    const el = document.getElementById("jualKoordinat");

    if (titikJual) {
        el.textContent = "📍 Titik dipilih: " + titikJual.lat.toFixed(5) + ", " + titikJual.lng.toFixed(5);
        el.classList.add("terisi");
    } else {
        el.textContent = "Belum ada titik lokasi dipilih.";
        el.classList.remove("terisi");
    }
}

function hapusPinJual() {
    if (pinJual) {
        map.removeLayer(pinJual);
        pinJual = null;
    }
}

function resetFormJual() {
    document.getElementById("jualForm").reset();
    titikJual = null;
    hapusPinJual();
    perbaruiTeksKoordinat();
    tampilkanErrorJual("");
}

function setTitikJual(lat, lng) {
    titikJual = { lat, lng };

    hapusPinJual();
    pinJual = L.circleMarker([lat, lng], {
        radius: 10,
        color: "#b42318",
        fillColor: "#b42318",
        fillOpacity: 0.8
    }).addTo(map);

    perbaruiTeksKoordinat();
    tampilkanErrorJual("");
}


// ---------- Memilih titik lokasi ----------

function saatPetaDiklik(e) {
    selesaiPilihDiPeta();
    setTitikJual(e.latlng.lat, e.latlng.lng);
    bukaFormJual();
}

function mulaiPilihDiPeta() {
    sedangMemilihTitik = true;

    tutupFormJual();
    tutupPanelInfo();

    document.getElementById("jualBanner").classList.add("tampil");
    map.getContainer().style.cursor = "crosshair";
    map.on("click", saatPetaDiklik);

    document.getElementById("peta").scrollIntoView({ behavior: "smooth", block: "start" });
}

function selesaiPilihDiPeta() {
    sedangMemilihTitik = false;

    map.off("click", saatPetaDiklik);
    map.getContainer().style.cursor = "";
    document.getElementById("jualBanner").classList.remove("tampil");
}

function batalPilihDiPeta() {
    selesaiPilihDiPeta();
    bukaFormJual();
}

function pakaiLokasiSaya() {
    if (!navigator.geolocation) {
        tampilkanErrorJual("Browser kamu tidak mendukung fitur lokasi.");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        function (position) {
            setTitikJual(position.coords.latitude, position.coords.longitude);
            map.flyTo([position.coords.latitude, position.coords.longitude], 15, { duration: 1 });
        },
        function () {
            tampilkanErrorJual("Lokasi tidak dapat diakses. Pastikan izin lokasi di browser sudah diberikan.");
        }
    );
}


// ---------- Kirim form: validasi lalu pasang barang ----------

async function kirimFormJual() {

    const nama = bersihkanTeks(document.getElementById("jualNama").value);
    const kategori = document.getElementById("jualKategori").value;
    const harga = Math.round(Number(document.getElementById("jualHarga").value));
    const lokasi = bersihkanTeks(document.getElementById("jualLokasi").value);
    const file = document.getElementById("jualFoto").files[0];

    if (nama.length < 3) {
        tampilkanErrorJual("Nama barang minimal 3 karakter.");
        return;
    }
    if (!DAFTAR_KATEGORI.includes(kategori)) {
        tampilkanErrorJual("Pilih kategori barang.");
        return;
    }
    if (!Number.isFinite(harga) || harga <= 0) {
        tampilkanErrorJual("Isi harga dengan angka lebih dari 0.");
        return;
    }
    if (lokasi.length < 3) {
        tampilkanErrorJual("Isi nama toko atau area penjual.");
        return;
    }
    if (!titikJual) {
        tampilkanErrorJual("Tandai titik lokasi di peta atau pakai lokasi kamu.");
        return;
    }

    let gambar = GAMBAR_DEFAULT;

    if (file) {
        try {
            gambar = await bacaFoto(file);
        } catch (err) {
            tampilkanErrorJual("Foto tidak bisa dibaca. Pilih file gambar lain atau kosongkan foto.");
            return;
        }
    }

    const barangBaru = {
        id: idBerikutnya(),
        nama,
        kategori,
        harga,
        lokasi,
        lat: titikJual.lat,
        lng: titikJual.lng,
        gambar,
        dariPenjual: true
    };

    daftarData.push(barangBaru);
    buatMarker(barangBaru);

    const tersimpan = simpanBarangJual();

    tutupFormJual();
    resetFormJual();

    // Tampilkan semua barang supaya barang baru langsung terlihat
    document.getElementById("pencarian").value = "";
    kategoriAktif = "Semua";
    document.querySelectorAll(".kategori-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.kategori === "Semua");
    });

    terapkanFilter();
    tampilkanStatistik();
    fokusKeBarang(barangBaru.id);

    setTimeout(() => {
        alert(
            `Barang "${nama}" berhasil dipasang!` +
            (tersimpan ? "" : "\n\nCatatan: barang belum bisa disimpan permanen karena penyimpanan browser penuh atau dinonaktifkan.")
        );
    }, 1000);
}


// ---------- Aktifkan fitur ----------

buatFormJual();
muatBarangJual();

document.getElementById("btnJual").addEventListener("click", bukaFormJual);


// ========================================
// STATISTIK RINGKAS DI HERO
// ========================================

function tampilkanStatistik() {
    const jumlahKategori = new Set(daftarData.map(b => b.kategori)).size;
    const jumlahLokasi = new Set(daftarData.map(b => b.lokasi)).size;

    document.getElementById("statBarang").textContent = daftarData.length;
    document.getElementById("statKategori").textContent = jumlahKategori;
    document.getElementById("statLokasi").textContent = jumlahLokasi;
}


// ========================================
// TAHUN FOOTER
// ========================================

document.getElementById("tahun").textContent = new Date().getFullYear();


// ========================================
// JALANKAN PROGRAM
// ========================================

initMap();
tampilkanBarang(daftarData);
tampilkanStatistik();