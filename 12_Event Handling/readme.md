# Resume Materi Section 12

3 Poin yang saya pelajari di materi ini adalah sebagai berikut: 


**1.Menangani Event dengan JSX:**

    Kita akan memahami cara menangani event, seperti klik tombol atau input dari pengguna, dengan menggunakan JSX. Dalam React, Kita dapat menambahkan event handlers (penanganan event) langsung ke elemen JSX dengan menggunakan atribut seperti onClick, onChange, dan sebagainya. Ini memungkinkan Anda untuk menjalankan kode tertentu saat event terjadi, seperti mengubah state atau melakukan tindakan lainnya.

**2.State dan Event Handling:**

    Kita akan mempelajari bagaimana state komponen dapat berperan dalam penanganan event. Misalnya, saat pengguna mengklik tombol, Kita dapat menggunakan state untuk mengubah tampilan komponen atau berinteraksi dengan data dalam aplikasi. Penanganan event dan pembaruan state seringkali terkait erat dalam pengembangan aplikasi React yang responsif.

**3.Event Bubbling dan Propagation:**

    Di React juga akan membahas konsep event bubbling dan propagation. React menggunakan event delegation untuk mengelola banyak event handler di dalam komponen. Kita akan memahami bagaimana event bertahan dan menyebar melalui pohon komponen, serta bagaimana Anda dapat mengontrol perilaku event ini menggunakan metode stopPropagation atau preventDefault.


**Selain tiga poin di atas, materi Event Handling di React juga mungkin akan membahas topik seperti penggunaan hooks (seperti useState dan useEffect) untuk mengelola event dalam komponen berbasis fungsi, serta teknik-teknik lain yang dapat membantu Kita dalam mengembangkan aplikasi React yang interaktif dan responsif. Event handling adalah bagian penting dari pengembangan aplikasi web, dan pemahaman yang baik tentang konsep ini sangat berguna dalam penggunaan React.**

# Latihan Materi Event Handling

**Soal Prioritas 1** 

Buatlah sebuah button dan terapkan event handling onClick pada salah satu tombol dihalaman CreateProduct.jsx. 
Jika tombol tersebut di-klik nantinya akan menampilkan random number di console.


![randomButtonGenerator](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/Event-Handling/12_Event%20Handling/ScreenShots/Button%20Generate%20Random%20Number.png)


buatlah sebuah file yang berisikan object berikut

    const article = {

      title: {

    id: "Buat Akun",

    en: "Create Account"

      },

      description: {

    id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",

    en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."

      }

    };

![Article.js](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/Event-Handling/12_Event%20Handling/ScreenShots/file%20Article.js.png)


**Soal Prioritas 2**

Gunakan event handling onChange untuk validasi value secara realtime yang dimasukan kedalam form input. Validasi ini meliputi :
-    Product Name tidak boleh melebihi 10 karakter
  ![ProductName more than 25 Characters](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/Event-Handling/12_Event%20Handling/ScreenShots/ProductName%20tidak%20Boleh%20lebih%20dari%2025%20karakter.png)

-    Jika Product Name melebihi 25 karakter tambilkan pesan error atau peringatan/alert seperi "Last Name must not exceed 25 characters."

  ![ProductName more than 25 Characters](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/Event-Handling/12_Event%20Handling/ScreenShots/Error%20Jika%20ProductName%20lebih%20dari%2025%20karakter.png)

  
Product Name tidak boleh kosong. Jika field tersebut kosong saat tombol Submit/Create Product di tekan maka tampilkan alert atau error bahwa field tersebut tidak boleh kosong. Misal "Please enter a valid product name."

![Alert ProductName null](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/Event-Handling/12_Event%20Handling/ScreenShots/Alert%20Jika%20ProductName%20Kosong.png)



Buatlah halaman landing Page dengan nama file landingPage.html


**Soal Eksplorasi**

Pada halaman CreateProduct.html tangkap data pada form yang telah dibuat kemudian tambahkan dengan JS DOM dan lakukan validasi seperti berikut :

Buatlah script DOM JavaScript untuk menonaktifkan tombol Submit/Create Accountjika salah satu input tidak valid/salah/belum di isi.


Jika salah satu field tidak valid/salah berikan border merah atau tampilkan icon error pada field tersebut dengan JS DOM.


jika semua form telah diisi sesuai dengan falidasi dan user melakukan klik pada button Submit maka akan terdapat alert yang mengeluarkan setiap data.



![validasi "required"](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/HTML/04_HTML/ScreenShots/Required.png)


**Terapkan standart validasi berikut**

form product Product Name mempunyai minimal 6 huruf dan maksimal 50 huruf

![Standart Validasi](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/HTML/04_HTML/ScreenShots/Validasi%20Product%20Name.png)


Product Price harus berupa angka

![Standart Validasi](https://github.com/yuumens/react_Ahmad-Rizky-Has/blob/feat/HTML/04_HTML/ScreenShots/Validasi%20Product%20Price.png)


