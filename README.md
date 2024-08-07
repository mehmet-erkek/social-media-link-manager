# Proje: Sosyal Medya Yönetim Uygulaması
### Bu proje, Rast Mobile Bilgi Teknolojileri Ltd. Şti Angular Task dökümanında ve figma tasarımında istenen sosyal medya linklerini yönetmek için geliştirilmiş bir Angular uygulamasıdır. Uygulama, sosyal medya linklerini listeleme, ekleme, düzenleme ve silme işlemlerini gerçekleştirebilmektedir. Ayrıca, linklerin durumunu local storage'da saklayabilir ve uygulama yeniden yüklendiğinde bu verileri geri yükleyebilir. Dosyalarda bulunan dokuman da kısa bir önyazı bulunmaktadır.
---

Tabloyu görüntülemek için 
kullanıcı adı ve şifre : rastmobile  
girerek giriş yapabilirsiniz.

### İçindekiler
1. [Kullanılan Teknolojiler](#kullanılan-teknolojiler)
2. [Kurulum ve Çalıştırma](#kurulum-ve-çalıştırma)

---

### Kullanılan Teknolojiler
- **Angular**: Frontend framework
- **Angular Material**: UI bileşenleri
- **NodeJS**: Backend server
- **Express**: NodeJS için web framework
- **MongoDB**: Veritabanı
- **RxJS**: Reactive programming
- **HTML5 & CSS3**: Templating ve stil

---

### Kurulum ve Çalıştırma
#### Gereksinimler:
- Node.js ve npm
- Angular CLI
- MongoDB

1. Proje klasörü açın
2. Terminal'i açın
3. git clone https://github.com/mehmet-erkek/social-media-link-manager.git
   

### Frontend

1. Proje dizinine gidin:
   ```sh
   cd social-media-link-manager
   ```

2. Gerekli bağımlılıkları yükleyin:
   ```sh
   npm install
   ```

3. Uygulamayı çalıştırın:
   ```sh
   ng serve
   ```

### Backend

1. Backend dizinine gidin:
   ```sh
   cd social-media-api
   ```

2. Gerekli bağımlılıkları yükleyin:
   ```sh
   npm install
   ```

3. Server'ı çalıştırın:
   ```sh
   node server.js

