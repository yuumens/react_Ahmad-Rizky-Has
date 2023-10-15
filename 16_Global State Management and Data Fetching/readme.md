# Resume Materi Section 16

3 Poin yang saya pelajari di materi ini adalah sebagai berikut: 


**1.Pemahaman tentang State Management:**

     Penting untuk memahami konsep dasar tentang bagaimana manajemen status global berfungsi. Ini mencakup pemahaman tentang apa itu status global, mengapa kita membutuhkannya, dan cara mengaturnya. Kita perlu belajar konsep-konsep seperti state, actions, reducers, store, dan lainnya yang terkait dengan manajemen status global.

**2.Pemilihan Alat dan Teknologi:**

    Ada banyak alat dan teknologi yang dapat digunakan untuk mengimplementasikan manajemen status global dalam aplikasi Kita, seperti Redux, Mobx, React Context API, dan lainnya. Penting untuk memahami kelebihan dan kekurangan masing-masing alat ini, serta bagaimana cara menggunakannya dengan benar. Kita perlu memilih alat yang paling sesuai dengan kebutuhan proyek Kita.

**3.Data Fetching dan Integrasi API:**

    Ketika bekerja dengan manajemen status global, Kita sering perlu mengambil data dari server atau API eksternal. Penting untuk memahami cara melakukan permintaan HTTP, menangani respons, dan mengintegrasikan data yang diambil dengan status global Kita. Kita perlu memahami konsep seperti AJAX, RESTful API, GraphQL, dan perpustakaan atau alat yang dapat membantu dalam pengambilan data, seperti Axios atau fetch API.


**Selain tiga poin di atas, Penting juga untuk menguasai praktik terbaik dalam manajemen status global dan data fetching, seperti menghindari over-fetching atau under-fetching data, menangani kesalahan dengan baik, dan memastikan bahwa aplikasi Kita memiliki performa yang baik ketika mengelola data secara global. Pemahaman mendalam tentang konsep ini akan membantu Kita dalam merancang dan mengembangkan aplikasi web yang kuat dan efisien.**

# Latihan Materi Global State Management and Data fetching

**Soal Prioritas 1** 

-    Rubahlah list products yang sebelumnya berupa state biasa menjadi global state menggunakan redux.

store.js

![store.js](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/Global-State_Management/16_Global%20State%20Management%20and%20Data%20Fetching/ScreenShots/store.js.png)

productReducer.js

![store.js](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/Global-State_Management/16_Global%20State%20Management%20and%20Data%20Fetching/ScreenShots/productReducer.js.png)


-    Masukkan data user ke dalam Initial state seperti contoh di bawah

Script

![InitialState](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/Global-State_Management/16_Global%20State%20Management%20and%20Data%20Fetching/ScreenShots/InitialState.png)


-    Pastikan data List Product (ilustrasi pada gambar) berasal dari initialState pada store.

![Output InitialState](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/Global-State_Management/16_Global%20State%20Management%20and%20Data%20Fetching/ScreenShots/Output%20InitialProducts.png)


**Soal Prioritas 2**
  
-    Tambahkan fitur untuk menambah, mengedit, dan menghapus data user dalam komponen ListProduct.jsx dengan menggunakan action dan reducer yang sesuai.
     untuk form edit/menambah kalian dapat menggunakan komponent CreateProduct.jsx atau membuat komponen lain jika diperlukan.

     -    productActions.js

     ![productActions.js](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/Global-State_Management/16_Global%20State%20Management%20and%20Data%20Fetching/ScreenShots/productActions.js.png)
     

     -    Menambah Product

     ![MenambahProduct](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/Global-State_Management/16_Global%20State%20Management%20and%20Data%20Fetching/ScreenShots/Menambah%20Data.png)


     -    Mengedit Product

     ![MengeditProduct](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/Global-State_Management/16_Global%20State%20Management%20and%20Data%20Fetching/ScreenShots/Mengedit%20Data.png)


     -    Menghapus Product

     ![MenghapusProduct](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/Global-State_Management/16_Global%20State%20Management%20and%20Data%20Fetching/ScreenShots/Menghapus%20data.png)
