# Resume Materi Section 14

3 Poin yang saya pelajari di materi ini adalah sebagai berikut: 


**1.Komponen Form React:**

     React memungkinkan Kita untuk membuat komponen formulir yang dapat mengumpulkan, validasi, dan mengirim data dari pengguna. Dalam materi ini, Kita akan mempelajari cara membuat komponen formulir yang dapat digunakan untuk mengambil masukan pengguna, seperti input teks, tombol radio, kotak centang, dan banyak lagi. Kita juga akan memahami cara menghubungkan elemen-elemen ini dengan state React.

**2.Manajemen State Form:**

    Penting untuk memahami bagaimana React mengelola state dalam formulir. Kita akan mempelajari cara mengikat nilai-nilai elemen formulir ke state React dan bagaimana mengelola perubahan pada state tersebut. Hal ini memungkinkan Kita untuk merespons input pengguna secara dinamis dan mengganti tampilan formulir berdasarkan data yang dimasukkan oleh pengguna.

**3.Validasi Form:**

    Validasi adalah bagian penting dari formulir. Kita akan belajar tentang cara melakukan validasi data yang dimasukkan oleh pengguna. Ini bisa mencakup validasi sederhana seperti memeriksa apakah suatu input tidak boleh kosong atau validasi yang lebih kompleks seperti memeriksa format email atau angka tertentu. React memungkinkan Anda untuk menangani validasi ini dengan mudah dan memberikan umpan balik yang sesuai kepada pengguna.


**Selain tiga poin di atas, Kita juga akan mempelajari tentang pengiriman data formulir, pemrosesan data di sisi server, menangani perubahan dalam formulir (termasuk formulir dinamis), dan cara mengintegrasikan formulir React dengan berbagai library dan teknologi, seperti Redux, Axios, atau RESTful API. Memahami bagaimana bekerja dengan formulir React adalah keterampilan yang sangat penting untuk pengembangan aplikasi web interaktif dan berbasis formulir.**

# Latihan Materi React Form

**Soal Prioritas 1** 

-    regex validasi pada product name, product category, product freshness, product price yang telah kalian buat pada halaman CreateProduct

![ProductRegex](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Form/15_React%20Form/ScreenShots/ProductRegex.png)


**Soal Prioritas 2**
  
-    Buatlah form image dan Product Freshness dapat berfungsi dan ketika user menggunakan form tersebut. datanya akan masuk ke dalam tabel

![ProductDetails](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Form/15_React%20Form/ScreenShots/ProductImage%20dan%20ProductFreshness.png)


-    Buatlah validasi untuk Image dan Product Freshness sehingga data yang di masukkan valid.

![ProductImageValidation](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Form/15_React%20Form/ScreenShots/First%20Name%20dan%20Last%20Name%20minimal%203%20karakter.png)

![ProductImageValidation](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Form/15_React%20Form/ScreenShots/First%20Name%20dan%20Last%20Name%20minimal%203%20karakter_1.png)


**Soal Eksplorasi**

-    Buat form registrasi pengguna yang meminta data first name, last name, username, email, password, dan confirm password dan pastikan validasi form yang diterapkan meliputi:

First name dan last name harus memiliki panjang minimal 3 karakter.

![FirstName dan LastName](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Hook/13_React%20Hook/ScreenShots/handleEditClick.png)


Email harus memiliki format email yang valid.

![EmailValidate](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Form/15_React%20Form/ScreenShots/Validasi%20Email.png)

![EmailValidate](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Form/15_React%20Form/ScreenShots/Validasi%20Email_1.png)

Password harus memiliki panjang minimal 8 karakter dan harus cocok dengan confirm password.

![PasswordValidate](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Form/15_React%20Form/ScreenShots/Validasi%20Password%20dan%20Confirm%20Password.png)

![PasswordValidate](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Form/15_React%20Form/ScreenShots/Validasi%20Password%20dan%20Confirm%20Password_1.png)


-    Buat form login yang meminta data email dan password. Gunakan state dan event handlers untuk mengontrol input dan memvalidasi form, dengan validasi sebagai berikut

Email harus memiliki format email yang valid dan Password harus memiliki panjang minimal 8 karakter.

![LoginValidate](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Form/15_React%20Form/ScreenShots/LoginPageValidation.png)


Tampilkan pesan error jika salah satu dari kedua field tidak valid.

![LoginValidate](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Form/15_React%20Form/ScreenShots/Error%20Jika%20Salah%20Satu%20dari%20Kedua%20Field%20Tidak%20Valid.png)


-    Buatlah form register dan login menjadi sebuah halaman. Kemudian, buat sebuah routing sehingga user dapat berpindah-pindah halaman. Kalian bebas bereksperimen terkait flow, tata leta, dan user interface pada kedua halaman ini.

![RegisterPage](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Form/15_React%20Form/ScreenShots/RegisterPage.png)


![LoginPage](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Form/15_React%20Form/ScreenShots/LoginPage.png)
