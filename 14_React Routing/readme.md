# Resume Materi Section 14

3 Poin yang saya pelajari di materi ini adalah sebagai berikut: 


**1.Navigasi Halaman:**

    React Routing memungkinkan Kita untuk membuat navigasi antar halaman dalam aplikasi web React tanpa perlu memuat ulang halaman utuh setiap kali pengguna berpindah ke halaman yang berbeda. Ini meningkatkan pengalaman pengguna dan kinerja aplikasi.

**2.URL Routing:**

    Dalam React Routing, Kita dapat mendefinisikan berbagai rute (routes) yang sesuai dengan berbagai URL. Setiap rute dapat dihubungkan dengan komponen React tertentu. Ini memungkinkan Anda untuk menentukan bagaimana tampilan berubah berdasarkan URL yang diakses pengguna.

**3.Rute Dinamis dan Parameter:**

    React Routing juga memungkinkan Kita untuk membuat rute yang dinamis dengan parameter. Kita dapat menangkap nilai-nilai dari URL sebagai parameter dan menggunakan nilai-nilai ini dalam komponen React yang sesuai. Misalnya, Kita dapat membuat halaman profil pengguna dengan URL seperti /user/123 di mana 123 adalah parameter yang dapat digunakan untuk menampilkan profil pengguna yang sesuai.


**Selain tiga poin di atas, , React Routing juga memungkinkan Kita untuk mengelola berbagai aspek navigasi seperti tautan, perutean bersarang (nested routing), tampilan 404 (halaman tidak ditemukan), otentikasi, dan banyak lagi. Pemahaman yang kuat tentang React Routing akan membantu Kita membangun aplikasi web React yang lebih dinamis dan user-friendly.**

# Latihan Materi React Routing

**Soal Prioritas 1** 

-    Buatlah halaman LandingPage berdasarkan LandingPage.html yang telah kalian buat pada tugas sebelumnya

![LandingPage.jsx](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Routing/14_React%20Routing/ScreenShots/LandingPage.jsx.png)


-    Tambahkan tombol pada komponen LandingPage.jsx untuk menavigasi ke komponen CreateProduct.jsx dan Gunakan React Routing untuk navigasi antara component LandingPage.jsx dan CreateProduct.jsx

![Navigasi Komponen LandingPage.jsx](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Routing/14_React%20Routing/ScreenShots/CreateProduckClick.png)

![Navigasi Komponen LandingPage.jsx](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Routing/14_React%20Routing/ScreenShots/CreateProduckClick-2.png)



**Soal Prioritas 2**
  
-    Dengan memanfaatkan react routing buatlah fitur ketika user melakukan klik salah satu data pada tabel maka akan masuk ke halaman lain dan memunculkan data tersebut secara lengkap.

Detail Button

![DetailProduct](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Routing/14_React%20Routing/ScreenShots/Details.png)


Komponen Detail Product

![DetailProduct](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Routing/14_React%20Routing/ScreenShots/ProductDetails.png)



**Soal Eksplorasi**

-    Buatlah sebuah fitur private routing, sehingga hanya user yang sudah login yang bisa mengakses halaman-halaman tertentu.

![PrivateRoute](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Routing/14_React%20Routing/ScreenShots/PrivateRoutes.png)


-    App.js

![App.js](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Routing/14_React%20Routing/ScreenShots/App.js.png)
