# Resume Materi Section 19

3 Poin yang saya pelajari di materi ini adalah sebagai berikut: 


**1. REST (Representational State Transfer) :**

     REST adalah pendekatan arsitektural yang digunakan dalam pengembangan web untuk merancang sistem yang berbasis sumber daya (resources) yang dapat diakses melalui antarmuka (API) dengan berbagai metode komunikasi, seperti HTTP. Kita akan memahami prinsip-prinsip arsitektur REST, termasuk konsep sumber daya (resources), representasi (representation), operasi (operations), antarmuka (interface), dan status sistem (stateless).

**2.HTTP Methods (Metode HTTP):**

    RESTful API menggunakan metode HTTP (GET, POST, PUT, DELETE, dll.) untuk berinteraksi dengan sumber daya. Setiap metode memiliki makna dan tindakan yang berbeda. Kita akan mempelajari penggunaan metode HTTP dalam RESTful API, seperti penggunaan GET untuk mengambil data, POST untuk membuat data baru, PUT untuk memperbarui data, dan DELETE untuk menghapus data.

**3.Representasi Data dan Endpoints:**

    Data dalam RESTful API direpresentasikan dalam format tertentu, seperti JSON atau XML. Kita akan memahami bagaimana data diambil, dikirim, dan diterima melalui permintaan HTTP. Kita juga akan mempelajari tentang endpoints, yang merupakan URL yang digunakan untuk mengakses sumber daya tertentu. Penggunaan yang tepat dari endpoint adalah kunci dalam merancang API yang kuat dan mudah digunakan.


**Selain tiga poin di atas, RESTful API juga dapat mencakup topik-topik lain seperti autentikasi, otorisasi, paginasi, dan dokumentasi API. Pemahaman tentang konsep dasar RESTful API adalah kunci untuk membangun dan mengintegrasikan layanan web dalam pengembangan perangkat lunak modern.**

# Latihan Materi Introduction Restfull API

-    Buat akun di MockAPI
  
![Create MockAPI Account](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/Introduction-Restfull-API/19_Introduction%20Restfull%20API/ScreenShots/Membuat%20Akun%20MockAPI.png)


-    Buat endpoint baru di MockAPI dengan spesifikasi minimal sebagai berikut:.
     Method: GET
     URL: /products
     Response: JSON array yang berisi daftar product
     Skema product memiliki field yang sama seperti form input CreateProduct.jsx

![Endpoint MockAPI](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/Introduction-Restfull-API/19_Introduction%20Restfull%20API/ScreenShots/Data%20pada%20MockAPI.png)


-    Menambahkan Dependencies Axios

![Dependencies Axios](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/Introduction-Restfull-API/19_Introduction%20Restfull%20API/ScreenShots/Menambahkan%20Dependencies%20Axios.png)


-    Sambungkan data pada mockAPI ke List Product

![Data MockAPI to ProductList](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/Introduction-Restfull-API/19_Introduction%20Restfull%20API/ScreenShots/Sambungkan%20Data%20MockAPI%20ke%20ListProduct.png)


-    Gunakan axios untuk mengambil data dari endpoint MockAPI dan tampilkan daftar user tersebut di komponen/halaman ListProduct.jsx yang sudah anda buat untuk menampilkan List Account.

![ListProduct.jsx](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/Introduction-Restfull-API/19_Introduction%20Restfull%20API/ScreenShots/ListProduct.png)
