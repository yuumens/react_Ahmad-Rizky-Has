# Resume Materi Section 17

3 Poin yang saya pelajari di materi ini adalah sebagai berikut: 


**1.Unit Testing Komponen:**

     Unit testing adalah pendekatan untuk menguji komponen secara terisolasi. Dalam konteks React, ini berarti menguji setiap komponen secara terpisah untuk memastikan bahwa setiap komponen berfungsi dengan benar.
     
     Pada level unit testing, Kita dapat menggunakan Library seperti Jest untuk membuat dan menjalankan tes. Jest menyediakan fungsi untuk membuat tes, mensimulasikan peristiwa, dan memeriksa hasil yang diharapkan.

**2.Integration Testing:**

     Integration testing fokus pada pengujian cara komponen-komponen berinteraksi satu sama lain. Misalnya, Kita dapat menguji apakah komponen induk dapat berkomunikasi dengan benar dengan komponen anaknya, atau apakah perubahan dalam satu komponen   memengaruhi dengan benar komponen lainnya.
     
     Tes integrasi seringkali melibatkan mounting komponen dalam konteks tertentu dan menguji perilaku mereka ketika berinteraksi dalam lingkungan yang lebih kompleks.

**3.Snapshot Testing:**

     Snapshot testing adalah metode di mana Kita menyimpan "snapshot" dari output yang diharapkan dari suatu komponen dan kemudian membandingkannya dengan hasil aktual setiap kali tes dijalankan. Jika ada perubahan yang tidak diinginkan, tes akan gagal.
     
     Ini sangat berguna untuk memastikan bahwa perubahan yang disengaja atau tidak disengaja pada komponen tidak mempengaruhi tampilan atau perilaku yang diharapkan.
     
     Jest sering digunakan bersama dengan Library seperti Enzyme untuk mengimplementasikan snapshot testing.



# Latihan Materi React Testing

**Soal Prioritas 1** 

-    Buatlah file baru bernama CreateProduct.test.js didirectory yang sama tempat CreateProduct.jsx disimpan

![CreateProduct.test.js](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Testing/17_React%20Testing/ScreenShots/Membuat%20File%20CreateProduct.test.js.png)

-    Pada file CreateProduct.test.js buatlah test untuk memastikan bahwa form input Product Name dapat menerima input teks dan menampilkannya di halaman.

![Form Input Test](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Testing/17_React%20Testing/ScreenShots/Test%20Untuk%20ProductName%20dapat%20Menerima%20Input%20Teks.png)


-    Buatlah test untuk memastikan bahwa pilihan setiap form yang dipilih dapat disimpan dan ditampilkan dengan benar.

![Form Testing](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Testing/17_React%20Testing/ScreenShots/Form%20Yang%20Dipilih%20Dapat%20Disimpan%20dan%20Di%20Tampilkan.png)


**Soal Prioritas 2**
  
-    Buatlah test untuk memastikan validasi form input yang benar, seperti memastikan bahwa Product Name tidak boleh kosong, tidak mengandung karakter @/#{}.

![Validasi Input Tanpa Karakter Spesial](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Testing/17_React%20Testing/ScreenShots/ProductName%20Tidak%20Boleh%20Kosong%20dan%20Mengandung%20Karakter%20Spesial.png)


-    Buatlah test untuk memastikan validasi form input yang benar bahwaProduct Name tidak melebihin 25 karakter

![Test Product Name Tidak Lebih dari 25 Karakter](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Testing/17_React%20Testing/ScreenShots/ProductName%20Tidak%20Boleh%20Melebihi%2025%20Karakter.png)


-    Buatlah test untuk memastikan validasi semua form field tersebut tidak boleh kosong.

![Testing Semua Form Tidak Boleh Kosong](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Testing/17_React%20Testing/ScreenShots/Semua%20Form%20Field%20Tidak%20Boleh%20Kosong.png)


**Hasil Testing**

![Hasil Testing](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/React-Testing/17_React%20Testing/ScreenShots/Hasil%20Testing.png)
