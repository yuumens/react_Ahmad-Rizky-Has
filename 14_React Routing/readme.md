# Resume Materi Section 13

3 Poin yang saya pelajari di materi ini adalah sebagai berikut: 


**1.State dalam Komponen Fungsi:**

     Salah satu konsep utama yang dipelajari dari React Hooks adalah penggunaan state dalam komponen fungsi. Sebelum adanya Hooks, state hanya dapat digunakan dalam komponen kelas. Dengan React Hooks seperti useState, Kita dapat mengelola state dalam komponen fungsi. Kita akan memahami cara menggunakan useState untuk menyimpan dan memperbarui state dalam komponen fungsi Kita, yang memungkinkan Kita untuk membuat komponen yang dinamis dan responsif.

**2.Efek Samping dengan 'useEffect':**

    Hooks juga memungkinkan Kita untuk mengelola efek samping dalam komponen fungsi menggunakan useEffect. Ini berarti Kita dapat menjalankan kode yang tidak langsung terkait dengan rendering komponen, seperti pemanggilan ke API atau interaksi dengan DOM, dan mengontrol kapan kode tersebut dijalankan. Kita akan memahami cara menggunakan useEffect untuk memasukkan efek samping ke dalam komponen Kita dan bagaimana mengaturnya agar berperilaku sesuai kebutuhan.

**3.Pemisahan Logika:**

    Dengan menggunakan Hooks, Kita dapat memisahkan logika yang terkait dengan komponen Kita menjadi bagian yang lebih terpisah dan dapat digunakan kembali. Ini membantu dalam memisahkan logika dari tampilan (konsep yang dikenal sebagai "pemisahan kepentingan") dan membuat komponen lebih mudah diuji. Kita akan memahami cara membuat custom Hooks untuk mengelola logika yang dapat digunakan kembali dalam berbagai komponen.


**Selain tiga poin di atas, React Hooks juga memungkinkan Kita untuk mengelola konteks, referensi, dan siklus hidup komponen dalam komponen fungsi. Materi tentang React Hooks adalah langkah penting dalam evolusi pengembangan React dan membuka pintu bagi Developer untuk menulis komponen yang lebih sederhana, bersih, dan mudah diuji dalam lingkungan React.**

# Latihan Materi React Hook

**Soal Prioritas 1** 

-    Dengan menggunakan useEffect buatlah sebuah alert yang bertulisan “Welcome” ketika mereka membuka halaman CreateAccount.

Script

![useEffect Welcome](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Hook/13_React%20Hook/ScreenShots/useEffect%20Welcome_1.png)

Output

![useEffect Welcome](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Hook/13_React%20Hook/ScreenShots/useEffect%20Welcome.png)


-    Dengan menggunakan UseState masukkan setiap data yang kalian isi pada halaman CreateProduct ke dalam tabel.

![useState Table Data](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Hook/13_React%20Hook/ScreenShots/useState%20ListProduct.png)

-    Nomor dibuat random menggunakan UUID atau sejenisnya. pastikan tidak ada duplikasi nomor.

![RandomID](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Hook/13_React%20Hook/ScreenShots/ID%20Random.png)


**Soal Prioritas 2**

Buatlah tombol delete berfungsi, pastikan ketika ingin melakukan delete terdapat alert/modal/notifikasi yang bertuliskan apakah kalian ingin menghapus.
  
-    Jika pilih hapus maka data baru akan terhapus.

![DeleteProduct](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Hook/13_React%20Hook/ScreenShots/Ketika%20tekan%20Yes%20di%20alert%20ingin%20hapus%20Product.png)


-    Jika pilih tidak maka alert/modal/notifikasi akan hilang.

![DeleteProduct Alert](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Hook/13_React%20Hook/ScreenShots/Alert%20ingin%20hapus%20Product.png)


**Soal Eksplorasi**

-    Buatlah fitur edit berfugsi, kalian bebas menggunakan hook, library atau hal lain sesuai keinginan kalian.

handleEditCLick

![EditFeatures](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Hook/13_React%20Hook/ScreenShots/handleEditClick.png)


handleSaveEdit

![EditFeatures](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Hook/13_React%20Hook/ScreenShots/HandleSaveEdit.png)


-    Flow untuk melakukan edit tidak di tentukan, yang terpenting adalah kalian dapat melakukan edit data

Sebelum Edit

![SebelumEdit](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Hook/13_React%20Hook/ScreenShots/Sebelum%20Edit%20ProductName.png)


Sesudah Edit

![SesudahEdit](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Hook/13_React%20Hook/ScreenShots/Setelah%20Edit%20ProductName.png)
